// Planning an expedition on the map itself. You pick a place to start, and what you can reach
// from there lights up; every step follows a real link, so that the route explains how the
// topic hangs together. Newcomers can also just ask for a route through everything.
import { el, face, ICONS } from './dom.js';
import { buildAdjacency, extendPlan, coverageWalk } from './routes.js';
import { readingMinutes } from './pagedoc.js';

const SHOWN_STOPS = 150;
const SHOWN_NEXT = 40;

export class Planner {
  constructor(ui, map) {
    this.ui = ui;
    this.map = map;
    this.active = false;
    this.stops = [];
    this.history = [];
    this.title = null;
    this.unreadOnly = true;
    this.note = '';
    this.next = [];
    this.node = el('div', { class: 'plan' });
  }

  get adjacency() { return (this.ui.adjacency ??= buildAdjacency(this.ui.graph)); }
  get last() { return this.stops.at(-1) ?? null; }

  /** Places one could reasonably stop at: the index and the log are there for orientation. */
  visitable(id) {
    const { graph } = this.ui;
    return id !== graph.comet && id !== graph.star && graph.pages[id].cluster >= 0;
  }

  enter(from = null) {
    this.active = true;
    this.map.select(null);
    this.map.sheet.classList.add('planning');
    if (from != null && !this.stops.includes(from)) {
      if (!this.stops.length) this.change([from]);
      else this.add(from);
    }
    this.afterChange();
  }

  exit() {
    this.active = false;
    this.map.sheet.classList.remove('planning');
    this.map.dirty = true;
  }

  toggle(from) {
    if (this.active) this.exit();
    else this.enter(from);
  }

  change(stops, title = null) {
    this.history.push({ stops: this.stops, title: this.title });
    if (this.history.length > 40) this.history.shift();
    this.stops = stops;
    this.title = title;
  }

  undo() {
    const previous = this.history.pop();
    if (!previous) return;
    this.stops = previous.stops;
    this.title = previous.title;
    this.note = '';
    this.afterChange();
  }

  /** A click on the map, or in a list. */
  pick(id) {
    if (!this.visitable(id)) return;
    if (id === this.last) { this.remove(id); return; }
    if (this.stops.includes(id)) {
      this.note = this.ui.t.planAlready(this.ui.graph.pages[id].title);
      this.render();
      return;
    }
    this.add(id);
  }

  add(id) {
    const { graph, t } = this.ui;
    const before = this.stops.length;
    const stops = extendPlan(graph, this.stops, id, this.adjacency).filter((s) => s === id || this.visitable(s) || this.stops.includes(s));
    const bridged = stops.slice(before, -1);
    this.note = bridged.length ? t.planBridged(graph.pages[id].title, bridged.map((s) => graph.pages[s].title).join(', ')) : '';
    this.change(stops);
    this.afterChange();
    // Following a starship: the map comes along.
    const page = graph.pages[id];
    if (page.cluster !== this.map.planet.index && this.ui.world.planets[page.cluster]) this.map.show(this.ui.world.planets[page.cluster], false);
  }

  remove(id) {
    this.note = '';
    this.change(this.stops.filter((s) => s !== id));
    this.afterChange();
  }

  clear() {
    this.note = '';
    this.change([]);
    this.afterChange();
  }

  /** A route through a set of places, starting from where you are if that's one of them. */
  planThrough(ids, title) {
    const { logbook, currentPage, t } = this.ui;
    const unread = ids.filter((id) => !logbook.isVisited(id));
    const useUnread = this.unreadOnly && unread.length > 0;
    const set = useUnread ? unread : ids;
    const start = this.last != null && set.includes(this.last) ? this.last : currentPage != null && set.includes(currentPage) ? currentPage : null;
    this.note = this.unreadOnly && !unread.length ? t.planAllRead : '';
    this.change(coverageWalk(this.ui.graph, set, { start, adjacency: this.adjacency }), title);
    this.afterChange();
  }

  planWorld() {
    const { planet } = this.map;
    this.planThrough(planet.cluster.pageIds.filter((id) => this.visitable(id)), this.ui.t.planTitleWorld(planet.cluster.name));
  }

