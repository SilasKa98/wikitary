import test from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import { mkdtemp, mkdir, writeFile, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { buildGraph, describeGraph, scoreImportance, tierOf } from '../src/core/pipeline.mjs';
import { Logbook } from '../src/viewer/ui/logbook.js';
import { shortestPath, worldTour, suggestExpeditions } from '../src/viewer/ui/routes.js';
import { project, unproject, bestCentre, wrapLon, MAP_X, MAP_Y } from '../src/viewer/ui/mapproj.js';

async function tempWiki(files) {
  const dir = await mkdtemp(path.join(tmpdir(), 'wikitary-'));
  for (const [rel, content] of Object.entries(files)) {
    const abs = path.join(dir, rel);
    await mkdir(path.dirname(abs), { recursive: true });
    await writeFile(abs, content);
  }
  return dir;
}

// ---- importance ---------------------------------------------------------------------

test('importance rewards links and length, and spreads pages across the tiers', () => {
  const scores = scoreImportance([
    { mentions: 60, rank: 3, words: 4000, sections: 14 },
    { mentions: 12, rank: 1.2, words: 900, sections: 5 },
    { mentions: 3, rank: 0.8, words: 300, sections: 2 },
    { mentions: 0, rank: 0.2, words: 40, sections: 0 },
  ]);
  assert.ok(scores[0] > scores[1] && scores[1] > scores[2] && scores[2] > scores[3]);
  assert.equal(scores[0], 1);
  assert.equal(scores[3], 0);
  assert.equal(tierOf(0), 0);
  assert.equal(tierOf(0.5), 2);
  assert.equal(tierOf(1), 4);
  assert.deepEqual(scoreImportance([{ mentions: 0, rank: 0, words: 0, sections: 0 }]), [1]);
});

test('graph pages carry importance, tier and a content hash that follows the text', async () => {
  const dir = await tempWiki({
    'hub.md': '# Hub\n\n[[a]] [[b]] [[c]]\n\n## One\n\nLong text here.\n',
    'a.md': '# A\n\n[[hub]]\n', 'b.md': '# B\n\n[[hub]] [[a]]\n', 'c.md': '# C\n\n[[hub]]\n',
  });
  const first = await buildGraph({ cwd: dir, wiki: '.' });
  const hub = first.pages.find((p) => p.title === 'Hub');
  assert.equal(hub.tier, 4);
  assert.ok(first.pages.every((p) => hub.importance >= p.importance));
  assert.match(hub.hash, /^[0-9a-f]{12}$/);
  await writeFile(path.join(dir, 'a.md'), '# A\n\n[[hub]] changed\n');
  const second = await buildGraph({ cwd: dir, wiki: '.' });
  assert.notEqual(second.pages.find((p) => p.title === 'A').hash, first.pages.find((p) => p.title === 'A').hash);
  assert.equal(second.pages.find((p) => p.title === 'C').hash, first.pages.find((p) => p.title === 'C').hash);
  await rm(dir, { recursive: true });
});

test('expeditions from the config resolve like links, and report what they cannot find', async () => {
  const dir = await tempWiki({ 'x/one.md': '# One\n\n[[two]]\n', 'two.md': '# Two\n\n[[one]]\n' });
  const g = await buildGraph({
    cwd: dir,
    wiki: '.',
    config: { expeditions: [{ title: 'Tour', description: 'd', stops: ['two', { page: 'x/one.md', note: 'Look here' }, 'nothing'] }, { stops: [] }] },
  });
  assert.equal(g.expeditions.length, 1);
  assert.deepEqual(g.expeditions[0].stops.map((s) => g.pages[s.page].title), ['Two', 'One']);
  assert.equal(g.expeditions[0].stops[1].note, 'Look here');
  assert.equal(g.meta.problems.length, 2);
  assert.match(describeGraph(g), /no page matches "nothing"/);
  await rm(dir, { recursive: true });
});

// ---- logbook ------------------------------------------------------------------------

const fakeStorage = () => {
  const data = new Map();
  return { getItem: (k) => data.get(k) ?? null, setItem: (k, v) => data.set(k, v), removeItem: (k) => data.delete(k) };
};
const logGraph = (pages) => ({ meta: { root: 'w', title: 'T' }, pages: pages.map(([p, hash], id) => ({ id, path: p, hash })) });

test('logbook: a first visit marks nothing as new, later changes are noticed', () => {
  const storage = fakeStorage();
  const first = new Logbook(logGraph([['a.md', '1'], ['b.md', '1']]), storage);
  assert.equal(first.firstVisit, true);
  assert.equal(first.fresh.size, 0);
  first.visit(0, 5);
  const second = new Logbook(logGraph([['a.md', '2'], ['b.md', '1'], ['c.md', '1']]), storage);
  assert.equal(second.firstVisit, false);
  assert.deepEqual([...second.fresh], [0, 2]);
  assert.deepEqual([...second.added], [2]);
  assert.equal(second.graph.pages[0].fresh, true);
  assert.equal(second.isVisited(0), true);
  assert.equal(second.visit(0), true);
  assert.equal(second.isFresh(0), false);
  assert.deepEqual(second.progress([0, 1, 2]), { done: 1, total: 3 });
  const third = new Logbook(logGraph([['a.md', '2'], ['c.md', '1']]), storage);
  assert.deepEqual([...third.fresh], [1], 'an unread change stays new, a read one does not');
  assert.deepEqual(third.removed, ['b.md']);
});

test('logbook: keeps working when storage refuses, and resets on request', () => {
  const broken = { getItem() { throw new Error('denied'); }, setItem() { throw new Error('denied'); } };
  const log = new Logbook(logGraph([['a.md', '1']]), broken);
  log.visit(0);
  assert.equal(log.isVisited(0), true);
  log.resetVisits();
  assert.equal(log.isVisited(0), false);
  const corrupt = fakeStorage();
  corrupt.getItem = () => '{not json';
  assert.equal(new Logbook(logGraph([['a.md', '1']]), corrupt).firstVisit, true);
});

// ---- routes -------------------------------------------------------------------------

const routeGraph = {
  pages: [0, 1, 2, 3, 4, 5].map((id) => ({ id, cluster: id < 3 ? 0 : 1, importance: 1 - id / 10 })),
  clusters: [{ id: 0, name: 'A', pageIds: [0, 1, 2] }, { id: 1, name: 'B', pageIds: [3, 4, 5] }],
  edges: [{ s: 0, t: 1, w: 1 }, { s: 1, t: 2, w: 1 }, { s: 3, t: 2, w: 2 }, { s: 3, t: 4, w: 1 }],
  ghosts: [],
  star: null,
};

test('routes: shortest chain of links, in either direction, flagged when it crosses worlds', () => {
  const route = shortestPath(routeGraph, 0, 4);
  assert.deepEqual(route.stops, [0, 1, 2, 3, 4]);
  assert.deepEqual(route.legs.map((l) => l.forward), [true, true, false, true]);
  assert.deepEqual(route.legs.map((l) => l.across), [false, false, true, false]);
  assert.equal(shortestPath(routeGraph, 0, 5), null, 'page 5 has no links');
  assert.deepEqual(shortestPath(routeGraph, 2, 2), { stops: [2], legs: [] });
});

test('routes: prefers the link the wiki mentions more when hops tie', () => {
  const g = { pages: [0, 1, 2, 3].map((id) => ({ id, cluster: 0 })), edges: [{ s: 0, t: 1, w: 1 }, { s: 1, t: 3, w: 1 }, { s: 0, t: 2, w: 9 }, { s: 2, t: 3, w: 9 }] };
  assert.deepEqual(shortestPath(g, 0, 3).stops, [0, 2, 3]);
});

test('expeditions: tours follow links, and only offer what makes sense', () => {
  const t = { expNew: 'new', expNewSub: '', expGrand: 'grand', expGrandSub: '', expWorld: (n) => `w:${n}`, expWorldSub: '', expSites: 'sites', expSitesSub: '', expBlank: 'blank', expBlankSub: '' };
  assert.deepEqual(worldTour(routeGraph, routeGraph.clusters[0]), [0, 1, 2]);
  const empty = { fresh: new Set(), isVisited: () => false };
  const ids = suggestExpeditions(routeGraph, empty, t).map((e) => e.id);
  assert.deepEqual(ids, ['grand', 'world:0', 'world:1']);
  const busy = { fresh: new Set([4]), isVisited: (id) => id === 0 };
  const withGhost = { ...routeGraph, ghosts: [{ refs: [1, 2] }], expeditions: [{ title: 'Mine', description: '', stops: [{ page: 1, note: '' }] }] };
  const more = suggestExpeditions(withGhost, busy, t);
  assert.equal(more[0].title, 'Mine');
  assert.deepEqual(more.map((e) => e.id), ['authored:0', 'new', 'grand', 'world:0', 'world:1', 'sites', 'blank']);
  assert.ok(!more.find((e) => e.id === 'blank').stops.some((s) => s.page === 0));
});

// ---- map projection -----------------------------------------------------------------

test('map projection round-trips, keeps inside its outline and avoids tearing cities', () => {
  for (const [lon, lat] of [[0, 0], [1, 0.5], [-2.5, -1.1], [3.1, 1.4]]) {
    const [x, y] = project(lon, lat);
    assert.ok(Math.abs(x) <= MAP_X && Math.abs(y) <= MAP_Y);
    const back = unproject(x, y);
    assert.ok(Math.abs(back[0] - lon) < 1e-6 && Math.abs(back[1] - lat) < 1e-6);
  }
  assert.equal(unproject(MAP_X, MAP_Y * 0.9), null);
  const centre = bestCentre([3, -3, 2.9]);
  assert.ok(Math.abs(wrapLon(centre - 3.1)) < 0.2, 'centred on the cluster that spans the antimeridian');
});
