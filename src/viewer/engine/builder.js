// A small procedural modelling kit. Civilisations describe buildings as code;
// everything ends up merged into one geometry per planet for a single draw call.
import * as THREE from 'three';

const colorCache = new Map();
/** sRGB hex → linear RGB triple. */
export function rgb(hex) {
  if (Array.isArray(hex)) return hex;
  let c = colorCache.get(hex);
  if (!c) {
    const col = new THREE.Color(hex);
    c = [col.r, col.g, col.b];
    colorCache.set(hex, c);
  }
  return c;
}

export function mix3(a, b, t) {
  const x = rgb(a), y = rgb(b);
  return [x[0] + (y[0] - x[0]) * t, x[1] + (y[1] - x[1]) * t, x[2] + (y[2] - x[2]) * t];
}

export function shade(c, k) {
  const x = rgb(c);
  return [x[0] * k, x[1] * k, x[2] * k];
}

// Facade styles understood by the city shader.
export const WIN = { NONE: 0, GRID: 1, BANDS: 2, STRIPES: 3, SPOTS: 4, DATA: 5, PULSE: 6, CRYSTAL: 7 };

export class MeshBuilder {
  constructor({ spin = false } = {}) {
    this.pos = []; this.nor = []; this.col = []; this.pbr = []; this.glw = []; this.wn = []; this.pg = [];
    this.isSpin = spin;
    if (spin) { this.piv = []; this.axr = []; }
    this.e = new THREE.Matrix4().elements.slice();
    this.stack = [];
    this.c = [1, 1, 1]; this.r = 0.8; this.m = 0; this.g = 0;
    this.winStyle = 0; this.cw = 0.1; this.ch = 0.12;
    this.page = -1;
    this.pv = [0, 0, 0]; this.ax = [0, 1, 0, 1];
    this._t = new THREE.Matrix4();
  }

  get vertexCount() { return this.pos.length / 3; }

  // ---- transform stack ------------------------------------------------------
  save() { this.stack.push(this.e.slice()); return this; }
  restore() { this.e = this.stack.pop(); return this; }
  setMatrix(m) { this.e = m.elements.slice(); return this; }
  _mul(t) {
    const a = this.e, b = t.elements, o = new Array(16);
    for (let c = 0; c < 4; c++) {
      const b0 = b[c * 4], b1 = b[c * 4 + 1], b2 = b[c * 4 + 2], b3 = b[c * 4 + 3];
      o[c * 4] = a[0] * b0 + a[4] * b1 + a[8] * b2 + a[12] * b3;
      o[c * 4 + 1] = a[1] * b0 + a[5] * b1 + a[9] * b2 + a[13] * b3;
      o[c * 4 + 2] = a[2] * b0 + a[6] * b1 + a[10] * b2 + a[14] * b3;
      o[c * 4 + 3] = a[3] * b0 + a[7] * b1 + a[11] * b2 + a[15] * b3;
    }
    this.e = o;
    return this;
  }
  move(x, y, z) { return this._mul(this._t.makeTranslation(x, y, z)); }
  rotX(a) { return this._mul(this._t.makeRotationX(a)); }
  rotY(a) { return this._mul(this._t.makeRotationY(a)); }
  rotZ(a) { return this._mul(this._t.makeRotationZ(a)); }
  scale(x, y = x, z = x) { return this._mul(this._t.makeScale(x, y, z)); }

  // ---- paint ----------------------------------------------------------------
  paint(color, { rough = 0.8, metal = 0, glow = 0, win = 0, cw = 0.1, ch = 0.12 } = {}) {
    this.c = rgb(color); this.r = rough; this.m = metal; this.g = glow;
    this.winStyle = win; this.cw = cw; this.ch = ch;
    return this;
  }

  /** For spin builders: rotate subsequent geometry about a pivot at `rate` rad/s. */
  spinAbout(px, py, pz, ax, ay, az, rate) {
    const e = this.e;
    this.pv = [
      e[0] * px + e[4] * py + e[8] * pz + e[12],
      e[1] * px + e[5] * py + e[9] * pz + e[13],
      e[2] * px + e[6] * py + e[10] * pz + e[14],
    ];
    const nx = e[0] * ax + e[4] * ay + e[8] * az;
    const ny = e[1] * ax + e[5] * ay + e[9] * az;
    const nz = e[2] * ax + e[6] * ay + e[10] * az;
    const l = Math.hypot(nx, ny, nz) || 1;
    this.ax = [nx / l, ny / l, nz / l, rate];
    return this;
  }

