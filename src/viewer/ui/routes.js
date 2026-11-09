// Finding your way through the wiki: the shortest chain of links between two pages,
// and ready-made tours through the parts worth seeing.

/** Every page's neighbours, in both directions: you may travel a link against its grain. */
export function buildAdjacency(graph) {
  const adjacency = new Map();
  const add = (from, to, w, forward) => {
    if (!adjacency.has(from)) adjacency.set(from, []);
    adjacency.get(from).push({ to, w, forward });
  };
  for (const e of graph.edges) {
    add(e.s, e.t, e.w, true);
    add(e.t, e.s, e.w, false);
  }
  return adjacency;
}

/**
 * Fewest hops first. Among equally short routes, prefer links in their own direction and
 * links the wiki mentions often: those are the connections an author meant.
 * @returns {{stops:number[], legs:{from:number,to:number,forward:boolean,w:number,across:boolean}[]}|null}
 */
export function shortestPath(graph, from, to, adjacency = buildAdjacency(graph)) {
  if (from === to) return { stops: [from], legs: [] };
  const cost = new Map([[from, 0]]);
  const via = new Map();
  const done = new Set();
  const queue = [[0, from]];
  while (queue.length) {
    // The graphs here are small enough that a sorted array does the job of a heap.
    let best = 0;
    for (let i = 1; i < queue.length; i++) if (queue[i][0] < queue[best][0]) best = i;
    const [c, node] = queue.splice(best, 1)[0];
    if (done.has(node)) continue;
    done.add(node);
    if (node === to) break;
    for (const link of adjacency.get(node) || []) {
      if (done.has(link.to)) continue;
      const next = c + 1 + (link.forward ? 0 : 0.04) + 0.04 / (1 + link.w);
      if (next < (cost.get(link.to) ?? Infinity)) {
        cost.set(link.to, next);
        via.set(link.to, { from: node, link });
        queue.push([next, link.to]);
      }
    }
  }
  if (!via.has(to)) return null;
  const legs = [];
  for (let at = to; at !== from; at = via.get(at).from) {
    const { from: previous, link } = via.get(at);
    legs.unshift({
      from: previous,
      to: at,
      forward: link.forward,
      w: link.w,
      across: graph.pages[previous].cluster !== graph.pages[at].cluster,
    });
  }
  return { stops: [from, ...legs.map((l) => l.to)], legs };
}

/**
 * The next step of a route planned by hand. Clicking somewhere not directly linked fills in the
 * shortest way there, so that a route always hangs together. No place is listed twice.
 */
export function extendPlan(graph, stops, id, adjacency = buildAdjacency(graph)) {
  if (stops.includes(id)) return stops;
  if (!stops.length) return [id];
  const path = shortestPath(graph, stops.at(-1), id, adjacency);
  if (!path) return [...stops, id];
  return [...stops, ...path.stops.slice(1).filter((s) => !stops.includes(s))];
}

/**
 * Visits every page in a set exactly once, always moving on to something close by, so that as
 * many steps as possible follow a link. Finishes a world before leaving it where it can, and
 * prefers places that would otherwise be left stranded. Tries a few ways of weighing that up
 * and keeps whichever walk has the most real links in it.
 */
export function coverageWalk(graph, ids, { start = null, adjacency = buildAdjacency(graph) } = {}) {
  const set = [...new Set(ids)];
  if (!set.length) return [];
  const importance = (id) => graph.pages[id].importance ?? 0;
  const linked = (a, b) => (adjacency.get(a) || []).some((l) => l.to === b);
  const links = (walk) => walk.reduce((n, id, i) => n + (i > 0 && linked(walk[i - 1], id) ? 1 : 0), 0);

  const walkWith = (care) => {
    const remaining = new Set(set);
    let at = start != null && remaining.has(start) ? start : set.reduce((x, y) => (importance(y) > importance(x) ? y : x));
    const walk = [at];
    remaining.delete(at);
    while (remaining.size) {
      // Breadth first, one ring further than the first hit: a world's own place two hops away
      // is a better next step than a neighbour on another world.
      const seen = new Set([at]);
      let ring = [at];
      let best = null, bestScore = -Infinity, firstHit = null;
      for (let hops = 1; ring.length && (firstHit == null || hops <= firstHit + 1); hops++) {
        const nextRing = [];
        for (const node of ring) {
          for (const { to } of adjacency.get(node) || []) {
            if (seen.has(to)) continue;
            seen.add(to);
            nextRing.push(to);
            if (!remaining.has(to)) continue;
            firstHit ??= hops;
            const open = (adjacency.get(to) || []).filter((l) => remaining.has(l.to)).length;
            const score = -hops * 10 + (graph.pages[to].cluster === graph.pages[at].cluster ? 15 : 0) + importance(to) * 2 - open * care;
            if (score > bestScore) { bestScore = score; best = to; }
          }
        }
        ring = nextRing;
      }
      // Nothing connects: an island. Jump to the most important place left.
      at = best ?? [...remaining].reduce((x, y) => (importance(y) > importance(x) ? y : x));
      walk.push(at);
      remaining.delete(at);
    }
    return walk;
  };

  // Large wikis get one good attempt: each costs a search per stop.
  const attempts = set.length > 300 ? [0.5] : [0, 0.25, 0.5, 1, 2];
  let bestWalk = null, bestLinks = -1;
  for (const care of attempts) {
    const walk = walkWith(care);
    const n = links(walk);
    if (n > bestLinks) { bestLinks = n; bestWalk = walk; }
  }
  return bestWalk;
}

