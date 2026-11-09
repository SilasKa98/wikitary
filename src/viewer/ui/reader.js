// Reading a page, in three steps. On arrival a board in the city gives you the gist and the
// districts of the page; opening a district reads just that part, beside its building; and
// when you want all of it, the board widens into a proper page with the city still running.
import { el, ICONS } from './dom.js';
import { renderPage } from './markdown.js';
import { renderBoard } from './board.js';
import { FONTS } from './planetmap.js';
import { countWords } from '../../core/parse.mjs';
import { readingMinutes, dwellSeconds, splitLevel } from './pagedoc.js';

const FLAT_WORDS = 180; // Below this a page is short enough to just show.
const LONG_INTRO = 70; // Above this the text before the first heading gets folded too, so the districts stay in view.
const INTRO = '__intro';
const PANEL = { min: 420, share: 0.34, max: 640, wide: 1240, strip: 72, phone: 760 };
const TICK = 0.5;

export class Reader {
  constructor(ui) {
    this.ui = ui;
    this.wide = false;
    this.flat = false;
    this.tab = 'text';
    this.trail = [];
    this.page = null;
    this.quarters = [];
    this.tracked = [];
    this.active = null;
    this.tabScroll = 0;
    const { t } = ui;

    this.backBtn = el('button', { class: 'reader-back', hidden: true, onclick: () => this.goBack() });
    this.where = el('div', { class: 'reader-where' });
    this.wideBtn = el('button', { class: 'icon-btn', html: ICONS.expand, title: t.readMode, 'aria-label': t.readMode, 'aria-pressed': 'false', onclick: () => this.setWide(!this.wide) });
    this.eyebrow = el('div', { class: 'reader-eyebrow' });
    this.title = el('h1');
    this.chips = el('div', { class: 'chips' });
    this.tabs = el('div', { class: 'reader-tabs', role: 'tablist' });
    this.progress = el('i');
    this.toc = el('nav', { class: 'reader-toc', 'aria-label': t.contents });
    this.text = el('div', { class: 'reader-text' });
    this.scroller = el('div', { class: 'reader-scroll', tabindex: '-1' }, this.text);
    this.sideLinks = el('div', { class: 'side-links' });
    this.sideSources = el('div', { class: 'side-sources' });
    this.side = el('aside', { class: 'reader-side' }, this.sideLinks, this.sideSources);
    this.body = el('div', { class: 'reader-body' }, this.toc, this.scroller, this.side);
    this.node = el('article', { class: 'reader', 'data-tab': 'text' },
      el('div', { class: 'reader-head' },
        el('div', { class: 'reader-bar' }, this.backBtn, this.where, this.wideBtn,
          el('button', { class: 'icon-btn', html: ICONS.close, title: t.close, 'aria-label': t.close, onclick: () => ui.closeReader() })),
        this.eyebrow,
        this.title,
        this.chips,
        this.tabs,
        el('span', { class: 'reader-progress', 'aria-hidden': 'true' }, this.progress)),
      this.body);

    this.peek = el('div', { class: 'peek', role: 'tooltip' });
    this.tableFull = el('div', { class: 'overlay table-full', onclick: (e) => { if (e.target === this.tableFull) this.closeTable(); } });

    this.node.addEventListener('click', (e) => this.onClick(e));
    this.tableFull.addEventListener('click', (e) => this.onClick(e));
    this.node.addEventListener('pointerover', (e) => this.onPointerOver(e));
    this.node.addEventListener('pointerout', (e) => this.onPointerOut(e));
    this.node.addEventListener('focusin', (e) => this.onPeekTarget(e.target.closest?.('a, .cite')));
    this.node.addEventListener('focusout', () => this.hidePeek());
    this.scroller.addEventListener('scroll', () => this.scheduleScroll(), { passive: true });
    // Whatever you just went to stays in focus until you start moving through the text yourself.
    for (const type of ['wheel', 'touchmove', 'pointerdown', 'keydown']) {
      this.scroller.addEventListener(type, () => { this.pinned = false; }, { passive: true });
    }
    this.text.addEventListener('beforematch', (e) => this.onBeforeMatch(e));
    addEventListener('resize', () => { if (this.isOpen) this.layout(); });
    this.layout();
    setInterval(() => this.tick(TICK), TICK * 1000);
  }

  get isOpen() { return this.node.classList.contains('open'); }
  get allOpen() { return this.wide || this.flat; }

  // ---- panel size ---------------------------------------------------------------------
  /** Script owns the width, so that the camera can make room before the panel has settled. */
  panelWidth() {
    const w = innerWidth;
    if (w <= PANEL.phone) return w;
    if (this.wide) return Math.min(PANEL.wide, w - PANEL.strip);
    return Math.max(PANEL.min, Math.min(PANEL.max, w * PANEL.share));
  }

