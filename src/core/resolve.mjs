// Link resolution across a nested folder tree, using Obsidian's rules:
// relative path → root-relative path → unique file name → alias/title.
// When a bare name is ambiguous, the page closest in the folder tree wins.

import path from 'node:path';

export function normKey(s) {
  return String(s)
    .normalize('NFC')
    .toLowerCase()
    .replace(/\.(md|markdown|mdx)$/i, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^\.\//, '');
}

export function createResolver(pages) {
  const byPath = new Map();
  const byName = new Map();
  const byAlias = new Map();

  const add = (map, key, page) => {
    if (!map.has(key)) map.set(key, []);
    map.get(key).push(page);
  };

  for (const page of pages) {
    byPath.set(normKey(page.path), page);
    add(byName, normKey(page.name), page);
    add(byAlias, normKey(page.title), page);
    for (const a of page.aliases) add(byAlias, normKey(a), page);
  }

  const dirOf = (p) => (p.includes('/') ? p.slice(0, p.lastIndexOf('/')) : '');

  function closest(from, candidates) {
    if (candidates.length === 1) return candidates[0];
    const fromParts = dirOf(from.path).split('/').filter(Boolean);
    let best = null, bestScore = -Infinity;
    for (const c of candidates) {
      const parts = dirOf(c.path).split('/').filter(Boolean);
      let shared = 0;
      while (shared < parts.length && shared < fromParts.length && parts[shared] === fromParts[shared]) shared++;
      const score = shared * 10 - (parts.length - shared) - (fromParts.length - shared);
      if (score > bestScore) { best = c; bestScore = score; }
    }
    return best;
  }

  return function resolve(from, target) {
    const clean = target.replace(/\\/g, '/').replace(/^\/+/, '');
    if (!clean) return null;

    const relative = path.posix.normalize(path.posix.join(dirOf(from.path), clean));
    const rel = byPath.get(normKey(relative));
    if (rel) return rel;

    const rootRel = byPath.get(normKey(path.posix.normalize(clean)));
    if (rootRel) return rootRel;

    const base = clean.split('/').pop();
    const named = byName.get(normKey(base));
    if (named) {
      if (clean.includes('/')) {
        const suffix = normKey(clean);
        const match = named.filter((p) => normKey(p.path).endsWith(suffix));
        if (match.length) return closest(from, match);
      }
      return closest(from, named);
    }

    const aliased = byAlias.get(normKey(clean));
    return aliased ? closest(from, aliased) : null;
  };
}
