// Turns a cluster of wiki pages into a city. The mapping is the point of the whole project:
//   page        → a city around a landmark; how much the wiki leans on the page decides
//                 whether it is a hamlet or a busy metropolis
//   ## section  → smaller building in that district (click to open at that heading)
//   link        → road (nearby, tidy) or flight route (long, tangled); traffic = mention count
//   dead link   → construction site next to the page that references it
import * as THREE from 'three';
import { MeshBuilder, surfaceFrame } from './builder.js';
import { offsetDir, angularDistance } from './layout.js';
import { RNG } from './noise.js';

const tmpM = new THREE.Matrix4();
const IDENTITY = new THREE.Matrix4();
const GROUND_PIER = 0.12;

// Page ids on section buildings: id + 0.4 + 0.004 * section. Must match the city shader.
const SECTION_MARK = 0.4, SECTION_STEP = 0.004;

/**
 * A long page can't build every heading. Its main divisions come first, so that each has a
 * place in the city; what room is left goes to their subheadings, evenly across the page.
 */
export function sectionsToBuild(sections, cap) {
  const headed = sections.filter((s) => s.level <= 3);
  if (headed.length <= cap) return headed;
  const top = Math.min(...headed.map((s) => s.level));
  const keep = new Set(headed.filter((s) => s.level === top).slice(0, cap));
  const families = [];
  for (const s of headed) {
    if (s.level === top) families.push([]);
    else (families.at(-1) ?? (families[0] = [])).push(s);
  }
  for (let round = 0; keep.size < cap && families.some((f) => f.length > round); round++) {
    for (const f of families) {
      if (f[round] && keep.size < cap) keep.add(f[round]);
    }
  }
  return headed.filter((s) => keep.has(s));
}

export function sitePlan(page, maxRank, R, budget = 1) {
  const importance = page.importance ?? 0.5;
  const wordsH = Math.log2(1 + page.words / 250);
  const rank = Math.min(1, page.rank / (maxRank || 1));
  const h = Math.min(R * 0.24, 0.6 + Math.pow(importance, 1.6) * 3 + wordsH * 0.1);
  const w = 0.32 + importance * 0.4 + wordsH * 0.03;
  const sections = sectionsToBuild(page.sections, budget < 0.5 ? 5 : 8 + Math.round(importance * 12));
  const plaza = w * 0.82 + 0.3;
  const rD = plaza + 0.62 + importance * importance * 2.5 + Math.sqrt(sections.length) * 0.34;
  return { h, w, rank, importance, tier: page.tier ?? 2, sections, plaza, rD };
}

/**
 * Lays out one district in its tangent plane. Coordinates are in world units around the landmark.
 * Civilisations choose the urban form: a street grid, concentric rings, or organic growth.
 */