  layout() {
    const width = this.panelWidth();
    document.documentElement.style.setProperty('--reader-w', `${width}px`);
    if (this.isOpen) this.ui.world.setSideInset(innerWidth > PANEL.phone ? width : 0);
  }

  setWide(on) {
    if (on === this.wide) return;
    const { world, t } = this.ui;
    const anchor = this.active;
    this.wide = on;
    this.node.classList.toggle('wide', on);
    document.body.classList.toggle('reading-wide', on);
    this.wideBtn.innerHTML = on ? ICONS.collapse : ICONS.expand;
    this.wideBtn.title = on ? t.readModeOff : t.readMode;
    this.wideBtn.setAttribute('aria-label', this.wideBtn.title);
    this.wideBtn.setAttribute('aria-pressed', on ? 'true' : 'false');
    world.setKeysLocked(on);
    this.setTab('text');
    this.hidePeek();
    this.updateFold();
    this.layout();
    this.body.classList.remove('settle');
    void this.body.offsetWidth;
    this.body.classList.add('settle');
    // Stay at the same place in the text, whatever the new line breaks do to it.
    if (anchor) this.scrollTo(anchor, false);
    if (on) this.scroller.focus({ preventScroll: true });
    this.updateActive();
  }

  // ---- opening and closing -------------------------------------------------------------
  show(page, { slug = null, find = null, restore = null, wasFresh = false, wasNew = false } = {}) {
    const { t, world, lang, logbook } = this.ui;
    this.page = page;
    this.ghost = null;
    this.active = null;
    this.pinned = false;
    this.hidePeek();
    this.setTab('text');
    const civ = this.ui.civOf(page);
    const planet = page.cluster >= 0 ? world.planets[page.cluster] : null;
    this.node.style.setProperty('--h-font', FONTS[civ?.map?.font] ?? FONTS.ui);

    this.where.replaceChildren(
      el('span', { class: 'orb', style: `--c:${this.ui.accentOf(page)};width:9px;height:9px` }),
      el('span', { text: page.path }));
    this.eyebrow.replaceChildren(
      el('span', { text: civ ? `${civ.name[lang]} · ${t.tierNames[page.tier]}` : (page.id === this.ui.graph.star ? t.star : page.id === this.ui.graph.comet ? t.comet : t.asteroid) }),
      ...(wasFresh ? [el('span', { class: 'badge-new', text: wasNew ? t.badgeNew : t.badgeChanged })] : []));
    this.title.textContent = page.title;

    let doc;
    try {
      doc = renderPage(page, this.ui.graph);
    } catch (e) {
      console.error(e);
      doc = { facts: [], html: '', sources: [] };
    }
    const minutes = readingMinutes(page.words);
    const chips = [el('span', {}, el('b', { text: `≈ ${minutes} ${t.minutes}` })), el('span', {}, el('b', { text: page.words.toLocaleString(lang) }), ` ${t.words}`)];
    if (page.updated) chips.push(el('span', {}, `${t.updated} `, el('b', { text: page.updated })));
    this.chips.replaceChildren(...chips);

    this.flat = page.words <= FLAT_WORDS;
    this.node.classList.toggle('flat', this.flat);
    this.buildText(page, doc, planet);
    this.buildSide(page, doc);
    this.buildTabs();
    this.buildToc();
    this.refreshMarks();
    this.updateFold();
    this.scroller.scrollTop = 0;
    this.reveal();

    if (restore) {
      if (restore.open) this.openQuarter(this.quarterBySlug(restore.open));
      this.setTab(restore.tab);
      this.scroller.scrollTop = restore.scroll;
    } else if (slug) {
      this.goTo(slug, { fly: false, smooth: false });
    } else if (find) {
      this.findText(find);
    } else if (this.quarters.length === 1 && !this.flat) {
      this.openQuarter(this.quarters[0]);
    }
    this.updateBack();
    this.updateActive();
  }

