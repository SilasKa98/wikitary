// The city breathes. Vehicles run along links in the direction the link points,
// with density matching how often it is referenced; inhabitants walk around each
// landmark and commute to its section buildings. The more a page matters, the busier
// its city: more cars in its streets, more people on its squares, more craft overhead.
import * as THREE from 'three';
import { MeshBuilder } from './builder.js';
import { createCityMaterial } from './materials.js';
import { RNG } from './noise.js';
import { offsetDir } from './layout.js';

const lerp = (a, b, t) => a + (b - a) * t;
const _p = new THREE.Vector3(), _q = new THREE.Vector3(), _up = new THREE.Vector3(), _f = new THREE.Vector3(), _s = new THREE.Vector3();

class Path {
  constructor(points, reverse) {
    const n = points.length / 3;
    this.n = n;
    this.pts = reverse ? reversed(points) : points;
    this.cum = new Float32Array(n);
    let acc = 0;
    for (let i = 1; i < n; i++) {
      const a = (i - 1) * 3, b = i * 3;
      acc += Math.hypot(this.pts[b] - this.pts[a], this.pts[b + 1] - this.pts[a + 1], this.pts[b + 2] - this.pts[a + 2]);
      this.cum[i] = acc;
    }
    this.length = acc;
  }
  /** Writes position → _p and forward → _f for arc-length s. `hint` speeds up the search. */
  at(s, hint) {
    const { cum, pts, n } = this;
    let i = Math.min(hint, n - 2);
    while (i < n - 2 && cum[i + 1] < s) i++;
    while (i > 0 && cum[i] > s) i--;
    const span = cum[i + 1] - cum[i] || 1;
    const t = (s - cum[i]) / span;
    const a = i * 3, b = (i + 1) * 3;
    const dx = pts[b] - pts[a], dy = pts[b + 1] - pts[a + 1], dz = pts[b + 2] - pts[a + 2];
    _p.set(pts[a] + dx * t, pts[a + 1] + dy * t, pts[a + 2] + dz * t);
    _f.set(dx, dy, dz).normalize();
    return i;
  }
}

function reversed(points) {
  const n = points.length / 3;
  const out = new Float32Array(points.length);
  for (let i = 0; i < n; i++) {
    const j = n - 1 - i;
    out[i * 3] = points[j * 3]; out[i * 3 + 1] = points[j * 3 + 1]; out[i * 3 + 2] = points[j * 3 + 2];
  }
  return out;
}

function writeMatrix(arr, o, side, up, fwd, pos, sx, sy, sz) {
  arr[o] = side.x * sx; arr[o + 1] = side.y * sx; arr[o + 2] = side.z * sx; arr[o + 3] = 0;
  arr[o + 4] = up.x * sy; arr[o + 5] = up.y * sy; arr[o + 6] = up.z * sy; arr[o + 7] = 0;
  arr[o + 8] = fwd.x * sz; arr[o + 9] = fwd.y * sz; arr[o + 10] = fwd.z * sz; arr[o + 11] = 0;
  arr[o + 12] = pos.x; arr[o + 13] = pos.y; arr[o + 14] = pos.z; arr[o + 15] = 1;
}