function planDistrict(site, civ, r, budget) {
  const style = civ.layout || 'grid';
  const sp = civ.block || 0.44;
  const extent = site.rD;
  const cells = [], streets = [], lanes = [];
  const edge = (a) => extent * (0.82 + 0.22 * Math.sin(a * 3 + site.h * 7) * Math.sin(a * 5 + site.w * 11));
  if (style === 'grid') {
    const n = Math.ceil(extent / sp);
    for (let i = -n; i < n; i++) {
      for (let j = -n; j < n; j++) {
        const x = (i + 0.5) * sp, y = (j + 0.5) * sp;
        const d = Math.hypot(x, y), a = Math.atan2(y, x);
        if (d < site.plaza + sp * 0.4 || d > edge(a)) continue;
        cells.push({ x, y, d, size: sp, turn: r.int(0, 3) * (Math.PI / 2) });
      }
    }
  } else if (style === 'rings') {
    let radius = site.plaza + sp * 0.75;
    while (radius < extent) {
      const m = Math.max(6, Math.floor((radius * Math.PI * 2) / sp));
      const offset = r.range(0, 6.28);
      for (let i = 0; i < m; i++) {
        const a = offset + (i / m) * Math.PI * 2;
        if (radius > edge(a)) continue;
        cells.push({ x: Math.cos(a) * radius, y: Math.sin(a) * radius, d: radius, size: sp, turn: -a + Math.PI / 2 });
      }
      radius += sp;
    }
    const seg = 48;
    for (let k = 0; radius - k * sp > site.plaza; k++) {
      const rr = radius - (k + 0.5) * sp;
      if (rr < site.plaza) break;
      for (let i = 0; i < seg; i++) {
        const a0 = (i / seg) * Math.PI * 2, a1 = ((i + 1) / seg) * Math.PI * 2;
        streets.push([Math.cos(a0) * rr, Math.sin(a0) * rr, Math.cos(a1) * rr, Math.sin(a1) * rr]);
      }
      if (rr < extent * 0.96) {
        const sign = k % 2 ? 1 : -1;
        lanes.push({ loop: true, points: Array.from({ length: seg + 1 }, (_, i) => [Math.cos((sign * i * Math.PI * 2) / seg) * rr, Math.sin((sign * i * Math.PI * 2) / seg) * rr]) });
      }
    }
    const spokes = 6;
    for (let i = 0; i < spokes; i++) {
      const a = (i / spokes) * Math.PI * 2 + 0.3;
      streets.push([Math.cos(a) * site.plaza, Math.sin(a) * site.plaza, Math.cos(a) * extent * 0.96, Math.sin(a) * extent * 0.96]);
    }
  } else {
    // Organic: poisson-ish scatter, denser toward the centre.
    const count = Math.round(((extent * extent) / (sp * sp)) * 3.2);
    for (let i = 0; i < count; i++) {
      const a = r.range(0, 6.283);
      const d = site.plaza + sp * 0.3 + Math.pow(r.next(), 0.75) * (extent - site.plaza);
      if (d > edge(a)) continue;
      cells.push({ x: Math.cos(a) * d, y: Math.sin(a) * d, d, size: sp * r.range(0.75, 1.15), turn: r.range(0, 6.28) });
    }
  }
  // How urban a block is falls off from the centre, and with the city's own standing:
  // a metropolis is downtown nearly everywhere, a hamlet has no downtown at all.
  const urban = 0.35 + site.importance * 1.05;
  for (const c of cells) c.tier = urban * (1 - Math.min(1, (c.d - site.plaza) / Math.max(extent - site.plaza, 0.01)));
  cells.sort((a, b) => a.d - b.d);
  // Small settlements are scattered, big cities packed; sections always get their plot.
  const fill = Math.min(1, 0.42 + site.importance * 1.1) * Math.min(1, budget);
  const keep = site.sections.length + 6;
  const kept = cells.filter((_, i) => i < keep || r.next() < fill);
  if (style === 'grid') gridStreets(kept, sp, site.plaza, streets, lanes);
  return { cells: kept, streets, lanes };
}

/** Streets run along the blocks that were actually built, and only the long ones carry traffic. */
function gridStreets(cells, sp, plaza, streets, lanes) {
  const vertical = new Map(), horizontal = new Map();
  const mark = (map, line, at) => {
    if (!map.has(line)) map.set(line, new Set());
    map.get(line).add(at);
  };
  for (const cell of cells) {
    const i = Math.round(cell.x / sp - 0.5), j = Math.round(cell.y / sp - 0.5);
    mark(vertical, i, j); mark(vertical, i + 1, j);
    mark(horizontal, j, i); mark(horizontal, j + 1, i);
  }
  const lay = (map, point) => {
    for (const [line, spans] of map) {
      const sorted = [...spans].sort((a, b) => a - b);
      let start = sorted[0];
      for (let k = 0; k < sorted.length; k++) {
        if (k + 1 < sorted.length && sorted[k + 1] === sorted[k] + 1) continue;
        const a = point(line, start), b = point(line, sorted[k] + 1);
        streets.push([a[0], a[1], b[0], b[1]]);
        // Long enough to drive, and not straight through the plaza and its landmark.
        if (sorted[k] + 1 - start >= 3 && Math.abs(line * sp) > plaza + sp * 0.5) {
          lanes.push({ points: line % 2 ? [a, b] : [b, a] });
        }
        if (k + 1 < sorted.length) start = sorted[k + 1];
      }
    }
  };
  lay(vertical, (line, at) => [line * sp, at * sp]);
  lay(horizontal, (line, at) => [at * sp, line * sp]);
}