  showGhost(ghost) {
    const { t } = this.ui;
    this.page = null;
    this.ghost = ghost;
    this.active = null;
    this.quarters = [];
    this.tracked = [];
    this.flat = true;
    this.hidePeek();
    this.setWide(false);
    this.setTab('text');
    this.node.style.setProperty('--h-font', FONTS.ui);
    this.where.replaceChildren(el('span', { text: t.site }));
    this.eyebrow.replaceChildren(el('span', { text: t.siteTitle }));
    this.title.textContent = ghost.title;
    this.chips.replaceChildren();
    this.tabs.replaceChildren();
    this.toc.replaceChildren();
    this.tocItems = new Map();
    this.node.classList.add('no-toc');
    this.sideLinks.replaceChildren();
    this.sideSources.replaceChildren();
    this.text.replaceChildren(
      el('div', { class: 'prose' }, el('p', { text: t.siteBody })),
      el('div', { class: 'links' },
        el('h4', { text: `${t.referencedBy} · ${ghost.refs.length}` }),
        el('ul', {}, ghost.refs.map((id) => el('li', {}, el('button', { onclick: () => this.ui.openPage(id) },
          el('span', { class: 'orb', style: `--c:${this.ui.accentOf(this.ui.graph.pages[id])}` }),
          el('span', { text: this.ui.graph.pages[id].title })))))));
    this.scroller.scrollTop = 0;
    this.reveal();
    this.updateBack();
    this.ui.world.setSectionFocus(null, null);
  }

  reveal() {
    this.node.classList.add('open');
    document.body.classList.add('reading');
    this.layout();
  }

  close() {
    this.hidePeek();
    this.closeTable();
    this.setWide(false);
    this.node.classList.remove('open');
    document.body.classList.remove('reading');
    this.page = null;
    this.ghost = null;
    this.active = null;
    this.trail = [];
    this.ui.world.setSideInset(0);
    this.ui.world.setSectionFocus(null, null);
  }

  // ---- finding your way back -----------------------------------------------------------
  /** Called just before leaving this page for another, so that you can return to the same spot. */
  remember() {
    if (!this.page) return;
    this.trail.push({
      id: this.page.id,
      scroll: this.scroller.scrollTop,
      open: this.quarters.find((q) => q.open)?.slug ?? null,
      tab: this.tab,
      slug: this.active,
    });
    if (this.trail.length > 40) this.trail.shift();
  }

  /** The way back, if the browser's back button is taking us there. */
  takeBack(id) {
    if (this.trail.at(-1)?.id !== id) return null;
    return this.trail.pop();
  }

  goBack() {
    const place = this.trail.pop();
    if (place) this.ui.openPage(place.id, { restore: place, slug: place.slug });
  }

  updateBack() {
    const place = this.trail.at(-1);
    this.backBtn.hidden = !place;
    if (!place) return;
    const title = this.ui.graph.pages[place.id].title;
    this.backBtn.innerHTML = ICONS.back;
    this.backBtn.append(el('span', { text: title }));
    this.backBtn.title = this.ui.t.backTo(title);
  }

  // ---- the text ------------------------------------------------------------------------
  buildText(page, doc, planet) {
    const { t } = this.ui;
    const tpl = document.createElement('template');
    tpl.innerHTML = doc.html;
    const isHeading = (n) => n.nodeType === 1 && /^H[1-6]$/.test(n.tagName);
    const nodes = [...tpl.content.childNodes].filter((n) => n.nodeType === 1 || n.textContent.trim());
    const level = splitLevel(nodes.filter(isHeading).map((n) => Number(n.tagName[1])));

    const intro = [];
    const groups = [];
    for (const node of nodes) {
      if (isHeading(node) && Number(node.tagName[1]) === level) groups.push({ heading: node, nodes: [] });
      else (groups.at(-1)?.nodes ?? intro).push(node);
    }

    this.quarters = [];
    const introWords = countWords(intro.map((n) => n.textContent).join(' '));
    const foldIntro = !this.flat && introWords > LONG_INTRO;
    const parts = [this.buildLead(page, doc, foldIntro ? [] : intro)];
    if (intro.length && !foldIntro) parts.push(el('div', { class: 'prose reader-intro' }, intro));
    if (foldIntro) {
      const heading = el('h2', { id: 's-__intro', 'data-slug': INTRO });
      groups.unshift({ heading, nodes: intro, title: groups.length ? t.intro : t.fullText });
    }
    groups.forEach((group, i) => {
      const quarter = this.buildQuarter(group, i);
      this.quarters.push(quarter);
      parts.push(quarter.node);
    });
    this.quarters.forEach((q, i) => {
      const next = this.quarters[i + 1];
      if (next) q.body.append(el('button', { class: 'quarter-next', 'data-next': next.slug }, el('span', { text: t.nextDistrict }), el('b', { text: next.title }), el('span', { html: ICONS.next })));
    });

    this.text.replaceChildren(...parts);

    for (const wrap of this.text.querySelectorAll('.table-wrap')) {
      const table = wrap.querySelector('table');
      const box = el('div', { class: 'table-box' });
      wrap.replaceWith(box);
      box.append(wrap);
      if (table.rows.length > 5 || table.rows[0]?.cells.length > 3) {
        box.append(el('button', { class: 'table-expand', html: ICONS.expand, title: t.enlargeTable, 'aria-label': t.enlargeTable }));
      }
    }

    // Which headings are places in the city, and how long each takes to read.
    const words = new Map(page.sections.map((s) => [s.slug, s.words]));
    const read = this.ui.logbook.sectionsRead(page.id);
    this.buildings = new Set();
    this.tracked = [...this.text.querySelectorAll('h1[data-slug], h2[data-slug], h3[data-slug]')]
      .map((heading) => {
        const slug = heading.dataset.slug;
        const quarter = this.quarters.find((q) => q.node.contains(heading)) ?? null;
        if (planet && this.ui.world.sectionBuilding(page.id, slug)) {
          this.buildings.add(slug);
          heading.classList.add('in-city');
          if (!heading.classList.contains('quarter-h')) heading.append(el('span', { class: 'heading-pin', html: ICONS.pin, title: t.showInCity }));
        }
        return { slug, heading, title: heading.textContent, quarter, need: dwellSeconds(words.get(slug) ?? (slug === INTRO ? quarter.words : 40)), dwell: 0, read: read.has(slug), level: Number(heading.tagName[1]) };
      });
    for (const q of this.quarters) {
      q.tracked = this.tracked.filter((tr) => tr.quarter === q);
      if (this.buildings.has(q.slug)) q.pin.hidden = false;
    }
  }