export class Traffic {
  constructor(planet, parent, uniforms) {
    this.planet = planet;
    this.group = new THREE.Group();
    this.group.visible = false;
    parent.add(this.group);
    const { civ, G } = planet;
    const rng = new RNG(`traffic:${civ.id}:${planet.cluster.id}`);
    const material = createCityMaterial(civ, uniforms, { instanced: true });
    material.envMap = planet.envMap;
    material.envMapIntensity = 0.5;
    this.material = material;
    this.pools = [];

    const makePool = (spec, capacity) => {
      if (capacity <= 0) return null;
      const b = new MeshBuilder();
      spec.build(b, rng);
      const mesh = new THREE.InstancedMesh(b.toGeometry(), material, capacity);
      mesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
      mesh.frustumCulled = false;
      mesh.castShadow = spec.shadow !== false;
      mesh.count = 0;
      this.group.add(mesh);
      return { mesh, spec, items: [] };
    };

    // ---- ground traffic --------------------------------------------------------
    const specs = civ.vehicles || [];
    const weights = specs.reduce((a, s) => a + (s.weight || 1), 0) || 1;
    const road = planet.roadPaths;
    const roadBudget = Math.min(520, Math.round(planet.budget * 420));
    const cityBudget = Math.min(420, Math.round(planet.budget * 360));
    const standing = (id) => planet.siteByPage.get(id)?.importance ?? 0.5;
    const lanes = [];
    for (const p of road) {
      const density = (0.5 + Math.min(4, Math.log2(1 + p.ab + p.ba)) * 0.5) * lerp(0.55, 1.75, Math.max(standing(p.a), standing(p.b)));
      const n = Math.max(1, Math.round((p.length / 2.4) * density));
      if (p.ab > 0 || p.ba === 0) lanes.push({ path: new Path(p.points, false), n, from: p.a, to: p.b });
      if (p.ba > 0) lanes.push({ path: new Path(p.points, true), n, from: p.b, to: p.a });
    }
    let totalWanted = lanes.reduce((a, l) => a + l.n, 0);
    const scale = totalWanted > roadBudget ? roadBudget / totalWanted : 1;

    const poolBySpec = specs.map((s) => makePool(s, Math.ceil(((roadBudget + cityBudget) * (s.weight || 1)) / weights) + 8));
    const pickPool = () => {
      let w = rng.next() * weights, k = 0;
      while (k < specs.length - 1 && (w -= specs[k].weight || 1) > 0) k++;
      return poolBySpec[k];
    };
    for (const lane of lanes) {
      const count = Math.max(1, Math.round(lane.n * scale));
      for (let i = 0; i < count; i++) {
        const pool = pickPool();
        if (!pool || pool.items.length >= pool.mesh.instanceMatrix.count) continue;
        pool.items.push({
          path: lane.path,
          s: ((i + rng.next() * 0.8) / count) * lane.path.length,
          v: (pool.spec.speed || 0.35) * rng.range(0.82, 1.18),
          hint: 0,
          lane: (civ.road.width * (civ.road.laneOffset ?? 0.24)),
          scale: 1,
          loop: false,
          from: lane.from,
          to: lane.to,
        });
      }
    }

    // ---- local traffic: the streets inside each city ------------------------------
    const cityWeight = planet.sites.reduce((a, s) => a + s.importance * s.importance, 0) || 1;
    for (const site of planet.sites) {
      if (!site.lanes?.length) continue;
      const want = Math.round((cityBudget * site.importance * site.importance) / cityWeight);
      const streets = shuffled(site.lanes, rng).slice(0, Math.max(1, Math.ceil(want / 3)));
      for (let i = 0; i < want; i++) {
        const lane = streets[i % streets.length];
        const pool = pickPool();
        if (!pool || pool.items.length >= pool.mesh.instanceMatrix.count) continue;
        lane.path ??= new Path(toPoints(lane.dirs, G + 0.012), false);
        pool.items.push({
          path: lane.path,
          s: rng.next() * lane.path.length,
          v: (pool.spec.speed || 0.35) * rng.range(0.55, 0.85),
          hint: 0,
          lane: 0,
          scale: 0.58,
          loop: lane.loop,
        });
      }
    }
    for (const p of poolBySpec) if (p) this.pools.push(p);

    // ---- air traffic ------------------------------------------------------------
    if (civ.flyer) {
      const items = [];
      for (const p of planet.airPaths) {
        const n = 1 + Math.min(3, Math.round(Math.log2(1 + p.ab + p.ba) * 0.7) + Math.floor(p.length / 12));
        for (const [cnt, rev] of [[p.ab > 0 ? n : 0, false], [p.ba > 0 ? n : 0, true]]) {
          const path = new Path(p.points, rev);
          const from = rev ? p.b : p.a, to = rev ? p.a : p.b;
          for (let i = 0; i < cnt; i++) {
            items.push({ path, s: ((i + rng.next() * 0.6) / cnt) * path.length, v: (civ.flyer.speed || 1.1) * rng.range(0.85, 1.15), hint: 0, lane: 0, scale: 1, loop: false, from, to, air: true });
          }
        }
      }
      // Big cities have a sky of their own: small craft circling their towers.
      for (const site of planet.sites) {
        const n = Math.round(Math.max(0, site.importance - 0.32) * 13 * Math.min(1, planet.budget * 1.5));
        for (let i = 0; i < n; i++) {
          const radius = site.plaza + rng.range(0.25, 0.8) * (site.rD - site.plaza);
          const height = G + site.h * rng.range(0.5, 1.05) + 0.25;
          const path = new Path(circleAround(site.dir, radius / G, height, rng.chance(0.5)), false);
          items.push({ path, s: rng.next() * path.length, v: (civ.flyer.speed || 1.1) * rng.range(0.32, 0.5), hint: 0, lane: 0, scale: 0.42, loop: true });
        }
      }
      const pool = makePool(civ.flyer, items.length);
      if (pool) { pool.items = items; pool.air = true; this.pools.push(pool); }
    }

    // ---- inhabitants ---------------------------------------------------------------
    this.walkers = [];
    if (civ.walker) {
      const cap = Math.min(820, Math.round(planet.budget * 680));
      const crowd = (site) => 0.12 + site.importance * site.importance * 2.4;
      const per = cap / planet.sites.reduce((a, s) => a + crowd(s), 0);
      for (const site of planet.sites) {
        const n = Math.max(3, Math.round(per * crowd(site)));
        const frame = siteFrame(site.dir);
        const sectionDirs = site.sectionDirs || [];
        for (let i = 0; i < n; i++) {
          const shuttle = sectionDirs.length && rng.chance(0.42);
          if (shuttle) {
            const target = rng.pick(sectionDirs);
            const home = offsetDir(site.dir, Math.atan2(target.dot(frame.n), target.dot(frame.e)), (site.plaza * 0.95) / G);
            this.walkers.push({
              shuttle: true,
              a: home,
              b: target,
              t: rng.next(),
              v: (civ.walker.speed || 0.13) * rng.range(0.7, 1.3) / Math.max(0.2, home.distanceTo(target) * G),
              jitter: rng.range(-0.05, 0.05),
              phase: rng.range(0, 6.28),
            });
          } else {
            this.walkers.push({
              shuttle: false,
              site,
              frame,
              angle: rng.range(0, 6.28),
              radius: rng.range(site.plaza * 1.0, Math.max(site.plaza * 1.06, site.rD * 0.75)),
              w: ((civ.walker.speed || 0.13) * rng.range(0.7, 1.3) * (rng.chance(0.5) ? 1 : -1)) / site.rD,
              phase: rng.range(0, 6.28),
            });
          }
        }
      }
      const b = new MeshBuilder();
      civ.walker.build(b, rng);
      this.walkerMesh = new THREE.InstancedMesh(b.toGeometry(), material, this.walkers.length || 1);
      this.walkerMesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
      this.walkerMesh.frustumCulled = false;
      this.walkerMesh.castShadow = true;
      if (civ.walker.colors) {
        const c = new THREE.Color();
        for (let i = 0; i < this.walkers.length; i++) this.walkerMesh.setColorAt(i, c.set(rng.pick(civ.walker.colors)));
      }
      this.group.add(this.walkerMesh);
    }
    this.time = 0;
    this.G = G;
    this.walkLift = civ.walker?.lift ?? 0.02;
    this.bob = civ.walker?.bob ?? 0.006;
    this.bobRate = civ.walker?.bobRate ?? 11;
  }

