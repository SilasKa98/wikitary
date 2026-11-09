// Wiki folder → the graph document the viewer renders.

import path from 'node:path';
import os from 'node:os';
import { createHash } from 'node:crypto';
import { readFileSync, existsSync } from 'node:fs';
import { scanWiki, resolveWikiRoot } from './scan.mjs';
import { parsePage, parseIndexSections } from './parse.mjs';
import { createResolver, normKey } from './resolve.mjs';
import { clusterPages } from './cluster.mjs';

const STAR_NAMES = ['index', '_index', 'home', 'readme', 'overview', 'moc', '00-index', 'start', 'startseite', 'übersicht', 'uebersicht', 'map-of-content'];
const COMET_NAMES = ['log', 'changelog', 'journal', 'protokoll', 'history', 'chronik', 'activity'];

export const CIV_IDS = ['terra', 'vektor', 'ignis', 'prisma', 'myzel', 'auris', 'thalassa', 'kronos', 'sylva',
  'nimbus', 'selene', 'lanterna', 'apis', 'lithos', 'fulmen', 'palus'];

// A gentle thematic nudge when picking which civilisation inhabits a cluster.
const CIV_AFFINITY = {
  vektor: /\b(software|code|program|computer|data|daten|algorithm|network|netzwerk|digital|internet|robot|ai|ki|llm|electronic|elektron)/i,
  kronos: /\b(knit|strick|sew|näh|textil|tool|werkzeug|engineer|ingenieur|process|prozess|method|methode|workflow|mechani|craft|handwerk|clock|uhr|time|zeit|rule|regel|law|recht)/i,
  prisma: /\b(math|physi|theor|logic|logik|concept|konzept|abstract|abstrakt|philosoph|crystal|kristall|light|licht)/i,
  ignis: /\b(energy|energie|industr|fire|feuer|metal|metall|forge|schmied|factory|fabrik|mining|bergbau|volcan|vulkan)/i,
  myzel: /\b(nurs|pflege|medic|anatom|disease|krankheit|bio|health|medizin|medicine|gene|cell|zelle|organism|ecolog|ökolog|neuro|brain|gehirn|fung|pilz)/i,
  sylva: /\b(history|geschichte|people|kultur|culture|society|gesellschaft|nature|natur|education|bildung|forest|wald|plant|pflanze|garden|garten)/i,
  thalassa: /\b(harbo|hafen|port\b|sail|segel|fish|fisch|boat|boot|ocean|ozean|meer|sea|water|wasser|river|fluss|climate|klima|travel|reise|trade|handel|ship|schiff)/i,
  auris: /\b(econom|wirtschaft|finance|finanz|market|markt|business|money|geld|desert|wüste|sun|sonne)/i,
  nimbus: /\b(communicat|kommunikat|media|medien|news|nachricht|social|sozial|weather|wetter|wind|sky|himmel|idea|idee)/i,
  selene: /\b(space|weltraum|astronom|star|stern|research|forschung|science|wissenschaft|satellit|rocket|rakete|moon|mond|univers|kosm|cosm)/i,
  lanterna: /\b(jazz|song|lied|opera|oper\b|dance|tanz|orchest|art\b|arts|kunst|music|musik|literat|poem|poet|gedicht|lyrik|film|kino|design|story|stories|erzähl|theat|paint|gemälde|novel)/i,
  apis: /\b(insect|insekt|project|projekt|team|organi|manage|logisti|food|essen|ernähr|nutrition|agricult|landwirt|farm|bee|biene|cooperat|kooperat)/i,
  lithos: /\b(geolog|stone|stein|rock|fels|myth|religio|glaube|faith|archaeolog|archäolog|ancient|antik|legend|sage|ruin|temple|tempel|empire|imperium|greek|griech)/i,
  fulmen: /\b(politic|politik|war\b|wars|krieg|militar|militär|security|sicherheit|conflict|konflikt|strateg|power|macht|govern|regier|staat|defen|verteid)/i,
  palus: /\b(ferment|brew|brau|chemi|pharma|drug|medikament|recipe|rezept|cook|koch|potion|trank|experiment|labor|swamp|sumpf|moor)/i,
};

/**
 * Reads the config: an explicit file, else the one inside a wiki folder given with --wiki,
 * else the one in the current folder. A wiki that brings its own settings keeps them when
 * it is opened from somewhere else.
 */
