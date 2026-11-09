// Topic clustering: weighted Louvain over links, text similarity and curated hints.
// Fully deterministic — the same wiki always yields the same planets.

const STOP = new Set(`
der die das den dem des ein eine einer eines einem einen und oder aber auch als am an auf aus bei bis da damit dann dass daß durch für fuer hat haben hier ihre ihr im in ist je jede jeder jedes kann können koennen man mehr mit nach nicht noch nur ob ohne pro sich sie sind so sowie über ueber um unter vom von vor während wenn werden wird wie wir zu zum zur zwischen wo was wer welche welcher welches dieser diese dieses diesem diesen seite seiten siehe quelle quellen abschnitt zusammenfassung zuletzt aktualisiert verwandte
the a an and or but of to in on at for from by with without as is are was were be been being this that these those it its their there here which who what when where how why can could should would will may might must not no yes if then than so such via per into over under about across between both each all any more most other some page pages see source sources summary updated related section
`.trim().split(/\s+/));

export function tokenize(text) {
  const tokens = [];
  for (const m of text.toLowerCase().normalize('NFC').matchAll(/[\p{L}][\p{L}\p{N}-]{2,}/gu)) {
    const t = m[0].replace(/^-+|-+$/g, '');
    if (t.length > 2 && !STOP.has(t)) tokens.push(t);
  }
  return tokens;
}

