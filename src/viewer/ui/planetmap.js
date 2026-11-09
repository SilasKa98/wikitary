// The planet map: the globe unfolds into a chart in the hand of its civilisation. Every city
// is where it really is, sized by how much it matters, with the real roads and live traffic.
// Beside it, a directory lists every place, so that nothing depends on spotting it.
import { el, face, ICONS } from './dom.js';
import { Planner } from './planner.js';
import { project, unproject, thetaForY, bestCentre, wrapLon, MAP_X, MAP_Y } from './mapproj.js';

const TIER_RADIUS = [3, 4, 5.4, 7.4, 10.5];
export const FONTS = {
  serif: "Georgia, 'Times New Roman', serif",
  mono: "'IBM Plex Mono', ui-monospace, monospace",
  ui: "'Space Grotesk', system-ui, sans-serif",
};
const DEFAULT_STYLE = {
  title: { en: 'Chart', de: 'Karte' },
  paper: '#0b0f18', edge: '#33415c', ink: '#e8eefc', soft: '#8a97b4',
  sea: ['#0d1626', '#1a2a44'], land: ['#26324a', '#4a5a78'], contour: 'rgba(255,255,255,0.1)', grid: 'rgba(255,255,255,0.06)',
  road: '#9cc4ff', casing: '#14213a', air: '#ffb46b', traffic: '#ffffff', accent: '#9cc4ff', lines: 'beam', glyph: 'atlas', font: 'ui',
};

const clamp = (x, a, b) => Math.max(a, Math.min(b, x));
const ease = (t) => t * t * t * (t * (t * 6 - 15) + 10);
const rgbOf = (css) => [1, 3, 5].map((i) => parseInt(css.slice(i, i + 2), 16));

/** Everything about a planet that the map needs, projected once and kept. */
function prepare(planet) {
  const lonOf = (x, z) => Math.atan2(x, z);
  const sitesRaw = planet.sites.map((s) => ({ s, lon: lonOf(s.dir.x, s.dir.z), lat: Math.asin(clamp(s.dir.y, -1, 1)) }));
  const centre = bestCentre(sitesRaw.map((x) => x.lon));
  const out = [0, 0];
  const toMap = (x, y, z, len = 1) => {
    project(wrapLon(lonOf(x, z) - centre), Math.asin(clamp(y / len, -1, 1)), out);
    return out;
  };
  const sites = sitesRaw.map(({ s }) => {
    const [mx, my] = toMap(s.dir.x, s.dir.y, s.dir.z);
    return { id: s.page.id, page: s.page, site: s, tier: s.tier, importance: s.importance, x: s.dir.x, y: s.dir.y, z: s.dir.z, mx, my };
  });
  const byId = new Map(sites.map((s) => [s.id, s]));

  const line = (points, stride, meta) => {
    const n = Math.floor(points.length / stride);
    const dirs = new Float32Array(n * 3), map = new Float32Array(n * 2), cum = new Float32Array(n);
    const breaks = new Uint8Array(n);
    let px = 0, py = 0, prevLon = 0;
    for (let i = 0; i < n; i++) {
      const [x, y, z] = stride === 3 ? [points[i * 3], points[i * 3 + 1], points[i * 3 + 2]] : points[i];
      const len = Math.hypot(x, y, z) || 1;
      dirs[i * 3] = x / len; dirs[i * 3 + 1] = y / len; dirs[i * 3 + 2] = z / len;
      const [mx, my] = toMap(x, y, z, len);
      map[i * 2] = mx; map[i * 2 + 1] = my;
      const lon = wrapLon(lonOf(x, z) - centre);
      if (i && Math.abs(lon - prevLon) > Math.PI) breaks[i] = 1;
      cum[i] = i ? cum[i - 1] + (breaks[i] ? 0 : Math.hypot(mx - px, my - py)) : 0;
      px = mx; py = my; prevLon = lon;
    }
    return { ...meta, n, dirs, map, cum, breaks, length: cum[n - 1] || 0.001 };
  };
  const centreOf = (id) => {
    const d = planet.siteByPage.get(id).dir;
    return [d.x, d.y, d.z];
  };
  const roads = planet.roadPaths.map((p) => line([centreOf(p.a), ...p.dirs.map((d) => [d.x, d.y, d.z]), centreOf(p.b)], 1, { a: p.a, b: p.b, ab: p.ab, ba: p.ba, kind: 'road' }));
  const air = planet.airPaths.map((p) => line(p.points, 3, { a: p.a, b: p.b, ab: p.ab, ba: p.ba, kind: 'air' }));
  const ghosts = planet.ghostLabels.map(({ ghost, dir }) => {
    const [mx, my] = toMap(dir.x, dir.y, dir.z);
    return { ghost, mx, my, x: dir.x, y: dir.y, z: dir.z };
  });
  return { centre, sites, byId, roads, air, ghosts, toMap: (x, y, z) => [...toMap(x, y, z)] };
}

/** Paints the world's terrain into a canvas, a few rows per frame. */
class TerrainPainter {
  constructor(planet, centre, style) {
    this.planet = planet;
    this.centre = centre;
    // Crowded worlds are slower to sample, and the detail would disappear under the cities anyway.
    this.w = planet.sites.length > 120 ? 720 : 1024;
    this.h = Math.round((this.w * MAP_Y) / MAP_X);
    this.canvas = document.createElement('canvas');
    this.canvas.width = this.w; this.canvas.height = this.h;
    this.ctx = this.canvas.getContext('2d');
    this.image = this.ctx.createImageData(this.w, this.h);
    this.row = 0;
    this.prevH = new Float32Array(this.w);
    this.prevBand = new Int8Array(this.w);
    this.sea = style.sea.map(rgbOf);
    this.land = style.land.map(rgbOf);
    this.contour = parseRgba(style.contour);
    this.sample = [0, 0, 0];
  }

  get done() { return this.row >= this.h; }

  step(budgetMs) {
    const start = performance.now();
    const firstRow = this.row;
    const { w, h, image, planet, sea, land, contour, sample, prevH, prevBand } = this;
    while (this.row < h && performance.now() - start < budgetMs) {
      const y = this.row;
      const my = MAP_Y * (1 - ((y + 0.5) / h) * 2);
      const theta = thetaForY(my);
      let leftH = 0, leftBand = -1;
      for (let x = 0; x < w; x++) {
        const i = (y * w + x) * 4;
        const mx = MAP_X * (((x + 0.5) / w) * 2 - 1);
        const ll = unproject(mx, my, _ll);
        if (!ll) { image.data[i + 3] = 0; continue; }
        const lon = ll[0] + this.centre, lat = ll[1];
        const cl = Math.cos(lat);
        planet.sampleSurface(cl * Math.sin(lon), Math.sin(lat), cl * Math.cos(lon), sample);
        const raw = sample[1], mask = sample[2];
        const isSea = raw < 0 && mask < 0.5;
        const height = isSea ? raw : Math.max(raw, 0) * (1 - mask);
        const band = isSea ? -1 : Math.floor(height * 2.6);
        let r, g, b;
        if (isSea) {
          const d = clamp(-raw * 2.4, 0, 1);
          r = sea[1][0] + (sea[0][0] - sea[1][0]) * d;
          g = sea[1][1] + (sea[0][1] - sea[1][1]) * d;
          b = sea[1][2] + (sea[0][2] - sea[1][2]) * d;
        } else {
          const v = clamp(height * 0.62, 0, 1);
          r = land[0][0] + (land[1][0] - land[0][0]) * v;
          g = land[0][1] + (land[1][1] - land[0][1]) * v;
          b = land[0][2] + (land[1][2] - land[0][2]) * v;
          // Light from the north-west, so that relief reads at a glance.
          const shade = 1 + clamp((prevH[x] - height + leftH - height) * 3.4, -0.12, 0.12);
          r *= shade; g *= shade; b *= shade;
        }
        const changed = x > 0 && y > 0 && (band !== leftBand || band !== prevBand[x]);
        if (changed) {
          // Coastlines are drawn with a firmer hand than the contours inland.
          const a = contour[3] * (band === -1 || leftBand === -1 || prevBand[x] === -1 ? 2.4 : 0.9);
          r += (contour[0] - r) * a; g += (contour[1] - g) * a; b += (contour[2] - b) * a;
        }
        image.data[i] = r; image.data[i + 1] = g; image.data[i + 2] = b; image.data[i + 3] = 255;
        prevH[x] = height; prevBand[x] = band; leftH = height; leftBand = band;
      }
      this.row++;
    }
    if (this.row > firstRow) this.ctx.putImageData(image, 0, 0, 0, firstRow, w, this.row - firstRow);
    return this.row > firstRow;
  }
}
const _ll = [0, 0];

