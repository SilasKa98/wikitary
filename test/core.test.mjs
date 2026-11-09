import test from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import { mkdtemp, mkdir, writeFile, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { fileURLToPath } from 'node:url';
import { parseFrontmatter, parsePage, extractLinks, maskCode, slugify } from '../src/core/parse.mjs';
import { createResolver } from '../src/core/resolve.mjs';
import { analyseFolders } from '../src/core/cluster.mjs';
import { buildGraph, describeGraph, loadConfig, prettifyRoot } from '../src/core/pipeline.mjs';
import { isLocalHost } from '../src/core/serve.mjs';

const DEMO = path.join(path.dirname(fileURLToPath(import.meta.url)), '..', 'examples', 'demo-wiki');

async function tempWiki(files) {
  const dir = await mkdtemp(path.join(tmpdir(), 'wikitary-'));
  for (const [rel, content] of Object.entries(files)) {
    const abs = path.join(dir, rel);
    await mkdir(path.dirname(abs), { recursive: true });
    await writeFile(abs, content);
  }
  return dir;
}

const page = (p, content) => parsePage({ path: p, content, mtime: 0 });

test('frontmatter: scalars, inline lists, block lists, BOM and CRLF', () => {
  const { data, body } = parseFrontmatter('﻿---\ntitle: "Hello: World"\ntags: [a, "b c"]\naliases:\n  - One\n  - Two\nnested:\n  skip: me\n---\nBody\n');
  assert.equal(data.title, 'Hello: World');
  assert.deepEqual(data.tags, ['a', 'b c']);
  assert.deepEqual(data.aliases, ['One', 'Two']);
  assert.equal(body.trim(), 'Body');
  const p = page('a.md', '---\r\ntitle: Windows\r\n---\r\n# Ignored\r\n');
  assert.equal(p.title, 'Windows');
});

test('title falls back from frontmatter to H1 to file name', () => {
  assert.equal(page('x.md', '---\ntitle: T\n---\n# H\n').title, 'T');
  assert.equal(page('x.md', '# Heading\n').title, 'Heading');
  assert.equal(page('dir/some-page.md', 'no heading').title, 'Some page');
  assert.equal(page('Jane Doe.md', 'text').title, 'Jane Doe');
});

test('links: wiki, alias, anchors, tables, markdown; code and URLs are ignored', () => {
  const md = maskCode([
    'See [[alpha]], [[beta|the beta]], [[gamma#part|g]] and [[#local]].',
    '| [[delta\\|in a table]] |',
    '[md](../dir/epsilon.md) [enc](my%20page.md#x) [site](https://example.com) [mail](mailto:a@b.c) [pic](a.png)',
    '`[[in-inline-code]]`',
    '```',
    '[[in-fence]]',
    '```',
    '![[embedded.png]]',
  ].join('\n'));
  const targets = extractLinks(md).map((l) => l.target);
  assert.deepEqual(targets, ['alpha', 'beta', 'gamma', 'delta', '../dir/epsilon.md', 'my page.md']);
});

test('summary comes from labelled text in English and German', () => {
  assert.equal(page('a.md', '# T\n\n**Summary**: Short text.\n\nBody').summary, 'Short text.');
  assert.equal(page('a.md', '# T\n\n**Zusammenfassung**: Eine [[link|Sache]].\n').summary, 'Eine Sache.');
  assert.equal(page('a.md', '# T\n\nFirst real paragraph of this page.\n').summary, 'First real paragraph of this page.');
});

test('section slugs ignore code fences and match headings', () => {
  const p = page('a.md', '# T\n## One: first!\ntext here\n```\n## not a heading\n```\n### Two\n');
  assert.deepEqual(p.sections.map((s) => s.slug), ['one-first', 'two']);
  assert.equal(slugify('Teig → Brot'), 'teig-→-brot');
});

test('resolver handles nested folders the way Obsidian does', () => {
  const pages = [
    page('a/note.md', ''),
    page('b/note.md', ''),
    page('b/sub/deep.md', '---\naliases: [Deep Thought]\n---\n'),
    page('root page.md', '# Pretty Title\n'),
  ];
  const resolve = createResolver(pages);
  const from = (p) => pages.find((x) => x.path === p);
  assert.equal(resolve(from('a/note.md'), 'deep').path, 'b/sub/deep.md', 'unique basename');
  assert.equal(resolve(from('b/sub/deep.md'), '../note.md').path, 'b/note.md', 'relative path');
  assert.equal(resolve(from('a/note.md'), 'b/note').path, 'b/note.md', 'root-relative path');
  assert.equal(resolve(from('b/sub/deep.md'), 'note').path, 'b/note.md', 'ambiguous name picks nearest');
  assert.equal(resolve(from('a/note.md'), 'note').path, 'a/note.md', 'ambiguous name prefers own folder');
  assert.equal(resolve(from('a/note.md'), 'Deep Thought').path, 'b/sub/deep.md', 'alias');
  assert.equal(resolve(from('a/note.md'), 'pretty title').path, 'root page.md', 'title, case-insensitive');
  assert.equal(resolve(from('a/note.md'), 'root_page').path, 'root page.md', 'spaces and underscores match');
  assert.equal(resolve(from('a/note.md'), 'missing'), null);
});

test('folders named after page types are not mistaken for topics', () => {
  const mk = (...paths) => paths.map((p) => ({ path: p }));
  assert.equal(analyseFolders(mk('concepts/a.md', 'concepts/b.md', 'entities/c.md', 'entities/d.md', 'sources/e.md', 'sources/f.md')).meaningful, false);
  assert.equal(analyseFolders(mk('physics/a.md', 'physics/b.md', 'music/c.md', 'music/d.md')).meaningful, true);
});

test('demo wiki: pages in nested folders become worlds, with star, comet, orphan and ghost', async () => {
  const g = await buildGraph({ cwd: DEMO, config: {} });
  assert.equal(g.pages.length, 24);
  assert.equal(g.pages[g.star].path, 'index.md');
  assert.equal(g.pages[g.comet].path, 'log.md');
  assert.deepEqual(g.orphans.map((i) => g.pages[i].path), ['notes/old-oven-notes.md']);
  assert.deepEqual(g.ghosts.map((x) => x.title), ['retarding-dough']);
  assert.ok(g.clusters.length >= 3 && g.clusters.length <= 9, `${g.clusters.length} clusters`);

  // Every normal page is on exactly one world.
  const seen = g.clusters.flatMap((c) => c.pageIds);
  assert.equal(new Set(seen).size, seen.length);
  assert.equal(seen.length, 24 - 2 - 1);

  // Worlds have unique names and unique civilisations, and the largest one is Earth.
  assert.equal(new Set(g.clusters.map((c) => c.name)).size, g.clusters.length);
  assert.equal(new Set(g.clusters.map((c) => c.civ)).size, g.clusters.length);
  assert.equal(g.clusters[0].civ, 'terra');

  // Plain Markdown links across folders resolve too.
  const yeast = g.pages.find((p) => p.path === 'science/yeast.md');
  const starter = g.pages.findIndex((p) => p.path === 'technique/sourdough-starter.md');
  assert.ok(g.edges.some((e) => e.s === yeast.id && e.t === starter));
  assert.ok(describeGraph(g).includes('Bread'));
});

test('clustering is deterministic', async () => {
  const a = await buildGraph({ cwd: DEMO, config: {} });
  const b = await buildGraph({ cwd: DEMO, config: {} });
  assert.deepEqual(a.clusters, b.clusters);
});

test('modes and config: strict folders, planet count, frontmatter, renames, assignments', async () => {
  const g = await buildGraph({ cwd: DEMO, config: {}, mode: 'folders' });
  assert.deepEqual(g.clusters.map((c) => c.name).sort(), ['Breads', 'History', 'Science', 'Technique']);

  const renamed = await buildGraph({
    cwd: DEMO,
    mode: 'folders',
    config: { title: 'My Bread', planets: { Science: { name: 'Crumb Lab', civ: 'prisma' } } },
  });
  assert.equal(renamed.meta.title, 'My Bread');
  const lab = renamed.clusters.find((c) => c.name === 'Crumb Lab');
  assert.equal(lab.civ, 'prisma');

  const dir = await tempWiki({
    'a.md': '---\nplanet: Alpha\n---\n[[b]]',
    'b.md': '---\nplanet: Alpha\n---\n[[a]]',
    'c.md': '---\nplanet: Beta\n---\n[[a]]',
    'd.md': '---\nplanet: Beta\n---\n[[c]]',
  });
  try {
    const fm = await buildGraph({ cwd: dir, config: {} });
    assert.equal(fm.meta.clusterMode, 'frontmatter');
    assert.deepEqual(fm.clusters.map((c) => c.name).sort(), ['Alpha', 'Beta']);
  } finally {
    await rm(dir, { recursive: true });
  }
});

test('non-wiki files are skipped and ./wiki is auto-detected', async () => {
  const dir = await tempWiki({
    'CLAUDE.md': '# Agent instructions',
    'raw/source.md': '# Raw source',
    'wiki/a.md': '# A\n[[b]]',
    'wiki/b.md': '# B\n[[a]]',
    'wiki/node_modules/pkg/README.md': '# Not a page',
    'wiki/.obsidian/x.md': '# Not a page',
  });
  try {
    const g = await buildGraph({ cwd: dir, config: {} });
    assert.deepEqual(g.pages.map((p) => p.path).sort(), ['a.md', 'b.md']);
    const excluded = await buildGraph({ cwd: dir, config: { exclude: ['b.md'] } });
    assert.deepEqual(excluded.pages.map((p) => p.path), ['a.md']);
  } finally {
    await rm(dir, { recursive: true });
  }
});

test('tiny and degenerate wikis still build', async () => {
  const one = await tempWiki({ 'only.md': '# Only' });
  const noLinks = await tempWiki({ 'a.md': '# A', 'b.md': '# B', 'c.md': '# C' });
  const empty = await tempWiki({ 'readme.txt': 'no markdown' });
  try {
    const g1 = await buildGraph({ cwd: one, config: {} });
    assert.equal(g1.pages.length, 1);
    const g2 = await buildGraph({ cwd: noLinks, config: {} });
    assert.equal(g2.orphans.length, 3);
    await assert.rejects(buildGraph({ cwd: empty, config: {} }), /No Markdown files/);
  } finally {
    await Promise.all([one, noLinks, empty].map((d) => rm(d, { recursive: true })));
  }
});

test('requested planet count is respected', async () => {
  const g = await buildGraph({ cwd: DEMO, config: {}, count: 2 });
  assert.equal(g.clusters.length, 2);
});

test('every topic folder becomes a world, beyond nine and up to the number of civilisations', async () => {
  const TOPICS = ['astronomy', 'baking', 'chess', 'dance', 'economics', 'forestry', 'geology', 'harbours', 'insects', 'jazz', 'knitting', 'law',
    'mining', 'nursing', 'opera', 'poetry', 'quilting', 'rowing', 'sailing', 'tennis'];
  const wikiOf = (topics) => {
    const files = {};
    topics.forEach((t, k) => {
      const size = 2 + (k % 4);
      for (let i = 0; i < size; i++) {
        const others = Array.from({ length: size }, (_, j) => j).filter((j) => j !== i).map((j) => `[[${t}-${j}]]`).join(' ');
        // One link to the next topic, as real wikis cross-reference.
        const across = i === 0 ? ` See also [[${topics[(k + 1) % topics.length]}-0]].` : '';
        files[`${t}/${t}-${i}.md`] = `# ${t} ${i}\n\nNotes about ${t}, part ${i} of the ${t} folder. ${others}${across}\n`;
      }
    });
    return files;
  };
  const twelve = await tempWiki(wikiOf(TOPICS.slice(0, 12)));
  const twenty = await tempWiki(wikiOf(TOPICS));
  try {
    const g = await buildGraph({ cwd: twelve, config: {} });
    assert.equal(g.clusters.length, 12);
    for (const c of g.clusters) {
      const folders = new Set(c.pageIds.map((id) => g.pages[id].path.split('/')[0]));
      assert.equal(folders.size, 1, `${c.name} mixes folders: ${[...folders].join(', ')}`);
    }
    assert.equal(new Set(g.clusters.map((c) => c.civ)).size, 12);
    const many = await buildGraph({ cwd: twenty, config: {} });
    assert.equal(many.clusters.length, 16);
    assert.equal(new Set(many.clusters.map((c) => c.civ)).size, 16);
  } finally {
    await Promise.all([twelve, twenty].map((d) => rm(d, { recursive: true })));
  }
});

test('a wiki opened from elsewhere brings its own config; otherwise the one in the current folder applies', async () => {
  const dir = await tempWiki({
    'wikitary.config.json': '{"title": "Outer"}',
    'mine/wikitary.config.json': '{"title": "Inner"}',
    'mine/a.md': '# A',
    'bare/a.md': '# A',
    'custom.json': '{"title": "Custom"}',
  });
  try {
    assert.equal(loadConfig(dir, undefined, 'mine').title, 'Inner');
    assert.equal(loadConfig(dir, undefined, 'bare').title, 'Outer');
    assert.equal(loadConfig(dir).title, 'Outer');
    assert.equal(loadConfig(dir, 'custom.json', 'mine').title, 'Custom');
    assert.throws(() => loadConfig(dir, 'missing.json'), /not found/);
    assert.deepEqual(loadConfig(path.join(dir, 'bare')), {});
  } finally {
    await rm(dir, { recursive: true });
  }
});

test('single pages can be moved to a planet without giving up automatic clustering', async () => {
  const planetOf = (g, p) => g.clusters.find((c) => c.pageIds.includes(g.pages.findIndex((x) => x.path === p)));
  const before = await buildGraph({ cwd: DEMO, config: {} });
  assert.equal(planetOf(before, 'breads/baguette.md').name, 'Breads');

  // By the name the config gives a planet, by its generated name, and to a planet that does not exist yet.
  const g = await buildGraph({
    cwd: DEMO,
    config: {
      planets: { Science: { name: 'Crumb Lab' } },
      assign: { 'breads/baguette.md': 'Crumb Lab', 'breads/rye-bread.md': 'technique', 'history/ancient-egypt.md': 'Archive' },
    },
  });
  assert.notEqual(g.meta.clusterMode, 'frontmatter');
  assert.equal(planetOf(g, 'breads/baguette.md').name, 'Crumb Lab');
  assert.equal(planetOf(g, 'breads/rye-bread.md').name, 'Technique');
  assert.equal(planetOf(g, 'history/ancient-egypt.md').name, 'Archive');

  // Everything else stays where the clustering put it, and every page is still on one world.
  for (const p of ['science/gluten.md', 'breads/ciabatta.md', 'history/bread-guilds.md', 'technique/scoring.md']) {
    assert.equal(planetOf(g, p).name.replace('Crumb Lab', 'Science'), planetOf(before, p).name);
  }
  const seen = g.clusters.flatMap((c) => c.pageIds);
  assert.equal(new Set(seen).size, seen.length);
  assert.equal(seen.length, before.clusters.flatMap((c) => c.pageIds).length);
  assert.equal(new Set(g.clusters.map((c) => c.name)).size, g.clusters.length);
});

test('a planet field on a few pages moves them; topic and category alone do not', async () => {
  const dir = await tempWiki({
    'a.md': '# A\nSourdough starter yeast fermentation. [[b]] [[c]]',
    'b.md': '# B\nYeast fermentation sourdough. [[a]] [[c]]',
    'c.md': '# C\nFermentation yeast starter. [[a]] [[b]]',
    'd.md': '---\nplanet: Ovens\n---\n# D\nSourdough yeast. [[a]]',
    'e.md': '---\ncategory: concept\n---\n# E\nStarter fermentation. [[b]]',
    'f.md': '# F\nYeast starter sourdough. [[c]]',
  });
  try {
    const g = await buildGraph({ cwd: dir, config: {} });
    const names = (p) => g.clusters.find((c) => c.pageIds.includes(g.pages.findIndex((x) => x.path === p))).name;
    assert.equal(names('d.md'), 'Ovens');
    assert.notEqual(names('e.md'), 'Concept');
  } finally {
    await rm(dir, { recursive: true });
  }
});

test('the server answers only requests addressed to this machine', () => {
  for (const host of ['localhost:4173', '127.0.0.1:4173', 'LOCALHOST', '[::1]:4173', 'localhost']) {
    assert.ok(isLocalHost(host), host);
  }
  for (const host of ['evil.example:4173', 'localhost.evil.example', '127.0.0.1.nip.io', 'evil.example', '', undefined]) {
    assert.ok(!isLocalHost(host), String(host));
  }
});

test('a wiki folder named "wiki" takes its parent\'s name, but never the name of the home folder', () => {
  const home = path.join(path.sep, 'home', 'jane');
  assert.equal(prettifyRoot(path.join(home, 'projects', 'bread-notes', 'wiki'), home), 'bread notes');
  assert.equal(prettifyRoot(path.join(home, 'wiki'), home), 'wiki');
  assert.equal(prettifyRoot(path.join(home, 'my_vault'), home), 'my vault');
});

test('integrated and software graphics start on a lighter quality level', async () => {
  const { pickQuality } = await import('../src/viewer/engine/quality.js');
  assert.equal(pickQuality({ gpu: 'ANGLE (NVIDIA, NVIDIA GeForce RTX 3060 Direct3D11 vs_5_0 ps_5_0, D3D11)' }), 'high');
  assert.equal(pickQuality({ gpu: 'ANGLE (AMD, AMD Radeon RX 6700 XT Direct3D11 vs_5_0 ps_5_0, D3D11)' }), 'high');
  assert.equal(pickQuality({ gpu: 'ANGLE (Intel, Intel(R) Arc(TM) A770 Graphics Direct3D11 vs_5_0 ps_5_0, D3D11)' }), 'high');
  assert.equal(pickQuality({ gpu: 'ANGLE (Intel, Intel(R) UHD Graphics 620 Direct3D11 vs_5_0 ps_5_0, D3D11)' }), 'medium');
  assert.equal(pickQuality({ gpu: 'ANGLE (Intel, Intel(R) Iris(R) Xe Graphics Direct3D11 vs_5_0 ps_5_0, D3D11)' }), 'medium');
  assert.equal(pickQuality({ gpu: 'ANGLE (AMD, AMD Radeon(TM) Graphics Direct3D11 vs_5_0 ps_5_0, D3D11)' }), 'medium');
  assert.equal(pickQuality({ gpu: 'ANGLE (Intel, Intel(R) UHD Graphics 600 Direct3D11 vs_5_0 ps_5_0, D3D11)', cores: 4 }), 'low');
  assert.equal(pickQuality({ gpu: 'ANGLE (Google, Vulkan 1.3.0 (SwiftShader Device (Subzero)), SwiftShader driver)' }), 'low');
  assert.equal(pickQuality({ gpu: 'Apple GPU', mobile: true }), 'low');
  assert.equal(pickQuality({ gpu: '' }), 'high');
});

test('every civilisation the clustering can assign exists in the viewer, complete and in both languages', async () => {
  const { CIV_IDS } = await import('../src/core/pipeline.mjs');
  const { CIVS } = await import('../src/viewer/civs/index.js');
  const { MAX_PLANETS } = await import('../src/core/cluster.mjs');
  assert.deepEqual(Object.keys(CIVS).sort(), [...CIV_IDS].sort());
  assert.ok(CIV_IDS.length >= MAX_PLANETS);
  for (const id of CIV_IDS) {
    const civ = CIVS[id];
    assert.equal(civ.id, id);
    for (const key of ['name', 'people', 'blurb', 'bridge']) assert.ok(civ[key]?.en && civ[key]?.de, `${id}.${key}`);
    for (const key of ['landmark', 'section', 'filler', 'plaza', 'scatter', 'ship']) assert.equal(typeof civ[key], 'function', `${id}.${key}`);
    for (const key of ['terrain', 'atmosphere', 'palette', 'env', 'map', 'road', 'walker', 'flyer']) assert.ok(civ[key], `${id}.${key}`);
    assert.equal(typeof civ.surfaceGLSL, 'string', `${id}.surfaceGLSL`);
  }
});
