// Spatial planning on a sphere: where each page's district goes, and which links
// become roads on the ground versus flight routes through the air.
import * as THREE from 'three';

const v1 = new THREE.Vector3(), v2 = new THREE.Vector3(), v3 = new THREE.Vector3();

export function angularDistance(a, b) {
  return Math.acos(Math.max(-1, Math.min(1, a.dot(b))));
}

export function slerpDir(a, b, t, target = new THREE.Vector3()) {
  const om = angularDistance(a, b);
  if (om < 1e-5) return target.copy(a);
  const s = Math.sin(om);
  return target.copy(a).multiplyScalar(Math.sin((1 - t) * om) / s).addScaledVector(b, Math.sin(t * om) / s).normalize();
}

export function offsetDir(dir, angle, distance, target = new THREE.Vector3()) {
  const ref = Math.abs(dir.y) > 0.95 ? v1.set(1, 0, 0) : v1.set(0, 1, 0);
  const east = v2.crossVectors(ref, dir).normalize();
  const north = v3.crossVectors(east, dir).normalize();
  return target.copy(dir)
    .addScaledVector(east, Math.cos(angle) * distance)
    .addScaledVector(north, Math.sin(angle) * distance)
    .normalize();
}

/** Force-directed layout on the unit sphere; linked pages settle near each other. */
export function placeSites(sites, links, G, rng, landScore) {
  const n = sites.length;
  const golden = Math.PI * (3 - Math.sqrt(5));
  sites.forEach((s, i) => {
    const y = n === 1 ? 0.35 : 1 - ((i + 0.5) / n) * 2;
    const r = Math.sqrt(1 - y * y);
    const a = i * golden + rng.range(-0.3, 0.3);
    s.dir = new THREE.Vector3(Math.cos(a) * r, y * 0.92, Math.sin(a) * r).normalize();
  });

  const force = sites.map(() => new THREE.Vector3());
  const rest = Math.min(1.2, 2.6 / Math.sqrt(Math.max(n, 2)));
  for (let it = 0; it < 240; it++) {
    const cool = 1 - it / 240;
    force.forEach((f) => f.set(0, 0, 0));
    for (let i = 0; i < n; i++) {
      for (let j = i + 1; j < n; j++) {
        const d = v1.subVectors(sites[i].dir, sites[j].dir);
        const l2 = Math.max(d.lengthSq(), 1e-4);
        const k = (0.03 + ((sites[i].rD + sites[j].rD) / G) ** 2 * 0.5) / l2;
        force[i].addScaledVector(d, k);
        force[j].addScaledVector(d, -k);
      }
    }
    for (const l of links) {
      const d = v1.subVectors(sites[l.b].dir, sites[l.a].dir);
      const len = d.length() || 1e-4;
      const k = 0.05 * Math.min(2, l.weight) * (len - rest);
      force[l.a].addScaledVector(d, k / len);
      force[l.b].addScaledVector(d, -k / len);
    }
    sites.forEach((s, i) => {
      const f = force[i];
      f.addScaledVector(s.dir, -f.dot(s.dir));
      const m = f.length();
      if (m > 0.2) f.multiplyScalar(0.2 / m);
      s.dir.addScaledVector(f, 0.34 * cool + 0.02).normalize();
      // Keep cities away from the extreme poles, where frames get awkward and nobody looks.
      if (Math.abs(s.dir.y) > 0.86) { s.dir.y *= 0.97; s.dir.normalize(); }
    });
  }

  // Prefer dry land, without undoing the layout.
  for (const s of sites) {
    let best = s.dir.clone(), bestScore = -Infinity;
    for (let c = 0; c < 14; c++) {
      const cand = c === 0 ? s.dir.clone() : offsetDir(s.dir, rng.range(0, 6.28), rng.range(0.02, 0.22));
      let clash = 0;
      for (const o of sites) {
        if (o === s) continue;
        const need = (s.rD + o.rD + 0.5) / G;
        const d = angularDistance(cand, o.dir);
        if (d < need) clash += need - d;
      }
      const score = landScore(cand) - clash * 30 - (c === 0 ? 0 : angularDistance(cand, s.dir) * 0.8);
      if (score > bestScore) { bestScore = score; best = cand; }
    }
    s.dir.copy(best);
  }

  // Final hard separation.
  for (let it = 0; it < 60; it++) {
    let moved = false;
    for (let i = 0; i < n; i++) {
      for (let j = i + 1; j < n; j++) {
        const need = (sites[i].rD + sites[j].rD + 0.35) / G;
        const d = angularDistance(sites[i].dir, sites[j].dir);
        if (d < need) {
          const axis = v1.subVectors(sites[i].dir, sites[j].dir).normalize();
          sites[i].dir.addScaledVector(axis, (need - d) * 0.55).normalize();
          sites[j].dir.addScaledVector(axis, -(need - d) * 0.55).normalize();
          moved = true;
        }
      }
    }
    if (!moved) break;
  }
}

