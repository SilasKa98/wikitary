// Signposts at the edge of the screen: while a page is open, they point to the places it
// links to that you can't see from here. Clicking one takes you there.
import * as THREE from 'three';
import { el } from './dom.js';
import { CIVS } from '../civs/index.js';

const _a = new THREE.Vector3(), _b = new THREE.Vector3(), _c = new THREE.Vector3();
const MAX_SIGNS = 7;

export class Signposts {
  constructor(ui, root) {
    this.ui = ui;
    this.root = root;
    this.pool = [];
    this.targets = [];
    this.page = null;
  }

  /** Which links to sign, strongest first; called when the focus changes. */
  setPage(id) {
    if (id === this.page) return;
    this.page = id;
    const { graph, world } = this.ui;
    this.targets = [];
    if (id == null) return;
    const weight = new Map();
    for (const e of graph.edges) {
      if (e.s === id) weight.set(e.t, (weight.get(e.t) || 0) + e.w * 1.5);
      if (e.t === id) weight.set(e.s, (weight.get(e.s) || 0) + e.w);
    }
    this.targets = [...weight.entries()]
      .sort((a, b) => b[1] - a[1])
      .map(([other]) => {
        const page = graph.pages[other];
        if (page.cluster < 0) return null;
        const planet = world.planets[page.cluster];
        const site = planet?.siteByPage.get(other);
        return site ? { id: other, page, planet, site } : null;
      })
      .filter(Boolean);
  }

  update() {
    const { world, lang } = this.ui;
    const { rig, camera } = world;
    const W = innerWidth - (this.ui.reader.classList.contains('open') && innerWidth > 760 ? this.ui.reader.offsetWidth : 0);
    const H = innerHeight;
    const shown = [];
    const onPlanet = rig.mode === 'body' && rig.body?.isPlanet;
    if (onPlanet && !rig.busy && !rig.ride && !world.inputLocked && !this.ui.pageView.wide) {
      const here = rig.body;
      const placed = [];
      // Stay clear of the panels that sit on the scene.
      if (!this.obstacleClock || --this.obstacleClock <= 0) {
        this.obstacleClock = 30;
        this.leftEdge = document.querySelector('.atlas')?.getBoundingClientRect().right || 0;
        this.obstacles = [...document.querySelectorAll('.world-card:not([hidden]), .journey.show, .ride-bar.show')]
          .map((n) => n.getBoundingClientRect())
          .filter((r) => r.width > 0 && getComputedStyle(document.body).display !== 'none');
      }
      const cx = W / 2, cy = H / 2;
      const marginX = 26, marginTop = 88, marginBottom = 46;
      for (const target of this.targets) {
        if (shown.length >= MAX_SIGNS) break;
        let sx, sy, onScreen = false;
        if (target.planet === here) {
          // Is it over the horizon or out of frame?
          _a.copy(target.site.dir).multiplyScalar(here.G + target.site.h);
          const worldPos = here.worldPositionOf(_a, _b);
          _c.copy(worldPos).project(camera);
          const front = target.site.dir.dot(_a.copy(rig.pose.pos).applyMatrix4(_mat.copy(here.spin.matrixWorld).invert()).sub(_b.copy(target.site.dir).multiplyScalar(here.G))) > 0;
          const x = (_c.x * 0.5 + 0.5) * innerWidth, y = (-_c.y * 0.5 + 0.5) * H;
          onScreen = front && _c.z < 1 && x > marginX && x < W - marginX && y > marginTop && y < H - marginBottom;
          // The way there on the ground, seen from the point you are looking at.
          const step = Math.min(0.12, rig.dir.angleTo(target.site.dir) * 0.5);
          _a.copy(rig.dir).lerp(target.site.dir, step / Math.max(rig.dir.angleTo(target.site.dir), 1e-3)).normalize().multiplyScalar(here.G);
          here.worldPositionOf(_a, _b).project(camera);
          _a.copy(rig.dir).multiplyScalar(here.G);
          here.worldPositionOf(_a, _c).project(camera);
          sx = (_b.x - _c.x) * innerWidth; sy = -(_b.y - _c.y) * H;
        } else {
          _b.copy(target.planet.node.position).project(camera);
          const behind = _b.z > 1;
          sx = (_b.x * 0.5 + 0.5) * innerWidth - cx; sy = (-_b.y * 0.5 + 0.5) * H - cy;
          if (behind) { sx = -sx; sy = -sy; }
        }
        if (onScreen) continue;
        const len = Math.hypot(sx, sy) || 1;
        const ux = sx / len, uy = sy / len;
        const halfW = cx - marginX, topRoom = cy - marginTop, bottomRoom = H - cy - marginBottom;
        const t = Math.min(ux ? halfW / Math.abs(ux) : Infinity, uy < 0 ? topRoom / -uy : uy > 0 ? bottomRoom / uy : Infinity);
        const x = cx + ux * t;
        let y = cy + uy * t;
        for (const r of this.obstacles) {
          if (x > r.left - 120 && x < r.right + 120 && y > r.top - 24 && y < r.bottom + 24) y = r.top - 26;
        }
        if (placed.some((p) => Math.abs(p.y - y) < 36 && Math.abs(p.x - x) < 250)) continue;
        placed.push({ x, y });
        const away = target.planet !== here ? CIVS[target.planet.cluster.civ].name[lang] : '';
        shown.push({ id: target.id, title: target.page.title, away, x: Math.max(x, this.leftEdge + 34), y, angle: Math.atan2(uy, ux) });
      }
    }

    while (this.pool.length < shown.length) {
      const arrow = el('span', { class: 'sign-arrow', 'aria-hidden': 'true' });
      const name = el('span', { class: 'sign-name' });
      const away = el('span', { class: 'sign-away' });
      const slot = { arrow, name, away, id: null };
      slot.node = el('button', { class: 'sign', onclick: () => { if (slot.id != null) this.ui.openPage(slot.id); } }, arrow, el('span', { class: 'sign-text' }, name, away));
      this.root.append(slot.node);
      this.pool.push(slot);
    }
    this.pool.forEach((slot, i) => {
      const item = shown[i];
      if (!item) {
        if (slot.id !== null) { slot.node.classList.remove('show'); slot.id = null; }
        return;
      }
      if (slot.id !== item.id) {
        slot.id = item.id;
        slot.name.textContent = item.title;
        slot.away.textContent = item.away;
        slot.away.hidden = !item.away;
        slot.node.classList.add('show');
      }
      // Labels stay on screen by growing inward from whichever edge they sit on.
      const shiftX = item.x > W * 0.66 ? '-100%' : item.x < W * 0.34 ? '0%' : '-50%';
      const shiftY = item.y > H * 0.66 ? '-100%' : item.y < H * 0.34 ? '0%' : '-50%';
      slot.node.style.transform = `translate(${item.x.toFixed(1)}px, ${item.y.toFixed(1)}px) translate(${shiftX}, ${shiftY})`;
      slot.arrow.style.transform = `rotate(${item.angle.toFixed(3)}rad)`;
    });
  }
}

const _mat = new THREE.Matrix4();
