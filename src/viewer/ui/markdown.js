// Renders a wiki page to safe HTML. Raw HTML in Markdown is shown as text, links are
// allow-listed, and [[wikilinks]] become in-world travel links.
import { Marked } from 'marked';
import { plainText, slugify, slugCounter } from '../../core/parse.mjs';
import { liftFacts, scanCitation, citationStart, calloutKind } from './pagedoc.js';

export { slugify };

export function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

function linkAttrs(target, graph) {
  if (typeof target === 'number') {
    const p = graph.pages[target];
    const cluster = p.cluster >= 0 ? graph.clusters[p.cluster] : null;
    return { cls: 'wl', attrs: `data-page="${target}"`, civ: cluster?.civ };
  }
  if (typeof target === 'string' && target.startsWith('g:')) {
    return { cls: 'wl ghost', attrs: `data-ghost="${escapeHtml(target.slice(2))}"` };
  }
  return null;
}

const NOTE_WORD = /hinweis|note|info|anmerkung|warn|achtung|vorsicht|tip|wichtig|important|beispiel|example|hilfe/i;

/** Notes that announce themselves ("**Note:** …", "[!warning] …") become plaques; quotes stay quotes. */
function renderQuote(body) {
  const plaque = (kind, label, rest) => `<aside class="callout callout-${kind}"><div class="callout-label">${label}</div>${rest}</aside>\n`;
  const obsidian = /^<p>\[!([\w-]+)\][+-]?[ \t]*([^\n<]*)(\n|<\/p>\n?)/.exec(body);
  if (obsidian) {
    const inner = body.slice(obsidian[0].length);
    const rest = obsidian[3] === '\n' ? `<p>${inner}` : inner;
    return plaque(calloutKind(obsidian[1]), obsidian[2].trim() || obsidian[1], rest);
  }
  // "**Gandhi** said…" is still a quote: it takes a colon or a telling word to make a note.
  const labelled = /^<p><strong>([^<]{1,40}?)(:?)<\/strong>(:?)\s*/.exec(body);
  if (labelled && (labelled[2] || labelled[3] || NOTE_WORD.test(labelled[1]))) {
    return plaque(calloutKind(labelled[1]), labelled[1], `<p>${body.slice(labelled[0].length)}`);
  }
  return `<blockquote>${body}</blockquote>\n`;
}

