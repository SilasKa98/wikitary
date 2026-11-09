// Markdown → structured page. Dependency-free and tolerant: LLM wikis come in
// many dialects (Obsidian, plain GitHub Markdown, Karpathy-style compiled wikis).

const FM_LIST_KEYS = new Set(['tags', 'aliases', 'alias', 'keywords', 'sources']);

/** Very small YAML subset: scalars, inline arrays and block lists at top level. */
export function parseFrontmatter(src) {
  const text = src.replace(/^﻿/, '');
  const m = /^---[ \t]*\r?\n([\s\S]*?)\r?\n(?:---|\.\.\.)[ \t]*(?:\r?\n|$)/.exec(text);
  if (!m) return { data: {}, body: text };
  const data = {};
  let current = null;
  for (const raw of m[1].split(/\r?\n/)) {
    if (!raw.trim() || raw.trim().startsWith('#')) continue;
    const item = /^\s*-\s+(.*)$/.exec(raw);
    if (item && current) {
      if (!Array.isArray(data[current])) data[current] = [];
      data[current].push(scalar(item[1]));
      continue;
    }
    if (/^\s/.test(raw)) continue; // nested maps are ignored on purpose
    const kv = /^([A-Za-z0-9_.-]+)\s*:\s*(.*)$/.exec(raw);
    if (!kv) continue;
    const key = kv[1].toLowerCase();
    const value = kv[2].trim();
    current = key;
    if (!value) { data[key] = ''; continue; }
    if (value.startsWith('[') && value.endsWith(']')) {
      data[key] = splitInline(value.slice(1, -1)).map(scalar).filter((v) => v !== '');
    } else {
      data[key] = scalar(value);
    }
  }
  for (const k of FM_LIST_KEYS) {
    if (typeof data[k] === 'string' && data[k]) data[k] = data[k].split(/[,\s]+/).filter(Boolean);
  }
  return { data, body: text.slice(m[0].length) };
}

function splitInline(s) {
  const out = [];
  let cur = '', q = null;
  for (const ch of s) {
    if (q) { if (ch === q) q = null; cur += ch; }
    else if (ch === '"' || ch === "'") { q = ch; cur += ch; }
    else if (ch === ',') { out.push(cur.trim()); cur = ''; }
    else cur += ch;
  }
  if (cur.trim()) out.push(cur.trim());
  return out;
}

function scalar(v) {
  const s = String(v).trim();
  if (/^".*"$/.test(s) || /^'.*'$/.test(s)) return s.slice(1, -1);
  return s;
}