/** Turns a street's tangent-plane polyline into evenly spaced points on the sphere. */
function sampleLane(points, toDir) {
  const out = [];
  for (let i = 0; i < points.length - 1; i++) {
    const [x0, y0] = points[i], [x1, y1] = points[i + 1];
    const steps = Math.max(1, Math.ceil(Math.hypot(x1 - x0, y1 - y0) / 0.3));
    for (let k = i ? 1 : 0; k <= steps; k++) out.push(toDir(x0 + ((x1 - x0) * k) / steps, y0 + ((y1 - y0) * k) / steps));
  }
  return out;
}

/** A flat ribbon on the sphere from (x0,y0) to (x1,y1) in a district's tangent plane. */
function groundStrip(b, x0, y0, x1, y1, width, radius, toDir) {
  const len = Math.hypot(x1 - x0, y1 - y0);
  const steps = Math.max(1, Math.ceil(len / 0.3));
  const nx = -(y1 - y0) / (len || 1), ny = (x1 - x0) / (len || 1);
  const hw = width / 2;
  let a0 = null, b0 = null;
  for (let i = 0; i <= steps; i++) {
    const t = i / steps;
    const x = x0 + (x1 - x0) * t, y = y0 + (y1 - y0) * t;
    const left = toDir(x + nx * hw, y + ny * hw).multiplyScalar(radius);
    const right = toDir(x - nx * hw, y - ny * hw).multiplyScalar(radius);
    if (a0) b.quad(b0.toArray(), a0.toArray(), left.toArray(), right.toArray());
    a0 = left; b0 = right;
  }
}

/** Generic scaffold + crane used for pages that don't exist yet. */
function constructionSite(b, { rng, frame, accent }) {
  const h = rng.range(0.22, 0.46), w = rng.range(0.18, 0.28);
  b.paint(frame, { rough: 0.6, metal: 0.5 });
  const bar = 0.012;
  for (const [x, z] of [[-1, -1], [1, -1], [-1, 1], [1, 1]]) {
    b.save().move((x * w) / 2, 0, (z * w) / 2).box(bar, h, bar).restore();
  }
  for (let level = 1; level <= 3; level++) {
    const y = (h * level) / 3;
    b.box(w, bar, bar, { y }).save().move(0, 0, w / 2).box(w, bar, bar, { y }).restore();
    b.save().move(0, 0, -w / 2).box(w, bar, bar, { y }).restore();
    b.save().move(w / 2, 0, 0).box(bar, bar, w, { y }).restore();
    b.save().move(-w / 2, 0, 0).box(bar, bar, w, { y }).restore();
  }
  b.paint(accent, { rough: 0.5, metal: 0.2 });
  const cx = w * 0.9;
  b.save().move(cx, 0, 0).box(0.02, h * 1.5, 0.02);
  b.box(0.42, 0.016, 0.016, { y: h * 1.48 }).restore();
  b.paint(accent, { rough: 0.3, glow: -3 });
  b.save().move(cx, h * 1.54, 0).box(0.024, 0.024, 0.024).restore();
}