  /** A vehicle travelling this link in this direction, nearest the start of its trip. */
  vehicleOn(from, to) {
    let best = null;
    for (const pool of this.pools) {
      for (const it of pool.items) {
        if (it.from === from && it.to === to && !it.ridden && (!best || it.s < best.s)) best = it;
      }
    }
    return best;
  }

  /** The link vehicle closest to a ray in planet coordinates, if any is close enough. */
  pick(origin, dir, radius) {
    let best = null, bestT = Infinity;
    for (const pool of this.pools) {
      for (const it of pool.items) {
        if (it.from === undefined || it.x === undefined) continue;
        const dx = it.x - origin.x, dy = it.y - origin.y, dz = it.z - origin.z;
        const t = dx * dir.x + dy * dir.y + dz * dir.z;
        if (t < 0 || t >= bestT) continue;
        if (dx * dx + dy * dy + dz * dz - t * t < radius * radius) { best = it; bestT = t; }
      }
    }
    return best ? { item: best, t: bestT } : null;
  }

  update(dt) {
    this.time += dt;
    for (const pool of this.pools) {
      const arr = pool.mesh.instanceMatrix.array;
      const { items, spec } = pool;
      const lift = spec.y || 0;
      let write = 0;
      for (let i = 0; i < items.length; i++) {
        const it = items[i];
        it.s += it.v * dt;
        if (it.s >= it.path.length) {
          if (it.ridden) { it.s = it.path.length; it.arrived = true; } else it.s = 0;
        }
        it.hint = it.path.at(it.s, it.hint);
        _up.copy(_p).normalize();
        if (!pool.air) {
          _f.addScaledVector(_up, -_f.dot(_up)).normalize();
        }
        _s.crossVectors(_up, _f).normalize();
        const sU = pool.air ? _q.crossVectors(_f, _s).normalize() : _up;
        _p.addScaledVector(_s, -it.lane).addScaledVector(_up, lift);
        it.x = _p.x; it.y = _p.y; it.z = _p.z;
        it.fx = _f.x; it.fy = _f.y; it.fz = _f.z;
        // Vehicles arrive at and leave from a building: they shrink in over the first stretch.
        const edge = Math.min(it.s, it.path.length - it.s);
        const k = (it.loop ? 1 : Math.min(1, edge / (pool.air ? 0.9 : 0.22))) * it.scale;
        writeMatrix(arr, write * 16, _s, sU, _f, _p, k, k, k);
        write++;
      }
      pool.mesh.count = write;
      pool.mesh.instanceMatrix.needsUpdate = true;
    }

    if (this.walkerMesh) {
      const arr = this.walkerMesh.instanceMatrix.array;
      const G = this.G;
      for (let i = 0; i < this.walkers.length; i++) {
        const w = this.walkers[i];
        let scale = 1;
        if (w.shuttle) {
          w.t += w.v * dt;
          if (w.t > 1) { w.t = 0; const x = w.a; w.a = w.b; w.b = x; }
          _p.copy(w.a).lerp(w.b, w.t).normalize();
          _up.copy(_p);
          _f.subVectors(w.b, w.a).normalize();
          scale = Math.min(1, Math.min(w.t, 1 - w.t) * 14);
        } else {
          w.angle += w.w * dt;
          const r = (w.radius + Math.sin(this.time * 0.3 + w.phase) * 0.08) / G;
          const c = Math.cos(w.angle), s = Math.sin(w.angle);
          _p.copy(w.site.dir).addScaledVector(w.frame.e, c * r).addScaledVector(w.frame.n, s * r).normalize();
          _up.copy(_p);
          _f.copy(w.frame.e).multiplyScalar(-s * Math.sign(w.w)).addScaledVector(w.frame.n, c * Math.sign(w.w));
        }
        _f.addScaledVector(_up, -_f.dot(_up)).normalize();
        _s.crossVectors(_up, _f).normalize();
        const bob = Math.abs(Math.sin(this.time * this.bobRate + w.phase)) * this.bob;
        _p.multiplyScalar(G + this.walkLift + bob);
        writeMatrix(arr, i * 16, _s, _up, _f, _p, scale, scale, scale);
      }
      this.walkerMesh.instanceMatrix.needsUpdate = true;
    }
  }
}