  // ---- vertices ---------------------------------------------------------------
  _v(x, y, z, nx, ny, nz, u, v) {
    const e = this.e;
    this.pos.push(e[0] * x + e[4] * y + e[8] * z + e[12], e[1] * x + e[5] * y + e[9] * z + e[13], e[2] * x + e[6] * y + e[10] * z + e[14]);
    const wx = e[0] * nx + e[4] * ny + e[8] * nz, wy = e[1] * nx + e[5] * ny + e[9] * nz, wz = e[2] * nx + e[6] * ny + e[10] * nz;
    const l = Math.hypot(wx, wy, wz) || 1;
    this.nor.push(wx / l, wy / l, wz / l);
    this.col.push(this.c[0], this.c[1], this.c[2]);
    this.pbr.push(this.r, this.m);
    this.glw.push(this.g);
    this.wn.push(u, v, u === undefined ? 0 : this.winStyle);
    this.pg.push(this.page);
    if (this.isSpin) {
      this.piv.push(this.pv[0], this.pv[1], this.pv[2]);
      this.axr.push(this.ax[0], this.ax[1], this.ax[2], this.ax[3]);
    }
  }

  /** Flat-shaded triangle, wound counter-clockwise when seen from outside. */
  tri(a, b, c, uvA, uvB, uvC) {
    const ux = b[0] - a[0], uy = b[1] - a[1], uz = b[2] - a[2];
    const vx = c[0] - a[0], vy = c[1] - a[1], vz = c[2] - a[2];
    const nx = uy * vz - uz * vy, ny = uz * vx - ux * vz, nz = ux * vy - uy * vx;
    const hasUv = uvA !== undefined && this.winStyle > 0;
    this._vw(a, nx, ny, nz, hasUv ? uvA : null);
    this._vw(b, nx, ny, nz, hasUv ? uvB : null);
    this._vw(c, nx, ny, nz, hasUv ? uvC : null);
    return this;
  }

  _vw(p, nx, ny, nz, uv) {
    if (uv) this._v(p[0], p[1], p[2], nx, ny, nz, uv[0], uv[1]);
    else { this._v(p[0], p[1], p[2], nx, ny, nz, 0, 0); this.wn[this.wn.length - 1] = 0; }
  }

  quad(a, b, c, d, uvs) {
    if (uvs) { this.tri(a, b, c, uvs[0], uvs[1], uvs[2]); this.tri(a, c, d, uvs[0], uvs[2], uvs[3]); }
    else { this.tri(a, b, c); this.tri(a, c, d); }
    return this;
  }

  // ---- primitives ------------------------------------------------------------
  /** Box resting on `y`, centred in XZ, with an optional tapered top. */
  box(w, h, d, { y = 0, top = 1, topZ = top, caps = true } = {}) {
    const hw = w / 2, hd = d / 2, tw = hw * top, td = hd * topZ, y1 = y + h;
    const A = [-hw, y, hd], B = [hw, y, hd], C = [hw, y, -hd], D = [-hw, y, -hd];
    const E = [-tw, y1, td], F = [tw, y1, td], G = [tw, y1, -td], H = [-tw, y1, -td];
    const cw = this.cw, ch = this.ch;
    const uv = (x0, x1) => [[x0 / cw, y / ch], [x1 / cw, y / ch], [x1 / cw, y1 / ch], [x0 / cw, y1 / ch]];
    this.quad(A, B, F, E, uv(0, w));
    this.quad(B, C, G, F, uv(0, d));
    this.quad(C, D, H, G, uv(0, w));
    this.quad(D, A, E, H, uv(0, d));
    if (caps) {
      this.quad(E, F, G, H);
      this.quad(D, C, B, A);
    }
    return this;
  }