function crossesOnSphere(a, b, c, d) {
  const n1 = new THREE.Vector3().crossVectors(a, b);
  const n2 = new THREE.Vector3().crossVectors(c, d);
  const line = new THREE.Vector3().crossVectors(n1, n2);
  if (line.lengthSq() < 1e-10) return false;
  line.normalize();
  const within = (p, x, y) => Math.abs(angularDistance(x, p) + angularDistance(p, y) - angularDistance(x, y)) < 1e-4;
  for (const p of [line, line.clone().negate()]) {
    if (within(p, a, b) && within(p, c, d)) return true;
  }
  return false;
}

/**
 * Splits intra-planet links: a spanning forest plus short, tidy extras become roads.
 * The rest — long or tangled connections — become flight routes.
 */
export function classifyLinks(sites, links, maxRoadAngle = 1.15) {
  const n = sites.length;
  const parent = Array.from({ length: n }, (_, i) => i);
  const find = (x) => { while (parent[x] !== x) { parent[x] = parent[parent[x]]; x = parent[x]; } return x; };
  for (const l of links) l.angle = angularDistance(sites[l.a].dir, sites[l.b].dir);
  const sorted = [...links].sort((x, y) => x.angle - y.angle);
  const roads = [], air = [];
  const crossings = (l) => {
    let c = 0;
    for (const r of roads) {
      if (r.a === l.a || r.a === l.b || r.b === l.a || r.b === l.b) continue;
      if (crossesOnSphere(sites[l.a].dir, sites[l.b].dir, sites[r.a].dir, sites[r.b].dir)) c++;
    }
    return c;
  };
  const pending = [];
  for (const l of sorted) {
    const ra = find(l.a), rb = find(l.b);
    if (ra !== rb) { parent[ra] = rb; roads.push(l); } else pending.push(l);
  }
  const budget = Math.round(n * 1.9);
  for (const l of pending) {
    if (roads.length < budget && l.angle < maxRoadAngle && crossings(l) <= 1) roads.push(l);
    else air.push(l);
  }
  return { roads, air };
}

/** Polyline on the unit sphere with natural meander, bending around other districts. */
export function routeRoad(a, b, sites, ends, G, rng, meander = 0.4) {
  const angle = angularDistance(a, b);
  const steps = Math.max(10, Math.ceil((angle * G) / 0.28));
  const axis = new THREE.Vector3().crossVectors(a, b);
  if (axis.lengthSq() < 1e-8) axis.set(0, 1, 0);
  axis.normalize();
  const f1 = rng.range(1.2, 2.4), f2 = rng.range(3, 5), p1 = rng.range(0, 6.28), p2 = rng.range(0, 6.28);
  const pts = [];
  for (let i = 0; i <= steps; i++) {
    const t = i / steps;
    const p = slerpDir(a, b, t);
    const lateral = (Math.sin(t * f1 * Math.PI + p1) * 0.7 + Math.sin(t * f2 * Math.PI + p2) * 0.3) * Math.sin(t * Math.PI) * meander / G;
    p.addScaledVector(axis, lateral).normalize();
    pts.push(p);
  }
  for (let pass = 0; pass < 5; pass++) {
    for (let i = 1; i < pts.length - 1; i++) {
      const p = pts[i];
      for (let s = 0; s < sites.length; s++) {
        if (s === ends[0] || s === ends[1]) continue;
        const need = (sites[s].rD * 1.02 + 0.2) / G;
        const d = angularDistance(p, sites[s].dir);
        if (d < need) {
          v1.copy(p).sub(sites[s].dir);
          v1.addScaledVector(p, -v1.dot(p));
          if (v1.lengthSq() < 1e-8) v1.copy(axis);
          p.addScaledVector(v1.normalize(), (need - d) * 0.8).normalize();
        }
      }
    }
    // Relax so that the detours stay smooth.
    for (let i = 1; i < pts.length - 1; i++) {
      v2.copy(pts[i - 1]).add(pts[i + 1]).normalize();
      pts[i].lerp(v2, 0.45).normalize();
    }
  }
  return pts;
}