function parseRgba(css) {
  const m = /rgba?\(([^)]+)\)/.exec(css);
  if (!m) return [...rgbOf(css), 1];
  const [r, g, b, a = 1] = m[1].split(',').map(Number);
  return [r, g, b, a];
}

// ---- city glyphs, one per civilisation ------------------------------------------------
function glyphPath(ctx, kind, x, y, r) {
  ctx.beginPath();
  switch (kind) {
    case 'chip': {
      ctx.rect(x - r, y - r, r * 2, r * 2);
      break;
    }
    case 'ember': {
      for (let i = 0; i < 6; i++) {
        const a = (i / 6) * Math.PI * 2 + Math.PI / 6;
        ctx[i ? 'lineTo' : 'moveTo'](x + Math.cos(a) * r * 1.12, y + Math.sin(a) * r * 1.12);
      }
      ctx.closePath();
      break;
    }
    case 'crystal': {
      ctx.moveTo(x, y - r * 1.4); ctx.lineTo(x + r, y); ctx.lineTo(x, y + r * 1.4); ctx.lineTo(x - r, y); ctx.closePath();
      break;
    }
    case 'sun': {
      const n = 12;
      for (let i = 0; i < n * 2; i++) {
        const a = (i / (n * 2)) * Math.PI * 2;
        const rr = i % 2 ? r * 0.82 : r * 1.3;
        ctx[i ? 'lineTo' : 'moveTo'](x + Math.cos(a) * rr, y + Math.sin(a) * rr);
      }
      ctx.closePath();
      break;
    }
    case 'gear': {
      const n = 8;
      for (let i = 0; i < n * 4; i++) {
        const a = ((i + 0.5) / (n * 4)) * Math.PI * 2;
        const rr = i % 4 < 2 ? r * 1.22 : r * 0.92;
        ctx[i ? 'lineTo' : 'moveTo'](x + Math.cos(a) * rr, y + Math.sin(a) * rr);
      }
      ctx.closePath();
      break;
    }
    case 'leaf': {
      ctx.moveTo(x, y - r * 1.45);
      ctx.quadraticCurveTo(x + r * 1.5, y - r * 0.2, x, y + r * 1.25);
      ctx.quadraticCurveTo(x - r * 1.5, y - r * 0.2, x, y - r * 1.45);
      break;
    }
    default:
      ctx.arc(x, y, r, 0, Math.PI * 2);
  }
}

/** Draws a city: solid once read, hollow until then. */
function drawGlyph(ctx, style, x, y, r, { visited, tier }) {
  const kind = style.glyph;
  glyphPath(ctx, kind, x, y, r);
  ctx.fillStyle = visited ? style.accent : style.paper;
  ctx.fill();
  ctx.lineWidth = Math.max(1, r * 0.2);
  ctx.strokeStyle = style.ink;
  ctx.stroke();
  // The bigger the place, the more elaborate its mark, as on any real map.
  const inner = visited ? style.paper : style.ink;
  if (tier >= 3) {
    ctx.fillStyle = inner;
    if (kind === 'chip') ctx.fillRect(x - r * 0.42, y - r * 0.42, r * 0.84, r * 0.84);
    else if (kind === 'crystal') { glyphPath(ctx, 'crystal', x, y, r * 0.42); ctx.fill(); }
    else if (kind === 'leaf') { ctx.strokeStyle = inner; ctx.lineWidth = Math.max(0.8, r * 0.13); ctx.beginPath(); ctx.moveTo(x, y - r); ctx.lineTo(x, y + r * 0.9); ctx.stroke(); }
    else { ctx.beginPath(); ctx.arc(x, y, r * (tier === 4 ? 0.48 : 0.34), 0, Math.PI * 2); ctx.fill(); }
  }
  if (kind === 'chip' && r > 3.5) {
    ctx.strokeStyle = style.ink;
    ctx.lineWidth = 1;
    ctx.beginPath();
    for (let i = -1; i <= 1; i++) {
      const o = i * r * 0.55;
      ctx.moveTo(x + o, y - r); ctx.lineTo(x + o, y - r - 2.5);
      ctx.moveTo(x + o, y + r); ctx.lineTo(x + o, y + r + 2.5);
      ctx.moveTo(x - r, y + o); ctx.lineTo(x - r - 2.5, y + o);
      ctx.moveTo(x + r, y + o); ctx.lineTo(x + r + 2.5, y + o);
    }
    ctx.stroke();
  }
  if (kind === 'spore' && r > 3.5) {
    ctx.fillStyle = style.ink;
    for (let i = 0; i < 5; i++) {
      const a = (i / 5) * Math.PI * 2 + 0.4;
      ctx.beginPath(); ctx.arc(x + Math.cos(a) * r * 1.5, y + Math.sin(a) * r * 1.5, Math.max(0.7, r * 0.13), 0, Math.PI * 2); ctx.fill();
    }
  }
  if (kind === 'pearl') {
    ctx.fillStyle = 'rgba(255,255,255,0.75)';
    ctx.beginPath(); ctx.arc(x - r * 0.32, y - r * 0.34, Math.max(0.6, r * 0.22), 0, Math.PI * 2); ctx.fill();
  }
}