function mulberry(seed) {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/** TF-IDF vectors (sparse Map term→weight, L2-normalised). */
export function tfidf(docs) {
  const df = new Map();
  const counts = docs.map(({ title, text }) => {
    const c = new Map();
    for (const t of tokenize(text.slice(0, 60000))) c.set(t, (c.get(t) || 0) + 1);
    for (const t of tokenize(title)) c.set(t, (c.get(t) || 0) + 6);
    for (const t of c.keys()) df.set(t, (df.get(t) || 0) + 1);
    return c;
  });
  const n = docs.length;
  return counts.map((c) => {
    const v = new Map();
    let norm = 0;
    for (const [t, f] of c) {
      const idf = Math.log((1 + n) / (1 + df.get(t)));
      if (idf <= 0.01) continue;
      const w = (1 + Math.log(f)) * idf;
      v.set(t, w);
      norm += w * w;
    }
    norm = Math.sqrt(norm) || 1;
    for (const [t, w] of v) v.set(t, w / norm);
    return v;
  });
}

function topTerms(vec, k) {
  return [...vec.entries()].sort((a, b) => b[1] - a[1]).slice(0, k);
}

/** k-nearest text neighbours via an inverted index on each page's strongest terms. */
function similarityEdges(vectors, k = 4, minSim = 0.08) {
  const inverted = new Map();
  vectors.forEach((v, i) => {
    for (const [t] of topTerms(v, 28)) {
      if (!inverted.has(t)) inverted.set(t, []);
      inverted.get(t).push(i);
    }
  });
  const edges = [];
  vectors.forEach((v, i) => {
    const scores = new Map();
    for (const [t, w] of topTerms(v, 28)) {
      for (const j of inverted.get(t) || []) {
        if (j === i) continue;
        scores.set(j, (scores.get(j) || 0) + w * (vectors[j].get(t) || 0));
      }
    }
    for (const [j, s] of [...scores.entries()].sort((a, b) => b[1] - a[1]).slice(0, k)) {
      if (s >= minSim) edges.push([i, j, s]);
    }
  });
  return edges;
}

function louvain(n, edgeList, gamma, seed) {
  const random = mulberry(seed);
  let adj = Array.from({ length: n }, () => new Map());
  for (const [a, b, w] of edgeList) {
    if (a === b) continue;
    adj[a].set(b, (adj[a].get(b) || 0) + w);
    adj[b].set(a, (adj[b].get(a) || 0) + w);
  }
  let membership = Array.from({ length: n }, (_, i) => i);
  let selfLoops = new Array(n).fill(0);

  for (let level = 0; level < 12; level++) {
    const N = adj.length;
    const degree = adj.map((m, i) => [...m.values()].reduce((s, w) => s + w, 0) + 2 * selfLoops[i]);
    const m2 = degree.reduce((s, d) => s + d, 0) || 1;
    const comm = Array.from({ length: N }, (_, i) => i);
    const commTotal = degree.slice();

    const order = Array.from({ length: N }, (_, i) => i);
    for (let i = N - 1; i > 0; i--) {
      const j = Math.floor(random() * (i + 1));
      [order[i], order[j]] = [order[j], order[i]];
    }

    let moved = true, anyMove = false, sweeps = 0;
    while (moved && sweeps++ < 40) {
      moved = false;
      for (const v of order) {
        const links = new Map();
        for (const [u, w] of adj[v]) links.set(comm[u], (links.get(comm[u]) || 0) + w);
        const old = comm[v];
        commTotal[old] -= degree[v];
        let best = old, bestGain = (links.get(old) || 0) - gamma * commTotal[old] * degree[v] / m2;
        for (const [c, w] of links) {
          const gain = w - gamma * commTotal[c] * degree[v] / m2;
          if (gain > bestGain + 1e-12) { bestGain = gain; best = c; }
        }
        commTotal[best] += degree[v];
        if (best !== old) { comm[v] = best; moved = true; anyMove = true; }
      }
    }
    if (!anyMove) break;

    const remap = new Map();
    for (const c of comm) if (!remap.has(c)) remap.set(c, remap.size);
    membership = membership.map((c) => remap.get(comm[c]));

    const newAdj = Array.from({ length: remap.size }, () => new Map());
    const newSelf = new Array(remap.size).fill(0);
    for (let v = 0; v < N; v++) {
      const cv = remap.get(comm[v]);
      newSelf[cv] += selfLoops[v];
      for (const [u, w] of adj[v]) {
        const cu = remap.get(comm[u]);
        if (cu === cv) newSelf[cv] += w / 2;
        else newAdj[cv].set(cu, (newAdj[cv].get(cu) || 0) + w);
      }
    }
    adj = newAdj;
    selfLoops = newSelf;
  }
  return membership;
}

function groupsOf(membership) {
  const groups = new Map();
  membership.forEach((c, i) => {
    if (!groups.has(c)) groups.set(c, []);
    groups.get(c).push(i);
  });
  return [...groups.values()];
}

/** Absorbs tiny groups into their best-connected neighbour and caps the total. */
function consolidate(groups, weights, minSize, maxCount) {
  const connection = (a, b) => {
    let s = 0;
    const set = new Set(b);
    for (const i of a) for (const [j, w] of weights[i]) if (set.has(j)) s += w;
    return s;
  };
  const mergeInto = (idx) => {
    const small = groups[idx];
    let best = -1, bestScore = -1;
    groups.forEach((g, j) => {
      if (j === idx) return;
      const s = connection(small, g) / Math.sqrt(g.length);
      if (s > bestScore) { bestScore = s; best = j; }
    });
    groups[best].push(...small);
    groups.splice(idx, 1);
  };
  let guard = 0;
  while (groups.length > 1 && guard++ < 10000) {
    const sizes = groups.map((g) => g.length);
    const smallest = sizes.indexOf(Math.min(...sizes));
    if (sizes[smallest] < minSize || groups.length > maxCount) mergeInto(smallest);
    else break;
  }
  return groups;
}

const TYPE_FOLDERS = /^(concepts?|entit(y|ies)|people|persons?|sources?|summar(y|ies)|notes?|topics?|articles?|pages?|wiki|docs?|misc|general|references?|glossary|syntheses|synthesis|analyses|analysis|queries|comparisons?|konzepte?|entitäten|personen|quellen|themen|seiten|notizen|begriffe)$/i;

export function analyseFolders(pages) {
  const top = new Map();
  let inFolder = 0;
  for (const p of pages) {
    const parts = p.path.split('/');
    if (parts.length > 1) {
      inFolder++;
      top.set(parts[0], (top.get(parts[0]) || 0) + 1);
    }
  }
  const folders = [...top.entries()].filter(([, c]) => c >= 2);
  const themed = folders.filter(([name]) => !TYPE_FOLDERS.test(name));
  return {
    coverage: pages.length ? inFolder / pages.length : 0,
    folders: folders.map(([f]) => f),
    themed: themed.map(([f]) => f),
    // Folders are a topic signal only if they name topics rather than page types.
    meaningful: themed.length >= 2 && themed.length >= folders.length * 0.6,
  };
}

function prettify(raw) {
  const s = String(raw).replace(/^\d+[-_. ]+/, '').replace(/[-_]+/g, ' ').trim();
  if (!s) return String(raw);
  return s === s.toLowerCase() ? s.replace(/(^|\s)\p{Ll}/gu, (c) => c.toUpperCase()) : s;
}

/**
 * @param pages   parsed pages (only those that take part in clustering)
 * @param edges   [{a,b,count}] between page indices
 * @param options {mode, count, indexGroups:[{title,members:Set<index>}], assign:Map<path,name>}
 */
export function clusterPages(pages, edges, options = {}) {
  const n = pages.length;
  if (n === 0) return { clusters: [], mode: 'empty' };

  const { mode = 'auto', count = null, indexGroups = [], assign = new Map(), aliases = new Map() } = options;
  const vectors = tfidf(pages.map((p) => ({ title: p.title, text: p.text })));
  const folderInfo = analyseFolders(pages);

  // Pages that name their planet themselves, through `planet:` or the config's `assign`.
  const pins = pages.map((p) => assign.get(p.path) || p.declaredPlanet || null);

  const finish = (groups, usedMode, namer, pinned = false) => {
    let clusters = groups
      .filter((g) => g.length)
      .map((members) => {
        const keywords = clusterKeywords(members, vectors);
        return { members, keywords, name: namer ? namer(members, keywords) : null };
      });
    tidy(clusters);
    if (pinned && pins.some(Boolean)) {
      clusters = movePinned(clusters, pins, aliases).filter((c) => c.members.length);
      for (const c of clusters) c.keywords = clusterKeywords(c.members, vectors);
      tidy(clusters);
    }
    return { mode: usedMode, folders: folderInfo, clusters };
  };

  const nameFromKeywords = (members, keywords) => labelFor(members, pages, indexGroups, keywords);

  // 1. Explicit: `planet:` / `cluster:` in frontmatter, or assignments from the config.
  const declared = pages.map((p) => assign.get(p.path) || p.declaredCluster);
  const declaredShare = declared.filter(Boolean).length / n;
  if (mode === 'frontmatter' || (mode === 'auto' && declaredShare >= 0.7)) {
    const buckets = new Map();
    declared.forEach((d, i) => {
      const key = d || '—';
      if (!buckets.has(key)) buckets.set(key, []);
      buckets.get(key).push(i);
    });
    const names = new Map([...buckets.entries()].map(([k, v]) => [v, k]));
    return finish([...buckets.values()], 'frontmatter', (m) => prettify(names.get(m) || 'Unsorted'));
  }

  // 2. Strict folders: every top-level folder becomes a planet.
  if (mode === 'folders') {
    const buckets = new Map();
    pages.forEach((p, i) => {
      const key = p.path.includes('/') ? p.path.split('/')[0] : '(root)';
      if (!buckets.has(key)) buckets.set(key, []);
      buckets.get(key).push(i);
    });
    const names = new Map([...buckets.entries()].map(([k, v]) => [v, k]));
    return finish([...buckets.values()], 'folders', (m, kw) => {
      const f = names.get(m);
      return f === '(root)' ? nameFromKeywords(m, kw) : prettify(f);
    }, true);
  }

  // 3. Graph clustering with all available signals as edge weights.
  const degree = new Array(n).fill(0);
  for (const e of edges) { degree[e.a]++; degree[e.b]++; }
  const hubDamp = (i) => 1 / Math.log2(2 + degree[i] / 2);

  const weightMap = Array.from({ length: n }, () => new Map());
  const addWeight = (a, b, w) => {
    if (a === b || w <= 0) return;
    weightMap[a].set(b, (weightMap[a].get(b) || 0) + w);
    weightMap[b].set(a, (weightMap[b].get(a) || 0) + w);
  };

  for (const e of edges) addWeight(e.a, e.b, (1 + Math.log(e.count)) * hubDamp(e.a) * hubDamp(e.b) * 2.0);
  for (const [a, b, s] of similarityEdges(vectors)) addWeight(a, b, s * 2.4);

  // Curated index sections: the wiki's author already grouped these pages.
  for (const group of indexGroups) {
    const ids = [...group.members];
    if (ids.length < 2 || ids.length > n * 0.6) continue;
    const w = 2.6 / Math.sqrt(ids.length);
    for (let i = 0; i < ids.length; i++) for (let j = i + 1; j < ids.length; j++) addWeight(ids[i], ids[j], w);
  }

  // Topic-named folders count as a strong prior.
  if (mode === 'auto' && folderInfo.meaningful && folderInfo.coverage > 0.5) {
    const buckets = new Map();
    pages.forEach((p, i) => {
      if (!p.path.includes('/')) return;
      const key = p.path.split('/')[0];
      if (!folderInfo.themed.includes(key)) return;
      if (!buckets.has(key)) buckets.set(key, []);
      buckets.get(key).push(i);
    });
    for (const ids of buckets.values()) {
      const w = 6 / Math.sqrt(ids.length);
      for (let i = 0; i < ids.length; i++) for (let j = i + 1; j < ids.length; j++) addWeight(ids[i], ids[j], w);
    }
  }

  const flat = [];
  weightMap.forEach((m, a) => { for (const [b, w] of m) if (a < b) flat.push([a, b, w]); });

  const target = count || Math.max(n < 8 ? 2 : 3, Math.min(9, Math.round(Math.sqrt(n) * 0.82)));
  const minSize = n < 4 ? 1 : Math.max(2, Math.min(5, Math.round(n / 13)));

  // Search for the resolution whose result is closest to the target planet count.
  let best = null;
  for (let gamma = 0.3; gamma <= 3.2; gamma += 0.15) {
    const groups = consolidate(groupsOf(louvain(n, flat, gamma, 1337)), weightMap, minSize, 9);
    const sizes = groups.map((g) => g.length);
    const balance = Math.max(...sizes) / n;
    const score = Math.abs(groups.length - target) + balance * 1.5;
    if (!best || score < best.score - 1e-9) best = { score, groups, gamma };
  }
  const final = consolidate(best.groups, weightMap, minSize, count || 9);
  return finish(final, folderInfo.meaningful && mode === 'auto' ? 'graph+folders' : 'graph', nameFromKeywords, true);
}

/** Largest planet first, and no two planets share a name: the smaller one falls back to its keywords. */
function tidy(clusters) {
  clusters.sort((a, b) => b.members.length - a.members.length);
  const seen = new Set();
  for (const c of clusters) {
    if (seen.has(c.name)) c.name = c.keywords.slice(0, 2).map((k) => k.replace(/^\p{Ll}/u, (x) => x.toUpperCase())).join(' & ') || c.name;
    seen.add(c.name);
  }
}

const nameKey = (s) => String(s).toLowerCase().replace(/[^\p{L}\p{N}]+/gu, '');

/**
 * Moves pinned pages onto the planet they name, after the clustering has had its say. A name
 * matches a planet's generated name or the name the config renames it to; a name that matches
 * no planet founds a new one.
 * @param aliases Map<displayName, generatedName> from the config's `planets`
 */
function movePinned(clusters, pins, aliases) {
  const byName = new Map(clusters.map((c) => [nameKey(c.name), c]));
  for (const [shown, generated] of aliases) {
    const c = byName.get(nameKey(generated));
    if (c) byName.set(nameKey(shown), c);
  }
  const home = new Map();
  for (const c of clusters) for (const i of c.members) home.set(i, c);
  pins.forEach((want, i) => {
    if (!want || !home.has(i)) return;
    let target = byName.get(nameKey(want));
    if (!target) {
      target = { members: [], keywords: [], name: prettify(want) };
      clusters.push(target);
      byName.set(nameKey(want), target);
    }
    home.set(i, target);
  });
  for (const c of clusters) c.members = [];
  for (const [i, c] of [...home.entries()].sort((a, b) => a[0] - b[0])) c.members.push(i);
  return clusters;
}

function clusterKeywords(members, vectors) {
  const sum = new Map();
  for (const i of members) for (const [t, w] of vectors[i]) sum.set(t, (sum.get(t) || 0) + w);
  return [...sum.entries()].sort((a, b) => b[1] - a[1]).slice(0, 8).map(([t]) => t);
}

function labelFor(members, pages, indexGroups, keywords) {
  // Prefer a curated index heading that covers most of this cluster.
  let bestGroup = null, bestShare = 0;
  for (const g of indexGroups) {
    let hit = 0;
    for (const i of members) if (g.members.has(i)) hit++;
    const share = hit / members.length;
    if (share > bestShare) { bestShare = share; bestGroup = g; }
  }
  if (bestGroup && bestShare >= 0.5) return bestGroup.title.replace(/\s*\([^)]*\)\s*$/, '').trim();

  // Then a folder shared by most members.
  const folders = new Map();
  for (const i of members) {
    const parts = pages[i].path.split('/');
    if (parts.length > 1 && !TYPE_FOLDERS.test(parts[0])) folders.set(parts[0], (folders.get(parts[0]) || 0) + 1);
  }
  const topFolder = [...folders.entries()].sort((a, b) => b[1] - a[1])[0];
  if (topFolder && topFolder[1] >= members.length * 0.6) return prettify(topFolder[0]);

  const kw = keywords.slice(0, 2).map((k) => k.replace(/^\p{Ll}/u, (c) => c.toUpperCase()));
  return kw.join(' & ') || 'Cluster';
}