  buildLead(page, doc, intro) {
    const { t } = this.ui;
    const summary = doc.facts.find((f) => f.kind === 'summary');
    const others = doc.facts.filter((f) => f.kind === 'other' || (f.kind === 'updated' && !f.value.includes(page.updated)));
    const lead = el('div', { class: 'reader-lead' });
    if (summary) {
      lead.append(el('p', { class: 'lead-summary', html: summary.html }));
    } else if (page.summary && !intro.map((n) => n.textContent).join(' ').replace(/\s+/g, ' ').trim().startsWith(page.summary.slice(0, 40))) {
      lead.append(el('p', { class: 'lead-summary', text: page.summary }));
    }
    if (others.length) {
      lead.append(el('dl', { class: 'lead-facts' }, others.flatMap((f) => [el('dt', { text: f.label }), el('dd', { html: f.html })])));
    }
    if (!this.flat) {
      this.meter = el('span', { class: 'lead-meter' });
      this.meterText = el('span', { class: 'lead-read' });
      lead.append(el('div', { class: 'lead-actions' },
        el('button', { class: 'lead-all', onclick: () => this.setWide(true) },
          el('span', { html: ICONS.book }),
          el('span', { text: t.readAll }),
          el('kbd', { text: 'T' })),
        el('div', { class: 'lead-progress' }, this.meterText, this.meter)));
    } else {
      this.meter = null;
      this.meterText = null;
    }
    return lead;
  }

  buildQuarter(group, index) {
    const { t } = this.ui;
    const { heading, nodes } = group;
    const clone = heading.cloneNode(true);
    clone.querySelectorAll('.cite').forEach((c) => c.remove());
    const title = group.title ?? clone.textContent.trim();
    const slug = heading.dataset.slug;
    const words = countWords(nodes.map((n) => n.textContent).join(' '));
    const mark = el('span', { class: 'quarter-mark', 'aria-hidden': 'true' });
    const pin = el('span', { class: 'quarter-pin', html: ICONS.pin, title: t.showInCity, hidden: true });
    const toggle = el('button', { class: 'quarter-toggle', type: 'button', 'aria-expanded': 'false' },
      mark,
      el('span', { class: 'quarter-title', text: title }),
      pin,
      el('span', { class: 'quarter-time', text: `${readingMinutes(words)} ${t.minutes}` }));
    heading.replaceChildren(toggle);
    heading.classList.add('quarter-h');
    const body = el('div', { class: 'quarter-body prose' }, nodes);
    const node = el('section', { class: 'quarter', 'data-slug': slug }, heading, body);
    const quarter = { slug, title, node, body, toggle, heading, pin, words, index, open: false, tracked: [] };
    toggle.addEventListener('click', (e) => { if (!e.target.closest('.quarter-pin')) this.onToggle(quarter); });
    toggle.addEventListener('pointerenter', () => this.hint(slug));
    toggle.addEventListener('pointerleave', () => this.hint(null));
    return quarter;
  }