// ---- how each civilisation draws a connection -----------------------------------------
function strokeRoad(ctx, style, trace, width, emphasis) {
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
  ctx.setLineDash([]);
  const w = width * (emphasis > 1 ? 1.5 : 1);
  ctx.globalAlpha = emphasis < 1 ? 0.28 : 1;
  switch (style.lines) {
    case 'atlas':
      ctx.strokeStyle = style.casing; ctx.lineWidth = w + 1.6; trace(); ctx.stroke();
      ctx.strokeStyle = style.road; ctx.lineWidth = w; ctx.stroke();
      break;
    case 'trace':
      ctx.strokeStyle = style.road; ctx.globalAlpha *= 0.22; ctx.lineWidth = w + 3; trace(); ctx.stroke();
      ctx.globalAlpha = emphasis < 1 ? 0.28 : 1; ctx.lineWidth = Math.max(1, w * 0.6); ctx.stroke();
      break;
    case 'magma':
      ctx.strokeStyle = style.casing; ctx.lineWidth = w + 2.5; trace(); ctx.stroke();
      ctx.strokeStyle = style.road; ctx.lineWidth = w * 0.95; ctx.stroke();
      ctx.strokeStyle = '#ffe2a0'; ctx.lineWidth = Math.max(0.6, w * 0.3); ctx.stroke();
      break;
    case 'beam':
      ctx.strokeStyle = style.road; ctx.globalAlpha *= 0.25; ctx.lineWidth = w + 2.4; trace(); ctx.stroke();
      ctx.globalAlpha = emphasis < 1 ? 0.28 : 1; ctx.lineWidth = Math.max(0.8, w * 0.45); ctx.stroke();
      break;
    case 'vein':
      ctx.strokeStyle = style.casing; ctx.lineWidth = w + 2.2; trace(); ctx.stroke();
      ctx.strokeStyle = style.road; ctx.lineWidth = Math.max(0.8, w * 0.6); ctx.stroke();
      break;
    case 'caravan':
      ctx.strokeStyle = style.road; ctx.lineWidth = Math.max(1.3, w * 0.9); ctx.setLineDash([0.1, Math.max(4, w * 3)]); trace(); ctx.stroke();
      break;
    case 'sealane':
      ctx.strokeStyle = style.road; ctx.lineWidth = Math.max(1, w * 0.7); ctx.setLineDash([7, 5]); trace(); ctx.stroke();
      break;
    case 'rail':
      ctx.strokeStyle = style.road; ctx.lineWidth = Math.max(1, w * 0.55); trace(); ctx.stroke();
      ctx.lineCap = 'butt'; ctx.lineWidth = w + 3.4; ctx.setLineDash([1.3, 5.5]); ctx.stroke();
      break;
    case 'vine':
    default:
      ctx.strokeStyle = style.road; ctx.lineWidth = Math.max(1, w * 0.7); trace(); ctx.stroke();
      ctx.lineWidth = w + 2.4; ctx.setLineDash([0.1, 10]); ctx.stroke();
      break;
  }
  ctx.setLineDash([]);
  ctx.globalAlpha = 1;
}

export class PlanetMap {
  constructor(ui) {
    this.ui = ui;
    this.cache = new Map();
    this.painters = new Map();
    this.openState = false;
    this.morph = 1;
    this.zoom = 1; this.panX = 0; this.panY = 0;
    this.targetPan = null;
    this.hover = null;
    this.selected = null;
    this.sort = 'size';
    this.filter = '';
    this.time = 0;
    this.dirty = true;
    this.build();
  }

  get isOpen() { return this.openState; }

  // ---- DOM -------------------------------------------------------------------------------
  build() {
    const { t } = this.ui;
    this.canvas = el('canvas', { class: 'pmap-canvas', tabindex: '-1' });
    this.staticLayer = document.createElement('canvas');
    this.heading = el('div', { class: 'pmap-heading' });
    this.tabs = el('nav', { class: 'pmap-tabs', 'aria-label': t.worlds });
    this.legend = el('div', { class: 'pmap-legend' });
    this.tip = el('div', { class: 'pmap-tip', role: 'status' });
    this.card = el('div', { class: 'pmap-card' });
    this.filterInput = el('input', { class: 'pmap-filter', type: 'search', placeholder: t.mapFilter, 'aria-label': t.mapFilter, autocomplete: 'off', spellcheck: 'false' });
    this.filterInput.addEventListener('input', () => { this.filter = this.filterInput.value.trim().toLowerCase(); this.renderList(); });
    this.sortSelect = el('select', { class: 'pmap-sort', 'aria-label': t.mapSort },
      [['size', t.sortSize], ['name', t.sortName], ['date', t.sortDate], ['new', t.sortNew]].map(([v, label]) => el('option', { value: v, text: label })));
    this.sortSelect.addEventListener('change', () => { this.sort = this.sortSelect.value; this.renderList(); });
    this.count = el('div', { class: 'pmap-count' });
    this.list = el('div', { class: 'pmap-list', role: 'listbox', 'aria-label': t.mapPlaces });
    this.stage = el('div', { class: 'pmap-stage' }, this.canvas, this.legend, this.card, this.tip);
    this.planner = new Planner(this.ui, this);
    this.planButton = el('button', { class: 'pmap-plan', title: `${t.planOwn} (E)`, onclick: () => this.planner.enter(this.selected) },
      el('span', { html: ICONS.compass }),
      el('span', { class: 'pmap-plan-text' },
        el('b', { text: t.planOwn }),
        el('span', { text: t.planOwnSub })));
    this.sheet = el('div', { class: 'pmap-sheet', role: 'dialog', 'aria-modal': 'true', 'aria-label': t.mapTool },
      el('header', { class: 'pmap-head' }, this.heading, this.tabs,
        el('button', { class: 'icon-btn', html: ICONS.close, title: t.close, 'aria-label': t.close, onclick: () => this.close() })),
      el('div', { class: 'pmap-body' }, this.stage,
        el('aside', { class: 'pmap-side' },
          this.planner.node,
          this.planButton,
          el('div', { class: 'pmap-controls' }, this.filterInput, this.sortSelect),
          this.count,
          this.list)));
    this.root = el('div', { class: 'pmap', onclick: (e) => { if (e.target === this.root) this.close(); } }, this.sheet);
    this.ui.root.append(this.root);
    this.ctx = this.canvas.getContext('2d');
    this.staticCtx = this.staticLayer.getContext('2d');
    this.bindCanvas();
  }

  bindCanvas() {
    const c = this.canvas;
    let down = null;
    c.addEventListener('pointerdown', (e) => {
      down = { x: e.clientX, y: e.clientY, moved: 0 };
      c.setPointerCapture(e.pointerId);
      this.targetPan = null;
    });
    c.addEventListener('pointermove', (e) => {
      const box = c.getBoundingClientRect();
      this.mouse = { x: e.clientX - box.left, y: e.clientY - box.top };
      if (down) {
        const dx = e.clientX - down.x, dy = e.clientY - down.y;
        down.x = e.clientX; down.y = e.clientY;
        down.moved += Math.abs(dx) + Math.abs(dy);
        if (down.moved > 4) {
          this.panX += dx; this.panY += dy;
          this.limitPan();
          this.dirty = true;
          c.classList.add('dragging');
        }
        return;
      }
      this.setHover(this.hitAt(this.mouse.x, this.mouse.y));
    });
    c.addEventListener('pointerup', (e) => {
      const wasClick = down && down.moved <= 4;
      down = null;
      c.classList.remove('dragging');
      if (!wasClick) return;
      const box = c.getBoundingClientRect();
      const hit = this.hitAt(e.clientX - box.left, e.clientY - box.top);
      if (this.planner.active) {
        if (hit && !hit.ghost) this.planner.pick(hit.id);
        return;
      }
      if (hit?.ghost) { this.close(); this.ui.openGhost(hit.ghost.key); return; }
      if (hit) this.pickCity(hit.id);
      else this.select(null);
    });
    c.addEventListener('pointerleave', () => { if (!down) this.setHover(null); });
    c.addEventListener('wheel', (e) => {
      e.preventDefault();
      const box = c.getBoundingClientRect();
      const mx = e.clientX - box.left, my = e.clientY - box.top;
      const before = this.zoom;
      this.zoom = clamp(this.zoom * Math.exp(-e.deltaY * (e.deltaMode === 1 ? 0.04 : 0.0014)), 1, 10);
      const f = this.zoom / before;
      this.panX = mx - this.W / 2 - (mx - this.W / 2 - this.panX) * f;
      this.panY = my - this.H / 2 - (my - this.H / 2 - this.panY) * f;
      this.limitPan();
      this.targetPan = null;
      this.dirty = true;
    }, { passive: false });
  }

