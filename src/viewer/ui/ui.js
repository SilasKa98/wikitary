// Everything drawn over the 3D scene: atlas, breadcrumbs, labels, tooltips, reader, search.
import * as THREE from 'three';
import { Ambience } from './audio.js';
import { CIVS } from '../civs/index.js';
import { STRINGS } from './strings.js';
import { el, face, hex, ICONS } from './dom.js';
import { Logbook } from './logbook.js';
import { PlanetMap } from './planetmap.js';
import { Journey, ShipLog } from './journey.js';
import { Signposts } from './signs.js';
import { Reader, lightReadSections } from './reader.js';
import { QUALITY_LEVELS } from '../engine/world.js';
import { storedQuality, storeQuality } from '../engine/quality.js';

const _v = new THREE.Vector3(), _w = new THREE.Vector3(), _c = new THREE.Vector3();
const _inv = new THREE.Matrix4();

export function createUI(root, labelsRoot) {
  return new UI(root, labelsRoot);
}

class UI {
  constructor(root, labelsRoot) {
    this.root = root;
    this.labelsRoot = labelsRoot;
    this.t = STRINGS.en;
    this.audio = new Ambience();
    this.labelPool = [];
    this.loader = el('div', { class: 'loader' },
      el('div', { class: 'loader-inner' },
        el('div', { class: 'loader-orbit' }, el('i'), el('i'), el('b'), el('em')),
        (this.loaderTitle = el('div', { class: 'loader-title', text: 'Wikitary' })),
        (this.loaderStep = el('div', { class: 'loader-step' })),
        el('div', { class: 'loader-bar' }, (this.loaderBar = el('i'))),
      ));
    root.append(this.loader);
  }

  fatal(message) {
    this.loader.classList.remove('done');
    this.loader.querySelector('.loader-inner').replaceChildren(el('div', { class: 'fatal', text: message }));
  }

  setGraph(graph) {
    this.graph = graph;
    this.t = STRINGS[graph.meta.lang] || STRINGS.en;
    this.lang = graph.meta.lang === 'de' ? 'de' : 'en';
    document.documentElement.lang = this.lang;
    document.title = `${graph.meta.title} · Wikitary`;
    this.loaderTitle.textContent = this.t.loaderTitle;

    // Read before the world is built: pages new since last time get cranes.
    let storage = null;
    try { storage = window.localStorage; } catch { /* blocked: the log lasts as long as the page */ }
    this.logbook = new Logbook(graph, storage);
  }

  progress(p, label) {
    this.loaderBar.style.width = `${Math.round(p * 100)}%`;
    const { t } = this;
    if (label && typeof label === 'object') {
      const name = label.planet.civ.name[this.lang];
      const verb = { plan: t.stepPlan, terrain: t.stepTerrain, city: t.stepCity, sky: t.stepAtmo }[label.step];
      this.loaderStep.textContent = `${verb} ${name}: ${label.planet.cluster.name}`;
    } else {
      this.loaderStep.textContent = { noise: t.stepNoise, sky: t.stepSky, compile: t.stepCompile }[label] || '';
    }
  }

  notifyChanged() {
    this.toast?.classList.add('show');
  }

  /** A passing message, with an optional thing to do about it. */
  announce(text, action = null, onAction = null) {
    this.notice.replaceChildren(
      el('span', { text }),
      action ? el('button', { text: action, onclick: () => { this.notice.classList.remove('show'); onAction(); } }) : '');
    this.notice.classList.add('show');
    clearTimeout(this.noticeTimer);
    this.noticeTimer = setTimeout(() => this.notice.classList.remove('show'), action ? 20000 : 9000);
  }

  worldName(planet) { return planet.civ.name[this.lang]; }
  countPages(n) { return `${n} ${n === 1 ? this.t.page : this.t.pages}`; }
  civOf(page) { return page.cluster >= 0 ? CIVS[this.graph.clusters[page.cluster].civ] : null; }
  accentOf(page) {
    const civ = this.civOf(page);
    if (civ) return hex(civ.palette.accent);
    return page.id === this.graph.star ? '#ffc477' : '#a8dcff';
  }

  // ---- wiring ------------------------------------------------------------------------
  attach(world) {
    this.world = world;
    this.buildChrome();
    this.buildSearch();
    this.buildHelp();
    this.map = new PlanetMap(this);
    this.journey = new Journey(this);
    this.shiplog = new ShipLog(this);
    this.signs = new Signposts(this, this.signsRoot);
    lightReadSections(this);
    world.capturePortraits((planet, url) => document.documentElement.style.setProperty(`--face-${planet.index}`, `url("${url}")`));
    this.bindKeys();
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) world.rig.reducedMotion = true;

    world.addEventListener('frame', () => this.onFrame());
    world.addEventListener('hover', (e) => this.onHover(e.detail));
    world.addEventListener('pick', (e) => this.onPick(e.detail));
    world.addEventListener('focus', (e) => this.setFocus(e.detail));
    world.addEventListener('ride', (e) => this.onRide(e.detail));
    world.rig.onModeChange = (mode) => {
      document.body.classList.toggle('landed', mode === 'body');
      this.updateCrumbs();
    };
    this.setFocus(null);

