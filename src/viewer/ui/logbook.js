// What this reader has seen. Lives only in this browser: which pages you have opened, and
// the version of every page at the time, so that the map can show what changed since.

const VERSION = 1;

function memoryStorage() {
  const data = new Map();
  return {
    getItem: (k) => (data.has(k) ? data.get(k) : null),
    setItem: (k, v) => { data.set(k, v); },
    removeItem: (k) => { data.delete(k); },
  };
}

function hashString(s) {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); }
  return (h >>> 0).toString(36);
}

export class Logbook {
  /** @param storage anything shaped like localStorage; falls back to memory if it refuses to work */
  constructor(graph, storage) {
    this.graph = graph;
    this.key = `wikitary:${hashString(`${graph.meta.root}|${graph.meta.title}`)}`;
    this.storage = storage ?? memoryStorage();
    const saved = this.read();
    this.firstVisit = !saved;
    this.seen = saved?.seen ?? {};
    this.visits = saved?.visits ?? {};
    this.sections = saved?.sections ?? {};
    this.trip = saved?.trip ?? null;

    // On a first visit everything is new, which says nothing; so nothing is marked.
    this.fresh = new Set();
    this.added = new Set();
    for (const page of graph.pages) {
      if (this.firstVisit) this.seen[page.path] = page.hash;
      else if (this.seen[page.path] !== page.hash) {
        this.fresh.add(page.id);
        if (!(page.path in this.seen)) this.added.add(page.id);
        // There's no telling which part changed, so all of it is unread again.
        delete this.sections[page.path];
      }
      page.fresh = this.fresh.has(page.id);
    }
    const present = new Set(graph.pages.map((p) => p.path));
    this.removed = Object.keys(this.seen).filter((path) => !present.has(path));
    for (const path of this.removed) { delete this.seen[path]; delete this.visits[path]; delete this.sections[path]; }
    this.write();
  }

  read() {
    try {
      const raw = this.storage.getItem(this.key);
      const parsed = raw ? JSON.parse(raw) : null;
      return parsed?.version === VERSION ? parsed : null;
    } catch {
      return null;
    }
  }

  write() {
    try {
      this.storage.setItem(this.key, JSON.stringify({ version: VERSION, seen: this.seen, visits: this.visits, sections: this.sections, trip: this.trip }));
    } catch {
      // Private windows may refuse. The logbook then lasts as long as the page does.
    }
  }

  isVisited(id) { return this.graph.pages[id]?.path in this.visits; }
  isFresh(id) { return this.fresh.has(id); }

  /** Records a page as read. Returns true if that cleared its "new" mark. */
  visit(id, now = Date.now()) {
    const page = this.graph.pages[id];
    if (!page) return false;
    this.visits[page.path] = now;
    this.seen[page.path] = page.hash;
    const cleared = this.fresh.delete(id);
    this.added.delete(id);
    page.fresh = false;
    this.write();
    return cleared;
  }

  /** The sections of a page that have been in view long enough to count as read. */
  sectionsRead(id) {
    return new Set(this.sections[this.graph.pages[id]?.path] ?? []);
  }

  /** Returns true if this section wasn't read before. */
  markSection(id, slug) {
    const path = this.graph.pages[id]?.path;
    if (path == null) return false;
    const list = (this.sections[path] ??= []);
    if (list.includes(slug)) return false;
    list.push(slug);
    this.write();
    return true;
  }

  progress(ids) {
    let done = 0;
    for (const id of ids) if (this.isVisited(id)) done++;
    return { done, total: ids.length };
  }

  /** Remembers a journey and how far it got, by path: ids change when the wiki does. */
  saveTrip({ title, stops, at }) {
    this.trip = { title, at: this.graph.pages[stops[at]?.page]?.path ?? null, stops: stops.map((s) => ({ path: this.graph.pages[s.page].path, note: s.note || '' })) };
    this.write();
  }

  clearTrip() {
    if (!this.trip) return;
    this.trip = null;
    this.write();
  }

  /** The journey under way, without any stops that have since disappeared from the wiki. */
  savedTrip() {
    if (!this.trip) return null;
    const byPath = new Map(this.graph.pages.map((p) => [p.path, p.id]));
    const stops = this.trip.stops.filter((s) => byPath.has(s.path)).map((s) => ({ page: byPath.get(s.path), note: s.note }));
    if (!stops.length) return null;
    const at = Math.max(0, stops.findIndex((s) => s.page === byPath.get(this.trip.at)));
    return { title: this.trip.title, stops, at };
  }

  /** Most recently opened pages first. */
  recent(limit = 20) {
    const byPath = new Map(this.graph.pages.map((p) => [p.path, p]));
    return Object.entries(this.visits)
      .sort((a, b) => b[1] - a[1])
      .slice(0, limit)
      .map(([path, at]) => ({ page: byPath.get(path), at }))
      .filter((x) => x.page);
  }

  markAllSeen() {
    for (const id of this.fresh) {
      const page = this.graph.pages[id];
      this.seen[page.path] = page.hash;
      page.fresh = false;
    }
    const cleared = [...this.fresh];
    this.fresh.clear();
    this.added.clear();
    this.removed = [];
    this.write();
    return cleared;
  }

  /** Forgets which pages were read, but not which versions were seen. */
  resetVisits() {
    this.visits = {};
    this.sections = {};
    this.write();
  }
}