  // ---- opening and closing ---------------------------------------------------------------
  defaultPlanet() {
    const { world, focused } = this.ui;
    if (world.rig.mode === 'body' && world.rig.body?.isPlanet) return world.rig.body;
    return focused || world.hover?.planet || world.planetNearestView() || world.planets[0];
  }

  open(planet = this.defaultPlanet()) {
    if (!planet) return;
    const { world } = this.ui;
    world.endRide(false);
    world.inputLocked = true;
    world.keys.clear();
    world.pointer.set(-9, -9);
    this.openState = true;
    this.root.classList.add('open');
    this.ui.freshToast.classList.remove('show');
    this.show(planet, true);
    this.ui.tip.classList.remove('show');
    this.filterInput.value = '';
    this.filter = '';
    this.renderList();
    this.lastFocus = document.activeElement;
    // Not the filter: K and Esc should keep working until you choose to type.
    this.canvas.focus({ preventScroll: true });
  }

  close() {
    if (!this.openState) return;
    this.openState = false;
    this.root.classList.remove('open');
    this.planner.exit();
    const { world } = this.ui;
    world.inputLocked = false;
    world.paused = false;
    this.setHover(null);
    if (this.lastFocus?.isConnected) this.lastFocus.focus({ preventScroll: true });
  }

  toggle() { if (this.openState) this.close(); else this.open(); }

  show(planet, unfold) {
    const { ui } = this;
    this.planet = planet;
    this.style = { ...DEFAULT_STYLE, ...(planet.civ.map || {}) };
    if (!this.cache.has(planet)) this.cache.set(planet, prepare(planet));
    this.data = this.cache.get(planet);
    if (!this.painters.has(planet)) this.painters.set(planet, new TerrainPainter(planet, this.data.centre, this.style));
    this.painter = this.painters.get(planet);
    this.zoom = 1; this.panX = 0; this.panY = 0; this.targetPan = null;
    // On a phone the card would cover the map, so it waits until you ask.
    this.select(innerWidth > 900 && ui.currentPage != null && this.data.byId.has(ui.currentPage) ? ui.currentPage : null);
    this.hover = null;
    this.morph = unfold && !ui.world.rig.reducedMotion ? 0 : 1;
    this.morphFrom = this.viewBasis();
    this.labelWidths = new Map();
    const s = this.style;
    for (const [name, value] of Object.entries({
      paper: s.paper, edge: s.edge, ink: s.ink, soft: s.soft, accent: s.accent, font: FONTS[s.font] || FONTS.ui,
    })) this.sheet.style.setProperty(`--m-${name}`, value);
    this.renderHeading();
    this.renderTabs();
    this.renderLegend();
    this.renderList();
    if (this.planner.active) { this.planner.computeNext(); this.planner.render(); }
    this.dirty = true;
  }

  /** The orientation of the globe at the moment the map unfolds, north staying up. */
  viewBasis() {
    const { rig } = this.ui.world;
    let w = [0, 0, 1];
    if (rig.mode === 'body' && rig.body === this.planet) w = [rig.dir.x, rig.dir.y, rig.dir.z];
    const north = [0, 1, 0];
    const dot = north[0] * w[0] + north[1] * w[1] + north[2] * w[2];
    let v = [north[0] - w[0] * dot, north[1] - w[1] * dot, north[2] - w[2] * dot];
    const vl = Math.hypot(...v) || 1;
    v = v.map((x) => x / vl);
    const u = [v[1] * w[2] - v[2] * w[1], v[2] * w[0] - v[0] * w[2], v[0] * w[1] - v[1] * w[0]];
    return { u, v, w };
  }

  renderHeading() {
    const { ui, planet, style } = this;
    const { lang } = ui;
    const { done, total } = ui.logbook.progress(planet.cluster.pageIds);
    this.heading.replaceChildren(
      el('div', { class: 'pmap-kicker', text: `${style.title[lang]} · ${planet.civ.name[lang]}` }),
      el('h2', { text: planet.cluster.name }),
      el('div', { class: 'pmap-explored' },
        el('span', { class: 'pmap-meter', style: `--p:${total ? (done / total) * 100 : 0}%` }),
        ui.t.explored(done, total)));
  }

  renderTabs() {
    const { ui, planet } = this;
    // Kept between worlds, so that keyboard focus stays on the tab you just pressed.
    if (!this.tabs.childElementCount) {
      this.tabs.append(...ui.world.planets.map((p) => el('button', {
        class: 'pmap-tab',
        title: `${p.cluster.name} · ${p.civ.name[ui.lang]} · ${p.cluster.keywords.slice(0, 4).join(', ')}`,
        'data-index': p.index,
        onclick: () => { if (p !== this.planet) this.show(p, false); },
      },
      face(p, 44),
      el('span', { class: 'pmap-tab-text' },
        el('span', { class: 'pmap-tab-name', text: p.cluster.name }),
        el('span', { class: 'pmap-tab-sub' })))));
    }
    for (const tab of this.tabs.children) {
      const on = Number(tab.dataset.index) === planet.index;
      const p = ui.world.planets[Number(tab.dataset.index)];
      const { done, total } = ui.logbook.progress(p.cluster.pageIds);
      const planned = this.planner.active ? this.planner.stops.filter((id) => ui.graph.pages[id].cluster === p.index).length : 0;
      tab.querySelector('.pmap-tab-sub').textContent = `${p.civ.name[ui.lang]} · ${done}/${total}${planned ? ` · ${ui.t.planOnWorld(planned)}` : ''}`;
      tab.classList.toggle('on', on);
      if (on) tab.setAttribute('aria-current', 'true');
      else tab.removeAttribute('aria-current');
    }
  }

  renderLegend() {
    const { ui, style, data } = this;
    const { t } = ui;
    const counts = [0, 0, 0, 0, 0];
    for (const s of data.sites) counts[s.tier]++;
    const mark = (tier, visited) => {
      const size = 30;
      const c = el('canvas', { class: 'pmap-mark', width: size * 2, height: size * 2, style: `width:${size}px;height:${size}px` });
      const ctx = c.getContext('2d');
      ctx.scale(2, 2);
      drawGlyph(ctx, style, size / 2, size / 2, TIER_RADIUS[tier], { visited, tier });
      return c;
    };
    const items = [4, 3, 2, 1, 0].filter((tier) => counts[tier]).map((tier) => el('span', { class: 'pmap-key' }, mark(tier, false), `${t.tierNames[tier]} `, el('b', { text: String(counts[tier]) })));
    items.push(el('span', { class: 'pmap-key' }, mark(2, true), t.visited));
    this.legend.replaceChildren(...items);
  }