export function loadConfig(cwd, explicitPath, wikiDir) {
  let p;
  if (explicitPath) p = path.resolve(cwd, explicitPath);
  else {
    const candidates = [wikiDir && path.resolve(cwd, wikiDir, 'wikitary.config.json'), path.join(cwd, 'wikitary.config.json')];
    p = candidates.find((c) => c && existsSync(c));
  }
  if (!p || !existsSync(p)) {
    if (explicitPath) throw new Error(`Config file not found: ${p}`);
    return {};
  }
  try {
    return JSON.parse(readFileSync(p, 'utf8'));
  } catch (e) {
    throw new Error(`Could not parse ${p}: ${e.message}`);
  }
}

function pagerank(n, adjacency, iterations = 40, d = 0.85) {
  let rank = new Float64Array(n).fill(1 / Math.max(n, 1));
  const out = adjacency.map((a) => a.length);
  for (let it = 0; it < iterations; it++) {
    const next = new Float64Array(n).fill((1 - d) / Math.max(n, 1));
    let dangling = 0;
    for (let i = 0; i < n; i++) {
      if (out[i] === 0) dangling += rank[i];
      else for (const j of adjacency[i]) next[j] += (d * rank[i]) / out[i];
    }
    for (let i = 0; i < n; i++) next[i] += (d * dangling) / n;
    rank = next;
  }
  return rank;
}

// Where a page's city stands, from the smallest settlement (0) to a metropolis (4).
const TIER_FLOORS = [0.2, 0.4, 0.62, 0.82];

/**
 * How much a page matters, from 0 to 1: how connected it is, how much the wiki leans on it,
 * how much it says. Half absolute and half relative, so that a wiki with one giant hub and
 * a wiki of equals both end up with a readable range of cities.
 * @param {{mentions:number, rank:number, words:number, sections:number}[]} pages
 */
export function scoreImportance(pages) {
  const max = (fn) => Math.max(...pages.map(fn), 1e-9);
  const maxMentions = max((p) => Math.log1p(p.mentions));
  const maxRank = max((p) => p.rank);
  const maxWords = max((p) => Math.log1p(p.words));
  const maxSections = max((p) => Math.log1p(p.sections));
  const raw = pages.map((p) => 0.45 * (Math.log1p(p.mentions) / maxMentions)
    + 0.2 * (p.rank / maxRank)
    + 0.25 * (Math.log1p(p.words) / maxWords)
    + 0.1 * (Math.log1p(p.sections) / maxSections));
  const top = Math.max(...raw), bottom = Math.min(...raw);
  const sorted = [...raw].sort((a, b) => a - b);
  const below = (x) => {
    let lo = 0, hi = sorted.length;
    while (lo < hi) { const mid = (lo + hi) >> 1; if (sorted[mid] < x) lo = mid + 1; else hi = mid; }
    return lo;
  };
  return raw.map((x) => {
    const percentile = pages.length > 1 ? below(x) / (pages.length - 1) : 1;
    const absolute = top > bottom ? (x - bottom) / (top - bottom) : 1;
    return +(0.55 * absolute + 0.45 * percentile).toFixed(3);
  });
}

export function tierOf(importance) {
  let tier = 0;
  while (tier < TIER_FLOORS.length && importance >= TIER_FLOORS[tier]) tier++;
  return tier;
}

/** Expeditions written by a person or an agent: named tours through the wiki. */
function resolveExpeditions(list, pages, index, resolve) {
  const problems = [];
  const home = { path: '' };
  const expeditions = [];
  for (const raw of Array.isArray(list) ? list : []) {
    if (!raw?.title || !Array.isArray(raw.stops)) { problems.push(`Expedition without a title or stops: ${JSON.stringify(raw).slice(0, 80)}`); continue; }
    const stops = [];
    for (const stop of raw.stops) {
      const target = typeof stop === 'string' ? stop : stop?.page;
      const hit = target ? resolve(home, String(target)) : null;
      if (hit) stops.push({ page: index.get(hit), note: typeof stop === 'object' && stop.note ? String(stop.note).slice(0, 400) : '' });
      else problems.push(`Expedition "${raw.title}": no page matches "${target}"`);
    }
    if (stops.length) expeditions.push({ title: String(raw.title).slice(0, 120), description: String(raw.description || '').slice(0, 400), stops });
  }
  return { expeditions, problems };
}

