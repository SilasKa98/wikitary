// Seeded randomness and noise, shared by CPU geometry generation and GPU shaders.
import * as THREE from 'three';

export function hashString(str) {
  let h = 2166136261 >>> 0;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

export class RNG {
  constructor(seed = 1) { this.s = (typeof seed === 'string' ? hashString(seed) : seed) >>> 0; }
  next() {
    this.s = (this.s + 0x6d2b79f5) >>> 0;
    let t = this.s;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  }
  range(a, b) { return a + (b - a) * this.next(); }
  int(a, b) { return Math.floor(this.range(a, b + 1)); }
  pick(list) { return list[Math.floor(this.next() * list.length)]; }
  chance(p) { return this.next() < p; }
  fork(salt = 0) { return new RNG((this.s ^ hashString(String(salt))) >>> 0); }
}

const F3 = 1 / 3, G3 = 1 / 6;
const GRAD = new Int8Array([1,1,0,-1,1,0,1,-1,0,-1,-1,0,1,0,1,-1,0,1,1,0,-1,-1,0,-1,0,1,1,0,-1,1,0,1,-1,0,-1,-1]);

export class Noise3 {
  constructor(seed = 1) {
    const rng = new RNG(seed);
    const p = new Uint8Array(256);
    for (let i = 0; i < 256; i++) p[i] = i;
    for (let i = 255; i > 0; i--) {
      const j = Math.floor(rng.next() * (i + 1));
      const t = p[i]; p[i] = p[j]; p[j] = t;
    }
    this.perm = new Uint8Array(512);
    for (let i = 0; i < 512; i++) this.perm[i] = p[i & 255];
  }

  /** Simplex noise in roughly [-1, 1]. */
  simplex(x, y, z) {
    const perm = this.perm;
    const s = (x + y + z) * F3;
    const i = Math.floor(x + s), j = Math.floor(y + s), k = Math.floor(z + s);
    const t = (i + j + k) * G3;
    const x0 = x - i + t, y0 = y - j + t, z0 = z - k + t;
    let i1, j1, k1, i2, j2, k2;
    if (x0 >= y0) {
      if (y0 >= z0) { i1 = 1; j1 = 0; k1 = 0; i2 = 1; j2 = 1; k2 = 0; }
      else if (x0 >= z0) { i1 = 1; j1 = 0; k1 = 0; i2 = 1; j2 = 0; k2 = 1; }
      else { i1 = 0; j1 = 0; k1 = 1; i2 = 1; j2 = 0; k2 = 1; }
    } else if (y0 < z0) { i1 = 0; j1 = 0; k1 = 1; i2 = 0; j2 = 1; k2 = 1; }
    else if (x0 < z0) { i1 = 0; j1 = 1; k1 = 0; i2 = 0; j2 = 1; k2 = 1; }
    else { i1 = 0; j1 = 1; k1 = 0; i2 = 1; j2 = 1; k2 = 0; }
    const x1 = x0 - i1 + G3, y1 = y0 - j1 + G3, z1 = z0 - k1 + G3;
    const x2 = x0 - i2 + 2 * G3, y2 = y0 - j2 + 2 * G3, z2 = z0 - k2 + 2 * G3;
    const x3 = x0 - 1 + 3 * G3, y3 = y0 - 1 + 3 * G3, z3 = z0 - 1 + 3 * G3;
    const ii = i & 255, jj = j & 255, kk = k & 255;
    let n = 0;
    let c = 0.6 - x0 * x0 - y0 * y0 - z0 * z0;
    if (c > 0) { const g = (perm[ii + perm[jj + perm[kk]]] % 12) * 3; c *= c; n += c * c * (GRAD[g] * x0 + GRAD[g + 1] * y0 + GRAD[g + 2] * z0); }
    c = 0.6 - x1 * x1 - y1 * y1 - z1 * z1;
    if (c > 0) { const g = (perm[ii + i1 + perm[jj + j1 + perm[kk + k1]]] % 12) * 3; c *= c; n += c * c * (GRAD[g] * x1 + GRAD[g + 1] * y1 + GRAD[g + 2] * z1); }
    c = 0.6 - x2 * x2 - y2 * y2 - z2 * z2;
    if (c > 0) { const g = (perm[ii + i2 + perm[jj + j2 + perm[kk + k2]]] % 12) * 3; c *= c; n += c * c * (GRAD[g] * x2 + GRAD[g + 1] * y2 + GRAD[g + 2] * z2); }
    c = 0.6 - x3 * x3 - y3 * y3 - z3 * z3;
    if (c > 0) { const g = (perm[ii + 1 + perm[jj + 1 + perm[kk + 1]]] % 12) * 3; c *= c; n += c * c * (GRAD[g] * x3 + GRAD[g + 1] * y3 + GRAD[g + 2] * z3); }
    return 32 * n;
  }

  fbm(x, y, z, octaves = 5, lacunarity = 2.03, gain = 0.5) {
    let a = 1, sum = 0, norm = 0;
    for (let o = 0; o < octaves; o++) {
      sum += a * this.simplex(x, y, z);
      norm += a;
      a *= gain;
      x *= lacunarity; y *= lacunarity; z *= lacunarity;
    }
    return sum / norm;
  }

  /** Sharp mountain ridges in [0, 1]. */
  ridged(x, y, z, octaves = 5, lacunarity = 2.1, gain = 0.5) {
    let a = 0.5, sum = 0, prev = 1;
    for (let o = 0; o < octaves; o++) {
      const n = 1 - Math.abs(this.simplex(x, y, z));
      const v = n * n;
      sum += v * a * prev;
      prev = Math.min(1, v * 2);
      a *= gain;
      x *= lacunarity; y *= lacunarity; z *= lacunarity;
    }
    return sum;
  }
}

/** A tileable 3D Perlin volume. Cheap to sample per pixel, unlike procedural GLSL noise. */
export function createNoiseVolume(size = 64, period = 16) {
  const rng = new RNG(4242);
  const gx = new Float32Array(period ** 3), gy = new Float32Array(period ** 3), gz = new Float32Array(period ** 3);
  for (let i = 0; i < gx.length; i++) {
    const a = rng.next() * Math.PI * 2;
    const zz = rng.next() * 2 - 1;
    const r = Math.sqrt(1 - zz * zz);
    gx[i] = r * Math.cos(a); gy[i] = r * Math.sin(a); gz[i] = zz;
  }
  const data = new Uint16Array(size ** 3);
  const fade = (t) => t * t * t * (t * (t * 6 - 15) + 10);
  const idx = (x, y, z) => ((x + period) % period) + ((y + period) % period) * period + ((z + period) % period) * period * period;
  const scale = period / size;
  let w = 0;
  for (let z = 0; z < size; z++) {
    const pz = z * scale, z0 = Math.floor(pz), fz = pz - z0, wz = fade(fz);
    for (let y = 0; y < size; y++) {
      const py = y * scale, y0 = Math.floor(py), fy = py - y0, wy = fade(fy);
      for (let x = 0; x < size; x++) {
        const px = x * scale, x0 = Math.floor(px), fx = px - x0, wx = fade(fx);
        let v = 0;
        for (let c = 0; c < 8; c++) {
          const dx = c & 1, dy = (c >> 1) & 1, dz = (c >> 2) & 1;
          const g = idx(x0 + dx, y0 + dy, z0 + dz);
          const dot = gx[g] * (fx - dx) + gy[g] * (fy - dy) + gz[g] * (fz - dz);
          v += dot * (dx ? wx : 1 - wx) * (dy ? wy : 1 - wy) * (dz ? wz : 1 - wz);
        }
        data[w++] = THREE.DataUtils.toHalfFloat(Math.max(0, Math.min(1, 0.5 + v * 1.1)));
      }
    }
  }
  const tex = new THREE.Data3DTexture(data, size, size, size);
  tex.format = THREE.RedFormat;
  tex.type = THREE.HalfFloatType;
  tex.minFilter = THREE.LinearFilter;
  tex.magFilter = THREE.LinearFilter;
  tex.wrapS = tex.wrapT = tex.wrapR = THREE.RepeatWrapping;
  tex.unpackAlignment = 1;
  tex.needsUpdate = true;
  return tex;
}

/** GLSL helpers over the noise volume; `p` is in noise cells (1 unit = 1 cell). */
export const NOISE_GLSL = /* glsl */`
uniform highp sampler3D uNoise;
float n3(vec3 p) { return texture(uNoise, p * 0.0625).r; }
const mat3 ROT3 = mat3(0.80, 0.60, 0.0, -0.48, 0.64, 0.60, 0.36, -0.48, 0.80);
float fbm3(vec3 p) { float s = 0.5 * n3(p); p = ROT3 * p * 2.03; s += 0.25 * n3(p); p = ROT3 * p * 2.01; s += 0.125 * n3(p); return s / 0.875; }
float fbm5(vec3 p) { float s = 0.5 * n3(p); p = ROT3 * p * 2.03; s += 0.25 * n3(p); p = ROT3 * p * 2.01; s += 0.125 * n3(p); p = ROT3 * p * 2.02; s += 0.0625 * n3(p); p = ROT3 * p * 2.04; s += 0.03125 * n3(p); return s / 0.96875; }
float ridge3(vec3 p) { float a = 0.5, s = 0.0; for (int i = 0; i < 3; i++) { float n = 1.0 - abs(n3(p) * 2.0 - 1.0); s += a * n * n; a *= 0.5; p = ROT3 * p * 2.1; } return s / 0.875; }
float hash11(float p) { p = fract(p * 0.1031); p *= p + 33.33; p *= p + p; return fract(p); }
float hash21(vec2 p) { vec3 p3 = fract(vec3(p.xyx) * 0.1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }
float hash31(vec3 p3) { p3 = fract(p3 * 0.1031); p3 += dot(p3, p3.zyx + 31.32); return fract((p3.x + p3.y) * p3.z); }
`;