  // ---- directory -------------------------------------------------------------------------
  renderList() {
    if (!this.data) return;
    const { ui, data, filter, sort } = this;
    const { t, logbook, lang } = ui;
    let rows = data.sites;
    if (filter) rows = rows.filter((s) => s.page.title.toLowerCase().includes(filter) || s.page.path.toLowerCase().includes(filter) || s.page.sections.some((x) => x.title.toLowerCase().includes(filter)));
    const by = {
      size: (a, b) => b.importance - a.importance,
      name: (a, b) => a.page.title.localeCompare(b.page.title, lang),
      date: (a, b) => String(b.page.updated).localeCompare(String(a.page.updated)) || b.importance - a.importance,
      new: (a, b) => (logbook.isFresh(b.id) - logbook.isFresh(a.id)) || (logbook.isVisited(a.id) - logbook.isVisited(b.id)) || b.importance - a.importance,
    }[sort];
    rows = [...rows].sort(by);
    this.count.textContent = filter ? t.mapMatches(rows.length, data.sites.length) : ui.countPages(data.sites.length);
    const nodes = [];
    let group = null;
    for (const s of rows) {
      if (sort === 'size' && group !== s.tier) {
        group = s.tier;
        nodes.push(el('div', { class: 'pmap-group', text: t.tierNames[s.tier] }));
      }
      const links = s.page.inDeg + s.page.outDeg;
      const row = el('button', {
        class: `pmap-row${s.id === this.selected ? ' sel' : ''}${logbook.isVisited(s.id) ? ' read' : ''}`,
        role: 'option',
        'aria-selected': s.id === this.selected ? 'true' : 'false',
        'data-id': s.id,
        onclick: () => this.pickCity(s.id),
        onmouseenter: () => this.setHover(s),
        onmouseleave: () => this.setHover(null),
        onfocus: () => this.setHover(s),
      },
      el('span', { class: 'pmap-dot', style: `--r:${Math.round(TIER_RADIUS[s.tier] * 1.1)}px` }),
      el('span', { class: 'pmap-row-text' },
        el('span', { class: 'pmap-row-title', text: s.page.title }),
        el('span', { class: 'pmap-row-sub', text: sort === 'date' && s.page.updated ? s.page.updated : `${s.page.words.toLocaleString(lang)} ${t.words} · ${links} ${t.links}` })),
      logbook.isFresh(s.id) ? el('span', { class: 'badge-new', text: logbook.added.has(s.id) ? t.badgeNew : t.badgeChanged }) : null);
      nodes.push(row);
    }
    if (!rows.length) nodes.push(el('div', { class: 'empty', text: t.noResults }));
    this.list.replaceChildren(...nodes);
  }

  // ---- selection -------------------------------------------------------------------------
  /** First click selects a city; clicking it again goes there. */
  pickCity(id) {
    if (this.selected === id) { this.go(id); return; }
    this.select(id, true);
  }

  go(id) {
    const { ui } = this;
    this.close();
    ui.openPage(id);
  }

  select(id, reveal = false) {
    this.selected = id;
    this.dirty = true;
    for (const row of this.list.querySelectorAll('.pmap-row')) {
      const on = Number(row.dataset.id) === id;
      row.classList.toggle('sel', on);
      row.setAttribute('aria-selected', on ? 'true' : 'false');
      if (on) row.scrollIntoView({ block: 'nearest' });
    }
    this.renderCard();
    if (reveal && id != null) this.bringIntoView(this.data.byId.get(id));
  }

  bringIntoView(s) {
    if (!s || !this.W) return;
    const x = this.sx(s.mx), y = this.sy(s.my);
    const margin = 90;
    if (x > margin && x < this.W - margin && y > margin && y < this.H - margin - 150) return;
    this.targetPan = { x: this.panX + this.W / 2 - x, y: this.panY + this.H * 0.42 - y };
  }

  renderCard() {
    const { ui, selected } = this;
    const s = selected != null ? this.data?.byId.get(selected) : null;
    if (!s) { this.card.classList.remove('show'); return; }
    const { t, lang, logbook } = ui;
    const p = s.page;
    this.card.replaceChildren(
      el('div', { class: 'pmap-card-kicker', text: t.tierNames[s.tier] }),
      el('h3', { text: p.title }),
      p.summary ? el('p', { text: p.summary }) : null,
      el('div', { class: 'pmap-card-facts' },
        el('span', {}, el('b', { text: p.words.toLocaleString(lang) }), ` ${t.words}`),
        el('span', {}, el('b', { text: String(p.inDeg) }), ` ${t.linksIn} / `, el('b', { text: String(p.outDeg) }), ` ${t.linksOut}`),
        el('span', {}, el('b', { text: String(p.sections.length) }), ` ${t.sections}`),
        logbook.isVisited(s.id) ? el('span', { class: 'done', text: `✓ ${t.visited}` }) : null),
      el('div', { class: 'pmap-card-actions' },
        el('button', { class: 'pmap-go', text: t.flyThere, onclick: () => this.go(s.id) }),
        el('button', { class: 'pmap-route', text: t.routeHere, onclick: () => { ui.shiplog.planTo(s.id); } }),
        el('button', { class: 'pmap-route', text: t.planFromHere, onclick: () => { this.planner.enter(s.id); } })),
    );
    this.card.classList.add('show');
  }

  setHover(item) {
    if (this.hover === item) return;
    this.hover = item;
    this.dirty = true;
    this.canvas.classList.toggle('pointing', !!item);
    const { ui } = this;
    if (!item) { this.tip.classList.remove('show'); return; }
    const { t } = ui;
    if (item.ghost) {
      this.tip.replaceChildren(el('div', { class: 'k', text: t.site }), el('div', { class: 't', text: item.ghost.title }), el('div', { class: 's', text: t.siteTitle }));
    } else {
      this.tip.replaceChildren(
        el('div', { class: 'k', text: t.tierNames[item.tier] }),
        el('div', { class: 't', text: item.page.title }),
        item.page.summary ? el('div', { class: 's', text: item.page.summary }) : '',
      );
    }
    this.tip.classList.add('show');
  }

  hitAt(x, y) {
    if (!this.hits) return null;
    let best = null, bestD = Infinity;
    for (const h of this.hits) {
      const d = Math.hypot(h.x - x, h.y - y) - h.r;
      if (d < 7 && d < bestD) { bestD = d; best = h.item; }
    }
    return best;
  }

  // ---- geometry --------------------------------------------------------------------------
  fit() {
    const box = this.canvas.getBoundingClientRect();
    const W = Math.max(1, Math.round(box.width)), H = Math.max(1, Math.round(box.height));
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    if (W !== this.W || H !== this.H || dpr !== this.dpr) {
      this.W = W; this.H = H; this.dpr = dpr;
      for (const c of [this.canvas, this.staticLayer]) { c.width = W * dpr; c.height = H * dpr; }
      this.dirty = true;
    }
    this.k = Math.min((W - 40) / (MAP_X * 2), (H - 40) / (MAP_Y * 2));
  }

  limitPan() {
    const maxX = Math.max(0, MAP_X * this.k * this.zoom - this.W * 0.3);
    const maxY = Math.max(0, MAP_Y * this.k * this.zoom - this.H * 0.3);
    this.panX = clamp(this.panX, -maxX, maxX);
    this.panY = clamp(this.panY, -maxY, maxY);
  }