/** A walk through one world, following its links from the most important page outward. */
export function worldTour(graph, cluster, adjacency = buildAdjacency(graph), length = 6) {
  const members = new Set(cluster.pageIds);
  const importance = (id) => graph.pages[id].importance ?? 0;
  const ordered = [...cluster.pageIds].sort((a, b) => importance(b) - importance(a));
  if (!ordered.length) return [];
  const tour = [ordered[0]];
  const inTour = new Set(tour);
  while (tour.length < Math.min(length, members.size)) {
    let next = null;
    // Prefer a neighbour of where you are; otherwise go back to any stop you passed.
    for (let i = tour.length - 1; i >= 0 && next == null; i--) {
      const options = (adjacency.get(tour[i]) || []).filter((l) => members.has(l.to) && !inTour.has(l.to));
      if (options.length) next = options.reduce((a, b) => (importance(b.to) > importance(a.to) ? b : a)).to;
    }
    if (next == null) next = ordered.find((id) => !inTour.has(id));
    if (next == null) break;
    tour.push(next);
    inTour.add(next);
  }
  return tour;
}

/**
 * The expeditions on offer. Authored ones come first, since someone thought about them.
 * @param t strings: expGrand, expGrandSub, expWorld(name), expWorldSub, expSites, expSitesSub,
 *          expNew, expNewSub, expBlank, expBlankSub
 */
export function suggestExpeditions(graph, logbook, t) {
  const adjacency = buildAdjacency(graph);
  const out = [];
  for (const [i, e] of (graph.expeditions || []).entries()) {
    out.push({ id: `authored:${i}`, kind: 'authored', title: e.title, description: e.description, stops: e.stops });
  }
  const stops = (ids) => ids.map((page) => ({ page, note: '' }));
  const importance = (id) => graph.pages[id].importance ?? 0;
  const byImportance = (ids) => [...ids].sort((a, b) => importance(b) - importance(a));

  if (logbook.fresh.size) {
    const ids = byImportance(logbook.fresh).filter((id) => graph.pages[id].cluster >= 0).slice(0, 12);
    if (ids.length) out.push({ id: 'new', kind: 'new', title: t.expNew, description: t.expNewSub, stops: stops(ids) });
  }

  if (graph.clusters.length > 1) {
    const capitals = graph.clusters.map((c) => byImportance(c.pageIds)[0]).filter((id) => id != null);
    const first = graph.star != null ? [graph.star] : [];
    out.push({ id: 'grand', kind: 'grand', title: t.expGrand, description: t.expGrandSub, stops: stops([...first, ...capitals]) });
  }

  for (const cluster of graph.clusters) {
    const tour = worldTour(graph, cluster, adjacency);
    if (tour.length > 1) out.push({ id: `world:${cluster.id}`, kind: 'world', title: t.expWorld(cluster.name), description: t.expWorldSub, stops: stops(tour) });
  }

  const unfinished = new Map();
  for (const ghost of graph.ghosts || []) {
    for (const ref of ghost.refs) {
      if (graph.pages[ref].cluster >= 0) unfinished.set(ref, (unfinished.get(ref) || 0) + 1);
    }
  }
  if (unfinished.size) {
    const ids = [...unfinished.entries()].sort((a, b) => b[1] - a[1]).slice(0, 8).map(([id]) => id);
    out.push({ id: 'sites', kind: 'sites', title: t.expSites, description: t.expSitesSub, stops: stops(ids) });
  }

  const unread = byImportance(graph.pages.filter((p) => p.cluster >= 0 && !logbook.isVisited(p.id)).map((p) => p.id)).slice(0, 6);
  const readAny = graph.pages.some((p) => logbook.isVisited(p.id));
  if (readAny && unread.length > 1) out.push({ id: 'blank', kind: 'blank', title: t.expBlank, description: t.expBlankSub, stops: stops(unread) });
  return out;
}