  buildSide(page, doc) {
    const { t } = this.ui;
    const board = renderBoard(this.ui, page);
    this.linkCount = board ? Number(board.dataset.departures) + Number(board.dataset.arrivals) : 0;
    this.sideLinks.replaceChildren(...(board ? [board] : []));

    const stated = doc.facts.filter((f) => f.kind === 'sources');
    const front = page.sources ?? [];
    this.sourceCount = doc.sources.length + stated.length + front.length;
    const parts = [];
    if (stated.length || front.length) {
      parts.push(el('h4', { text: t.sourcesStated }));
      for (const f of stated) parts.push(el('p', { class: 'source-stated', html: f.html }));
      if (front.length) parts.push(el('ul', { class: 'source-plain' }, front.map((s) => el('li', { text: s }))));
    }
    if (doc.sources.length) {
      parts.push(el('h4', { text: t.sourcesCited }));
      parts.push(el('ol', { class: 'source-list' }, doc.sources.map((s) => el('li', { id: `cite-${s.n}`, value: String(s.n) },
        el('span', { html: s.html }),
        s.count > 1 ? el('span', { class: 'source-count', text: `${s.count}×` }) : null))));
    }
    this.sideSources.replaceChildren(...parts);
    this.citations = new Map(doc.sources.map((s) => [String(s.n), s]));
  }

  buildTabs() {
    const { t } = this.ui;
    const tab = (id, label) => el('button', { class: 'reader-tab', role: 'tab', 'data-id': id, type: 'button', onclick: () => this.setTab(id) }, label);
    const items = [tab('text', this.quarters.length > 1 && !this.flat ? `${t.tabDistricts} · ${this.quarters.length}` : t.tabText)];
    if (this.linkCount) items.push(tab('links', `${t.tabLinks} · ${this.linkCount}`));
    if (this.sourceCount) items.push(tab('sources', `${t.tabSources}${this.citations.size ? ` · ${this.citations.size}` : ''}`));
    this.tabs.replaceChildren(...(items.length > 1 ? items : []));
    this.setTab(this.tab);
  }

  setTab(id) {
    if (this.tab === 'text' && id !== 'text') this.tabScroll = this.scroller.scrollTop;
    const back = this.tab !== 'text' && id === 'text';
    this.tab = id;
    this.node.dataset.tab = id;
    for (const b of this.tabs.children) {
      const on = b.dataset.id === id;
      b.classList.toggle('on', on);
      b.setAttribute('aria-selected', on ? 'true' : 'false');
    }
    if (back) this.scroller.scrollTop = this.tabScroll;
  }

  buildToc() {
    const { t } = this.ui;
    this.tocItems = new Map();
    const plain = this.quarters.length < 2 || this.flat;
    this.node.classList.toggle('no-toc', plain);
    if (plain) { this.toc.replaceChildren(); return; }
    const item = (slug, title, cls, time) => {
      const button = el('button', { class: `toc-item ${cls}`, type: 'button', onclick: () => this.goTo(slug, { fly: true }), onpointerenter: () => this.hint(slug), onpointerleave: () => this.hint(null) },
        el('span', { class: 'toc-mark', 'aria-hidden': 'true' }),
        el('span', { class: 'toc-title', text: title }),
        time ? el('span', { class: 'toc-time', text: time }) : null);
      this.tocItems.set(slug, button);
      return button;
    };
    const rows = [];
    for (const q of this.quarters) {
      rows.push(item(q.slug, q.title, 'l1', `${readingMinutes(q.words)} ${t.minutes}`));
      for (const tr of q.tracked) if (tr.slug !== q.slug && tr.level > 1 && tr.heading !== q.heading) rows.push(item(tr.slug, tr.title, 'l2'));
    }
    this.toc.replaceChildren(el('div', { class: 'toc-label', text: t.tabDistricts }), ...rows);
  }

  // ---- folding -------------------------------------------------------------------------
  updateFold() {
    for (const q of this.quarters) {
      const open = this.allOpen || q.open;
      q.node.classList.toggle('open', open);
      q.toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      // Folded text can still be found with the browser's own search.
      if (open) q.body.removeAttribute('hidden');
      else q.body.setAttribute('hidden', 'until-found');
    }
  }

  openQuarter(quarter) {
    if (!quarter) return;
    for (const q of this.quarters) q.open = q === quarter;
    this.updateFold();
  }

  quarterBySlug(slug) { return this.quarters.find((q) => q.slug === slug) ?? null; }

  onToggle(quarter) {
    if (this.allOpen) {
      this.goTo(quarter.slug, { fly: true });
      return;
    }
    if (quarter.open) {
      quarter.open = false;
      this.pinned = false;
      this.updateFold();
      this.updateActive();
      return;
    }
    this.goTo(quarter.slug, { fly: true });
  }

  onBeforeMatch(e) {
    const q = this.quarters.find((x) => x.body === e.target);
    if (q) { this.openQuarter(q); this.updateActive(); }
  }