  sx(mx) { return this.W / 2 + mx * this.k * this.zoom + this.panX; }
  sy(my) { return this.H / 2 - my * this.k * this.zoom + this.panY; }

  /** A point on the planet, between the globe it was and the map it becomes. */
  place(x, y, z, mx, my) {
    if (this.morph >= 1) return [this.sx(mx), this.sy(my), 1];
    const m = ease(this.morph);
    const { u, v, w } = this.morphFrom;
    const R = Math.min(this.W, this.H) * 0.44;
    const ox = this.W / 2 + (x * u[0] + y * u[1] + z * u[2]) * R;
    const oy = this.H / 2 - (x * v[0] + y * v[1] + z * v[2]) * R;
    const front = x * w[0] + y * w[1] + z * w[2];
    return [ox + (this.sx(mx) - ox) * m, oy + (this.sy(my) - oy) * m, front > 0 ? 1 : clamp(m * 2.5, 0, 1)];
  }

  // ---- drawing ---------------------------------------------------------------------------
  frame(dt) {
    if (!this.openState || !this.planet) return;
    this.time += dt;
    this.fit();
    if (this.painter && !this.painter.done && this.painter.step(11)) this.dirty = true;
    if (this.morph < 1) {
      this.morph = Math.min(1, this.morph + dt / 1.05);
      this.dirty = true;
      if (this.morph >= 1) this.ui.world.paused = true;
    } else {
      this.ui.world.paused = true;
    }
    if (this.targetPan) {
      const k = 1 - Math.exp(-dt * 7);
      this.panX += (this.targetPan.x - this.panX) * k;
      this.panY += (this.targetPan.y - this.panY) * k;
      this.dirty = true;
      if (Math.hypot(this.targetPan.x - this.panX, this.targetPan.y - this.panY) < 0.5) this.targetPan = null;
    }
    if (this.dirty) { this.drawStatic(); this.dirty = false; }
    const { ctx, dpr } = this;
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    ctx.drawImage(this.staticLayer, 0, 0);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    this.drawLive(ctx);
    if (this.tip.classList.contains('show') && this.mouse) {
      const w = this.tip.offsetWidth, h = this.tip.offsetHeight;
      this.tip.style.transform = `translate(${Math.min(this.mouse.x + 14, this.W - w - 8)}px, ${Math.min(this.mouse.y + 14, this.H - h - 8)}px)`;
    }
  }

  relatedIds() {
    if (this.planner.active) {
      const { last, stops, next } = this.planner;
      if (last == null) return null;
      const related = new Set(stops);
      for (const n of next) related.add(n.id);
      return { focus: last, related };
    }
    const focus = this.hover?.id ?? this.selected;
    if (focus == null) return null;
    const related = new Set([focus]);
    for (const other of this.ui.world.neighbours.get(focus) || []) {
      if (this.data.byId.has(other)) related.add(other);
    }
    // A city linked only to other worlds has nothing to single out here, so nothing fades.
    return related.size > 1 ? { focus, related } : null;
  }

  traceFor(ctx, road) {
    const { style } = this;
    // The Collective draws its plans the way it builds its boards: at right angles and diagonals.
    if (style.lines === 'trace' && this.morph >= 1 && !road.breaks.some((b) => b)) {
      const ax = this.sx(road.map[0]), ay = this.sy(road.map[1]);
      const bx = this.sx(road.map[(road.n - 1) * 2]), by = this.sy(road.map[(road.n - 1) * 2 + 1]);
      const dx = bx - ax, dy = by - ay;
      const d = Math.min(Math.abs(dx), Math.abs(dy));
      return () => {
        ctx.beginPath();
        ctx.moveTo(ax, ay);
        ctx.lineTo(ax + Math.sign(dx) * d, ay + Math.sign(dy) * d);
        ctx.lineTo(bx, by);
      };
    }
    return () => {
      ctx.beginPath();
      for (let i = 0; i < road.n; i++) {
        const [x, y] = this.place(road.dirs[i * 3], road.dirs[i * 3 + 1], road.dirs[i * 3 + 2], road.map[i * 2], road.map[i * 2 + 1]);
        if (i === 0 || road.breaks[i]) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
    };
  }

  drawStatic() {
    const { staticCtx: ctx, W, H, dpr, style, data, morph, ui } = this;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, W, H);
    ctx.fillStyle = style.paper;
    ctx.fillRect(0, 0, W, H);
    const m = ease(morph);

    this.drawDecor(ctx);

    // The globe it was, then the terrain it becomes.
    if (morph < 1) {
      const R = Math.min(W, H) * 0.44;
      ctx.globalAlpha = 1 - m;
      ctx.fillStyle = style.sea[1];
      ctx.beginPath(); ctx.arc(W / 2, H / 2, R, 0, Math.PI * 2); ctx.fill();
      ctx.strokeStyle = style.edge; ctx.lineWidth = 1.5; ctx.stroke();
      ctx.globalAlpha = 1;
    }
    if (this.painter.row > 0) {
      ctx.globalAlpha = m * m;
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = 'high';
      ctx.drawImage(this.painter.canvas, this.sx(-MAP_X), this.sy(MAP_Y), MAP_X * 2 * this.k * this.zoom, MAP_Y * 2 * this.k * this.zoom);
      ctx.globalAlpha = 1;
    }
    if (m > 0.3) this.drawGraticule(ctx, m);

    const rel = this.relatedIds();
    const scale = Math.pow(this.zoom, 0.35);

    // Flight routes under the roads, roads under the cities.
    ctx.lineCap = 'round';
    for (const road of data.air) {
      const hot = rel && (road.a === rel.focus || road.b === rel.focus);
      ctx.globalAlpha = rel ? (hot ? 0.95 : 0.14) : 0.55;
      ctx.strokeStyle = style.air;
      ctx.lineWidth = (hot ? 1.8 : 1.1) * scale;
      ctx.setLineDash([2.5 * scale, 4.5 * scale]);
      this.traceFor(ctx, road)();
      ctx.stroke();
    }
    ctx.setLineDash([]);
    ctx.globalAlpha = 1;
    for (const road of data.roads) {
      const width = (0.9 + Math.log2(1 + road.ab + road.ba) * 0.55) * scale;
      const hot = rel && (road.a === rel.focus || road.b === rel.focus);
      strokeRoad(ctx, style, this.traceFor(ctx, road), width, !rel ? 1 : hot ? 2 : 0.5);
    }

    this.drawJourney(ctx);

    // Cities, smallest first, so that the big ones sit on top.
    this.hits = [];
    const glyphScale = Math.pow(this.zoom, 0.3);
    for (const s of [...data.sites].sort((a, b) => a.importance - b.importance)) {
      const [x, y, alpha] = this.place(s.x, s.y, s.z, s.mx, s.my);
      if (x < -30 || x > W + 30 || y < -30 || y > H + 30) continue;
      const r = (TIER_RADIUS[s.tier] + (s.tier === 4 ? (s.importance - 0.82) * 6 : 0)) * glyphScale;
      ctx.globalAlpha = alpha * (rel && !rel.related.has(s.id) ? 0.4 : 1);
      if (s.id === this.selected || s.id === this.hover?.id) {
        ctx.fillStyle = style.accent;
        ctx.globalAlpha = 0.28;
        ctx.beginPath(); ctx.arc(x, y, r + 7, 0, Math.PI * 2); ctx.fill();
        ctx.globalAlpha = alpha;
      }
      drawGlyph(ctx, style, x, y, r, { visited: ui.logbook.isVisited(s.id), tier: s.tier });
      this.hits.push({ x, y, r, item: s });
    }
    ctx.globalAlpha = 1;

    // Construction sites: pages that exist only as links.
    for (const g of data.ghosts) {
      const [x, y, alpha] = this.place(g.x, g.y, g.z, g.mx, g.my);
      ctx.globalAlpha = alpha;
      ctx.strokeStyle = style.soft; ctx.lineWidth = 1.4;
      ctx.beginPath(); ctx.moveTo(x - 3, y - 3); ctx.lineTo(x + 3, y + 3); ctx.moveTo(x + 3, y - 3); ctx.lineTo(x - 3, y + 3); ctx.stroke();
      this.hits.push({ x, y, r: 3, item: g });
    }
    ctx.globalAlpha = 1;

    if (morph >= 0.6) this.drawLabels(ctx, rel, clamp((morph - 0.6) / 0.4, 0, 1));
  }