    setTimeout(() => {
      this.loader.classList.add('done');
      setTimeout(() => this.loader.remove(), 1200);
    }, 200);

    addEventListener('popstate', () => { this.map.close(); this.applyHash(false); });
    if (!this.applyHash(false)) {
      this.titleCard.classList.add('show');
      setTimeout(() => this.titleCard.classList.remove('show'), 7500);
    }
    if (this.logbook.fresh.size) {
      this.freshToast.classList.add('show');
      setTimeout(() => this.freshToast.classList.remove('show'), 14000);
    }
    const waiting = this.logbook.savedTrip();
    if (waiting) {
      this.announce(this.t.resumeToast(waiting.title, waiting.at + 1, waiting.stops.length), this.t.resume, () => this.journey.start(waiting));
    }
  }

  buildChrome() {
    const { graph, t } = this;
    const cl = graph.clusters.length;
    const brand = el('div', { class: 'brand' },
      el('span', { html: ICONS.logo }),
      el('div', {},
        el('div', { class: 'brand-title', text: graph.meta.title }),
        el('div', { class: 'brand-sub', text: `${this.countPages(graph.pages.length)} · ${graph.edges.length} ${t.links} · ${cl} ${t.worlds}` }),
      ));
    this.crumbs = el('nav', { class: 'crumbs', 'aria-label': 'Location', hidden: true });

    const tool = (icon, label, onclick, extra = {}) => el('button', { class: 'tool', html: ICONS[icon], title: label, 'aria-label': label, onclick, ...extra });
    this.dayTool = tool('moon', t.dayNight, () => this.toggleDay(), { hidden: true });
    this.soundTool = tool('sound', t.sound, () => this.toggleSound(), { 'aria-pressed': 'false' });
    this.tools = el('div', { class: 'tools' },
      tool('map', t.mapTool, () => this.map.toggle(), { hidden: !this.world.planets.length }),
      tool('compass', t.logTool, () => this.shiplog.toggle()),
      this.dayTool,
      this.soundTool,
      tool('search', t.searchTool, () => this.openSearch()),
      tool('help', t.help, () => this.helpOverlay.classList.toggle('open')),
    );
    const top = el('header', { class: 'top' }, brand, this.crumbs, this.tools);

    this.atlas = el('nav', { class: 'atlas', 'aria-label': t.worlds });
    this.buildAtlas();

    this.worldCard = el('aside', { class: 'world-card', hidden: true });
    this.readout = el('div', { class: 'readout' });
    this.tip = el('div', { class: 'tip', role: 'status' });
    this.titleCard = el('div', { class: 'title-card' },
      el('h1', { text: graph.meta.title }),
      el('p', { text: t.hintTitle }));

    this.pageView = new Reader(this);
    this.reader = this.pageView.node;

    this.toast = el('div', { class: 'toast', role: 'status' },
      el('span', { text: t.changed }),
      el('button', { text: t.reload, onclick: () => location.reload() }));

    this.freshToast = el('div', { class: 'toast fresh', role: 'status' },
      el('span', { text: t.freshToast(this.logbook.fresh.size) }),
      el('button', { text: t.freshShow, onclick: () => { this.freshToast.classList.remove('show'); this.shiplog.open('log'); } }));

    this.notice = el('div', { class: 'toast notice', role: 'status' });
    this.rideBar = el('div', { class: 'ride-bar', role: 'status' });
    this.signsRoot = el('div', { class: 'signs' });

    this.root.append(top, this.atlas, this.worldCard, this.readout, this.titleCard, this.signsRoot, this.rideBar, this.reader, this.pageView.peek, this.pageView.tableFull, this.tip, this.toast, this.freshToast, this.notice);
  }

  buildAtlas() {
    const { graph, world, t } = this;
    const items = [];
    if (graph.star != null) {
      items.push(el('button', { class: 'atlas-item', onclick: () => this.openPage(graph.star) },
        el('span', { class: 'orb', style: '--c:#ffc477' }),
        el('span', { class: 'atlas-text' },
          el('span', { class: 'atlas-name', text: t.star }),
          el('span', { class: 'atlas-sub', text: t.starSub }))));
    }
    if (items.length) items.push(el('div', { class: 'atlas-sep' }));
    this.atlasByPlanet = new Map();
    for (const planet of world.planets) {
      const name = planet.cluster.name;
      const btn = el('button', {
        class: 'atlas-item',
        onclick: () => { this.closeReader(false); world.enterPlanet(planet); this.pushHash(`#/world/${planet.index}`); },
      },
      face(planet, 30),
      el('span', { class: 'atlas-text' },
        el('span', { class: 'atlas-name', text: name }),
        (planet.atlasSub = el('span', { class: 'atlas-sub' }))));
      this.atlasByPlanet.set(planet, btn);
      items.push(btn);
    }
    if (graph.comet != null || graph.orphans.length) items.push(el('div', { class: 'atlas-sep' }));
    if (graph.comet != null) {
      items.push(el('button', { class: 'atlas-item', onclick: () => this.openPage(graph.comet) },
        el('span', { class: 'orb', style: '--c:#a8dcff' }),
        el('span', { class: 'atlas-text' },
          el('span', { class: 'atlas-name', text: t.comet }),
          el('span', { class: 'atlas-sub', text: t.cometSub }))));
    }
    if (graph.orphans.length) {
      items.push(el('button', { class: 'atlas-item', onclick: () => this.openPage(graph.orphans[0]) },
        el('span', { class: 'orb', style: '--c:#b09a80' }),
        el('span', { class: 'atlas-text' },
          el('span', { class: 'atlas-name', text: t.asteroids }),
          el('span', { class: 'atlas-sub', text: this.countPages(graph.orphans.length) }))));
    }
    this.atlas.replaceChildren(...items);
    this.refreshProgress();
  }

  /** Everything that shows how much of the wiki you have explored. */
  refreshProgress() {
    const { logbook, t } = this;
    for (const planet of this.world.planets) {
      const { done, total } = logbook.progress(planet.cluster.pageIds);
      const fresh = planet.cluster.pageIds.filter((id) => logbook.isFresh(id)).length;
      if (planet.atlasSub) {
        planet.atlasSub.textContent = `${this.worldName(planet)} · ${done}/${total}${fresh ? ` · ${fresh} ${t.badgeNew}` : ''}`;
      }
    }
    if (this.focused) this.renderWorldCard(this.focused);
    if (this.shiplog?.isOpen) this.shiplog.render();
  }

  // ---- focus and breadcrumbs ---------------------------------------------------------
  setFocus(planet) {
    this.focused = planet;
    const { t } = this;
    for (const [p, btn] of this.atlasByPlanet) btn.classList.toggle('active', p === planet);
    this.dayTool.hidden = !planet;
    if (planet) {
      document.documentElement.style.setProperty('--accent', hex(planet.civ.palette.accent));
      this.renderWorldCard(planet);
      this.worldCard.hidden = false;
      this.audio.setWorld(planet.civ.id);
    } else {
      this.worldCard.hidden = true;
      document.documentElement.style.setProperty('--accent', '#7fc4ff');
      this.audio.setWorld('system');
    }
    this.titleCard?.classList.remove('show');
    this.updateCrumbs();
  }

  renderWorldCard(planet) {
    const { t, logbook } = this;
    const civ = planet.civ;
    const pageSet = new Set(planet.cluster.pageIds);
    const internal = this.graph.edges.filter((e) => pageSet.has(e.s) && pageSet.has(e.t)).length;
    const external = this.graph.edges.filter((e) => pageSet.has(e.s) !== pageSet.has(e.t)).length;
    const { done, total } = logbook.progress(planet.cluster.pageIds);
    this.worldCard.replaceChildren(
      el('div', { class: 'card-head' },
        face(planet, 54),
        el('div', {},
          el('div', { class: 'eyebrow', text: `${civ.name[this.lang]} · ${civ.people[this.lang]}` }),
          el('h2', { text: planet.cluster.name }))),
      el('p', { text: civ.blurb[this.lang] }),
      el('div', { class: 'facts' },
        el('div', {}, el('b', { text: String(planet.cluster.pageIds.length) }), planet.cluster.pageIds.length === 1 ? t.page : t.pages),
        el('div', {}, el('b', { text: String(internal) }), t.links),
        el('div', {}, el('b', { text: String(external) }), this.lang === 'de' ? 'interplanetar' : 'interplanetary'),
      ),
      el('div', { class: 'people', style: 'margin-top:10px', text: `${t.edges} ${civ.bridge[this.lang]}` }),
      el('div', { class: 'card-explore' },
        el('span', { class: 'card-meter', style: `--p:${total ? (done / total) * 100 : 0}%` }),
        el('span', { class: 'card-explored', text: t.explored(done, total) }),
        el('button', { class: 'card-map', html: `${ICONS.map}<span>${t.mapButton}</span>`, title: t.mapTool, onclick: () => this.map.open(planet) })),
    );
  }

  updateCrumbs() {
    const { t, focused, currentPage } = this;
    const parts = [];
    const showAny = focused || currentPage != null;
    if (showAny) {
      parts.push(el('button', { text: t.system, title: t.back, onclick: () => { this.closeReader(false); this.world.goToSystem(); this.pushHash('#/'); } }));
    }
    if (focused) {
      parts.push(el('span', { class: 'sep', text: '/' }));
      if (currentPage != null) {
        parts.push(el('button', { text: focused.cluster.name, onclick: () => this.closeReader() }));
      } else {
        parts.push(el('span', { class: 'here', text: focused.cluster.name }));
      }
    }
    if (currentPage != null) {
      parts.push(el('span', { class: 'sep', text: '/' }));
      parts.push(el('span', { class: 'here', text: this.graph.pages[currentPage].title }));
    }
    this.crumbs.hidden = !showAny;
    this.crumbs.replaceChildren(...parts);
  }

  // ---- hover and picking ------------------------------------------------------------------
  onHover(hit) {
    this.hoverHit = hit;
    if (hit?.kind !== 'section') this.pageView.hintFromCity(null);
    if (!hit || hit.kind === 'self') { this.tip.classList.remove('show'); return; }
    const { t, graph } = this;
    let kind = '', title = '', sub = '', hint = '';
    if (hit.kind === 'planet') {
      const p = hit.planet;
      kind = `${this.worldName(p)} · ${p.civ.people[this.lang]}`;
      title = p.cluster.name;
      sub = `${this.countPages(p.cluster.pageIds.length)} · ${p.cluster.keywords.slice(0, 4).join(', ')}`;
      hint = t.clickWorld;
    } else if (hit.kind === 'sun') {
      kind = t.star;
      title = graph.star != null ? graph.pages[graph.star].title : graph.meta.title;
      sub = t.starSub;
      hint = t.clickPage;
    } else if (hit.kind === 'comet') {
      kind = t.comet;
      title = graph.pages[hit.pageId].title;
      sub = graph.pages[hit.pageId].summary;
      hint = t.clickPage;
    } else if (hit.kind === 'orphan') {
      kind = t.asteroid;
      title = graph.pages[hit.pageId].title;
      sub = t.asteroidSub;
      hint = t.clickPage;
    } else if (hit.kind === 'vehicle') {
      kind = t.vehicle;
      title = t.vehicleTo(graph.pages[hit.item.from].title, graph.pages[hit.item.to].title);
      hint = t.rideHint;
    } else if (hit.kind === 'page') {
      const p = graph.pages[hit.id];
      kind = `${t.tierNames[p.tier]}${this.logbook.isVisited(p.id) ? ` · ${t.visited}` : ''}${this.logbook.isFresh(p.id) ? ` · ${this.logbook.added.has(p.id) ? t.badgeNew : t.badgeChanged}` : ''}`;
      title = p.title;
      sub = p.summary;
      hint = t.clickPage;
    } else if (hit.kind === 'section') {
      kind = `${t.section} · ${graph.pages[hit.id].title}`;
      title = hit.title;
      hint = t.clickSection;
      if (hit.id === this.currentPage) this.pageView.hintFromCity(hit.slug);
    } else if (hit.kind === 'ghost') {
      const g = graph.ghosts.find((x) => x.key === hit.key);
      kind = t.site;
      title = g?.title || '';
      sub = t.siteTitle;
      hint = t.clickPage;
    }
    this.tip.replaceChildren(
      el('div', { class: 'k', text: kind }),
      el('div', { class: 't', text: title }),
      sub ? el('div', { class: 's', text: sub }) : '',
      el('div', { class: 'h', text: hint }),
    );
    this.tip.classList.add('show');
  }

  onPick(hit) {
    if (!hit) return;
    const { world, graph } = this;
    switch (hit.kind) {
      case 'planet':
        this.closeReader(false);
        world.enterPlanet(hit.planet);
        this.pushHash(`#/world/${hit.planet.index}`);
        break;
      case 'sun':
        if (graph.star != null) this.openPage(graph.star);
        break;
      case 'comet':
      case 'orphan':
        this.openPage(hit.pageId);
        break;
      case 'page':
        this.openPage(hit.id);
        break;
      case 'section':
        this.openPage(hit.id, { slug: hit.slug });
        break;
      case 'ghost':
        this.openGhost(hit.key);
        break;
      case 'vehicle':
        this.closeReader(false);
        world.boardVehicle(hit.item, hit.planet);
        break;
      default:
    }
  }

  // ---- reader --------------------------------------------------------------------------
  openPage(id, { slug = null, fly = true, push = true, find = null, restore = null } = {}) {
    const page = this.graph.pages[id];
    if (!page) return;
    const { world, pageView } = this;

    // Already here: whatever was asked for is somewhere on this page.
    if (this.currentPage === id && pageView.isOpen) {
      if (slug) pageView.goTo(slug, { fly });
      else if (find) pageView.findText(find);
      else if (fly) world.flyToPage(id);
      return;
    }

    // The browser's back button is the same journey as the back button in the reader.
    const place = restore ?? (push ? null : pageView.takeBack(id));
    if (!place && push && this.currentPage != null) pageView.remember();

    this.currentPage = id;
    this.currentGhost = null;
    world.endRide(false);
    world.setSelected(id);
    this.signs.setPage(id);
    if (fly) world.flyToPage(id, { slug: slug ?? place?.slug ?? null });
    const wasFresh = this.logbook.isFresh(id);
    const wasNew = this.logbook.added.has(id);
    const cleared = this.logbook.visit(id);
    if (cleared && page.cluster >= 0) world.planets[page.cluster]?.clearFresh(id);
    this.refreshProgress();
    this.journey.noticePage(id);
    if (push) this.pushHash(`#/page/${encodeURIComponent(page.path)}${slug ? `/${encodeURIComponent(slug)}` : ''}`);

    document.documentElement.style.setProperty('--accent', this.accentOf(page));
    pageView.show(page, { slug, find, restore: place, wasFresh, wasNew });
    this.updateCrumbs();
  }

  openGhost(key) {
    const { graph, world, pageView } = this;
    const g = graph.ghosts.find((x) => x.key === key);
    if (!g) return;
    if (this.currentPage != null) pageView.remember();
    this.currentPage = null;
    this.currentGhost = key;
    world.endRide(false);
    world.setSelected(null);
    this.signs.setPage(null);
    pageView.showGhost(g);
  }

  closeReader(updateHash = true) {
    if (!this.pageView.isOpen) return;
    this.pageView.close();
    this.currentPage = null;
    this.currentGhost = null;
    this.world.setSelected(null);
    this.signs.setPage(null);
    if (this.focused) document.documentElement.style.setProperty('--accent', hex(this.focused.civ.palette.accent));
    if (updateHash) this.pushHash(this.focused ? `#/world/${this.focused.index}` : '#/');
    this.updateCrumbs();
  }

  // ---- deep links ---------------------------------------------------------------------
  pushHash(hash) {
    if (location.hash === hash || (hash === '#/' && !location.hash)) return;
    history.pushState(null, '', hash);
  }

  /** A place within the page you are on isn't worth a step in the browser's history. */
  replaceHash(hash) {
    if (location.hash !== hash) history.replaceState(null, '', hash);
  }

  applyHash() {
    const parts = location.hash.replace(/^#\/?/, '').split('/');
    if (parts[0] === 'page' && parts[1]) {
      const path = decodeURIComponent(parts[1]);
      const page = this.graph.pages.find((p) => p.path === path);
      if (page) {
        this.openPage(page.id, { slug: parts[2] ? decodeURIComponent(parts[2]) : null, push: false });
        return true;
      }
    }
    if (parts[0] === 'world' && this.world.planets[Number(parts[1])]) {
      this.closeReader(false);
      this.world.enterPlanet(this.world.planets[Number(parts[1])]);
      return true;
    }
    if (this.world.rig.mode === 'body' || this.reader.classList.contains('open')) {
      this.closeReader(false);
      if (this.world.rig.mode === 'body') this.world.goToSystem();
    }
    return false;
  }

  // ---- search ----------------------------------------------------------------------------
  buildSearch() {
    const { graph, t } = this;
    this.searchIndex = [];
    for (const p of graph.pages) {
      this.searchIndex.push({ kind: 'page', id: p.id, title: p.title, sub: p.summary || p.path, hay: `${p.title} ${p.path} ${p.tags.join(' ')}`.toLowerCase(), lower: p.title.toLowerCase() });
      for (const s of p.sections) {
        if (s.level > 3) continue;
        this.searchIndex.push({ kind: 'section', id: p.id, slug: s.slug, title: s.title, sub: p.title, hay: s.title.toLowerCase(), lower: s.title.toLowerCase() });
      }
    }
    this.searchInput = el('input', { class: 'search-input', placeholder: t.search, 'aria-label': t.search, type: 'search', autocomplete: 'off', spellcheck: 'false' });
    this.searchResults = el('div', { class: 'results', role: 'listbox' });
    const panel = el('div', { class: 'panel', role: 'dialog', 'aria-modal': 'true', 'aria-label': t.searchTool }, this.searchInput, this.searchResults);
    this.searchOverlay = el('div', { class: 'overlay', onclick: (e) => { if (e.target === this.searchOverlay) this.closeSearch(); } }, panel);
    this.root.append(this.searchOverlay);
    this.searchInput.addEventListener('input', () => this.runSearch());
    this.searchInput.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
        e.preventDefault();
        const n = this.searchHits?.length || 0;
        if (n) this.setSearchSel((this.searchSel + (e.key === 'ArrowDown' ? 1 : n - 1)) % n);
      } else if (e.key === 'Enter') {
        e.preventDefault();
        this.chooseResult(this.searchSel);
      } else if (e.key === 'Escape') {
        e.preventDefault();
        e.stopPropagation();
        this.closeSearch();
      }
    });
  }

  openSearch() {
    this.searchOverlay.classList.add('open');
    this.searchInput.value = '';
    this.runSearch();
    setTimeout(() => this.searchInput.focus(), 20);
  }

  closeSearch() {
    this.searchOverlay.classList.remove('open');
    this.searchInput.blur();
  }

  runSearch() {
    const { graph, t } = this;
    const q = this.searchInput.value.trim().toLowerCase();
    let hits;
    if (!q) {
      hits = [...graph.pages].sort((a, b) => b.rank - a.rank).slice(0, 8).map((p) => ({ kind: 'page', id: p.id, title: p.title, sub: p.summary || p.path }));
    } else {
      const tokens = q.split(/\s+/);
      const scored = [];
      for (const item of this.searchIndex) {
        if (!tokens.every((tok) => item.hay.includes(tok))) continue;
        let score = item.kind === 'page' ? 20 : 0;
        if (item.lower === q) score += 100;
        else if (item.lower.startsWith(q)) score += 70;
        else if (new RegExp(`(^|[\\s\\-_/(])${escapeRe(tokens[0])}`).test(item.lower)) score += 45;
        else if (item.lower.includes(q)) score += 30;
        scored.push({ ...item, score });
      }
      // Fall back to the full text when titles and headings don't have it.
      if (scored.length < 12) {
        for (const p of graph.pages) {
          if (scored.some((s) => s.kind === 'page' && s.id === p.id)) continue;
          const lower = p.md.toLowerCase();
          if (!tokens.every((tok) => lower.includes(tok))) continue;
          const at = lower.indexOf(tokens[0]);
          const snippet = p.md.slice(Math.max(0, at - 40), at + 80).replace(/\s+/g, ' ').replace(/[[\]*#|`]/g, '').trim();
          scored.push({ kind: 'text', id: p.id, title: p.title, sub: `…${snippet}…`, score: 4, find: tokens[0] });
          if (scored.length > 30) break;
        }
      }
      hits = scored.sort((a, b) => b.score - a.score).slice(0, 30);
    }
    this.searchHits = hits;
    this.searchSel = 0;
    if (!hits.length) {
      this.searchResults.replaceChildren(el('div', { class: 'empty', text: t.noResults }));
      return;
    }
    this.searchResults.replaceChildren(...hits.map((hit, i) => {
      const page = graph.pages[hit.id];
      const civ = this.civOf(page);
      return el('button', { class: `result${i === 0 ? ' sel' : ''}`, role: 'option', onclick: () => this.chooseResult(i), onmousemove: () => { if (this.searchSel !== i) this.setSearchSel(i); } },
        el('span', { class: 'orb', style: `--c:${this.accentOf(page)}` }),
        el('span', { class: 'result-text' },
          el('div', { class: 'result-title', text: hit.title }),
          el('div', { class: 'result-sub', text: hit.sub })),
        el('span', { class: 'result-kind', text: civ ? civ.name[this.lang] : '' }));
    }));
  }

  setSearchSel(i) {
    this.searchSel = i;
    [...this.searchResults.children].forEach((c, k) => c.classList.toggle('sel', k === i));
    this.searchResults.children[i]?.scrollIntoView({ block: 'nearest' });
  }

  chooseResult(i) {
    const hit = this.searchHits?.[i];
    if (!hit) return;
    this.closeSearch();
    this.openPage(hit.id, { slug: hit.slug || null, find: hit.find || null });
  }

  // ---- help -------------------------------------------------------------------------------
  buildHelp() {
    const { t } = this;
    const overlay = el('div', { class: 'overlay', onclick: (e) => { if (e.target === overlay) overlay.classList.remove('open'); } },
      el('div', { class: 'panel', role: 'dialog', 'aria-modal': 'true', 'aria-label': t.legendTitle },
        el('div', { class: 'help' },
          el('h2', { text: t.legendTitle }),
          el('dl', { class: 'legend' }, t.legend.flatMap(([a, b]) => [el('dt', { text: a }), el('dd', { text: b })])),
          el('h3', { text: t.keysTitle }),
          el('div', { class: 'keys' }, t.keys.flatMap(([a, b]) => [el('kbd', { text: a }), el('span', { text: b })])),
          el('h3', { text: t.graphicsTitle }),
          el('div', { class: 'quality', role: 'group', 'aria-label': t.graphicsTitle }, ['auto', ...QUALITY_LEVELS.slice().reverse()].map((level) =>
            el('button', {
              type: 'button',
              'aria-pressed': String(level === storedQuality()),
              text: t.graphicsLevels[level],
              onclick: () => {
                storeQuality(level);
                // A level in the address would outrank the choice just made.
                const url = new URL(location.href);
                url.searchParams.delete('q');
                location.replace(url);
              },
            }))),
          el('p', { class: 'quality-note', text: t.graphicsNote(t.graphicsLevels[this.world.qualityName]) }),
        )));
    this.helpOverlay = overlay;
    this.root.append(overlay);
  }

  // ---- riding along -------------------------------------------------------------------
  rideTo(from, to) {
    this.closeReader(false);
    if (!this.world.rideLink(from, to)) this.openPage(to);
  }

  onRide({ state, arrived, ride }) {
    if (state === 'start') {
      const { t, graph } = this;
      const page = graph.pages[ride.to];
      const kind = ride.air ? 'air' : 'road';
      this.rideMeter = el('i');
      this.rideBar.replaceChildren(
        el('span', { class: 'ride-icon', html: ICONS[kind] }),
        el('span', { class: 'ride-text' },
          el('span', { class: 'ride-where', text: `${t.riding} ${page.title}` }),
          el('span', { class: 'ride-how', text: ride.planet.civ.transit?.[kind]?.[this.lang] ?? '' })),
        el('button', { class: 'ride-off', text: t.getOff, onclick: () => this.world.endRide(false) }),
        el('span', { class: 'ride-meter' }, this.rideMeter),
      );
      this.rideBar.classList.add('show');
      this.tip.classList.remove('show');
      return;
    }
    this.rideBar.classList.remove('show');
    if (arrived) this.openPage(ride.to);
  }

  updateRideBar() {
    const { ride } = this.world;
    if (ride && this.rideMeter) this.rideMeter.style.width = `${(ride.item.s / ride.item.path.length) * 100}%`;
  }

  toggleDay() {
    const phase = this.world.currentPhase === 'night' ? 'day' : 'night';
    this.world.setDayPhase(phase);
  }

  toggleSound() {
    const on = this.audio.toggle();
    this.soundTool.setAttribute('aria-pressed', on ? 'true' : 'false');
  }

  bindKeys() {
    addEventListener('keydown', (e) => {
      const typing = /^(INPUT|TEXTAREA|SELECT)$/.test(document.activeElement?.tagName || '');
      if ((e.key === 'k' && (e.ctrlKey || e.metaKey)) || (e.key === '/' && !typing)) {
        e.preventDefault();
        this.openSearch();
        return;
      }
      if (typing) return;
      if (e.key === 'Escape') {
        if (this.helpOverlay.classList.contains('open')) this.helpOverlay.classList.remove('open');
        else if (this.pageView.tableOpen) this.pageView.closeTable();
        else if (this.shiplog.isOpen) this.shiplog.close();
        else if (this.map.isOpen && this.map.planner.active) this.map.planner.exit();
        else if (this.map.isOpen) this.map.close();
        else if (this.world.ride) this.world.endRide(false);
        else if (this.pageView.wide) this.pageView.setWide(false);
        else if (this.reader.classList.contains('open')) this.closeReader();
        else if (this.world.rig.mode === 'body') {
          this.world.goToSystem();
          this.pushHash('#/');
        }
      } else if (e.key === 'k' || e.key === 'K') {
        if (!this.shiplog.isOpen) this.map.toggle();
      } else if (e.key === 'l' || e.key === 'L') {
        this.shiplog.toggle();
      } else if (e.key === '.' && this.journey.active) {
        this.journey.next();
      } else if (e.key === ',' && this.journey.active) {
        this.journey.prev();
      } else if ((e.key === 'e' || e.key === 'E') && this.map.isOpen && !this.shiplog.isOpen) {
        this.map.planner.toggle(this.map.selected);
      } else if ((e.key === 't' || e.key === 'T') && this.pageView.page && !this.map.isOpen && !this.shiplog.isOpen) {
        this.pageView.setWide(!this.pageView.wide);
      } else if (e.key === 'n' || e.key === 'N') this.toggleDay();
      else if (e.key === 'm' || e.key === 'M') this.toggleSound();
      else if (e.key === '?') this.helpOverlay.classList.toggle('open');
    });
  }

  // ---- per-frame work --------------------------------------------------------------------
  onFrame() {
    const { world, t } = this;
    const { rig } = world;
    if (this.map.isOpen) {
      const now = performance.now();
      this.map.frame(Math.min((now - (this.mapClock || now)) / 1000, 0.1));
      this.mapClock = now;
      return;
    }
    this.mapClock = 0;
    this.updateLabels();
    this.signs.update();
    this.updateRideBar();

    if (this.tip.classList.contains('show')) {
      const w = this.tip.offsetWidth, h = this.tip.offsetHeight;
      const x = Math.min(world.pointerPx.x + 16, innerWidth - w - 10);
      const y = Math.min(world.pointerPx.y + 16, innerHeight - h - 10);
      this.tip.style.transform = `translate(${x}px, ${y}px)`;
    }

    // Altitude and local time, once in a while.
    this.readoutTimer = (this.readoutTimer || 0) + 1;
    if (this.readoutTimer % 8 === 0) {
      const b = rig.body;
      if (rig.mode === 'body' && b?.isPlanet && !rig.flight) {
        const alt = Math.max(0, (b.altitude ?? 0)) * 0.08;
        const sun = b.uniforms.uSunLocal.value;
        const east = _v.set(0, 1, 0).cross(rig.dir).normalize();
        const hour = ((Math.atan2(sun.dot(east), sun.dot(rig.dir)) / (Math.PI * 2)) * 24 + 12 + 24) % 24;
        const hh = String(Math.floor(hour)).padStart(2, '0'), mm = String(Math.floor((hour % 1) * 60)).padStart(2, '0');
        this.readout.replaceChildren(`${t.altitude} `, el('b', { text: `${alt < 10 ? alt.toFixed(2) : alt.toFixed(0)} km` }), `  ·  `, el('b', { text: `${hh}:${mm}` }), ` ${t.local}`);
        this.dayTool.innerHTML = world.currentPhase === 'night' ? ICONS.sun : ICONS.moon;
      } else {
        this.readout.textContent = '';
      }
      if (this.audio.on) {
        const near = world.nearPlanet;
        const rel = near ? near.altitude / near.R : 9;
        this.audio.setAtmosphere(Math.max(0, Math.min(1, 1 - rel)));
      }
    }
  }

  updateLabels() {
    const { world, graph } = this;
    const { rig, camera } = world;
    const W = innerWidth, H = innerHeight;
    const wanted = [];
    const toScreen = (pos) => {
      _w.copy(pos).project(camera);
      if (_w.z > 1 || _w.z < -1) return null;
      return { x: (_w.x * 0.5 + 0.5) * W, y: (-_w.y * 0.5 + 0.5) * H };
    };

    const onPlanet = rig.mode === 'body' && rig.body?.isPlanet;
    const flying = rig.busy;

    if (!flying) {
      // Other worlds, and everything else in the sky.
      for (const p of world.planets) {
        if (onPlanet && p === rig.body) continue;
        _v.copy(p.node.position).project(camera);
        if (_v.z > 1) continue;
        const dist = camera.position.distanceTo(p.node.position);
        const px = ((p.R / dist) / Math.tan((camera.fov * Math.PI) / 360)) * (H / 2);
        _c.copy(camera.up).multiplyScalar(p.R * 1.32);
        const s = toScreen(_v.copy(p.node.position).add(_c));
        if (s) {
          wanted.push({
            key: `w${p.index}`, cls: 'world', name: p.cluster.name, sub: `${this.worldName(p)}`, ...s,
            priority: 1000 + px, stem: false, opacity: onPlanet ? 0.8 : 1,
          });
        }
      }
      if (!onPlanet && rig.mode === 'system') {
        const s = toScreen(_c.copy(camera.up).multiplyScalar(world.sunRadius * 1.5));
        if (s && graph.star != null) wanted.push({ key: 'sun', cls: 'world', name: graph.pages[graph.star].title, sub: this.t.star, ...s, priority: 900 });
        if (world.comet) {
          const c = toScreen(_c.copy(world.comet.group.position).addScaledVector(camera.up, 6));
          if (c) wanted.push({ key: 'comet', cls: '', name: graph.pages[graph.comet].title, sub: this.t.comet, ...c, priority: 500 });
        }
      }

      if (onPlanet) {
        const p = rig.body;
        _inv.copy(p.spin.matrixWorld).invert();
        const camLocal = _c.copy(camera.position).applyMatrix4(_inv);
        const d = rig.d;
        const limit = d < p.R * 0.5 ? 14 : d < p.R * 1.5 ? 10 : 7;
        const ranked = [];
        for (const site of p.sites) {
          const top = site.dir.clone().multiplyScalar(p.G + site.h * 1.02);
          const toCam = _v.copy(camLocal).sub(top);
          const dist = toCam.length();
          const facing = top.dot(toCam) / (top.length() * dist);
          if (facing < -0.04) continue;
          const kin = this.currentPage != null && world.neighbours.get(this.currentPage)?.has(site.page.id);
          ranked.push({ site, dist, score: site.importance * 2.4 - dist / (p.R * 1.2) + (site.page.id === this.currentPage ? 9 : kin ? 4 : 0) });
        }
        ranked.sort((a, b) => b.score - a.score);
        for (const { site, score } of ranked.slice(0, limit)) {
          const world3 = p.worldPositionOf(site.dir.clone().multiplyScalar(p.G + site.h * 1.03));
          const s = toScreen(world3);
          if (!s) continue;
          const selected = site.page.id === this.currentPage;
          const marks = `${this.logbook.isFresh(site.page.id) ? 'fresh ' : ''}${this.logbook.isVisited(site.page.id) ? 'read ' : ''}`;
          wanted.push({
            key: `p${site.page.id}`, cls: `tier${site.tier} ${marks}${selected ? 'selected' : ''}`, name: site.page.title, ...s,
            priority: score + (selected ? 100 : 0), stem: true,
          });
        }
        // Up close, the buildings around you announce which heading they stand for.
        // From further up, only the one you are reading does.
        const reading = this.currentPage != null ? this.pageView.placeOf(this.pageView.active) : null;
        if (d < 4.5 || reading) {
          const near = this.currentPage != null && p.siteByPage.has(this.currentPage)
            ? p.siteByPage.get(this.currentPage)
            : ranked.length ? [...ranked].sort((a, b) => a.dist - b.dist)[0].site : null;
          if (near) {
            for (const pick of p.pickables) {
              if (pick.kind !== 'section' || pick.id !== near.page.id) continue;
              const now = pick.id === this.currentPage && pick.slug === reading;
              if (d >= 4.5 && !now) continue;
              const top = pick.local.clone().multiplyScalar(1 + pick.r / p.G);
              const toCam = _v.copy(camLocal).sub(top);
              if (top.dot(toCam) / (top.length() * toCam.length()) < 0) continue;
              const s = toScreen(p.worldPositionOf(top));
              if (s) wanted.push({ key: `s${pick.id}:${pick.slug}`, cls: now ? 'selected section-now' : '', name: pick.title, ...s, priority: now ? 50 : -5 - toCam.length(), stem: true, small: true });
            }
          }
        }
      }
    }

    // Greedy declutter: most important first, and nothing overlaps.
    wanted.sort((a, b) => b.priority - a.priority);
    const placed = [];
    const shown = [];
    for (const item of wanted) {
      if (item.x < -40 || item.x > W + 40 || item.y < 10 || item.y > H + 20) continue;
      const w = Math.min(240, item.name.length * 7.2) + 12, h = 34;
      const box = { l: item.x - w / 2, r: item.x + w / 2, t: item.y - h, b: item.y };
      if (placed.some((o) => box.l < o.r && box.r > o.l && box.t < o.b && box.b > o.t)) continue;
      placed.push(box);
      shown.push(item);
      if (shown.length >= 24) break;
    }

    while (this.labelPool.length < shown.length) {
      const name = el('div', { class: 'name' }), sub = el('div', { class: 'sub' }), stem = el('div', { class: 'stem' });
      const node = el('div', { class: 'label' }, el('div', { class: 'inner' }, name, sub, stem));
      this.labelsRoot.append(node);
      this.labelPool.push({ node, name, sub, stem, key: null, cls: null });
    }
    this.labelPool.forEach((slot, i) => {
      const item = shown[i];
      if (!item) {
        if (slot.key !== null) { slot.node.style.opacity = 0; slot.key = null; }
        return;
      }
      if (slot.key !== item.key) {
        slot.key = item.key;
        slot.name.textContent = item.name;
        slot.sub.textContent = item.sub || '';
        slot.sub.style.display = item.sub ? '' : 'none';
        slot.stem.style.display = item.stem ? '' : 'none';
      }
      if (slot.cls !== item.cls) {
        slot.cls = item.cls;
        slot.node.className = `label ${item.cls}`;
      }
      slot.node.style.opacity = item.opacity ?? 1;
      slot.node.style.transform = `translate(${item.x.toFixed(1)}px, ${item.y.toFixed(1)}px)`;
    });
  }
}

function escapeRe(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