  /** Shows a section, opening whatever it is folded in, and optionally goes to its building. */
  goTo(slug, { fly = false, smooth = true } = {}) {
    if (!this.page) return false;
    const heading = this.text.querySelector(`[id="s-${CSS.escape(slug)}"]`);
    if (!heading) return false;
    this.setTab('text');
    const quarter = this.quarters.find((q) => q.node.contains(heading));
    if (quarter && !quarter.open) this.openQuarter(quarter);
    this.scrollTo(slug, smooth);
    this.setActive(slug);
    this.pinned = true;
    const place = this.placeOf(slug);
    if (fly && place) this.ui.world.flyToPage(this.page.id, { slug: place });
    this.ui.replaceHash(`#/page/${encodeURIComponent(this.page.path)}/${encodeURIComponent(slug)}`);
    return true;
  }

  scrollTo(slug, smooth) {
    const heading = this.text.querySelector(`[id="s-${CSS.escape(slug)}"]`);
    if (!heading) return;
    const reduced = this.ui.world.rig.reducedMotion;
    // A district's heading sticks to the top, so its own position says nothing; its section's does.
    const quarter = heading.closest('.quarter');
    const isHead = heading.classList.contains('quarter-h');
    const from = isHead ? quarter : heading;
    const under = !isHead && quarter ? quarter.querySelector('.quarter-h').offsetHeight + 6 : 0;
    const top = this.scroller.scrollTop + from.getBoundingClientRect().top - this.scroller.getBoundingClientRect().top - under;
    this.scroller.scrollTo({ top: Math.max(0, top), behavior: smooth && !reduced ? 'smooth' : 'auto' });
  }

  /** Full-text search can land anywhere: open the right fold and mark the word. */
  findText(needle) {
    const walker = document.createTreeWalker(this.text, NodeFilter.SHOW_TEXT);
    const lower = needle.toLowerCase();
    for (let n = walker.nextNode(); n; n = walker.nextNode()) {
      if (n.parentElement.closest('button')) continue;
      const at = n.textContent.toLowerCase().indexOf(lower);
      if (at < 0) continue;
      const quarter = this.quarters.find((q) => q.body.contains(n));
      if (quarter) this.openQuarter(quarter);
      const range = document.createRange();
      range.setStart(n, at);
      range.setEnd(n, at + needle.length);
      const mark = el('mark', { class: 'search-hit' });
      range.surroundContents(mark);
      const top = this.scroller.scrollTop + mark.getBoundingClientRect().top - this.scroller.getBoundingClientRect().top;
      this.scroller.scrollTop = Math.max(0, top - this.scroller.clientHeight * 0.3);
      return true;
    }
    return false;
  }

  // ---- following along -----------------------------------------------------------------
  scheduleScroll() {
    if (this.scrollPending) return;
    this.scrollPending = true;
    requestAnimationFrame(() => {
      this.scrollPending = false;
      this.updateActive();
    });
  }

  isShown(tr) {
    return this.tab === 'text' && (this.allOpen || !tr.quarter || tr.quarter.open);
  }

  /** The building that stands for a section: its own, or if it has none, that of its district. */
  placeOf(slug) {
    if (slug == null || !this.buildings) return null;
    if (this.buildings.has(slug)) return slug;
    const at = this.tracked.findIndex((tr) => tr.slug === slug);
    const quarter = this.tracked[at]?.quarter;
    for (let i = at - 1; i >= 0 && this.tracked[i].quarter === quarter; i--) {
      if (this.tracked[i].level < this.tracked[at].level && this.buildings.has(this.tracked[i].slug)) return this.tracked[i].slug;
    }
    return quarter && this.buildings.has(quarter.slug) ? quarter.slug : null;
  }

  updateActive() {
    if (!this.page || !this.isOpen) return;
    if (!this.pinned) {
      const box = this.scroller.getBoundingClientRect();
      const line = box.top + box.height * 0.3;
      let current = null;
      for (const tr of this.tracked) {
        if (!this.isShown(tr)) continue;
        if (tr.heading.getBoundingClientRect().top <= line) current = tr;
        else {
          if (!current && !this.allOpen) current = tr;
          break;
        }
      }
      this.setActive(current?.slug ?? null);
    }
    const range = this.scroller.scrollHeight - this.scroller.clientHeight;
    this.progress.style.width = this.wide && range > 0 ? `${(this.scroller.scrollTop / range) * 100}%` : '0%';
  }

