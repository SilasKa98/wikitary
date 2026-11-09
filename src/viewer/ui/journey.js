// Journeys take you through the wiki stop by stop: a route you planned or an expedition you
// chose. The ship's log is where you find them, along with what you've already read.
import { el, face, hex, ICONS } from './dom.js';
import { buildAdjacency, shortestPath, suggestExpeditions } from './routes.js';

export class Journey {
  constructor(ui) {
    this.ui = ui;
    this.stops = null;
    this.at = 0;
    this.hud = el('div', { class: 'journey', role: 'region', 'aria-label': ui.t.journeyLabel });
    ui.root.append(this.hud);
  }

  get active() { return !!this.stops; }

  /** @param trip {title, stops:[{page, note}], at?} */
  start(trip) {
    this.title = trip.title;
    this.stops = trip.stops;
    this.at = 0;
    this.finished = false;
    document.body.classList.add('journeying');
    this.ui.world.setJourneyStops(this.stops.map((s) => s.page));
    this.go(trip.at ?? 0);
  }

  go(i) {
    if (!this.stops) return;
    this.at = Math.max(0, Math.min(this.stops.length - 1, i));
    const stop = this.stops[this.at];
    this.ui.openPage(stop.page);
    this.save();
    this.render();
  }

  save() { this.ui.logbook.saveTrip({ title: this.title, stops: this.stops, at: this.at }); }

  next() {
    if (!this.stops) return;
    if (this.at < this.stops.length - 1) { this.go(this.at + 1); return; }
    const { title, stops } = this;
    this.end();
    this.ui.announce(this.ui.t.journeyFinished(title, stops.length));
  }

  prev() { if (this.stops) this.go(this.at - 1); }

  end() {
    if (!this.stops) return;
    this.stops = null;
    this.ui.logbook.clearTrip();
    document.body.classList.remove('journeying');
    this.ui.world.setJourneyStops(null);
    this.hud.classList.remove('show');
  }

  /** When the reader moves to a page by other means, follow along if it's one of the stops. */
  noticePage(id) {
    if (!this.stops || this.stops[this.at]?.page === id) return;
    const i = this.stops.findIndex((s) => s.page === id);
    if (i >= 0) { this.at = i; this.save(); this.render(); }
  }

  /** How this stop follows from the last one, so that the route tells you how things connect. */
  legLine() {
    const { ui, stops, at } = this;
    if (at === 0) return null;
    const { t, graph } = ui;
    const from = graph.pages[stops[at - 1].page], to = graph.pages[stops[at].page];
    ui.adjacency ??= buildAdjacency(graph);
    const link = (ui.adjacency.get(from.id) || []).find((l) => l.to === to.id);
    if (link) return (from.cluster !== to.cluster ? t.legShip : link.forward ? t.legFollows : t.legPoints)(from.title);
    const path = shortestPath(graph, from.id, to.id, ui.adjacency);
    return path ? t.legVia(from.title, path.stops.slice(1, -1).map((id) => graph.pages[id].title).join(', ')) : t.legJump(from.title);
  }