  /** Cylinder or truncated cone; set `smooth: false` for faceted sides. */
  cyl(r0, r1, h, seg = 12, { y = 0, smooth = true, caps = true } = {}) {
    const y1 = y + h;
    const slope = (r0 - r1) / (h || 1);
    const circ = 2 * Math.PI * Math.max(r0, r1);
    for (let i = 0; i < seg; i++) {
      const a0 = (i / seg) * Math.PI * 2, a1 = ((i + 1) / seg) * Math.PI * 2;
      const s0 = Math.sin(a0), c0 = Math.cos(a0), s1 = Math.sin(a1), c1 = Math.cos(a1);
      const u0 = (i / seg) * circ / this.cw, u1 = ((i + 1) / seg) * circ / this.cw;
      const v0 = y / this.ch, v1 = y1 / this.ch;
      const has = this.winStyle > 0;
      if (smooth) {
        const put = (s, c, r, yy, u, v) => {
          this._v(r * s, yy, r * c, s, slope, c, u, v);
          if (!has) this.wn[this.wn.length - 1] = 0;
        };
        put(s0, c0, r0, y, u0, v0); put(s1, c1, r0, y, u1, v0); put(s1, c1, r1, y1, u1, v1);
        put(s0, c0, r0, y, u0, v0); put(s1, c1, r1, y1, u1, v1); put(s0, c0, r1, y1, u0, v1);
      } else {
        this.quad([r0 * s0, y, r0 * c0], [r0 * s1, y, r0 * c1], [r1 * s1, y1, r1 * c1], [r1 * s0, y1, r1 * c0],
          [[u0, v0], [u1, v0], [u1, v1], [u0, v1]]);
      }
      if (caps && r1 > 0.0001) this.tri([0, y1, 0], [r1 * s0, y1, r1 * c0], [r1 * s1, y1, r1 * c1]);
      if (caps && r0 > 0.0001) this.tri([0, y, 0], [r0 * s1, y, r0 * c1], [r0 * s0, y, r0 * c0]);
    }
    return this;
  }

  cone(r, h, seg = 10, opts = {}) { return this.cyl(r, 0, h, seg, opts); }

  /** Surface of revolution from [radius, y] pairs, bottom to top. */
  lathe(profile, seg = 16, { smooth = true } = {}) {
    const n = profile.length;
    const pn = [];
    for (let i = 0; i < n; i++) {
      const a = profile[Math.max(0, i - 1)], b = profile[Math.min(n - 1, i + 1)];
      const dr = b[0] - a[0], dy = b[1] - a[1];
      const l = Math.hypot(dr, dy) || 1;
      pn.push([dy / l, -dr / l]);
    }
    for (let j = 0; j < n - 1; j++) {
      const [r0, y0] = profile[j], [r1, y1] = profile[j + 1];
      const v0 = y0 / this.ch, v1 = y1 / this.ch;
      for (let i = 0; i < seg; i++) {
        const a0 = (i / seg) * Math.PI * 2, a1 = ((i + 1) / seg) * Math.PI * 2;
        const s0 = Math.sin(a0), c0 = Math.cos(a0), s1 = Math.sin(a1), c1 = Math.cos(a1);
        const u0 = (i / seg) * 6.283 * r0 / this.cw, u1 = ((i + 1) / seg) * 6.283 * r0 / this.cw;
        if (smooth) {
          const put = (s, c, r, y, pnn, u, v) => {
            this._v(r * s, y, r * c, pnn[0] * s, pnn[1], pnn[0] * c, u, v);
            if (!this.winStyle) this.wn[this.wn.length - 1] = 0;
          };
          put(s0, c0, r0, y0, pn[j], u0, v0); put(s1, c1, r0, y0, pn[j], u1, v0); put(s1, c1, r1, y1, pn[j + 1], u1, v1);
          put(s0, c0, r0, y0, pn[j], u0, v0); put(s1, c1, r1, y1, pn[j + 1], u1, v1); put(s0, c0, r1, y1, pn[j + 1], u0, v1);
        } else {
          this.quad([r0 * s0, y0, r0 * c0], [r0 * s1, y0, r0 * c1], [r1 * s1, y1, r1 * c1], [r1 * s0, y1, r1 * c0]);
        }
      }
    }
    return this;
  }

  sphere(r, { y = 0, seg = 12, rings = 8, sx = 1, sy = 1, from = 0, to = 1 } = {}) {
    const profile = [];
    for (let i = 0; i <= rings; i++) {
      const t = from + (to - from) * (i / rings);
      const a = -Math.PI / 2 + t * Math.PI;
      profile.push([Math.max(0, Math.cos(a)) * r * sx, y + r * sy * (1 + Math.sin(a))]);
    }
    return this.lathe(profile, seg);
  }

  /** Dome: the upper half of a sphere, resting on y. */
  dome(r, { y = 0, seg = 16, rings = 6, sy = 1 } = {}) {
    const profile = [];
    for (let i = 0; i <= rings; i++) {
      const a = (i / rings) * Math.PI / 2;
      profile.push([Math.cos(a) * r, y + Math.sin(a) * r * sy]);
    }
    return this.lathe(profile, seg);
  }