  setActive(slug) {
    if (slug === this.active) return;
    this.active = slug;
    this.ui.world.setSectionFocus(this.page?.id, this.placeOf(slug));
    let lit = null;
    for (const [key, item] of this.tocItems ?? []) {
      const on = key === slug;
      item.classList.toggle('now', on);
      if (on) lit = item;
    }
    if (lit) {
      const box = this.toc.getBoundingClientRect(), r = lit.getBoundingClientRect();
      if (r.top < box.top + 30) this.toc.scrollTop += r.top - box.top - 30;
      else if (r.bottom > box.bottom - 30) this.toc.scrollTop += r.bottom - box.bottom + 30;
    }
  }

  /** The pointer on a district's name shows you its building, and the reverse. */
  hint(slug) {
    if (!this.page) return;
    this.ui.world.setSectionFocus(this.page.id, this.placeOf(slug ?? this.active));
  }

  hintFromCity(slug) {
    for (const q of this.quarters) q.node.classList.toggle('hinted', q.slug === slug || q.tracked.some((tr) => tr.slug === slug));
    for (const [key, item] of this.tocItems ?? []) item.classList.toggle('hinted', key === slug);
  }

  /** Sections count as read once they have been on screen for a while. */
  tick(dt) {
    if (!this.page || !this.isOpen || document.hidden || this.tab !== 'text' || this.ui.map?.isOpen) return;
    if (!this.tracked.some((tr) => !tr.read)) return;
    const box = this.scroller.getBoundingClientRect();
    this.tracked.forEach((tr, i) => {
      if (tr.read || !this.isShown(tr)) return;
      const top = tr.heading.getBoundingClientRect().top;
      const next = this.tracked[i + 1];
      const bottom = next && next.quarter === tr.quarter
        ? next.heading.getBoundingClientRect().top
        : (tr.quarter?.node ?? this.text).getBoundingClientRect().bottom;
      const seen = Math.min(bottom, box.bottom) - Math.max(top, box.top);
      if (seen < Math.min((bottom - top) * 0.5, box.height * 0.5)) return;
      tr.dwell += dt;
      if (tr.dwell >= tr.need) this.markRead(tr);
    });
  }

  markRead(tr) {
    tr.read = true;
    const { logbook, world } = this.ui;
    if (logbook.markSection(this.page.id, tr.slug)) world.setSectionsRead(this.page.id, logbook.sectionsRead(this.page.id));
    this.refreshMarks();
  }

  refreshMarks() {
    const { t } = this.ui;
    const counted = this.quarters.filter((q) => q.tracked.length);
    let done = 0;
    for (const q of counted) {
      const complete = q.tracked.every((tr) => tr.read);
      q.node.classList.toggle('done', complete);
      this.tocItems?.get(q.slug)?.classList.toggle('done', complete);
      if (complete) done++;
    }
    for (const tr of this.tracked) this.tocItems?.get(tr.slug)?.classList.toggle('done', tr.read);
    if (this.meterText) {
      const has = counted.length > 1;
      this.meterText.textContent = has ? t.districtsRead(done, counted.length) : '';
      this.meter.style.setProperty('--p', `${has ? (done / counted.length) * 100 : 0}%`);
      this.meter.hidden = !has;
    }
  }

  // ---- clicks in the text --------------------------------------------------------------
  onClick(e) {
    const expand = e.target.closest('.table-expand');
    if (expand) { this.openTable(expand.closest('.table-box').querySelector('table')); return; }
    const next = e.target.closest('.quarter-next');
    if (next) { this.goTo(next.dataset.next, { fly: true }); return; }
    const cite = e.target.closest('.cite');
    if (cite) { this.revealSource(cite.dataset.cite); return; }
    const a = e.target.closest('a');
    if (a) {
      if (a.dataset.page != null) {
        e.preventDefault();
        this.closeTable();
        this.ui.openPage(Number(a.dataset.page), { slug: a.dataset.slug || null });
      } else if (a.dataset.ghost) {
        e.preventDefault();
        this.closeTable();
        this.ui.openGhost(a.dataset.ghost);
      } else if (a.dataset.anchor) {
        e.preventDefault();
        this.closeTable();
        this.goTo(a.dataset.anchor, { fly: false });
      }
      return;
    }
    // A heading is a place: clicking it goes there, and leaves the text where it is.
    const heading = e.target.closest('.heading-pin, .quarter-pin');
    if (heading) {
      const slug = heading.closest('[data-slug]')?.dataset.slug;
      if (slug && this.buildings.has(slug)) {
        e.stopPropagation();
        this.ui.world.flyToPage(this.page.id, { slug });
      }
    }
  }