  planWiki() {
    const { graph, t } = this.ui;
    this.planThrough(graph.pages.filter((p) => this.visitable(p.id)).map((p) => p.id), t.planTitleWiki);
  }

  start() {
    const { graph, journey } = this.ui;
    if (!this.stops.length) return;
    const first = graph.pages[this.stops[0]].title, last = graph.pages[this.last].title;
    const title = this.title ?? (this.stops.length > 1 ? `${first} → ${last}` : first);
    const stops = this.stops.map((page) => ({ page, note: '' }));
    this.exit();
    this.stops = [];
    this.history = [];
    this.title = null;
    this.note = '';
    this.map.close();
    journey.start({ title, stops });
  }

  afterChange() {
    this.computeNext();
    this.map.dirty = true;
    this.map.renderTabs();
    this.render();
  }

  /** What lights up: where the route can go from here, or good places to begin. */
  computeNext() {
    const { graph, logbook } = this.ui;
    const score = (id) => (logbook.isVisited(id) ? 0 : 1) + (graph.pages[id].importance ?? 0);
    if (this.last == null) {
      const here = this.map.planet.cluster.pageIds.filter((id) => this.visitable(id));
      this.next = [...here].sort((a, b) => score(b) - score(a)).slice(0, 5).map((id) => ({ id }));
      return;
    }
    const seen = new Map();
    for (const link of this.adjacency.get(this.last) || []) {
      if (!this.visitable(link.to) || this.stops.includes(link.to)) continue;
      const known = seen.get(link.to);
      if (!known || link.forward) seen.set(link.to, { id: link.to, forward: link.forward });
    }
    // What glows on the map you are looking at comes first; other worlds follow.
    const here = this.map.planet?.index;
    const onMap = (id) => (graph.pages[id].cluster === here ? 2 : 0);
    this.next = [...seen.values()].sort((a, b) => onMap(b.id) + score(b.id) - onMap(a.id) - score(a.id));
  }

  /** Ids to light up on the world being shown. */
  litHere() {
    return this.next.map((n) => n.id).filter((id) => this.map.data?.byId.has(id));
  }