  render() {
    const { ui, stops, at } = this;
    const { t, graph, world } = ui;
    const stop = stops[at];
    const page = graph.pages[stop.page];
    const nextStop = stops[at + 1];
    const nextPage = nextStop ? graph.pages[nextStop.page] : null;
    const samePlanet = nextPage && page.cluster >= 0 && page.cluster === nextPage.cluster;
    const canRide = samePlanet && world.planets[page.cluster]?.traffic.vehicleOn(stop.page, nextStop.page);

    // A long expedition shows the stretch around you.
    const reach = 18;
    const first = stops.length > reach * 2 ? Math.max(0, Math.min(stops.length - reach * 2, at - reach)) : 0;
    const dots = stops.slice(first, first + reach * 2).map((s, k) => {
      const i = first + k;
      return el('button', {
        class: `journey-dot${i === at ? ' here' : ''}${i < at ? ' past' : ''}`,
        title: graph.pages[s.page].title,
        'aria-label': graph.pages[s.page].title,
        style: `--c:${ui.accentOf(graph.pages[s.page])}`,
        onclick: () => this.go(i),
      });
    });
    const leg = this.legLine();

    this.hud.replaceChildren(...[
      el('div', { class: 'journey-top' },
        el('span', { class: 'journey-title', text: this.title }),
        el('span', { class: 'journey-count', text: t.stopOf(at + 1, stops.length) }),
        el('button', { class: 'icon-btn', html: ICONS.close, title: t.endJourney, 'aria-label': t.endJourney, onclick: () => this.end() })),
      el('div', { class: 'journey-dots' }, dots),
      leg ? el('div', { class: 'journey-leg', text: leg }) : null,
      el('div', { class: 'journey-note', text: stop.note || page.summary || page.title }),
      el('div', { class: 'journey-actions' },
        el('button', { class: 'journey-btn', html: ICONS.prev, title: `${t.prevStop} (,)`, 'aria-label': t.prevStop, disabled: at === 0 ? true : null, onclick: () => this.prev() }),
        canRide ? el('button', { class: 'journey-btn ride', text: t.ride, onclick: () => ui.rideTo(stop.page, nextStop.page) }) : null,
        el('button', { class: 'journey-btn primary', title: `${t.nextStop} (.)`, onclick: () => this.next() },
          nextPage ? `${t.nextStop}: ${nextPage.title}` : t.journeyDone,
          el('span', { html: ICONS.next }))),
    ].filter(Boolean));
    this.hud.classList.add('show');
  }
}

/** The ship's log: expeditions, the route planner, and what you have read. */
export class ShipLog {
  constructor(ui) {
    this.ui = ui;
    const { t } = ui;
    this.tab = 'expeditions';
    this.tabs = el('div', { class: 'log-tabs', role: 'tablist' });
    this.body = el('div', { class: 'log-body' });
    this.panel = el('div', { class: 'panel log-panel', role: 'dialog', 'aria-modal': 'true', 'aria-label': t.logTitle },
      el('div', { class: 'log-head' }, this.tabs,
        el('button', { class: 'icon-btn', html: ICONS.close, title: t.close, 'aria-label': t.close, onclick: () => this.close() })),
      this.body);
    this.overlay = el('div', { class: 'overlay', onclick: (e) => { if (e.target === this.overlay) this.close(); } }, this.panel);
    ui.root.append(this.overlay);
    this.routeFrom = null;
    this.routeTo = null;
  }

  get isOpen() { return this.overlay.classList.contains('open'); }

  open(tab = this.tab) {
    this.tab = tab;
    if (this.ui.currentPage != null && this.routeFrom == null) this.routeFrom = this.ui.currentPage;
    this.overlay.classList.add('open');
    this.render();
  }

  close() { this.overlay.classList.remove('open'); }
  toggle() { if (this.isOpen) this.close(); else this.open(); }

  /** Opens the planner with a destination already filled in. */
  planTo(id) {
    this.routeTo = id;
    this.routeFrom = this.ui.currentPage ?? this.routeFrom;
    if (this.routeFrom === id) this.routeFrom = null;
    this.open('route');
  }

  render() {
    const { t } = this.ui;
    const tabs = [['expeditions', t.tabExpeditions], ['route', t.tabRoute], ['log', t.tabLog]];
    this.tabs.replaceChildren(...tabs.map(([id, label]) => el('button', {
      class: `log-tab${this.tab === id ? ' on' : ''}`, role: 'tab', 'aria-selected': this.tab === id ? 'true' : 'false', text: label,
      onclick: () => { this.tab = id; this.render(); },
    })));
    this.body.replaceChildren(...{ expeditions: () => this.renderExpeditions(), route: () => this.renderRoute(), log: () => this.renderLog() }[this.tab]());
  }