  /** Extruded polygon from CCW 2D points, with optional taper. */
  prism(points, h, { y = 0, top = 1, cap = true } = {}) {
    const n = points.length, y1 = y + h;
    let cx = 0, cz = 0;
    for (const p of points) { cx += p[0]; cz += p[1]; }
    cx /= n; cz /= n;
    let u = 0;
    for (let i = 0; i < n; i++) {
      const a = points[i], b = points[(i + 1) % n];
      const len = Math.hypot(b[0] - a[0], b[1] - a[1]);
      const ta = [cx + (a[0] - cx) * top, cz + (a[1] - cz) * top];
      const tb = [cx + (b[0] - cx) * top, cz + (b[1] - cz) * top];
      const uvs = [[u / this.cw, y / this.ch], [(u + len) / this.cw, y / this.ch], [(u + len) / this.cw, y1 / this.ch], [u / this.cw, y1 / this.ch]];
      this.quad([a[0], y, a[1]], [b[0], y, b[1]], [tb[0], y1, tb[1]], [ta[0], y1, ta[1]], uvs);
      u += len;
      if (cap && top > 0.001) this.tri([cx, y1, cz], [ta[0], y1, ta[1]], [tb[0], y1, tb[1]]);
    }
    return this;
  }

  /** Regular n-gon prism: handy for crystals, hex towers, pylons. */
  ngon(n, r, h, { y = 0, top = 1, rot = 0, cap = true } = {}) {
    const pts = [];
    for (let i = 0; i < n; i++) {
      const a = rot - (i / n) * Math.PI * 2;
      pts.push([Math.cos(a) * r, Math.sin(a) * r]);
    }
    return this.prism(pts, h, { y, top, cap });
  }

  /** Double-ended crystal: lower spike, shaft, upper spike. */
  crystal(n, r, h, { y = 0, tip = 0.3, foot = 0.12, rot = 0 } = {}) {
    const footH = h * foot, tipH = h * tip;
    this.ngon(n, r, footH, { y, top: 1, rot, cap: false });
    this.ngon(n, r, h - footH - tipH, { y: y + footH, top: 0.92, rot, cap: false });
    return this.ngon(n, r * 0.92, tipH, { y: y + h - tipH, top: 0.001, rot, cap: false });
  }

  /** Gabled roof, ridge along X. */
  gable(w, h, d, { y = 0, over = 0.02 } = {}) {
    const hw = w / 2 + over, hd = d / 2 + over, y1 = y + h;
    this.quad([-hw, y, hd], [hw, y, hd], [hw, y1, 0], [-hw, y1, 0]);
    this.quad([hw, y, -hd], [-hw, y, -hd], [-hw, y1, 0], [hw, y1, 0]);
    this.tri([hw, y, hd], [hw, y, -hd], [hw, y1, 0]);
    this.tri([-hw, y, -hd], [-hw, y, hd], [-hw, y1, 0]);
    return this;
  }

  /** Flat disc, facing +Y. */
  disc(r, { y = 0, seg = 24, inner = 0 } = {}) {
    for (let i = 0; i < seg; i++) {
      const a0 = (i / seg) * Math.PI * 2, a1 = ((i + 1) / seg) * Math.PI * 2;
      const s0 = Math.sin(a0), c0 = Math.cos(a0), s1 = Math.sin(a1), c1 = Math.cos(a1);
      if (inner > 0) {
        this.quad([inner * s0, y, inner * c0], [r * s0, y, r * c0], [r * s1, y, r * c1], [inner * s1, y, inner * c1]);
      } else {
        this.tri([0, y, 0], [r * s0, y, r * c0], [r * s1, y, r * c1]);
      }
    }
    return this;
  }

  /** Flat torus ring around Y. */
  ring(r, tube, { y = 0, seg = 24, tseg = 6 } = {}) {
    for (let i = 0; i < seg; i++) {
      const a0 = (i / seg) * Math.PI * 2, a1 = ((i + 1) / seg) * Math.PI * 2;
      for (let j = 0; j < tseg; j++) {
        const b0 = (j / tseg) * Math.PI * 2, b1 = ((j + 1) / tseg) * Math.PI * 2;
        const pt = (a, b) => {
          const rr = r + tube * Math.cos(b);
          return [rr * Math.sin(a), y + tube * Math.sin(b), rr * Math.cos(a)];
        };
        const nor = (a, b) => [Math.cos(b) * Math.sin(a), Math.sin(b), Math.cos(b) * Math.cos(a)];
        const put = (a, b) => { const p = pt(a, b), n = nor(a, b); this._v(p[0], p[1], p[2], n[0], n[1], n[2], 0, 0); this.wn[this.wn.length - 1] = 0; };
        put(a0, b0); put(a1, b0); put(a1, b1);
        put(a0, b0); put(a1, b1); put(a0, b1);
      }
    }
    return this;
  }

