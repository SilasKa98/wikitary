// What a page is made of, as opposed to how it looks. LLM wikis tend to open with a block of
// labelled lines and cite their sources mid-sentence; a reader wants both, but not in the way.

const KINDS = [
  ['summary', /^(zusammenfassung|summary|tl;?dr|abstract|kurzfassung|overview|überblick)$/i],
  ['sources', /^(quellen?|sources?|references?|referenzen|belege)$/i],
  ['updated', /^(zuletzt aktualisiert|last updated|updated|aktualisiert|stand)$/i],
];

const FACT = /^\*\*([^*\n]{1,40}?)(:?)\*\*(:?)[ \t]*(\S[\s\S]*)$/;
const OTHER_LIMIT = 120;

function matchFact(text) {
  const m = FACT.exec(text.trim());
  if (!m || !(m[2] || m[3])) return null;
  const label = m[1].trim();
  const value = m[4].trim();
  const kind = KINDS.find(([, re]) => re.test(label))?.[0] ?? 'other';
  // An unknown label followed by a long text is a paragraph that happens to start in bold.
  if (kind === 'other' && (value.length > OTHER_LIMIT || value.includes('\n'))) return null;
  return { label, kind, value };
}

/**
 * Takes the title and the labelled lines off the top of a page.
 * Only the opening block counts: further down, the same pattern is the author's own emphasis.
 * @returns {{facts: {label:string, kind:string, value:string}[], body:string}}
 */
export function liftFacts(md) {
  let rest = md.replace(/^\s*#[ \t]+[^\n]*(\n|$)/, '').replace(/^\s+/, '');
  const facts = [];
  while (rest) {
    const end = rest.search(/\n[ \t]*\n/);
    const block = end < 0 ? rest : rest.slice(0, end);
    const lines = block.split('\n');
    const each = lines.map(matchFact);
    const found = each.every(Boolean) ? each : [matchFact(block)];
    if (!found[0]) break;
    facts.push(...found);
    rest = end < 0 ? '' : rest.slice(end).replace(/^\s+/, '');
  }
  if (facts.length) rest = rest.replace(/^[-*_]{3,}[ \t]*(\n|$)/, '').replace(/^\s+/, '');
  return { facts, body: rest };
}

const CITATION = /^\(\s*(?:Quellen?|Sources?)\s*:\s*/i;

/** Where a citation could begin, for the inline tokenizer. */
export function citationStart(src) {
  return src.search(/\(\s*(?:Quellen?|Sources?)\s*:/i);
}

/**
 * Reads "(Quelle: a.pdf; b (draft).md)" from the start of src, minding nested brackets.
 * @returns {{raw:string, parts:string[]}|null} null if this isn't one, or it never closes
 */
export function scanCitation(src) {
  const m = CITATION.exec(src);
  if (!m) return null;
  let depth = 1;
  const parts = [];
  let current = '';
  for (let i = m[0].length; i < src.length; i++) {
    const c = src[i];
    if (c === '\n') return null;
    if (c === '(') depth++;
    if (c === ')' && --depth === 0) {
      parts.push(current);
      const clean = parts.map((p) => p.trim()).filter(Boolean);
      return clean.length ? { raw: src.slice(0, i + 1), parts: clean } : null;
    }
    if (c === ';' && depth === 1) {
      parts.push(current);
      current = '';
    } else {
      current += c;
    }
  }
  return null;
}

const CALLOUTS = [
  ['warn', /warn|achtung|vorsicht|caution|danger|risik|gefahr/i],
  ['tip', /tip|hilfe|hint|empfehlung/i],
  ['example', /beispiel|example/i],
  ['key', /wichtig|important|merke|key/i],
  ['ask', /frage|question|faq|offen/i],
];

/** The kind of plaque a labelled note becomes; anything unrecognised is a plain note. */
export function calloutKind(label) {
  return CALLOUTS.find(([, re]) => re.test(label))?.[0] ?? 'note';
}

/** At a comfortable 220 words a minute, and never "0 minutes". */
export function readingMinutes(words) {
  return Math.max(1, Math.round(words / 220));
}

/** How long a section has to stay in view to count as read. It measures attention, not understanding. */
export function dwellSeconds(words) {
  return Math.min(25, Math.max(1.5, words / 6));
}

/**
 * The heading level that divides a page into districts: the highest one used more than once.
 * A page with a single ## over a row of ### is really divided by the ###.
 */
export function splitLevel(levels) {
  if (!levels.length) return null;
  const counts = new Map();
  for (const l of levels) counts.set(l, (counts.get(l) || 0) + 1);
  const sorted = [...counts.keys()].sort((a, b) => a - b);
  return sorted.find((l) => counts.get(l) > 1) ?? sorted[0];
}