function detectLanguage(text) {
  const sample = ` ${text.slice(0, 20000).toLowerCase()} `;
  const count = (re) => (sample.match(re) || []).length;
  return count(/\s(und|der|die|das|ist|nicht|für|eine|mit)\s/g) > count(/\s(and|the|is|not|for|with|of|that)\s/g) ? 'de' : 'en';
}

function pickSpecial(pages, names, explicit) {
  if (explicit) {
    const key = normKey(explicit);
    const hit = pages.find((p) => normKey(p.path) === key || normKey(p.name) === key);
    if (hit) return hit;
  }
  const candidates = pages
    .filter((p) => names.includes(normKey(p.name)))
    .sort((a, b) => a.path.split('/').length - b.path.split('/').length || names.indexOf(normKey(a.name)) - names.indexOf(normKey(b.name)));
  // Only a root-level page can stand for the whole wiki.
  return candidates.find((p) => !p.path.includes('/')) || null;
}

function assignCivs(clusters, overrides) {
  const free = new Set(CIV_IDS);
  const result = new Array(clusters.length).fill(null);
  clusters.forEach((c, i) => {
    const o = overrides[i];
    if (o && CIV_IDS.includes(o)) { result[i] = o; free.delete(o); }
  });
  // The largest cluster is home: humanity's Earth.
  const firstOpen = result.indexOf(null);
  if (firstOpen >= 0 && free.has('terra')) { result[firstOpen] = 'terra'; free.delete('terra'); }
  // The planet's name says most about it, its first keywords more than its last, which are
  // often just the names of pages it links to elsewhere.
  const affinity = (civ, c) => {
    const re = CIV_AFFINITY[civ];
    if (!re) return 0;
    return (re.test(c.name) ? 3 : 0) + c.keywords.reduce((s, k, i) => s + (re.test(k) ? 1 / (1 + i * 0.5) : 0), 0);
  };
  // Strongest matches first across all worlds, so a world without any theme doesn't take
  // the civilisation that a later world fits.
  const pairs = [];
  clusters.forEach((c, i) => {
    if (result[i]) return;
    for (const civ of free) {
      const score = affinity(civ, c);
      if (score > 0) pairs.push({ i, civ, score });
    }
  });
  pairs.sort((a, b) => b.score - a.score || a.i - b.i || CIV_IDS.indexOf(a.civ) - CIV_IDS.indexOf(b.civ));
  for (const { i, civ } of pairs) {
    if (result[i] || !free.has(civ)) continue;
    result[i] = civ;
    free.delete(civ);
  }
  clusters.forEach((c, i) => {
    if (result[i]) return;
    const next = free.values().next().value || CIV_IDS[1 + (i % (CIV_IDS.length - 1))];
    result[i] = next;
    free.delete(next);
  });
  return result;
}

/**
 * @param {{cwd:string, wiki?:string, config?:object, mode?:string, count?:number}} options
 */