/** A tower crane beside a landmark that was just built or rebuilt. It goes away once you have read the page. */
function buildCrane(site, planet) {
  const { G, civ } = planet;
  const b = new MeshBuilder({ spin: true });
  const dir = offsetDir(site.dir, site.base + 0.8, (site.plaza * 0.95) / G);
  const height = Math.max(0.75, site.h * 0.78) + 0.3;
  const reach = Math.max(0.55, site.w * 1.5);
  b.setMatrix(surfaceFrame(dir, G, site.base));
  b.spinAbout(0, 0, 0, 0, 1, 0, 0);
  b.paint(0x4a4d52, { rough: 0.8 });
  b.box(0.16, 0.03, 0.16);
  b.paint(0xf2b21c, { rough: 0.45, metal: 0.4 });
  for (const [x, z] of [[-1, -1], [1, -1], [-1, 1], [1, 1]]) {
    b.save().move(x * 0.022, 0.03, z * 0.022).box(0.008, height, 0.008).restore();
  }
  for (let y = 0.1; y < height; y += 0.08) b.box(0.05, 0.005, 0.05, { y });
  b.paint(0xd8dce2, { rough: 0.5, metal: 0.3 });
  b.box(0.05, 0.05, 0.06, { y: height + 0.03 });

  // The jib swings slowly, so that the movement catches your eye from far away.
  b.save().move(0, height + 0.08, 0);
  b.spinAbout(0, 0, 0, 0, 1, 0, 0.26);
  b.paint(0xf2b21c, { rough: 0.45, metal: 0.4 });
  b.save().move(reach * 0.5, 0, 0).box(reach, 0.018, 0.018).restore();
  b.save().move(-reach * 0.14, 0, 0).box(reach * 0.28, 0.018, 0.018).restore();
  b.save().move(reach * 0.25, 0.02, 0).rotZ(-0.09).box(reach * 0.56, 0.004, 0.004).restore();
  b.paint(0x3a3d42, { rough: 0.8 });
  b.save().move(-reach * 0.24, -0.04, 0).box(0.08, 0.05, 0.05).restore();
  b.save().move(reach * 0.72, -height * 0.3, 0).box(0.003, height * 0.3, 0.003).restore();
  b.paint(civ.palette.accent, { rough: 0.5 });
  b.save().move(reach * 0.72, -height * 0.34, 0).box(0.05, 0.03, 0.05).restore();
  b.paint(0xff5a2c, { glow: 9 });
  b.save().move(0, 0.05, 0).sphere(0.016, { seg: 6, rings: 4 }).restore();
  b.restore();
  return b;
}

/**
 * Builds static city geometry and registers pickable objects on the planet.
 * Fills planet.pickables, and the vehicle paths consumed by Traffic.
 */