  drawDecor(ctx) {
    const { W, H, style } = this;
    ctx.save();
    ctx.strokeStyle = style.grid;
    ctx.lineWidth = 1;
    if (style.lines === 'atlas') {
      // The folds of a much-used road atlas.
      ctx.strokeStyle = 'rgba(70,60,40,0.16)';
      ctx.beginPath();
      for (const f of [0.25, 0.5, 0.75]) { ctx.moveTo(W * f, 0); ctx.lineTo(W * f, H); }
      ctx.moveTo(0, H / 2); ctx.lineTo(W, H / 2);
      ctx.stroke();
    } else if (style.lines === 'sealane') {
      // Rhumb lines radiating from a compass rose, as on an old portolan chart.
      ctx.beginPath();
      const reach = Math.hypot(W, H);
      for (let i = 0; i < 16; i++) {
        const a = (i / 16) * Math.PI * 2;
        ctx.moveTo(W * 0.9, H * 0.14);
        ctx.lineTo(W * 0.9 + Math.cos(a) * reach, H * 0.14 + Math.sin(a) * reach);
      }
      ctx.stroke();
    } else if (style.lines === 'trace') {
      ctx.fillStyle = style.grid;
      for (let x = 12; x < W; x += 24) for (let y = 12; y < H; y += 24) ctx.fillRect(x, y, 1.5, 1.5);
    } else if (style.lines === 'caravan' || style.lines === 'rail') {
      ctx.beginPath();
      for (let r = 80; r < Math.hypot(W, H); r += 80) { ctx.moveTo(W / 2 + r, H / 2); ctx.arc(W / 2, H / 2, r, 0, Math.PI * 2); }
      ctx.stroke();
    }
    ctx.restore();
  }

  drawGraticule(ctx, alpha) {
    ctx.save();
    ctx.globalAlpha = alpha;
    ctx.strokeStyle = this.style.grid;
    ctx.lineWidth = 1;
    ctx.beginPath();
    const out = [0, 0];
    for (let lon = -180; lon <= 180; lon += 30) {
      for (let lat = -90; lat <= 90; lat += 6) {
        project((lon * Math.PI) / 180, (lat * Math.PI) / 180, out);
        const x = this.sx(out[0]), y = this.sy(out[1]);
        if (lat === -90) ctx.moveTo(x, y); else ctx.lineTo(x, y);
      }
    }
    for (let lat = -60; lat <= 60; lat += 30) {
      for (let lon = -180; lon <= 180; lon += 10) {
        project((lon * Math.PI) / 180, (lat * Math.PI) / 180, out);
        const x = this.sx(out[0]), y = this.sy(out[1]);
        if (lon === -180) ctx.moveTo(x, y); else ctx.lineTo(x, y);
      }
    }
    ctx.stroke();
    ctx.strokeStyle = this.style.edge;
    ctx.beginPath();
    for (let lat = -90; lat <= 90; lat += 3) {
      project(Math.PI, (lat * Math.PI) / 180, out);
      const x = this.sx(out[0]), y = this.sy(out[1]);
      if (lat === -90) ctx.moveTo(x, y); else ctx.lineTo(x, y);
    }
    for (let lat = 90; lat >= -90; lat -= 3) {
      project(-Math.PI, (lat * Math.PI) / 180, out);
      ctx.lineTo(this.sx(out[0]), this.sy(out[1]));
    }
    ctx.closePath();
    ctx.stroke();
    ctx.restore();
  }

  /** The expedition being planned or travelled, along its real roads where it has them. */
  drawJourney(ctx) {
    const { journey } = this.ui;
    const { planner, style, data, zoom } = this;
    const stops = planner.active ? planner.stops : journey.active ? journey.stops.map((s) => s.page) : null;
    if (!stops?.length || this.morph < 0.5) return;
    const at = planner.active ? stops.length - 1 : journey.at;
    const on = stops.map((id, i) => ({ i, s: data.byId.get(id) })).filter((x) => x.s);
    if (!on.length) return;
    const roadOf = (a, b) => data.roads.find((r) => (r.a === a && r.b === b) || (r.a === b && r.b === a)) ?? data.air.find((r) => (r.a === a && r.b === b) || (r.a === b && r.b === a));
    ctx.save();
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    for (let k = 1; k < on.length; k++) {
      if (on[k].i !== on[k - 1].i + 1) continue;
      const a = on[k - 1].s, b = on[k].s;
      const road = roadOf(a.id, b.id);
      const trace = road ? this.traceFor(ctx, road) : () => {
        ctx.beginPath();
        ctx.moveTo(this.sx(a.mx), this.sy(a.my));
        ctx.lineTo(this.sx(b.mx), this.sy(b.my));
      };
      // What's behind you is solid; what's ahead is still a plan.
      const ahead = !planner.active && on[k].i > at;
      ctx.setLineDash([]);
      ctx.strokeStyle = style.paper; ctx.lineWidth = 6.5; ctx.globalAlpha = 0.85;
      trace(); ctx.stroke();
      ctx.globalAlpha = 1;
      ctx.strokeStyle = style.accent; ctx.lineWidth = 3.4;
      ctx.setLineDash(ahead || !road ? [1, 7] : []);
      trace(); ctx.stroke();
    }
    ctx.setLineDash([]);
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    // A route through a whole world would bury the map in numbers until you zoom in.
    const crowded = on.length > 40 && zoom < 2.2;
    for (const { i, s } of on) {
      const x = this.sx(s.mx), y = this.sy(s.my) - TIER_RADIUS[s.tier] - 13;
      if (crowded && i !== at && i !== stops.length - 1 && i !== 0) continue;
      const here = i === at;
      const r = i + 1 > 99 ? 11.5 : 9.5;
      ctx.fillStyle = here ? style.accent : style.paper;
      ctx.strokeStyle = style.accent; ctx.lineWidth = 1.6;
      ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
      ctx.font = `600 ${i + 1 > 99 ? 10 : 11}px ${FONTS.ui}`;
      ctx.fillStyle = here ? style.paper : style.ink;
      ctx.fillText(String(i + 1), x, y + 0.5);
    }
    ctx.restore();
  }