  // ---- the panel -------------------------------------------------------------------------
  render() {
    if (!this.active) return;
    const { ui, map } = this;
    const { t, graph, logbook, world } = ui;
    const planet = map.planet;
    if (!planet) return;

    const minutes = this.stops.reduce((sum, id) => sum + readingMinutes(graph.pages[id].words), 0);
    const worldsTouched = new Set(this.stops.map((id) => graph.pages[id].cluster));
    const worldIds = planet.cluster.pageIds.filter((id) => this.visitable(id));
    const wikiCount = graph.pages.filter((p) => this.visitable(p.id)).length;
    const unreadCount = (ids) => ids.filter((id) => !logbook.isVisited(id)).length;

    const hint = this.stops.length === 0 ? t.planHintStart : this.next.length ? t.planHintNext(graph.pages[this.last].title, this.next.length) : t.planHintEnd(graph.pages[this.last].title);

    const header = el('div', { class: 'plan-head' },
      el('div', {},
        el('div', { class: 'plan-kicker', text: t.planKicker }),
        el('div', { class: 'plan-hint', text: hint }),
        this.note ? el('div', { class: 'plan-note', text: this.note }) : null),
      el('button', { class: 'icon-btn', html: ICONS.close, title: t.planLeave, 'aria-label': t.planLeave, onclick: () => this.exit() }));

    const count = (ids) => (this.unreadOnly ? unreadCount(ids) || ids.length : ids.length);
    const suggest = el('div', { class: 'plan-suggest' },
      el('div', { class: 'plan-h', text: t.planSuggest }),
      el('button', { class: 'plan-auto', onclick: () => this.planWorld() },
        face(planet, 26),
        el('span', { text: t.planAllWorld(count(worldIds), planet.cluster.name) })),
      world.planets.length > 1 ? el('button', { class: 'plan-auto', onclick: () => this.planWiki() },
        el('span', { class: 'plan-auto-icon', html: ICONS.compass }),
        el('span', { text: t.planAllWiki(this.unreadOnly ? unreadCount(graph.pages.filter((p) => this.visitable(p.id)).map((p) => p.id)) || wikiCount : wikiCount) })) : null,
      el('label', { class: 'plan-check' },
        el('input', { type: 'checkbox', checked: this.unreadOnly ? true : null, onchange: (e) => { this.unreadOnly = e.target.checked; this.render(); } }),
        t.planUnreadOnly));

    const route = [];
    if (this.stops.length) {
      route.push(el('div', { class: 'plan-h plan-h-row' },
        el('span', { text: t.planRoute(this.stops.length, minutes) }),
        el('button', { class: 'plan-link', text: t.planUndo, disabled: this.history.length ? null : true, onclick: () => this.undo() }),
        el('button', { class: 'plan-link', text: t.planClear, onclick: () => this.clear() })));
      route.push(el('ol', { class: 'plan-stops' }, this.stops.slice(0, SHOWN_STOPS).map((id, i) => {
        const page = graph.pages[id];
        const away = page.cluster !== planet.index ? world.planets[page.cluster] : null;
        return el('li', { class: `plan-stop${logbook.isVisited(id) ? ' read' : ''}` },
          el('span', { class: 'plan-num', text: String(i + 1) }),
          el('button', {
            class: 'plan-stop-name',
            onclick: () => {
              if (away) map.show(away, false);
              map.bringIntoView(map.data.byId.get(id));
            },
            onmouseenter: () => map.setHover(map.data?.byId.get(id) ?? null),
            onmouseleave: () => map.setHover(null),
          }, away ? face(away, 16) : null, el('span', { text: page.title })),
          el('span', { class: 'plan-time', text: `${readingMinutes(page.words)} ${t.minutes}` }),
          el('button', { class: 'plan-x', html: ICONS.close, title: t.planRemove, 'aria-label': `${t.planRemove}: ${page.title}`, onclick: () => this.remove(id) }));
      })));
      if (this.stops.length > SHOWN_STOPS) route.push(el('div', { class: 'plan-more', text: t.planMore(this.stops.length - SHOWN_STOPS) }));
      const unlinked = this.stops.filter((id, i) => i > 0 && !(this.adjacency.get(this.stops[i - 1]) || []).some((l) => l.to === id)).length;
      if (unlinked) route.push(el('div', { class: 'plan-more', text: t.planDotted(unlinked) }));
    }

    const rows = this.next.slice(0, SHOWN_NEXT).map(({ id, forward }) => {
      const page = graph.pages[id];
      const away = page.cluster !== planet.index ? world.planets[page.cluster] : null;
      const sub = [
        away ? `${t.starship} · ${away.cluster.name}` : t.tierNames[page.tier],
        `${readingMinutes(page.words)} ${t.minutes}`,
        logbook.isVisited(id) ? `✓ ${t.visited}` : '',
        this.last != null && forward === false ? t.planPointsHere : '',
      ].filter(Boolean).join(' · ');
      return el('button', {
        class: 'plan-next',
        title: page.summary || page.title,
        onclick: () => this.pick(id),
        onmouseenter: () => map.setHover(map.data?.byId.get(id) ?? null),
        onmouseleave: () => map.setHover(null),
      },
      away ? face(away, 26) : el('span', { class: 'plan-plus', text: '+' }),
      el('span', { class: 'plan-next-text' },
        el('span', { class: 'plan-next-title', text: page.title }),
        el('span', { class: 'plan-next-sub', text: sub })));
    });
    const nextBlock = rows.length ? [
      el('div', { class: 'plan-h', text: this.stops.length ? t.planReachable(this.next.length) : t.planStartAt }),
      el('div', { class: 'plan-nexts' }, rows),
    ] : [];

    const scroll = this.scrollBox;
    const keep = scroll?.scrollTop ?? 0;
    // Where to go next matters more than the way so far, so it comes first while you plan by hand.
    this.scrollBox = el('div', { class: 'plan-scroll' },
      ...nextBlock,
      ...(this.stops.length ? route : []),
      suggest);
    this.node.replaceChildren(
      header,
      this.scrollBox,
      el('button', {
        class: 'plan-go',
        disabled: this.stops.length ? null : true,
        onclick: () => this.start(),
      }, el('span', { text: this.stops.length ? t.planStart(this.stops.length, worldsTouched.size) : t.planStartEmpty }), el('span', { html: ICONS.next })));
    this.scrollBox.scrollTop = keep;
  }
}