function createRenderer(page, graph) {
  const assetBase = (() => {
    const dir = page.path.includes('/') ? page.path.slice(0, page.path.lastIndexOf('/') + 1) : '';
    return (src) => {
      const parts = [];
      for (const seg of (dir + src).split('/')) {
        if (seg === '..') parts.pop();
        else if (seg && seg !== '.') parts.push(encodeURIComponent(decodeSafe(seg)));
      }
      return `wiki-asset/${parts.join('/')}`;
    };
  })();

  const sources = new Map();
  const nextSlug = slugCounter();

  const marked = new Marked({
    gfm: true,
    breaks: false,
    extensions: [{
      name: 'wikilink',
      level: 'inline',
      start(src) { return src.indexOf('[['); },
      tokenizer(src) {
        const m = /^!?\[\[([^\]\n]+?)\]\]/.exec(src);
        if (!m) return undefined;
        const [targetPart, ...aliasParts] = m[1].split(/\\?\|/);
        const hash = targetPart.indexOf('#');
        const target = (hash >= 0 ? targetPart.slice(0, hash) : targetPart).trim();
        const anchor = hash >= 0 ? targetPart.slice(hash + 1).trim() : '';
        const alias = aliasParts.join('|').trim();
        return { type: 'wikilink', raw: m[0], target, anchor, text: alias || target || anchor };
      },
      renderer(token) {
        const dest = page.linkMap[token.target];
        const info = linkAttrs(dest, graph);
        if (!token.target && token.anchor) return `<a class="wl" href="#${escapeHtml(slugify(token.anchor))}" data-anchor="${escapeHtml(slugify(token.anchor))}">${escapeHtml(token.text)}</a>`;
        if (!info) return escapeHtml(token.text);
        const slug = token.anchor ? ` data-slug="${escapeHtml(slugify(token.anchor))}"` : '';
        return `<a class="${info.cls}" href="#" ${info.attrs}${slug}>${escapeHtml(token.text)}</a>`;
      },
    }, {
      // "(Quelle: a.pdf; b.pdf)" in the middle of a sentence becomes footnote marks.
      name: 'citation',
      level: 'inline',
      start(src) { const at = citationStart(src); return at < 0 ? undefined : at; },
      tokenizer(src) {
        const found = scanCitation(src);
        return found ? { type: 'citation', raw: found.raw, parts: found.parts } : undefined;
      },
      renderer(token) {
        return token.parts.map((part) => {
          const html = marked.parseInline(part);
          const text = decodeEntities(html.replace(/<[^>]+>/g, ''));
          let entry = sources.get(text);
          if (!entry) { entry = { n: sources.size + 1, html, text, count: 0 }; sources.set(text, entry); }
          entry.count++;
          return `<button type="button" class="cite" data-cite="${entry.n}" aria-label="${escapeHtml(text)}">${entry.n}</button>`;
        }).join('');
      },
    }],
    renderer: {
      html({ text }) { return escapeHtml(text); },
      heading({ tokens, depth, text }) {
        const inner = this.parser.parseInline(tokens);
        // The same steps as the page parser, so that a section always finds its heading.
        const base = plainText(text);
        const id = depth === 1 ? slugify(base) : nextSlug(base);
        return `<h${depth} id="s-${escapeHtml(id)}" data-slug="${escapeHtml(id)}">${inner}</h${depth}>\n`;
      },
      blockquote({ tokens }) { return renderQuote(this.parser.parse(tokens)); },
      link({ href, title, tokens }) {
        const text = this.parser.parseInline(tokens);
        const raw = href || '';
        const dest = page.linkMap[raw] ?? page.linkMap[decodeSafe(raw.split(/[?#]/)[0])];
        const info = linkAttrs(dest, graph);
        if (info) {
          const hash = raw.includes('#') ? ` data-slug="${escapeHtml(raw.split('#')[1])}"` : '';
          return `<a class="${info.cls}" href="#" ${info.attrs}${hash}>${text}</a>`;
        }
        if (raw.startsWith('#')) return `<a class="wl" href="${escapeHtml(raw)}" data-anchor="${escapeHtml(raw.slice(1))}">${text}</a>`;
        if (/^(https?:|mailto:)/i.test(raw)) {
          const t = title ? ` title="${escapeHtml(title)}"` : '';
          return `<a href="${escapeHtml(raw)}"${t} target="_blank" rel="noopener noreferrer">${text}</a>`;
        }
        return text; // Anything else (javascript:, data:, a file outside the wiki) renders as plain text.
      },
      image({ href, text }) {
        const src = href || '';
        const url = /^https?:/i.test(src) ? src : /^[a-z][a-z0-9+.-]*:/i.test(src) ? null : assetBase(src);
        if (!url) return escapeHtml(text || '');
        return `<img src="${escapeHtml(url)}" alt="${escapeHtml(text || '')}" loading="lazy" onerror="this.replaceWith(document.createTextNode(this.alt))">`;
      },
      table(token) {
        // Default table output, wrapped so wide tables can scroll inside the reader.
        const head = token.header.map((c) => `<th${c.align ? ` style="text-align:${c.align}"` : ''}>${this.parser.parseInline(c.tokens)}</th>`).join('');
        const rows = token.rows.map((row) => `<tr>${row.map((c) => `<td${c.align ? ` style="text-align:${c.align}"` : ''}>${this.parser.parseInline(c.tokens)}</td>`).join('')}</tr>`).join('');
        return `<div class="table-wrap"><table><thead><tr>${head}</tr></thead><tbody>${rows}</tbody></table></div>\n`;
      },
    },
  });
  return { marked, sources };
}

/**
 * A page taken apart for reading.
 * @returns {{facts: {label:string, kind:string, html:string}[], html:string, sources: {n:number, html:string, text:string, count:number}[]}}
 */
export function renderPage(page, graph) {
  const { marked, sources } = createRenderer(page, graph);
  const { facts, body } = liftFacts(page.md);
  const html = marked.parse(body);
  return {
    facts: facts.map((f) => ({ label: f.label, kind: f.kind, value: f.value, html: marked.parseInline(f.value) })),
    html,
    sources: [...sources.values()],
  };
}

function decodeEntities(s) {
  return s.replace(/&(amp|lt|gt|quot|#39);/g, (_, e) => ({ amp: '&', lt: '<', gt: '>', quot: '"', '#39': "'" }[e]));
}

function decodeSafe(s) {
  try { return decodeURIComponent(s); } catch { return s; }
}