export function buildCity(planet) {
  const { civ, G, R, sites, occ, rng } = planet;
  const main = new MeshBuilder();
  const detail = new MeshBuilder();
  const spin = new MeshBuilder({ spin: true });
  const budget = planet.budget;
  const flat = 0.01;
  const probe = [0, 0, 0];

  // Roads first: they reserve their ground, so no building ends up on a carriageway.
  main.page = -1;
  planet.roadGeometry = buildRoadGeometry(planet, main);

  // ---- districts ------------------------------------------------------------
  for (const site of sites) {
    const r = new RNG(`site:${site.page.path}`);
    const pageId = site.page.id;
    const base = r.range(0, Math.PI * 2);
    site.base = base;
    main.page = pageId;
    spin.page = pageId;
    occ.add(site.dir, site.plaza / G);

    const { cells, streets, lanes } = planDistrict(site, civ, r, budget);
    // Crowded worlds drop the fine street grid: at that scale it only adds noise and vertices.
    const drawStreets = budget >= 0.34;
    const toDir = (x, y) => offsetDir(site.dir, Math.atan2(y, x) + base, Math.hypot(x, y) / G);
    site.lanes = civ.street && drawStreets ? lanes.map((lane) => ({ loop: !!lane.loop, dirs: sampleLane(lane.points, toDir) })) : [];
    detail.page = pageId + 0.25;

    // Each block gets its own ground: paved downtown, greener further out.
    const canAfford = main.vertexCount < planet.vertexCap;
    if ((civ.lot || civ.lotFor) && canAfford) {
      main.page = -1;
      main.setMatrix(IDENTITY);
      for (const cell of cells) {
        const color = civ.lotFor ? civ.lotFor(cell.tier, r) : r.pick(civ.lot);
        main.paint(color, { rough: civ.lotRough ?? 0.92 });
        const half = cell.size * 0.5;
        const a = toDir(cell.x - half, cell.y - half).multiplyScalar(G + 0.005);
        const c1 = toDir(cell.x + half, cell.y - half).multiplyScalar(G + 0.005);
        const c2 = toDir(cell.x + half, cell.y + half).multiplyScalar(G + 0.005);
        const c3 = toDir(cell.x - half, cell.y + half).multiplyScalar(G + 0.005);
        main.quad(c3.toArray(), c2.toArray(), c1.toArray(), a.toArray());
      }
      main.page = pageId;
    }

    // Streets go down first, as flat strips that follow the curve of the ground.
    if (civ.street && drawStreets) {
      main.page = -1;
      main.setMatrix(IDENTITY);
      main.paint(civ.street.color, { rough: civ.street.rough ?? 0.85, glow: civ.street.glow ?? 0 });
      for (const [x0, y0, x1, y1] of streets) groundStrip(main, x0, y0, x1, y1, civ.street.width, G + 0.009, toDir);
      main.page = pageId;
    }

    // However large the wiki, every page stays on the map: past the budget, a page is a plain block.
    const spare = main.vertexCount < planet.vertexCap * 1.2;
    main.setMatrix(surfaceFrame(site.dir, G + flat, base));
    if (spare) civ.plaza(main, { r: site.plaza, rng: r });

    const pos = new THREE.Vector3().copy(site.dir).multiplyScalar(G);
    main.setMatrix(surfaceFrame(site.dir, G, base));
    spin.setMatrix(surfaceFrame(site.dir, G, base));
    // Past the budget, a landmark falls back to its much lighter section building.
    if (main.vertexCount < planet.vertexCap) civ.landmark(main, { h: site.h, w: site.w, rank: site.rank, rng: r, spin, capital: site.capital, words: site.page.words });
    else if (spare) civ.section(main, { h: site.h, w: site.w, rng: r, spin, index: 0 });
    else {
      main.paint(civ.palette.scaffold || 0x8a8e94, { rough: 0.7, win: 1, cw: 0.06, ch: 0.07 });
      main.box(site.w, site.h, site.w);
    }
    planet.pickables.push({
      kind: 'page', id: pageId, local: pos.clone().multiplyScalar((G + site.h * 0.5) / G), r: Math.max(site.h * 0.52, site.w * 0.9),
      top: G + site.h * 1.1, foot: site.w * 1.2 + 0.1,
    });

    // The nearest blocks hold the page's sections; further out the neighbourhood thins.
    site.sectionDirs = [];
    let nextSection = 0;
    for (const cell of cells) {
      const dir = toDir(cell.x, cell.y);
      const facing = base + cell.turn;
      if (nextSection < site.sections.length && main.vertexCount < planet.vertexCap * 1.2) {
        const section = site.sections[nextSection];
        const words = section.words || 20;
        const h = Math.min(site.h * 0.66, 0.26 + Math.log2(1 + words / 60) * 0.16);
        const w = Math.min(cell.size * 0.9, 0.2 + Math.min(0.18, words / 3000) + r.range(0, 0.06));
        const foot = (w * 0.8) / G;
        if (!occ.free(dir, foot)) continue;
        planet.sampleSurface(dir.x, dir.y, dir.z, probe);
        if (probe[2] < 0.96) continue;
        occ.add(dir, foot);
        main.setMatrix(surfaceFrame(dir, G, facing));
        spin.setMatrix(surfaceFrame(dir, G, facing));
        // The fraction names the section, so that the reader can light up this one building.
        main.page = spin.page = pageId + SECTION_MARK + nextSection * SECTION_STEP;
        civ.section(main, { h, w, rng: r, spin, index: nextSection });
        main.page = spin.page = pageId;
        planet.pickables.push({
          kind: 'section', id: pageId, slug: section.slug, title: section.title, index: nextSection,
          local: dir.clone().multiplyScalar(G + h * 0.5), r: Math.max(h * 0.55, w * 0.7),
          top: G + h * 1.1, foot: w * 0.9 + 0.04,
        });
        site.sectionDirs.push(dir);
        nextSection++;
        continue;
      }
      if (detail.vertexCount > planet.vertexCap) break;
      const size = cell.size * 0.42 * (0.85 + site.importance * 0.3);
      if (!occ.free(dir, size / G)) continue;
      planet.sampleSurface(dir.x, dir.y, dir.z, probe);
      if (probe[2] < 0.96) continue;
      occ.add(dir, (size * 0.9) / G);
      detail.setMatrix(surfaceFrame(dir, G, facing));
      spin.setMatrix(surfaceFrame(dir, G, facing));
      civ.filler(detail, { s: size, rng: r, spin, tier: cell.tier });
    }
  }
  main.page = -1;
  spin.page = -1;
  detail.page = -1;

  // ---- cranes: pages that are new or changed since your last visit ------------
  planet.craneBuilders = new Map();
  for (const site of sites) {
    if (site.page.fresh && planet.craneBuilders.size < 40) planet.craneBuilders.set(site.page.id, buildCrane(site, planet));
  }

  // ---- construction sites: pages the wiki links to but hasn't written yet ------
  for (const ghost of planet.ghosts) {
    const host = sites.find((s) => ghost.refs.includes(s.page.id)) || sites[0];
    if (!host) break;
    const r = new RNG(`ghost:${ghost.key}`);
    for (let t = 0; t < 30; t++) {
      const dir = offsetDir(host.dir, r.range(0, 6.28), (host.rD + r.range(0.1, 1.5)) / G);
      if (!occ.free(dir, 0.38 / G)) continue;
      planet.sampleSurface(dir.x, dir.y, dir.z, probe);
      if (probe[2] < 0.96) continue;
      occ.add(dir, 0.32 / G);
      main.setMatrix(surfaceFrame(dir, G, r.range(0, 6.28)));
      constructionSite(main, { rng: r, frame: civ.palette.scaffold || 0xb9c0cc, accent: civ.palette.accent });
      planet.pickables.push({ kind: 'ghost', key: ghost.key, local: dir.clone().multiplyScalar(G + 0.3), r: 0.42 });
      planet.ghostLabels.push({ ghost, dir });
      break;
    }
  }

  // ---- roadside life: lamps, trees, buildings along every road --------------
  if (civ.roadside) {
    planet.roadPaths.forEach((path, ri) => {
      // Lamps and street trees are the first thing to go when a world is out of budget.
      if (detail.vertexCount > planet.vertexCap) return;
      const r = new RNG(`road:${ri}`);
      const pts = path.dirs;
      const w = civ.road.width;
      let acc = r.range(0, 0.4);
      for (let i = 1; i < pts.length - 1; i++) {
        acc += pts[i].distanceTo(pts[i - 1]) * G;
        if (acc < civ.road.lampEvery) continue;
        acc = 0;
        const fwd = new THREE.Vector3().subVectors(pts[i + 1], pts[i - 1]).normalize();
        const side = new THREE.Vector3().crossVectors(pts[i], fwd).normalize();
        for (const s of [-1, 1]) {
          if (!r.chance(civ.road.lampChance ?? 0.75)) continue;
          const offset = w * 0.5 + 0.05 + r.range(0, 0.1);
          const dir = pts[i].clone().addScaledVector(side, (s * offset) / G).normalize();
          if (!occ.free(dir, 0.035 / G)) continue;
          planet.sampleSurface(dir.x, dir.y, dir.z, probe);
          if (probe[2] < 0.96) continue;
          const angle = Math.atan2(side.dot(new THREE.Vector3(1, 0, 0)), side.dot(new THREE.Vector3(0, 0, 1)));
          detail.setMatrix(surfaceFrame(dir, G, angle));
          spin.setMatrix(surfaceFrame(dir, G, angle));
          civ.roadside(detail, { rng: r, side: s, elev: civ.road.elev || 0, spin });
        }
      }
    });
  }

  // ---- wilderness -------------------------------------------------------------
  const scatterRng = new RNG(`scatter:${planet.cluster.id}:${civ.id}`);
  const scatterCount = Math.round((civ.scatterDensity ?? 1) * 13 * R * R * budget);
  const d = new THREE.Vector3();
  const sample = [0, 0, 0];
  for (let i = 0; i < scatterCount && detail.vertexCount < planet.vertexCap; i++) {
    const z = scatterRng.range(-1, 1), a = scatterRng.range(0, 6.283), rr = Math.sqrt(1 - z * z);
    d.set(rr * Math.cos(a), z, rr * Math.sin(a));
    planet.sampleSurface(d.x, d.y, d.z, sample);
    const h = sample[1];
    if (sample[2] > 0.2) {
      // Greenery may reach the edge of town, but stays off streets and out of the blocks.
      if (!occ.free(d, 0.06 / G)) continue;
      if (sites.some((s) => d.distanceTo(s.dir) < s.rD / G)) continue;
    }
    if (h < (civ.scatterMinH ?? 0.015) && sample[2] < 0.9) continue;
    const m = surfaceFrame(d, R + sample[0], scatterRng.range(0, 6.283), tmpM);
    detail.setMatrix(m);
    spin.setMatrix(m);
    civ.scatter(detail, { rng: scatterRng, h, lat: Math.abs(d.y), x: d.x, y: d.y, z: d.z, spin, noise: planet.noise });
  }

  return { main, detail, spin };
}