export async function buildGraph(options) {
  const cwd = options.cwd || process.cwd();
  const config = options.config || {};
  const root = resolveWikiRoot(cwd, options.wiki || config.wiki);
  const files = await scanWiki(root, { exclude: config.exclude || [], include: config.include || null });
  if (!files.length) throw new Error(`No Markdown files found in ${root}`);

  const pages = files.map(parsePage);
  const resolve = createResolver(pages);
  const index = new Map(pages.map((p, i) => [p, i]));

  const star = pickSpecial(pages, STAR_NAMES, config.star);
  const comet = pickSpecial(pages, COMET_NAMES.filter((n) => !star || n !== normKey(star.name)), config.comet);
  const special = new Set([star, comet].filter(Boolean));

  // Resolve every link; unresolved targets become "ghosts" (construction sites in the city).
  const edgeMap = new Map();
  const ghostMap = new Map();
  pages.forEach((page, i) => {
    page.linkMap = {};
    page.outgoing = new Set();
    for (const link of page.links) {
      const target = resolve(page, link.target);
      if (target === page) continue;
      if (target) {
        const t = index.get(target);
        page.linkMap[link.target] = t;
        page.linkMap[link.raw] = t;
        page.outgoing.add(t);
        const key = `${i}>${t}`;
        edgeMap.set(key, (edgeMap.get(key) || 0) + 1);
      } else if (link.kind === 'wiki' || /\.(md|markdown|mdx)$/i.test(link.target)) {
        const key = normKey(link.target.split('/').pop());
        if (!ghostMap.has(key)) ghostMap.set(key, { title: link.target.split('/').pop().replace(/\.(md|markdown|mdx)$/i, ''), refs: new Set() });
        ghostMap.get(key).refs.add(i);
        page.linkMap[link.target] = `g:${key}`;
        page.linkMap[link.raw] = `g:${key}`;
      }
    }
  });

  const directed = [...edgeMap.entries()].map(([k, count]) => {
    const [s, t] = k.split('>').map(Number);
    return { s, t, count };
  });

  const adjacency = pages.map(() => []);
  for (const e of directed) if (!special.has(pages[e.s])) adjacency[e.s].push(e.t);
  const ranks = pagerank(pages.length, adjacency);
  const inDeg = new Array(pages.length).fill(0);
  const outDeg = new Array(pages.length).fill(0);
  for (const e of directed) {
    outDeg[e.s]++;
    if (!special.has(pages[e.s])) inDeg[e.t]++;
  }

  // Orphans: nothing but the index points to them, and they point nowhere.
  const body = pages.map((_, i) => i).filter((i) => !special.has(pages[i]));
  const linked = new Set();
  for (const e of directed) {
    if (special.has(pages[e.s]) || special.has(pages[e.t])) continue;
    linked.add(e.s);
    linked.add(e.t);
  }
  const orphans = body.filter((i) => !linked.has(i));
  const orphanSet = new Set(orphans);
  const clusterIdx = body.filter((i) => !orphanSet.has(i));

  const localOf = new Map(clusterIdx.map((g, l) => [g, l]));
  const undirected = new Map();
  for (const e of directed) {
    if (!localOf.has(e.s) || !localOf.has(e.t)) continue;
    const a = localOf.get(e.s), b = localOf.get(e.t);
    const key = a < b ? `${a}|${b}` : `${b}|${a}`;
    undirected.set(key, (undirected.get(key) || 0) + e.count);
  }
  const clusterEdges = [...undirected.entries()].map(([k, count]) => {
    const [a, b] = k.split('|').map(Number);
    return { a, b, count };
  });

  // The index page's own headings are curated topic groups.
  let indexGroups = [];
  if (star) {
    indexGroups = parseIndexSections(star.md).map((g) => {
      const members = new Set();
      for (const l of g.links) {
        const t = resolve(star, l.target);
        if (t && localOf.has(index.get(t))) members.add(localOf.get(index.get(t)));
      }
      return { title: g.title, members };
    }).filter((g) => g.members.size);
  }

  const assign = new Map(Object.entries(config.assign || {}));
  // A page may be assigned to a planet by the name the config gives it.
  const aliases = new Map(Object.entries(config.planets || {})
    .filter(([key, o]) => o?.name && !/^\d+$/.test(key))
    .map(([key, o]) => [o.name, key]));
  const result = clusterPages(clusterIdx.map((g) => pages[g]), clusterEdges, {
    mode: options.mode || config.cluster?.mode || 'auto',
    count: options.count || config.cluster?.count || null,
    indexGroups,
    assign,
    aliases,
  });

  const clusterOf = new Array(pages.length).fill(-1);
  const clusters = result.clusters.map((c, ci) => {
    const pageIds = c.members.map((l) => clusterIdx[l]);
    for (const g of pageIds) clusterOf[g] = ci;
    return { id: ci, name: c.name || `Cluster ${ci + 1}`, keywords: c.keywords, pageIds };
  });

  // Per-cluster overrides from the config, addressed by index or by generated name.
  const overrides = config.planets || {};
  const civOverrides = clusters.map((c, i) => {
    const o = overrides[c.name] || overrides[String(i)];
    if (o?.name) c.name = o.name;
    if (o?.description) c.description = o.description;
    return o?.civ || null;
  });
  const civs = assignCivs(clusters, civOverrides);
  clusters.forEach((c, i) => { c.civ = civs[i]; });

  // Ghosts live on the planet that references them most.
  const ghosts = [...ghostMap.entries()].map(([key, g]) => {
    const refs = [...g.refs];
    const tally = new Map();
    for (const r of refs) if (clusterOf[r] >= 0) tally.set(clusterOf[r], (tally.get(clusterOf[r]) || 0) + 1);
    const cluster = [...tally.entries()].sort((a, b) => b[1] - a[1])[0];
    return { key, title: g.title, refs, cluster: cluster ? cluster[0] : -1 };
  });

  const merged = new Map();
  for (const e of directed) {
    if (special.has(pages[e.s]) || special.has(pages[e.t])) continue;
    merged.set(`${e.s}>${e.t}`, e.count);
  }

  // Being pointed at counts for more than pointing elsewhere.
  const mentions = new Array(pages.length).fill(0);
  for (const e of directed) {
    if (special.has(pages[e.s]) || special.has(pages[e.t])) continue;
    mentions[e.t] += e.count * 1.5;
    mentions[e.s] += e.count;
  }
  const scores = scoreImportance(body.map((i) => ({
    mentions: mentions[i],
    rank: ranks[i],
    words: pages[i].words,
    sections: pages[i].sections.length,
  })));
  const importance = new Array(pages.length).fill(0.5);
  body.forEach((i, k) => { importance[i] = scores[k]; });

  const { expeditions, problems } = resolveExpeditions(config.expeditions, pages, index, resolve);

  const text = pages.map((p) => p.text).join(' ');
  return {
    version: 1,
    meta: {
      title: config.title || (star && !/^(wiki-?index|index|home|readme)$/i.test(star.title.replace(/\s/g, '')) ? star.title : prettifyRoot(root)),
      root: path.basename(root),
      generatedAt: new Date().toISOString(),
      lang: config.lang || detectLanguage(text),
      clusterMode: result.mode,
      folders: result.folders?.folders || [],
      problems,
    },
    expeditions,
    star: star ? index.get(star) : null,
    comet: comet ? index.get(comet) : null,
    clusters,
    orphans,
    ghosts,
    pages: pages.map((p, i) => ({
      id: i,
      path: p.path,
      title: p.title,
      summary: p.summary,
      sources: p.sources,
      tags: p.tags,
      type: p.type,
      updated: p.updated,
      words: p.words,
      sections: p.sections,
      cluster: clusterOf[i],
      inDeg: inDeg[i],
      outDeg: outDeg[i],
      rank: +(ranks[i] * pages.length).toFixed(4),
      importance: importance[i],
      tier: tierOf(importance[i]),
      hash: createHash('sha1').update(p.md).digest('hex').slice(0, 12),
      linkMap: p.linkMap,
      md: p.md,
    })),
    edges: [...merged.entries()].map(([k, w]) => {
      const [s, t] = k.split('>').map(Number);
      return { s, t, w };
    }),
    rootDir: root,
  };
}