  // ---- expeditions ----------------------------------------------------------------------
  renderExpeditions() {
    const { ui } = this;
    const { t, graph, logbook } = ui;
    const list = suggestExpeditions(graph, logbook, t);
    const top = [];
    const saved = !ui.journey.active ? logbook.savedTrip() : null;
    if (saved) {
      top.push(el('button', { class: 'trip trip-resume', onclick: () => { this.close(); ui.map.close(); ui.journey.start(saved); } },
        el('span', { class: 'trip-icon', html: ICONS.next }),
        el('span', { class: 'trip-text' },
          el('span', { class: 'trip-title', text: `${t.resume}: ${saved.title}` }),
          el('span', { class: 'trip-sub', text: t.stopOf(saved.at + 1, saved.stops.length) }))));
    }
    if (ui.world.planets.length) {
      top.push(el('button', { class: 'trip trip-plan', onclick: () => { this.close(); ui.map.open(); ui.map.planner.enter(); } },
        el('span', { class: 'trip-icon', html: ICONS.map }),
        el('span', { class: 'trip-text' },
          el('span', { class: 'trip-title', text: t.planOwn }),
          el('span', { class: 'trip-sub', text: t.planOwnSub }))));
    }
    if (!list.length) return [...top, el('div', { class: 'empty', text: t.noExpeditions })];
    return [...top, ...list.map((trip) => {
      const worlds = new Set(trip.stops.map((s) => graph.pages[s.page].cluster).filter((c) => c >= 0));
      const { done, total } = logbook.progress(trip.stops.map((s) => s.page));
      return el('button', { class: 'trip', onclick: () => { this.close(); ui.map.close(); ui.journey.start(trip); } },
        el('span', { class: 'trip-orbs' }, [...worlds].slice(0, 4).map((c) => face(ui.world.planets[c], 21))),
        el('span', { class: 'trip-text' },
          el('span', { class: 'trip-title', text: trip.title }),
          trip.description ? el('span', { class: 'trip-sub', text: trip.description }) : null),
        el('span', { class: 'trip-meta', text: `${done}/${total}` }));
    })];
  }