function shuffled(list, rng) {
  const out = [...list];
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(rng.next() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

function toPoints(dirs, radius) {
  const out = new Float32Array(dirs.length * 3);
  dirs.forEach((p, i) => { out[i * 3] = p.x * radius; out[i * 3 + 1] = p.y * radius; out[i * 3 + 2] = p.z * radius; });
  return out;
}

function circleAround(center, angle, radius, clockwise) {
  const frame = siteFrame(center);
  const seg = 40;
  const out = new Float32Array((seg + 1) * 3);
  const c = Math.cos(angle), s = Math.sin(angle);
  for (let i = 0; i <= seg; i++) {
    const a = ((clockwise ? -i : i) / seg) * Math.PI * 2;
    const x = center.x * c + (frame.e.x * Math.cos(a) + frame.n.x * Math.sin(a)) * s;
    const y = center.y * c + (frame.e.y * Math.cos(a) + frame.n.y * Math.sin(a)) * s;
    const z = center.z * c + (frame.e.z * Math.cos(a) + frame.n.z * Math.sin(a)) * s;
    out[i * 3] = x * radius; out[i * 3 + 1] = y * radius; out[i * 3 + 2] = z * radius;
  }
  return out;
}

function siteFrame(dir) {
  const ref = Math.abs(dir.y) > 0.95 ? new THREE.Vector3(1, 0, 0) : new THREE.Vector3(0, 1, 0);
  const e = new THREE.Vector3().crossVectors(ref, dir).normalize();
  const n = new THREE.Vector3().crossVectors(e, dir).normalize();
  return { e, n };
}