  /** Tube along a polyline, using parallel-transported frames. */
  tube(points, radius, { seg = 6, taper = 1 } = {}) {
    const n = points.length;
    if (n < 2) return this;
    let up = [0, 1, 0];
    const rings = [];
    for (let i = 0; i < n; i++) {
      const p = points[i];
      const a = points[Math.max(0, i - 1)], b = points[Math.min(n - 1, i + 1)];
      let tx = b[0] - a[0], ty = b[1] - a[1], tz = b[2] - a[2];
      const tl = Math.hypot(tx, ty, tz) || 1;
      tx /= tl; ty /= tl; tz /= tl;
      if (Math.abs(up[0] * tx + up[1] * ty + up[2] * tz) > 0.95) up = [1, 0, 0];
      let sx = ty * up[2] - tz * up[1], sy = tz * up[0] - tx * up[2], sz = tx * up[1] - ty * up[0];
      const sl = Math.hypot(sx, sy, sz) || 1;
      sx /= sl; sy /= sl; sz /= sl;
      const ux = sy * tz - sz * ty, uy = sz * tx - sx * tz, uz = sx * ty - sy * tx;
      up = [ux, uy, uz];
      const r = radius * (1 + (taper - 1) * (i / (n - 1)));
      const ring = [];
      for (let j = 0; j < seg; j++) {
        const a2 = (j / seg) * Math.PI * 2;
        const c = Math.cos(a2), s = Math.sin(a2);
        const nx = sx * c + ux * s, ny = sy * c + uy * s, nz = sz * c + uz * s;
        ring.push([p[0] + nx * r, p[1] + ny * r, p[2] + nz * r, nx, ny, nz]);
      }
      rings.push(ring);
    }
    const put = (v) => { this._v(v[0], v[1], v[2], v[3], v[4], v[5], 0, 0); this.wn[this.wn.length - 1] = 0; };
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < seg; j++) {
        const a = rings[i][j], b = rings[i][(j + 1) % seg], c = rings[i + 1][(j + 1) % seg], d = rings[i + 1][j];
        put(a); put(d); put(c);
        put(a); put(c); put(b);
      }
    }
    return this;
  }

  toGeometry() {
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(new Float32Array(this.pos), 3));
    g.setAttribute('normal', new THREE.BufferAttribute(new Float32Array(this.nor), 3));
    g.setAttribute('color', new THREE.BufferAttribute(new Float32Array(this.col), 3));
    g.setAttribute('aPbr', new THREE.BufferAttribute(new Float32Array(this.pbr), 2));
    g.setAttribute('aGlow', new THREE.BufferAttribute(new Float32Array(this.glw), 1));
    g.setAttribute('aWin', new THREE.BufferAttribute(new Float32Array(this.wn), 3));
    g.setAttribute('aPage', new THREE.BufferAttribute(new Float32Array(this.pg), 1));
    if (this.isSpin) {
      g.setAttribute('aPivot', new THREE.BufferAttribute(new Float32Array(this.piv), 3));
      g.setAttribute('aAxis', new THREE.BufferAttribute(new Float32Array(this.axr), 4));
    }
    return g;
  }
}

/** Tangent-frame matrix: local +Y points away from the planet's centre. */
export function surfaceFrame(dir, radius, angle = 0, target = new THREE.Matrix4()) {
  const up = new THREE.Vector3(dir.x, dir.y, dir.z).normalize();
  const ref = Math.abs(up.y) > 0.95 ? new THREE.Vector3(1, 0, 0) : new THREE.Vector3(0, 1, 0);
  const east = new THREE.Vector3().crossVectors(ref, up).normalize();
  const north = new THREE.Vector3().crossVectors(east, up).normalize();
  const c = Math.cos(angle), s = Math.sin(angle);
  const x = east.clone().multiplyScalar(c).addScaledVector(north, s);
  const z = north.clone().multiplyScalar(c).addScaledVector(east, -s);
  target.makeBasis(x, up, z);
  target.setPosition(up.x * radius, up.y * radius, up.z * radius);
  return target;
}
