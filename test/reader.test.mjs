import test from 'node:test';
import assert from 'node:assert/strict';
import { parsePage } from '../src/core/parse.mjs';
import { liftFacts, scanCitation, calloutKind, splitLevel, readingMinutes, dwellSeconds } from '../src/viewer/ui/pagedoc.js';
import { renderPage } from '../src/viewer/ui/markdown.js';
import { Logbook } from '../src/viewer/ui/logbook.js';
import { buildAdjacency, extendPlan, coverageWalk } from '../src/viewer/ui/routes.js';
import { sectionsToBuild } from '../src/viewer/engine/city.js';

const pageOf = (md, path = 'a.md') => ({ ...parsePage({ path, content: md }), linkMap: {}, id: 0 });
const graph = { pages: [], clusters: [] };

test('the opening labels come off the page, and only those', () => {
  const { facts, body } = liftFacts(`# Title

**Zusammenfassung**: Kurz und [[knapp]].

**Quellen**: P1, P2

**Zuletzt aktualisiert**: 2026-10-02

---

Der Text beginnt hier.

**Quellen**: bleibt stehen, das ist schon Fließtext.
`);
  assert.deepEqual(facts.map((f) => f.kind), ['summary', 'sources', 'updated']);
  assert.equal(facts[0].value, 'Kurz und [[knapp]].');
  assert.match(body, /^Der Text beginnt hier\./);
  assert.match(body, /bleibt stehen/);
  assert.doesNotMatch(body, /^---/m);
});

test('labels written on consecutive lines, or with the colon inside the bold, count too', () => {
  const { facts, body } = liftFacts('**Summary:** One.\n**Status:** draft\n\nText.\n');
  assert.deepEqual(facts.map((f) => [f.label, f.kind]), [['Summary', 'summary'], ['Status', 'other']]);
  assert.equal(body.trim(), 'Text.');
});

test('a paragraph that merely starts in bold stays a paragraph', () => {
  for (const md of [
    '**Wichtig** ist hier, dass kein Doppelpunkt folgt.\n',
    `**Hintergrund:** ${'lang '.repeat(40)}\n`,
    'Plain text first.\n\n**Summary**: too late to count.\n',
  ]) {
    const { facts, body } = liftFacts(md);
    assert.equal(facts.length, 0, md);
    assert.equal(body, md);
  }
});

test('a horizontal rule is only taken along with the labels above it', () => {
  assert.match(liftFacts('---\n\nText.\n').body, /^---/);
});

test('citations are read with their nested brackets, and split at semicolons', () => {
  assert.deepEqual(scanCitation('(Quelle: P1 - Types (Handbook@v2).md) und so').parts, ['P1 - Types (Handbook@v2).md']);
  const two = scanCitation('(Sources: a.pdf; b.md).');
  assert.deepEqual(two.parts, ['a.pdf', 'b.md']);
  assert.equal(two.raw, '(Sources: a.pdf; b.md)');
  assert.equal(scanCitation('(Quelle: never closes'), null);
  assert.equal(scanCitation('(Quelle: spans\ntwo lines)'), null);
  assert.equal(scanCitation('(siehe Quelle: nein)'), null);
  assert.equal(scanCitation('(Quelle: )'), null);
});