  revealSource(n) {
    const item = this.sideSources.querySelector(`#cite-${CSS.escape(String(n))}`);
    if (!item) return;
    this.hidePeek();
    if (getComputedStyle(this.tabs).display !== 'none' && this.tabs.children.length) this.setTab('sources');
    item.scrollIntoView({ block: 'nearest' });
    item.classList.remove('flash');
    void item.offsetWidth;
    item.classList.add('flash');
  }

  openTable(table) {
    const { t } = this.ui;
    const copy = table.cloneNode(true);
    this.tableFull.replaceChildren(el('div', { class: 'table-sheet' },
      el('div', { class: 'table-sheet-head' }, el('span', { text: this.page?.title ?? '' }),
        el('button', { class: 'icon-btn', html: ICONS.close, title: t.close, 'aria-label': t.close, onclick: () => this.closeTable() })),
      el('div', { class: 'table-sheet-scroll prose' }, copy)));
    this.tableFull.classList.add('open');
  }

  closeTable() { this.tableFull.classList.remove('open'); }
  get tableOpen() { return this.tableFull.classList.contains('open'); }

  // ---- a look before you leap ----------------------------------------------------------
  onPointerOver(e) {
    if (e.pointerType !== 'mouse') return;
    this.onPeekTarget(e.target.closest('a[data-page], a[data-ghost], .cite'));
  }

  onPointerOut(e) {
    if (e.target.closest('a[data-page], a[data-ghost], .cite') && !e.relatedTarget?.closest?.('.peek')) this.hidePeek();
  }

  onPeekTarget(target) {
    clearTimeout(this.peekTimer);
    if (!target || !(target.matches('a[data-page], a[data-ghost], .cite'))) return;
    this.peekTimer = setTimeout(() => this.showPeek(target), 170);
  }

  showPeek(target) {
    const { t, graph, lang, world, logbook } = this.ui;
    let kicker = '', title = '', body = '', hint = '';
    if (target.classList.contains('cite')) {
      const source = this.citations?.get(target.dataset.cite);
      if (!source) return;
      kicker = t.sourceWord;
      title = source.text;
    } else if (target.dataset.ghost) {
      const ghost = graph.ghosts.find((g) => g.key === target.dataset.ghost);
      kicker = t.site;
      title = ghost?.title ?? target.textContent;
      body = t.siteTitle;
    } else {
      const page = graph.pages[Number(target.dataset.page)];
      if (!page) return;
      const civ = this.ui.civOf(page);
      const marks = [civ ? `${civ.name[lang]} · ${t.tierNames[page.tier]}` : '', logbook.isVisited(page.id) ? t.visited : '', logbook.isFresh(page.id) ? t.badgeNew : ''].filter(Boolean);
      kicker = marks.join(' · ');
      title = page.title;
      const section = target.dataset.slug && page.sections.find((s) => s.slug === target.dataset.slug);
      body = section ? `› ${section.title}` : page.summary;
      hint = page.cluster === this.page?.cluster && page.cluster >= 0 ? t.peekGo : t.peekFly;
      // Where it would take you lights up in the city too.
      if (page.cluster >= 0) { this.peekPlanet = world.planets[page.cluster]; this.peekPlanet?.setHover(page.id); }
    }
    this.peek.replaceChildren(
      el('div', { class: 'k', text: kicker }),
      el('div', { class: 't', text: title }),
      body ? el('div', { class: 's', text: body }) : '',
      hint ? el('div', { class: 'h', text: hint }) : '');
    this.peek.classList.add('show');
    const r = target.getBoundingClientRect();
    const w = this.peek.offsetWidth, h = this.peek.offsetHeight;
    const panel = this.node.getBoundingClientRect();
    let x, y;
    if (!this.wide && panel.left > w + 24) {
      // Out in the open beside the panel, where it doesn't cover what you are reading.
      x = panel.left - w - 14;
      y = r.top + r.height / 2 - h / 2;
    } else {
      x = r.left + r.width / 2 - w / 2;
      y = r.top - h - 10;
      if (y < 10) y = r.bottom + 10;
    }
    x = Math.max(10, Math.min(innerWidth - w - 10, x));
    y = Math.max(10, Math.min(innerHeight - h - 10, y));
    this.peek.style.transform = `translate(${x.toFixed(0)}px, ${y.toFixed(0)}px)`;
  }

  hidePeek() {
    clearTimeout(this.peekTimer);
    this.peek.classList.remove('show');
    this.peekPlanet?.setHover(null);
    this.peekPlanet = null;
  }
}

/** Every page's read sections shine from the first frame, not just once you open them again. */
export function lightReadSections(ui) {
  const { logbook, world, graph } = ui;
  for (const page of graph.pages) {
    const read = logbook.sectionsRead(page.id);
    if (read.size && page.cluster >= 0) world.setSectionsRead(page.id, read);
  }
}