function buildRoadGeometry(planet, pillarBuilder) {
  const { civ, G, occ, sites } = planet;
  const w = civ.road.width;
  const elev = civ.road.elev || 0;
  const lift = 0.014 + elev;
  const pos = [], nor = [], road = [], ends = [], idx = [];
  const addRibbon = (dirs, a, b, altitude) => {
    let along = 0;
    const base = pos.length / 3;
    const fwd = new THREE.Vector3(), side = new THREE.Vector3();
    for (let i = 0; i < dirs.length; i++) {
      const p = dirs[i];
      fwd.subVectors(dirs[Math.min(dirs.length - 1, i + 1)], dirs[Math.max(0, i - 1)]);
      side.crossVectors(p, fwd).normalize();
      if (i > 0) along += dirs[i].distanceTo(dirs[i - 1]) * G;
      for (const s of [-1, 1]) {
        const q = p.clone().addScaledVector(side, (s * w * 0.5) / G).normalize().multiplyScalar(altitude);
        pos.push(q.x, q.y, q.z);
        nor.push(p.x, p.y, p.z);
        road.push(s, along);
        ends.push(a, b);
      }
      if (i < dirs.length - 1) {
        const v = base + i * 2;
        idx.push(v, v + 2, v + 3, v, v + 3, v + 1);
      }
    }
    return along;
  };

  for (const link of planet.roads) {
    const sa = sites[link.a], sb = sites[link.b];
    const a = sa.page.id, b = sb.page.id;
    // Roads end where the plaza begins; the plaza itself sits over the junction.
    const dirs = link.dirs.filter((p) =>
      angularDistance(p, sa.dir) > (sa.plaza * 0.86) / G && angularDistance(p, sb.dir) > (sb.plaza * 0.86) / G);
    if (dirs.length < 3) continue;
    const length = addRibbon(dirs, a, b, G + lift);
    for (const p of dirs) occ.add(p, (w * 0.5 + 0.05) / G);
    planet.roadPaths.push({
      dirs, length, a, b, ab: link.ab, ba: link.ba,
      points: toPath(dirs, G + lift + 0.006),
    });
    // Elevated styles get pillars everywhere; any road gets piers where it crosses water.
    let acc = 0;
    for (let i = 1; i < dirs.length; i++) {
      acc += dirs[i].distanceTo(dirs[i - 1]) * G;
      const overWater = civ.terrain.height(planet.noise, dirs[i].x, dirs[i].y, dirs[i].z) < -0.04;
      if (acc < (overWater ? 0.55 : civ.road.pillarEvery || 0.8)) continue;
      if (!overWater && !(elev > 0.01 && civ.road.pillar)) continue;
      acc = 0;
      pillarBuilder.setMatrix(surfaceFrame(dirs[i], G, 0));
      if (civ.road.pillar) civ.road.pillar(pillarBuilder, { elev, overWater });
      else {
        pillarBuilder.paint(0x8c8a84, { rough: 0.85 });
        pillarBuilder.box(w * 0.82, GROUND_PIER, 0.05, { y: -GROUND_PIER + 0.01 });
      }
    }
  }

  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.BufferAttribute(new Float32Array(pos), 3));
  g.setAttribute('normal', new THREE.BufferAttribute(new Float32Array(nor), 3));
  g.setAttribute('aRoad', new THREE.BufferAttribute(new Float32Array(road), 2));
  g.setAttribute('aEnds', new THREE.BufferAttribute(new Float32Array(ends), 2));
  g.setIndex(idx);
  return g;
}