test('citations become numbered footnote marks; the same source keeps its number', () => {
  const doc = renderPage(pageOf('# T\n\nErstens (Quelle: a.pdf). Zweitens (Quelle: b.pdf; a.pdf).\n\n`(Quelle: code.pdf)`\n'), graph);
  assert.doesNotMatch(doc.html, /\(Quelle: a/);
  assert.deepEqual(doc.sources.map((s) => [s.n, s.text, s.count]), [[1, 'a.pdf', 2], [2, 'b.pdf', 1]]);
  assert.equal((doc.html.match(/class="cite"/g) || []).length, 3);
  assert.match(doc.html, /<code>\(Quelle: code\.pdf\)<\/code>/, 'code stays code');
});

test('a citation cannot smuggle in markup', () => {
  const doc = renderPage(pageOf('# T\n\nText (Quelle: <img src=x onerror=alert(1)> & "b").\n'), graph);
  assert.doesNotMatch(doc.html, /<img/);
  assert.equal(doc.sources[0].text, '<img src=x onerror=alert(1)> & "b"');
});

test('notes that announce themselves become plaques, quotes stay quotes', () => {
  const render = (md) => renderPage(pageOf(`# T\n\n${md}\n`), graph).html;
  assert.match(render('> **Hinweis**: Achte darauf.'), /callout-note[\s\S]*callout-label">Hinweis<[\s\S]*Achte darauf/);
  assert.match(render('> **Back-Hinweis:** So.'), /callout-label">Back-Hinweis</);
  assert.match(render('> **Warning:** Hot.'), /callout-warn/);
  assert.match(render('> [!tip] Good idea\n> Do this.'), /callout-tip[\s\S]*Good idea[\s\S]*Do this/);
  assert.match(render('> [!warning]\n> Careful.'), /callout-warn[\s\S]*Careful/);
  assert.match(render('> Just something someone said.'), /<blockquote>/);
  assert.match(render('> **Gandhi** said this once.'), /<blockquote>/);
  assert.equal(calloutKind('Tipp'), 'tip');
});

test('summaries and sources render separately from the text', () => {
  const doc = renderPage(pageOf('# T\n\n**Summary**: About *this*.\n\n**Sources**: a, b\n\nBody.\n'), graph);
  assert.equal(doc.facts.find((f) => f.kind === 'summary').html, 'About <em>this</em>.');
  assert.doesNotMatch(doc.html, /Summary|About/);
  assert.match(doc.html, /Body/);
});

test('repeated headings get their own slugs, in the parser and the renderer alike', () => {
  const md = '# T\n\n## Beispiel\n\n### Beispiel\n\n## A & B\n\n## Beispiel\n\n## **Fett** [[x|Link]]\n';
  const page = pageOf(md);
  assert.deepEqual(page.sections.map((s) => s.slug), ['beispiel', 'beispiel-2', 'a-b', 'beispiel-3', 'fett-link']);
  const rendered = [...renderPage(page, graph).html.matchAll(/data-slug="([^"]+)"/g)].map((m) => m[1]);
  assert.deepEqual(rendered, page.sections.map((s) => s.slug));
});

test('a page is divided at the highest heading level used more than once', () => {
  assert.equal(splitLevel([2, 3, 2, 3]), 2);
  assert.equal(splitLevel([2, 3, 3, 3]), 3);
  assert.equal(splitLevel([3]), 3);
  assert.equal(splitLevel([2, 3]), 2);
  assert.equal(splitLevel([]), null);
});

test('reading time is never zero, and a section takes a moment to count as read', () => {
  assert.equal(readingMinutes(10), 1);
  assert.equal(readingMinutes(2200), 10);
  assert.equal(dwellSeconds(0), 1.5);
  assert.equal(dwellSeconds(60), 10);
  assert.equal(dwellSeconds(100000), 25);
});

test('long pages build their main headings first, then spread what room is left', () => {
  const h = (level, slug) => ({ level, slug });
  const sections = [
    h(2, 'a'), h(3, 'a1'), h(3, 'a2'), h(3, 'a3'),
    h(2, 'b'), h(3, 'b1'), h(3, 'b2'),
    h(4, 'deep'),
    h(2, 'c'), h(3, 'c1'),
  ];
  const slugs = (cap) => sectionsToBuild(sections, cap).map((s) => s.slug);
  assert.deepEqual(slugs(3), ['a', 'b', 'c']);
  assert.deepEqual(slugs(6), ['a', 'a1', 'b', 'b1', 'c', 'c1']);
  assert.deepEqual(slugs(99), sections.filter((s) => s.level <= 3).map((s) => s.slug));
  assert.deepEqual(sectionsToBuild([h(3, 'only'), h(3, 'two')], 1).map((s) => s.slug), ['only']);
});

test('the logbook keeps read sections until the page changes', () => {
  const data = new Map();
  const storage = { getItem: (k) => data.get(k) ?? null, setItem: (k, v) => data.set(k, v), removeItem: (k) => data.delete(k) };
  const graphOf = (hash) => ({ meta: { root: 'r', title: 't' }, pages: [{ id: 0, path: 'a.md', hash }, { id: 1, path: 'b.md', hash: 'same' }] });

  const first = new Logbook(graphOf('v1'), storage);
  assert.equal(first.markSection(0, 'intro'), true);
  assert.equal(first.markSection(0, 'intro'), false);
  first.markSection(1, 'other');

  const later = new Logbook(graphOf('v1'), storage);
  assert.deepEqual([...later.sectionsRead(0)], ['intro']);

  const changed = new Logbook(graphOf('v2'), storage);
  assert.equal(changed.sectionsRead(0).size, 0, 'a changed page is unread again');
  assert.deepEqual([...changed.sectionsRead(1)], ['other']);

  changed.resetVisits();
  assert.equal(new Logbook(graphOf('v2'), storage).sectionsRead(1).size, 0);
});

test('a logbook saved before sections existed still loads', () => {
  const graphOne = { meta: { root: 'r', title: 't' }, pages: [{ id: 0, path: 'a.md', hash: 'x' }] };
  const data = new Map();
  const storage = { getItem: (k) => data.get(k) ?? null, setItem: (k, v) => data.set(k, v), removeItem: () => {} };
  const key = new Logbook(graphOne, storage).key;
  data.set(key, JSON.stringify({ version: 1, seen: { 'a.md': 'x' }, visits: { 'a.md': 1 } }));
  const old = new Logbook(graphOne, storage);
  assert.equal(old.isVisited(0), true);
  assert.equal(old.sectionsRead(0).size, 0);
});

// ---- expeditions planned on the map ---------------------------------------------------

const toyGraph = (edges, clusters = {}) => {
  const ids = [...new Set(edges.flat())].sort((a, b) => a - b);
  const pages = [];
  for (const id of ids) pages[id] = { id, importance: 1 - id / 100, cluster: clusters[id] ?? 0 };
  return { pages, edges: edges.map(([s, t]) => ({ s, t, w: 1 })) };
};

test('a route planned by hand always hangs together', () => {
  const g = toyGraph([[0, 1], [1, 2], [2, 3], [5, 6]]);
  assert.deepEqual(extendPlan(g, [], 2), [2]);
  assert.deepEqual(extendPlan(g, [0], 1), [0, 1]);
  assert.deepEqual(extendPlan(g, [0], 3), [0, 1, 2, 3], 'the way there is filled in');
  assert.deepEqual(extendPlan(g, [0, 1], 1), [0, 1], 'nothing twice');
  assert.deepEqual(extendPlan(g, [2, 1, 0], 3), [2, 1, 0, 3], 'known places are passed through, not repeated');
  assert.deepEqual(extendPlan(g, [0], 5), [0, 5], 'an island can only be jumped to');
});

test('a route through everything visits each place once, along links wherever it can', () => {
  // A hub with arms: going down an arm and back would strand the rest if you weren't careful.
  const edges = [[0, 1], [1, 2], [2, 3], [3, 0], [0, 4], [4, 5], [0, 6], [6, 7], [7, 3]];
  const g = toyGraph(edges);
  const walk = coverageWalk(g, [0, 1, 2, 3, 4, 5, 6, 7]);
  assert.equal(walk.length, 8);
  assert.equal(new Set(walk).size, 8);
  assert.equal(walk[0], 0, 'the most important place first');
  const adjacency = buildAdjacency(g);
  const direct = walk.filter((id, i) => i > 0 && adjacency.get(walk[i - 1]).some((l) => l.to === id)).length;
  assert.ok(direct >= 6, `${direct} of 7 steps follow a link: ${walk}`);
  assert.equal(coverageWalk(g, [1, 2, 3], { start: 3 })[0], 3, 'it can start where you stand');
  assert.deepEqual(coverageWalk(g, []), []);
});

test('it finishes a world before leaving it, and reaches islands by jumping', () => {
  const g = toyGraph([[0, 1], [1, 2], [0, 10], [10, 11], [20, 21]], { 10: 1, 11: 1, 20: 2, 21: 2 });
  const walk = coverageWalk(g, [0, 1, 2, 10, 11, 20, 21]);
  assert.equal(new Set(walk).size, 7);
  const clusters = walk.map((id) => g.pages[id].cluster);
  const changes = clusters.filter((c, i) => i > 0 && c !== clusters[i - 1]).length;
  assert.equal(changes, 2, `one visit per world: ${clusters}`);
});

test('an unfinished expedition survives a reload and changes to the wiki', () => {
  const data = new Map();
  const storage = { getItem: (k) => data.get(k) ?? null, setItem: (k, v) => data.set(k, v), removeItem: () => {} };
  const pages = ['a.md', 'b.md', 'c.md'].map((path, id) => ({ id, path, hash: 'x' }));
  const log = new Logbook({ meta: { root: 'r', title: 't' }, pages }, storage);
  log.saveTrip({ title: 'Trip', at: 2, stops: [{ page: 0, note: 'hi' }, { page: 1 }, { page: 2 }] });
  const later = new Logbook({ meta: { root: 'r', title: 't' }, pages }, storage).savedTrip();
  assert.equal(later.title, 'Trip');
  assert.equal(later.at, 2);
  assert.equal(later.stops[0].note, 'hi');

  // Pages are renumbered, and one is gone: paths still find the way.
  const fewer = [{ id: 0, path: 'c.md', hash: 'x' }, { id: 1, path: 'a.md', hash: 'x' }];
  const moved = new Logbook({ meta: { root: 'r', title: 't' }, pages: fewer }, storage);
  const trip = moved.savedTrip();
  assert.deepEqual(trip.stops.map((s) => s.page), [1, 0]);
  assert.equal(trip.at, 1);
  moved.clearTrip();
  assert.equal(new Logbook({ meta: { root: 'r', title: 't' }, pages: fewer }, storage).savedTrip(), null);
});