/** Fast lookup for "how much is this surface point flattened by city ground?" */
export class FlattenField {
  constructor(cell = 0.09) {
    this.cell = cell;
    this.map = new Map();
    this.items = [];
  }
  key(ix, iy, iz) { return (ix + 512) * 1048576 + (iy + 512) * 1024 + (iz + 512); }
  /** radius and falloff are angular (radians on the unit sphere). */
  add(dir, radius, falloff) {
    const item = { x: dir.x, y: dir.y, z: dir.z, r: radius, f: falloff };
    this.items.push(item);
    const reach = radius + falloff;
    const c = this.cell;
    const x0 = Math.floor((dir.x - reach) / c), x1 = Math.floor((dir.x + reach) / c);
    const y0 = Math.floor((dir.y - reach) / c), y1 = Math.floor((dir.y + reach) / c);
    const z0 = Math.floor((dir.z - reach) / c), z1 = Math.floor((dir.z + reach) / c);
    for (let x = x0; x <= x1; x++) for (let y = y0; y <= y1; y++) for (let z = z0; z <= z1; z++) {
      const k = this.key(x, y, z);
      let list = this.map.get(k);
      if (!list) { list = []; this.map.set(k, list); }
      list.push(item);
    }
  }
  sample(x, y, z) {
    const c = this.cell;
    const list = this.map.get(this.key(Math.floor(x / c), Math.floor(y / c), Math.floor(z / c)));
    if (!list) return 0;
    let m = 0;
    for (let i = 0; i < list.length; i++) {
      const it = list[i];
      const dx = x - it.x, dy = y - it.y, dz = z - it.z;
      const d = Math.sqrt(dx * dx + dy * dy + dz * dz); // chord ≈ angle at this scale
      if (d <= it.r) return 1;
      if (d < it.r + it.f) {
        const t = 1 - (d - it.r) / it.f;
        const s = t * t * (3 - 2 * t);
        if (s > m) m = s;
      }
    }
    return m;
  }
}

/** Reserves ground for buildings and roads, so nothing is placed on top of anything else. */
export class Occupancy {
  constructor(cell = 0.06) {
    this.cell = cell;
    this.map = new Map();
  }
  _key(ix, iy, iz) { return (ix + 512) * 1048576 + (iy + 512) * 1024 + (iz + 512); }
  add(dir, r) {
    const c = this.cell, it = { x: dir.x, y: dir.y, z: dir.z, r };
    const x0 = Math.floor((dir.x - r) / c), x1 = Math.floor((dir.x + r) / c);
    const y0 = Math.floor((dir.y - r) / c), y1 = Math.floor((dir.y + r) / c);
    const z0 = Math.floor((dir.z - r) / c), z1 = Math.floor((dir.z + r) / c);
    for (let x = x0; x <= x1; x++) for (let y = y0; y <= y1; y++) for (let z = z0; z <= z1; z++) {
      const k = this._key(x, y, z);
      let list = this.map.get(k);
      if (!list) { list = []; this.map.set(k, list); }
      list.push(it);
    }
  }
  free(dir, r) {
    const c = this.cell;
    const x0 = Math.floor((dir.x - r) / c), x1 = Math.floor((dir.x + r) / c);
    const y0 = Math.floor((dir.y - r) / c), y1 = Math.floor((dir.y + r) / c);
    const z0 = Math.floor((dir.z - r) / c), z1 = Math.floor((dir.z + r) / c);
    for (let x = x0; x <= x1; x++) for (let y = y0; y <= y1; y++) for (let z = z0; z <= z1; z++) {
      const list = this.map.get(this._key(x, y, z));
      if (!list) continue;
      for (let i = 0; i < list.length; i++) {
        const it = list[i];
        const dx = dir.x - it.x, dy = dir.y - it.y, dz = dir.z - it.z;
        const rr = r + it.r;
        if (dx * dx + dy * dy + dz * dz < rr * rr) return false;
      }
    }
    return true;
  }
}