  drawLabels(ctx, rel, alpha) {
    const { data, style, zoom, W, H, ui } = this;
    const minTier = data.sites.length <= 14 ? 0 : zoom >= 3 ? 0 : zoom >= 1.7 ? 1 : 2;
    const entries = [];
    for (const s of data.sites) {
      const important = s.id === this.selected || s.id === this.hover?.id || s.id === ui.currentPage;
      if (s.tier < minTier && !important && !(rel && rel.related.has(s.id))) continue;
      entries.push({ s, score: (important ? 100 : 0) + (rel?.related.has(s.id) ? 10 : 0) + s.tier * 2 + s.importance });
    }
    entries.sort((a, b) => b.score - a.score);
    const boxes = [];
    for (const h of this.hits) boxes.push({ l: h.x - h.r, r: h.x + h.r, t: h.y - h.r, b: h.y + h.r, city: h.item.id });
    const glyphScale = Math.pow(zoom, 0.3);
    ctx.textBaseline = 'middle';
    ctx.lineJoin = 'round';
    for (const { s } of entries) {
      const x = this.sx(s.mx), y = this.sy(s.my);
      if (x < -60 || x > W + 60 || y < -20 || y > H + 20) continue;
      const size = [10.5, 11, 12, 13.5, 15.5][s.tier];
      const weight = s.tier >= 3 ? 600 : 400;
      const font = `${weight} ${size}px ${FONTS[style.font] || FONTS.ui}`;
      ctx.font = font;
      const text = s.page.title.length > 34 ? `${s.page.title.slice(0, 32)}…` : s.page.title;
      const w = ctx.measureText(text).width;
      const r = TIER_RADIUS[s.tier] * glyphScale + 5;
      const options = [
        [x + r, y, 'left'], [x - r - w, y, 'left'], [x - w / 2, y + r + size * 0.55, 'left'], [x - w / 2, y - r - size * 0.55, 'left'],
      ];
      for (const [tx, ty] of options) {
        const box = { l: tx - 2, r: tx + w + 2, t: ty - size * 0.62, b: ty + size * 0.62 };
        if (box.l < 2 || box.r > W - 2 || box.t < 2 || box.b > H - 2) continue;
        if (boxes.some((o) => o.city !== s.id && box.l < o.r && box.r > o.l && box.t < o.b && box.b > o.t)) continue;
        boxes.push(box);
        ctx.globalAlpha = alpha * (rel && !rel.related.has(s.id) ? 0.6 : 1);
        ctx.strokeStyle = style.paper; ctx.lineWidth = 3.2;
        ctx.strokeText(text, tx, ty);
        ctx.fillStyle = s.id === this.selected ? style.accent : style.ink;
        ctx.fillText(text, tx, ty);
        break;
      }
    }
    ctx.globalAlpha = 1;
  }

  /** Traffic, the "you are here" marker and anything else that moves. */
  drawLive(ctx) {
    const { data, style, time, morph, ui, planet } = this;
    const m = ease(morph);
    if (m > 0.5) {
      const rel = this.relatedIds();
      ctx.fillStyle = style.traffic;
      const scale = Math.pow(this.zoom, 0.3);
      const draw = (road, direction, count, speed) => {
        for (let i = 0; i < count; i++) {
          const f = ((time * speed) / road.length + i / count + (road.a % 7) * 0.13) % 1;
          const at = (direction > 0 ? f : 1 - f) * road.length;
          let lo = 0, hi = road.n - 1;
          while (hi - lo > 1) { const mid = (lo + hi) >> 1; if (road.cum[mid] < at) lo = mid; else hi = mid; }
          if (road.breaks[hi]) continue;
          const span = road.cum[hi] - road.cum[lo] || 1;
          const u = (at - road.cum[lo]) / span;
          const x = this.sx(road.map[lo * 2] + (road.map[hi * 2] - road.map[lo * 2]) * u);
          const y = this.sy(road.map[lo * 2 + 1] + (road.map[hi * 2 + 1] - road.map[lo * 2 + 1]) * u);
          ctx.globalAlpha = rel && road.a !== rel.focus && road.b !== rel.focus ? 0.2 : 1;
          ctx.beginPath();
          ctx.arc(x, y, (road.kind === 'air' ? 1.1 : 1.45) * scale, 0, Math.PI * 2);
          ctx.fill();
        }
      };
      for (const road of [...data.roads, ...data.air]) {
        const speed = road.kind === 'air' ? 0.16 : 0.09;
        if (road.ab > 0) draw(road, 1, Math.min(6, 1 + Math.round(Math.log2(1 + road.ab) * 1.3)), speed);
        if (road.ba > 0) draw(road, -1, Math.min(6, 1 + Math.round(Math.log2(1 + road.ba) * 1.3)), speed);
      }
      ctx.globalAlpha = 1;

      // While planning, what you can reach from here calls out.
      if (this.planner.active) {
        const beat = (time * 0.85) % 1;
        for (const id of this.planner.litHere()) {
          const s = data.byId.get(id);
          const x = this.sx(s.mx), y = this.sy(s.my);
          const r0 = TIER_RADIUS[s.tier] * scale + 3;
          ctx.strokeStyle = style.accent;
          ctx.lineWidth = 2;
          ctx.globalAlpha = 0.9;
          ctx.beginPath(); ctx.arc(x, y, r0, 0, Math.PI * 2); ctx.stroke();
          ctx.globalAlpha = (1 - beat) * 0.8;
          ctx.beginPath(); ctx.arc(x, y, r0 + beat * 13, 0, Math.PI * 2); ctx.stroke();
        }
        ctx.globalAlpha = 1;
      }

      // Pages that are new or changed pulse quietly.
      const pulse = (time * 0.7) % 1;
      for (const s of data.sites) {
        if (!ui.logbook.isFresh(s.id)) continue;
        const x = this.sx(s.mx), y = this.sy(s.my);
        const r = TIER_RADIUS[s.tier] * scale + 3 + pulse * 13;
        ctx.strokeStyle = '#ffb21e';
        ctx.lineWidth = 2;
        ctx.globalAlpha = 1 - pulse;
        ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.stroke();
      }
      ctx.globalAlpha = 1;
    }

    // You are here.
    const { rig } = ui.world;
    if (rig.mode === 'body' && rig.body === planet) {
      const d = rig.dir;
      const [mx, my] = data.toMap(d.x, d.y, d.z);
      const [x, y] = this.place(d.x, d.y, d.z, mx, my);
      const beat = 0.5 + 0.5 * Math.sin(time * 3);
      ctx.strokeStyle = style.accent;
      ctx.fillStyle = style.accent;
      ctx.lineWidth = 2;
      ctx.globalAlpha = 0.5 + beat * 0.3;
      ctx.beginPath(); ctx.arc(x, y, 10 + beat * 4, 0, Math.PI * 2); ctx.stroke();
      ctx.globalAlpha = 1;
      ctx.lineWidth = 1.5;
      ctx.strokeStyle = style.paper;
      ctx.beginPath(); ctx.arc(x, y, 4.5, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
      if (m >= 1) {
        ctx.font = `600 11px ${FONTS.ui}`;
        ctx.textBaseline = 'alphabetic';
        const label = ui.t.youAreHere;
        ctx.lineWidth = 3;
        ctx.strokeStyle = style.paper;
        ctx.strokeText(label, x + 15, y - 17);
        ctx.fillStyle = style.accent;
        ctx.fillText(label, x + 15, y - 17);
      }
    }
  }
}