  // ---- route planner --------------------------------------------------------------------
  pagePicker(label, current, onPick) {
    const { ui } = this;
    const { graph, t } = ui;
    const input = el('input', { class: 'route-input', type: 'search', placeholder: t.routePick, autocomplete: 'off', spellcheck: 'false', 'aria-label': label, value: current != null ? graph.pages[current].title : '' });
    const results = el('div', { class: 'route-results', hidden: true });
    const show = () => {
      const q = input.value.trim().toLowerCase();
      const hits = graph.pages
        .filter((p) => p.cluster >= 0 && (!q || p.title.toLowerCase().includes(q) || p.path.toLowerCase().includes(q)))
        .sort((a, b) => b.importance - a.importance)
        .slice(0, 6);
      results.replaceChildren(...hits.map((p) => el('button', {
        class: 'route-hit',
        onmousedown: (e) => { e.preventDefault(); onPick(p.id); },
      }, el('span', { class: 'orb', style: `--c:${ui.accentOf(p)}` }), el('span', { text: p.title }))));
      results.hidden = !hits.length;
    };
    input.addEventListener('input', show);
    input.addEventListener('focus', () => { input.select(); show(); });
    input.addEventListener('blur', () => { results.hidden = true; });
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        results.querySelector('.route-hit')?.dispatchEvent(new MouseEvent('mousedown', { bubbles: true, cancelable: true }));
      }
    });
    return el('label', { class: 'route-field' }, el('span', { class: 'route-label', text: label }), input, results);
  }

  renderRoute() {
    const { ui } = this;
    const { t, graph } = ui;
    const pick = (key) => (id) => { this[key] = id; this.render(); };
    const fields = el('div', { class: 'route-fields' },
      this.pagePicker(t.routeFrom, this.routeFrom, pick('routeFrom')),
      el('button', {
        class: 'route-swap', title: t.routeSwap, 'aria-label': t.routeSwap, text: '⇅',
        onclick: () => { [this.routeFrom, this.routeTo] = [this.routeTo, this.routeFrom]; this.render(); },
      }),
      this.pagePicker(t.routeTo, this.routeTo, pick('routeTo')));
    if (this.routeFrom == null || this.routeTo == null) return [fields, el('p', { class: 'route-hint', text: t.routeHint })];

    ui.adjacency ??= buildAdjacency(graph);
    const route = shortestPath(graph, this.routeFrom, this.routeTo, ui.adjacency);
    if (!route) return [fields, el('p', { class: 'route-hint', text: t.noRoute })];
    if (!route.legs.length) return [fields, el('p', { class: 'route-hint', text: t.sameStop })];

    const line = [];
    route.stops.forEach((id, i) => {
      const page = graph.pages[id];
      line.push(el('li', { class: 'route-stop' },
        el('span', { class: 'orb', style: `--c:${ui.accentOf(page)}` }),
        el('button', { class: 'route-stop-name', text: page.title, onclick: () => { this.close(); ui.map.close(); ui.openPage(id); } })));
      const leg = route.legs[i];
      if (leg) {
        const verb = leg.forward ? t.legLinksTo : t.legLinkedFrom;
        const how = leg.across ? t.starship : '';
        line.push(el('li', { class: 'route-leg' }, `${leg.forward ? '↓' : '↑'} ${verb}${how ? ` · ${how}` : ''}`));
      }
    });
    const title = `${graph.pages[this.routeFrom].title} → ${graph.pages[this.routeTo].title}`;
    return [
      fields,
      el('p', { class: 'route-summary', text: t.hops(route.legs.length) }),
      el('ol', { class: 'route-line' }, line),
      el('button', {
        class: 'route-go',
        text: t.routeStart,
        onclick: () => {
          this.close();
          ui.map.close();
          ui.journey.start({ title, stops: route.stops.map((page) => ({ page, note: '' })) });
        },
      }),
    ];
  }

  // ---- logbook --------------------------------------------------------------------------
  renderLog() {
    const { ui } = this;
    const { t, graph, logbook, world, lang } = ui;
    const parts = [];

    const fresh = [...logbook.fresh].map((id) => graph.pages[id]).filter((p) => p.cluster >= 0 || p.id === graph.star || p.id === graph.comet);
    if (fresh.length || logbook.removed.length) {
      parts.push(el('h3', { class: 'log-h', text: t.sinceLast }));
      if (fresh.length) {
        parts.push(el('ul', { class: 'log-list' }, fresh.sort((a, b) => b.importance - a.importance).slice(0, 30).map((p) => el('li', {},
          el('button', { onclick: () => { this.close(); ui.map.close(); ui.openPage(p.id); } },
            el('span', { class: 'orb', style: `--c:${ui.accentOf(p)}` }),
            el('span', { class: 'log-title', text: p.title }),
            el('span', { class: 'badge-new', text: logbook.added.has(p.id) ? t.badgeNew : t.badgeChanged }))))));
      }
      if (logbook.removed.length) parts.push(el('p', { class: 'log-note', text: t.removedPages(logbook.removed.length, logbook.removed.slice(0, 5).join(', ')) }));
      parts.push(el('button', {
        class: 'log-action',
        text: t.markSeen,
        onclick: () => {
          for (const id of logbook.markAllSeen()) world.planets[graph.pages[id].cluster]?.clearFresh(id);
          ui.refreshProgress();
          this.render();
        },
      }));
    }

    parts.push(el('h3', { class: 'log-h', text: t.exploration }));
    parts.push(el('ul', { class: 'log-worlds' }, world.planets.map((planet) => {
      const { done, total } = logbook.progress(planet.cluster.pageIds);
      return el('li', {},
        el('button', { onclick: () => { this.close(); ui.map.open(planet); } },
          face(planet, 28),
          el('span', { class: 'log-title', text: planet.cluster.name }),
          el('span', { class: 'log-count', text: `${done}/${total}` })),
        el('span', { class: 'log-bar', style: `--p:${total ? (done / total) * 100 : 0}%;--c:${hex(planet.civ.palette.accent)}` }));
    })));

    const recent = logbook.recent(12);
    if (recent.length) {
      parts.push(el('h3', { class: 'log-h', text: t.recently }));
      parts.push(el('ul', { class: 'log-list' }, recent.map(({ page, at }) => el('li', {},
        el('button', { onclick: () => { this.close(); ui.map.close(); ui.openPage(page.id); } },
          el('span', { class: 'orb', style: `--c:${ui.accentOf(page)}` }),
          el('span', { class: 'log-title', text: page.title }),
          el('span', { class: 'log-count', text: new Date(at).toLocaleDateString(lang, { day: 'numeric', month: 'short' }) }))))));
      parts.push(el('button', {
        class: 'log-action quiet',
        text: t.resetLog,
        onclick: () => {
          if (!confirm(t.resetConfirm)) return;
          logbook.resetVisits();
          ui.refreshProgress();
          this.render();
        },
      }));
    } else {
      parts.push(el('p', { class: 'log-note', text: t.logEmpty }));
    }
    parts.push(el('p', { class: 'log-note', text: t.logPrivate }));
    return parts;
  }
}