function toPath(dirs, radius) {
  const out = new Float32Array(dirs.length * 3);
  dirs.forEach((p, i) => {
    out[i * 3] = p.x * radius; out[i * 3 + 1] = p.y * radius; out[i * 3 + 2] = p.z * radius;
  });
  return out;
}

/** Elevated great-circle arcs for links that didn't get a road. */
export function buildArcs(planet) {
  const { G, sites } = planet;
  const pos = [], s = [], ends = [];
  for (const link of planet.airLinks) {
    const sa = sites[link.a], sb = sites[link.b];
    const om = angularDistance(sa.dir, sb.dir);
    const peak = 0.5 + om * G * 0.09;
    const steps = Math.max(14, Math.ceil(om * G * 2));
    const pts = [];
    let along = 0;
    let prev = null;
    for (let i = 0; i <= steps; i++) {
      const t = i / steps;
      const ww = Math.sin(om) || 1;
      const p = new THREE.Vector3()
        .addScaledVector(sa.dir, Math.sin((1 - t) * om) / ww)
        .addScaledVector(sb.dir, Math.sin(t * om) / ww)
        .normalize()
        .multiplyScalar(G + sa.h * (1 - t) * 0.55 + sb.h * t * 0.55 + Math.sin(t * Math.PI) * peak);
      if (prev) along += p.distanceTo(prev);
      pts.push(p);
      prev = p;
    }
    let acc = 0;
    for (let i = 0; i < steps; i++) {
      const d = pts[i + 1].distanceTo(pts[i]);
      pos.push(pts[i].x, pts[i].y, pts[i].z, pts[i + 1].x, pts[i + 1].y, pts[i + 1].z);
      s.push(acc, acc + d);
      acc += d;
      ends.push(sa.page.id, sb.page.id, sa.page.id, sb.page.id);
    }
    const flat = new Float32Array(pts.length * 3);
    pts.forEach((p, i) => { flat[i * 3] = p.x; flat[i * 3 + 1] = p.y; flat[i * 3 + 2] = p.z; });
    planet.airPaths.push({ points: flat, length: along, a: sa.page.id, b: sb.page.id, ab: link.ab, ba: link.ba });
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.BufferAttribute(new Float32Array(pos), 3));
  g.setAttribute('aS', new THREE.BufferAttribute(new Float32Array(s), 1));
  g.setAttribute('aEnds', new THREE.BufferAttribute(new Float32Array(ends), 2));
  return g;
}