export function prettifyRoot(root, home = os.homedir()) {
  let name = path.basename(root);
  const parent = path.dirname(root);
  // "wiki" says little, so the folder above names it. Not the home folder, though: its name is the user's.
  if (/^(wiki|vault|kb|knowledge|docs)$/i.test(name) && path.basename(parent) && path.resolve(parent) !== path.resolve(home)) {
    name = path.basename(parent);
  }
  return name.replace(/[-_]+/g, ' ');
}

const TIER_MARKS = ['·    ', '··   ', '···  ', '•••• ', '█████'];

/** Human-readable summary, used by `wikitary inspect` and by agents. */
export function describeGraph(g) {
  const lines = [];
  lines.push(`${g.meta.title} — ${g.pages.length} pages, ${g.edges.length} links, ${g.clusters.length} planets (mode: ${g.meta.clusterMode})`);
  if (g.star != null) lines.push(`  Star:   ${g.pages[g.star].path}`);
  if (g.comet != null) lines.push(`  Comet:  ${g.pages[g.comet].path}`);
  for (const c of g.clusters) {
    lines.push(`\n  ◉ ${c.name}  [${c.civ}]  ${c.pageIds.length} pages   keywords: ${c.keywords.slice(0, 5).join(', ')}`);
    for (const id of [...c.pageIds].sort((a, b) => g.pages[b].importance - g.pages[a].importance)) {
      lines.push(`      ${TIER_MARKS[g.pages[id].tier]} ${g.pages[id].path}`);
    }
  }
  if (g.orphans.length) lines.push(`\n  Asteroids (orphan pages): ${g.orphans.map((i) => g.pages[i].path).join(', ')}`);
  if (g.ghosts.length) lines.push(`  Construction sites (missing pages): ${g.ghosts.map((x) => x.title).join(', ')}`);
  if (g.expeditions?.length) lines.push(`  Expeditions: ${g.expeditions.map((x) => `${x.title} (${x.stops.length} stops)`).join(', ')}`);
  for (const problem of g.meta.problems || []) lines.push(`  ! ${problem}`);
  return lines.join('\n');
}
