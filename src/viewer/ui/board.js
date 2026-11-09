// A page's links, as the departure board of its city.
import { CIVS } from '../civs/index.js';
import { el, ICONS } from './dom.js';

/** Frequency shown like a timetable: more dots, more traffic. */
function frequency(w) {
  const dots = Math.min(4, Math.max(1, Math.ceil(Math.log2(1 + w))));
  return el('span', { class: 'freq', 'aria-hidden': 'true' }, Array.from({ length: 4 }, (_, i) => el('i', { class: i < dots ? 'on' : '' })));
}

function connection(ui, a, b) {
  const { graph, world, lang, t } = ui;
  const pa = graph.pages[a], pb = graph.pages[b];
  if (pa.cluster < 0 || pb.cluster < 0) return { kind: 'ship', label: t.starship };
  if (pa.cluster !== pb.cluster) return { kind: 'ship', label: t.starship, away: CIVS[graph.clusters[pb.cluster].civ].name[lang] };
  const planet = world.planets[pa.cluster];
  const link = planet?.linkBetween(a, b);
  const civ = planet?.civ;
  if (!link) return { kind: 'road', label: t.link };
  return {
    kind: link.kind,
    label: civ.transit?.[link.kind]?.[lang] ?? t.link,
    km: link.path.length * 0.08,
  };
}

function row(ui, here, id, w, departing) {
  const { graph, t, lang } = ui;
  const page = graph.pages[id];
  const c = connection(ui, here, id);
  const via = c.km != null ? `${c.label} · ${c.km.toLocaleString(lang, { maximumFractionDigits: 1 })} km` : c.away ? `${c.label} · ${c.away}` : c.label;
  const dest = el('button', { class: 'board-dest', title: t.linkedTimes(w), onclick: () => ui.openPage(id) },
    el('span', { class: 'board-icon', html: ICONS[c.kind] }),
    el('span', { class: 'board-text' },
      el('span', { class: 'board-title', text: page.title }),
      el('span', { class: 'board-via', text: via })),
    frequency(w));
  const canRide = departing && c.km != null;
  return el('li', {}, dest,
    canRide ? el('button', { class: 'board-ride', text: t.ride, title: `${t.ride}: ${page.title}`, onclick: () => ui.rideTo(here, id) }) : null);
}

const SHOWN = 6;

/** A long list shows its strongest connections, and the rest on request. */
function listOf(rows, more) {
  const list = el('ul', {}, rows.slice(0, SHOWN));
  if (rows.length <= SHOWN) return [list];
  const button = el('button', { class: 'board-more', text: more(rows.length), onclick: () => { list.append(...rows.slice(SHOWN)); button.remove(); } });
  return [list, button];
}

/** Departures follow the page's links, arrivals are the pages that link here. */
export function renderBoard(ui, page) {
  const { graph, t } = ui;
  const hidden = (id) => id === graph.star || id === graph.comet;
  const weight = new Map(), incoming = new Map();
  for (const e of graph.edges) {
    if (e.s === page.id && !hidden(e.t)) weight.set(e.t, e.w);
    if (e.t === page.id && !hidden(e.s)) incoming.set(e.s, e.w);
  }
  const sorted = (map) => [...map.entries()].sort((a, b) => b[1] - a[1] || graph.pages[b[0]].importance - graph.pages[a[0]].importance);
  const sites = graph.ghosts.filter((g) => g.refs.includes(page.id));
  if (!weight.size && !incoming.size && !sites.length) return null;

  const parts = [];
  if (weight.size || sites.length) {
    parts.push(el('h4', { text: `${t.departures} · ${weight.size + sites.length}` }));
    parts.push(...listOf([
      ...sorted(weight).map(([id, w]) => row(ui, page.id, id, w, true)),
      ...sites.map((g) => el('li', {}, el('button', { class: 'board-dest', onclick: () => ui.openGhost(g.key) },
        el('span', { class: 'board-icon', html: ICONS.site }),
        el('span', { class: 'board-text' },
          el('span', { class: 'board-title', text: g.title }),
          el('span', { class: 'board-via site', text: t.siteTitle }))))),
    ], t.showAll));
  }
  if (incoming.size) {
    parts.push(el('h4', { text: `${t.arrivals} · ${incoming.size}` }));
    parts.push(...listOf(sorted(incoming).map(([id, w]) => row(ui, page.id, id, w, false)), t.showAll));
  }
  return el('section', { class: 'board', id: 'board', 'data-departures': weight.size + sites.length, 'data-arrivals': incoming.size }, parts);
}