/** Blanks out fenced and inline code so link/tag detection ignores it. */
export function maskCode(md) {
  let out = '', fence = null;
  for (const line of md.split('\n')) {
    const f = /^\s*(```+|~~~+)/.exec(line);
    if (f) {
      if (!fence) fence = f[1][0];
      else if (f[1][0] === fence) fence = null;
      out += '\n';
      continue;
    }
    out += fence ? '\n' : line.replace(/`[^`\n]*`/g, (s) => ' '.repeat(s.length)) + '\n';
  }
  return out;
}

export function slugify(text) {
  return String(text)
    .toLowerCase()
    .normalize('NFC')
    .replace(/<[^>]+>/g, '')
    .replace(/[`*_~[\]()!?.,:;"'„“”‚‘’/\\|«»&@#%^=+{}<>]/g, '')
    .trim()
    .replace(/\s+/g, '-');
}

/** Repeated headings on one page get their own slugs: "beispiel", "beispiel-2", … */
export function slugCounter() {
  const seen = new Map();
  return (text) => {
    const base = slugify(text);
    const n = (seen.get(base) || 0) + 1;
    seen.set(base, n);
    return n === 1 ? base : `${base}-${n}`;
  };
}

/** Replaces wiki syntax and emphasis so text can be displayed or tokenised. */
export function plainText(md) {
  return md
    .replace(/\[\[([^\]|]*?)(?:\\?\|([^\]]*))?\]\]/g, (_, target, alias) => alias || target.replace(/#.*$/, ''))
    .replace(/!\[[^\]]*\]\([^)]*\)/g, '')
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/[`*_~]+/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

const WIKILINK = /!?\[\[([^\]\n]+?)\]\]/g;
const MDLINK = /(!?)\[((?:[^\]\n\\]|\\.)*)\]\(\s*(<[^>\n]+>|[^)\s]+)(?:\s+"[^"\n]*")?\s*\)/g;

export function extractLinks(masked) {
  const links = [];
  for (const m of masked.matchAll(WIKILINK)) {
    if (m[0].startsWith('!')) continue; // embeds are attachments, not relations
    const [targetPart, ...aliasParts] = m[1].split(/\\?\|/);
    const hash = targetPart.indexOf('#');
    const target = (hash >= 0 ? targetPart.slice(0, hash) : targetPart).trim();
    if (!target) continue; // same-page anchor
    links.push({ raw: targetPart.trim(), target, alias: aliasParts.join('|').trim() || null, kind: 'wiki' });
  }
  for (const m of masked.matchAll(MDLINK)) {
    if (m[1]) continue;
    let url = m[3].replace(/^<|>$/g, '');
    if (/^[a-z][a-z0-9+.-]*:/i.test(url) || url.startsWith('#') || url.startsWith('//')) continue;
    const pathPart = url.split(/[?#]/)[0];
    if (/\.[a-z0-9]{1,6}$/i.test(pathPart) && !/\.(md|markdown|mdx)$/i.test(pathPart)) continue;
    let target;
    try { target = decodeURIComponent(pathPart); } catch { target = pathPart; }
    if (!target) continue;
    links.push({ raw: url, target, alias: m[2] || null, kind: 'md' });
  }
  return links;
}

function extractSections(body) {
  const sections = [];
  let fence = null;
  let current = null;
  const nextSlug = slugCounter();
  for (const line of body.split('\n')) {
    const f = /^\s*(```+|~~~+)/.exec(line);
    if (f) {
      if (!fence) fence = f[1][0];
      else if (f[1][0] === fence) fence = null;
    }
    const h = fence ? null : /^(#{1,6})\s+(.+?)\s*#*\s*$/.exec(line);
    if (h) {
      if (h[1].length === 1) { current = null; continue; }
      const title = plainText(h[2]);
      current = { title, level: h[1].length, slug: nextSlug(title), words: 0 };
      sections.push(current);
    } else if (current) {
      current.words += countWords(line);
    }
  }
  return sections;
}

export function countWords(s) {
  const m = s.match(/[\p{L}\p{N}][\p{L}\p{N}'’-]*/gu);
  return m ? m.length : 0;
}

const SUMMARY_LABEL = /^\s*(?:>\s*)?(?:\*\*|__)?(?:Zusammenfassung|Summary|TL;?DR|Abstract|Kurzfassung|Overview|Überblick)(?:\*\*|__)?\s*[:：]\s*(?:\*\*|__)?\s*(.+)$/im;

function extractSummary(front, body) {
  for (const key of ['description', 'summary', 'abstract', 'tldr']) {
    if (typeof front[key] === 'string' && front[key].trim()) return plainText(front[key]).slice(0, 420);
  }
  const labelled = SUMMARY_LABEL.exec(body);
  if (labelled) return plainText(labelled[1]).slice(0, 420);
  let fence = false;
  for (const block of body.split(/\r?\n\s*\r?\n/)) {
    const t = block.trim();
    if (/^(```|~~~)/.test(t)) { fence = !fence; continue; }
    if (fence || !t || /^(#|\||-{3,}|>\s*\[!|<|[-*+]\s|\d+\.\s)/.test(t)) continue;
    const text = plainText(t);
    if (text.length > 24) return text.slice(0, 420);
  }
  return '';
}

const DATE_LABEL = /(?:Zuletzt aktualisiert|Last updated|Updated|Stand)\**\s*[:：]\s*\**\s*(\d{4}-\d{2}-\d{2})/i;

function humanise(file) {
  const stem = file.replace(/\.[^.]+$/, '');
  if (/\s/.test(stem) || /[A-Z].*[a-z]/.test(stem)) return stem;
  return stem.replace(/[-_]+/g, ' ').replace(/^\p{Ll}/u, (c) => c.toUpperCase());
}

/** @param {{path:string, content:string, mtime?:number}} file */
export function parsePage(file) {
  const { data: front, body } = parseFrontmatter(file.content.replace(/\r\n/g, '\n'));
  const masked = maskCode(body);
  const name = file.path.split('/').pop();

  const h1 = /^#\s+(.+?)\s*#*\s*$/m.exec(masked);
  const title = (typeof front.title === 'string' && front.title.trim()) || (h1 ? plainText(h1[1]) : humanise(name));

  const tags = new Set((Array.isArray(front.tags) ? front.tags : []).map((t) => String(t).replace(/^#/, '')));
  for (const m of masked.replace(/^#{1,6}\s.*$/gm, '').matchAll(/(?:^|\s)#([\p{L}][\p{L}\p{N}_/-]{1,40})/gu)) tags.add(m[1]);

  const aliases = []
    .concat(front.aliases || [], front.alias || [])
    .map((a) => String(a).trim())
    .filter(Boolean);

  const dateLabel = DATE_LABEL.exec(body);
  const updated = String(front.updated || front.modified || front.date || (dateLabel && dateLabel[1]) || '').slice(0, 10)
    || (file.mtime ? new Date(file.mtime).toISOString().slice(0, 10) : '');

  return {
    path: file.path,
    name,
    title: String(title).slice(0, 160),
    aliases,
    tags: [...tags].slice(0, 24),
    type: String(front.type || front.kind || '').toLowerCase() || null,
    declaredCluster: String(front.planet || front.cluster || front.topic || front.category || '').trim() || null,
    // Only these two name a planet outright; `topic` and `category` often hold page types instead.
    declaredPlanet: String(front.planet || front.cluster || '').trim() || null,
    summary: extractSummary(front, masked),
    sources: Array.isArray(front.sources) ? front.sources.map(String) : [],
    updated,
    words: countWords(masked),
    sections: extractSections(body),
    links: extractLinks(masked),
    text: plainText(masked),
    md: body,
  };
}

/** Reads `## Section` groupings from an index page — curated clusters, if present. */
export function parseIndexSections(md) {
  const groups = [];
  let cur = null;
  for (const line of maskCode(md).split('\n')) {
    const h = /^#{2,3}\s+(.+?)\s*#*\s*$/.exec(line);
    if (h) { cur = { title: plainText(h[1]), links: [] }; groups.push(cur); continue; }
    if (cur) cur.links.push(...extractLinks(line));
  }
  return groups.filter((g) => g.links.length);
}
