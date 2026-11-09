// FULMEN — the Stormcallers. A slate world under a lid of thunderheads that never lifts.
// Its people farm the lightning: star-shaped bastions bristle with rods and coil towers,
// arcs crackle between the spires, and the roads are conductors humming with charge.
import * as THREE from 'three';
import { WIN, mix3 } from '../engine/builder.js';
import { NOISE_GLSL } from '../engine/noise.js';

const SLATE = [0x939bad, 0x9ca4b6, 0x8a92a4, 0xa3abbc];
const BASALT = 0x15181e, STEEL = 0x2b3039, PORCELAIN = 0xc9cfda;
// Pale zinc trim on parapets and roofs, so silhouettes read against the gloom.
const TRIM = 0xb4bccc;
const ARC = 0x86a8ff, VIOLET = 0xb08cff, WHITE = 0xe2e9ff;

// Soft, local lightning: the sky is cut into cells, and now and then one of them strikes twice.
// Shared by the ground (which lights up beneath) and the flash layer in the clouds.
const FLASH_GLSL = /* glsl */`
float stormFlash(vec3 p) {
  vec3 q = p * 4.0;
  vec3 id = floor(q);
  float h1 = hash31(id + 0.17), h2 = hash31(id + 3.71), h3 = hash31(id + 9.13);
  if (h3 < 0.2) return 0.0;
  vec3 c = 0.4 + 0.2 * vec3(h1, h2, h3);
  float d = length(fract(q) - c) + (n3(q * 4.0) - 0.5) * 0.1;
  float period = 3.0 + h1 * 7.0;
  float t = mod(uTime + h2 * 97.0, period);
  // Two quick strikes, then the cloud keeps a dim afterglow for a moment.
  float strike = exp(-t * 8.0) + 0.6 * step(0.18, t) * exp(-(t - 0.18) * 10.0) + 0.14 * exp(-t * 2.2);
  return strike * smoothstep(0.3, 0.03, d);
}`;

/** A jagged arc of current from a to b, sagging a little in the middle. */
function arc(b, a, c, rng, { jitter = 0.03, steps = 7, radius = 0.0035 } = {}) {
  const pts = [];
  for (let i = 0; i <= steps; i++) {
    const t = i / steps;
    const k = i === 0 || i === steps ? 0 : jitter;
    pts.push([
      a[0] + (c[0] - a[0]) * t + rng.range(-k, k),
      a[1] + (c[1] - a[1]) * t - Math.sin(t * Math.PI) * jitter * 1.5 + rng.range(-k, k),
      a[2] + (c[2] - a[2]) * t + rng.range(-k, k),
    ]);
  }
  b.tube(pts, radius, { seg: 3 });
}

/** A crackling ring of current, meant for the spin builder. */
function crackle(spin, r, rng, n = 12) {
  const pts = [];
  for (let i = 0; i <= n; i++) {
    const a = (i / n) * Math.PI * 2;
    const rr = i === n ? r : r * (i % 2 ? 1.25 : 0.82) * rng.range(0.92, 1.08);
    const y = i === n ? 0 : rng.range(-1, 1) * r * 0.22;
    pts.push([Math.cos(a) * rr, y, Math.sin(a) * rr]);
  }
  pts[n] = [pts[0][0], pts[0][1], pts[0][2]];
  spin.tube(pts, r * 0.035, { seg: 3 });
}

/** Lightning rod: a tapering steel mast, porcelain insulators, a glowing collector at the tip. */
function rod(b, h, r, tip = ARC, tipGlow = 5) {
  b.paint(STEEL, { rough: 0.3, metal: 0.9 });
  b.cyl(r, r * 0.3, h, 5, { caps: false, smooth: false });
  b.paint(PORCELAIN, { rough: 0.25 });
  for (let i = 0; i < 2; i++) b.cyl(r * 2.4, r * 2.4, r * 0.8, 6, { y: h * (0.18 + i * 0.12) });
  b.paint(tip, { glow: tipGlow });
  b.save().move(0, h, 0).sphere(r * 1.6, { seg: 5, rings: 3, y: -r * 1.6 }).restore();
}

/** Glowing bands around a coil, from y0 up, narrowing toward the top. */
function coil(b, r, y0, gap, n, color, glow, taper = 0.9) {
  b.paint(color, { glow, rough: 0.4 });
  for (let i = 0; i < n; i++) {
    const rr = r * Math.pow(taper, i);
    b.cyl(rr, rr, gap * 0.28, 10, { y: y0 + i * gap, caps: false });
  }
}

/** Capacitor dome: black glass on a steel collar with a band of light. */
function capacitor(b, r, y, glow = 1.6) {
  b.paint(STEEL, { rough: 0.35, metal: 0.85 });
  b.cyl(r * 1.08, r * 1.08, r * 0.22, 10, { y, caps: false });
  b.paint(VIOLET, { glow, rough: 0.4 });
  b.cyl(r * 1.1, r * 1.1, r * 0.06, 10, { y: y + r * 0.14, caps: false });
  b.paint(BASALT, { rough: 0.12, metal: 0.7 });
  b.save().move(0, y + r * 0.22, 0).dome(r, { seg: 10, rings: 3 }).restore();
}

/** Star-shaped outline with k points, CCW like ngon. */
function star(k, outer, inner, rot = 0) {
  const pts = [];
  for (let i = 0; i < k * 2; i++) {
    const a = rot - (i / (k * 2)) * Math.PI * 2;
    const r = i % 2 ? inner : outer;
    pts.push([Math.cos(a) * r, Math.sin(a) * r]);
  }
  return pts;
}

function citadel(b, { h, w, rng, spin, capital }) {
  const wall = rng.pick(SLATE);
  const k = capital ? 6 : 5;
  const R0 = w * 1.75;
  const rot = rng.range(0, 1);
  const wallH = Math.max(0.12, h * 0.15);
  // Battered star-shaped curtain wall on a black plinth.
  b.paint(BASALT, { rough: 0.3, metal: 0.2 });
  b.prism(star(k, R0 * 1.08, R0 * 0.66, rot), 0.035, {});
  b.paint(wall, { rough: 0.42, metal: 0.05, win: WIN.GRID, cw: 0.04, ch: 0.1 });
  b.prism(star(k, R0, R0 * 0.6, rot), wallH, { y: 0.035, top: 0.9 });
  const top = 0.035 + wallH;
  b.paint(TRIM, { rough: 0.4, metal: 0.3 });
  b.prism(star(k, R0 * 0.92, R0 * 0.56, rot), 0.012, { y: top });
  // The keep: a tapering hexagonal tower with arrow-slit windows.
  const keepH = h * 0.44;
  b.paint(mix3(wall, 0xffffff, 0.06), { rough: 0.4, metal: 0.05, win: WIN.GRID, cw: 0.05, ch: 0.11 });
  b.ngon(6, w * 0.78, keepH, { y: top, top: 0.74, rot });
  const keepTop = top + keepH;
  b.paint(STEEL, { rough: 0.3, metal: 0.9 });
  b.ngon(6, w * 0.62, 0.03, { y: keepTop, top: 0.8, rot });
  // The great rod, ringed by coils that glow day and night.
  const spireH = h * 0.5;
  b.cyl(w * 0.16, 0.008, spireH, 6, { y: keepTop + 0.03, caps: false });
  b.paint(PORCELAIN, { rough: 0.25 });
  for (let i = 0; i < 3; i++) b.cyl(w * 0.28 - i * w * 0.03, w * 0.28 - i * w * 0.03, 0.01, 8, { y: keepTop + 0.05 + i * 0.035 });
  coil(b, w * 0.24, keepTop + spireH * 0.32, spireH * 0.12, capital ? 4 : 3, ARC, 2.4, 0.8);
  const tipY = keepTop + 0.03 + spireH;
  b.paint(WHITE, { glow: 6 });
  b.save().move(0, tipY, 0).sphere(0.028, { seg: 6, rings: 4, y: -0.028 }).restore();
  // Rods on alternate bastion points, wired to the keep by standing arcs.
  const hub = [0, keepTop + spireH * 0.62, 0];
  const rodH = Math.max(0.2, h * 0.32);
  for (let i = 0; i < k; i++) {
    const a = rot - (i / k) * Math.PI * 2;
    const x = Math.cos(a) * R0 * 0.82, z = Math.sin(a) * R0 * 0.82;
    if (i % 2 === 0) {
      b.save().move(x, top, z);
      rod(b, rodH, 0.012, i % 4 === 0 ? VIOLET : ARC, 5);
      b.restore();
      b.paint(i % 4 === 0 ? VIOLET : ARC, { glow: 2.4 });
      arc(b, hub, [x, top + rodH * 0.97, z], rng, { jitter: w * 0.07, steps: 8 });
    } else {
      capacitor(b, w * 0.24, top, capital ? 2.2 : 1.6);
    }
  }
  // A ring of current crackles round the tip.
  spin.save().move(0, tipY - spireH * 0.12, 0);
  spin.spinAbout(0, 0, 0, 0, 1, 0, 2.6);
  spin.paint(WHITE, { glow: 3 });
  crackle(spin, w * 0.28, rng, 12);
  spin.restore();
  if (capital) {
    spin.save().move(0, tipY - spireH * 0.3, 0);
    spin.spinAbout(0, 0, 0, 0, 1, 0, -1.9);
    spin.paint(VIOLET, { glow: 3.2 });
    crackle(spin, w * 0.4, rng, 14);
    spin.restore();
  }
}

function section(b, { h, w, rng, spin }) {
  const wall = rng.pick(SLATE);
  const kind = rng.next();
  if (kind < 0.36) {
    // Coil tower: an octagonal shaft wound with bands of light.
    b.paint(BASALT, { rough: 0.3, metal: 0.3 });
    b.ngon(8, w * 0.62, 0.03, {});
    b.paint(wall, { rough: 0.4, metal: 0.05, win: WIN.GRID, cw: 0.034, ch: 0.085 });
    b.ngon(8, w * 0.48, h * 0.7, { y: 0.03, top: 0.72 });
    coil(b, w * 0.4, 0.03 + h * 0.3, h * 0.11, 3, ARC, 1.8, 0.88);
    b.save().move(0, 0.03 + h * 0.7, 0);
    rod(b, h * 0.4, 0.01, WHITE, 5);
    b.restore();
    spin.save().move(0, h * 1.02, 0);
    spin.spinAbout(0, 0, 0, 0, 1, 0, rng.chance(0.5) ? 2.2 : -2.2);
    spin.paint(ARC, { glow: 3 });
    crackle(spin, w * 0.22, rng, 8);
    spin.restore();
  } else if (kind < 0.76) {
    // Bastion hall: an arrowhead of slate with a capacitor on its roof.
    const L = w * 0.9;
    const pts = [[L, 0], [L * 0.2, -L * 0.75], [-L * 0.85, -L * 0.6], [-L * 0.55, 0], [-L * 0.85, L * 0.6], [L * 0.2, L * 0.75]];
    b.paint(wall, { rough: 0.42, metal: 0.05, win: WIN.GRID, cw: 0.036, ch: 0.09 });
    b.prism(pts, h * 0.62, { top: 0.82 });
    b.paint(TRIM, { rough: 0.4, metal: 0.3 });
    b.prism(pts.map(([x, z]) => [x * 0.8, z * 0.8]), 0.012, { y: h * 0.62 });
    capacitor(b, w * 0.3, h * 0.62 + 0.012, 1.6);
    b.save().move(L * 0.5, h * 0.62, 0);
    rod(b, h * 0.36, 0.008, ARC, 5);
    b.restore();
  } else {
    // Gate of two pylons with a standing arc between them.
    const gap = w * 0.62;
    b.paint(wall, { rough: 0.4, metal: 0.05, win: WIN.GRID, cw: 0.034, ch: 0.085 });
    b.box(gap * 2.4, h * 0.3, w * 0.7, { top: 0.9 });
    for (const s of [-1, 1]) {
      b.save().move(s * gap, 0, 0);
      b.paint(wall, { rough: 0.4, metal: 0.05, win: WIN.GRID, cw: 0.034, ch: 0.085 });
      b.box(w * 0.36, h * 0.85, w * 0.36, { top: 0.45 });
      b.restore();
      b.save().move(s * gap, h * 0.85, 0);
      rod(b, h * 0.22, 0.008, VIOLET, 5);
      b.restore();
    }
    b.paint(VIOLET, { glow: 2.6 });
    arc(b, [-gap, h * 1.0, 0], [gap, h * 1.0, 0], rng, { jitter: w * 0.06, steps: 7 });
  }
}

function filler(b, { s, rng, tier }) {
  const roll = rng.next();
  const wall = rng.pick(SLATE);
  if (roll < 0.62) {
    // Bunker block with battered walls, sometimes a rod on the roof.
    const h = s * rng.range(0.7, 1.3) * (1 + tier * 1.1);
    const W = s * rng.range(1.2, 1.55), D = s * rng.range(1.1, 1.4);
    // A blind plinth of dark stone, windows only higher up.
    b.paint(mix3(wall, BASALT, 0.3), { rough: 0.45, metal: 0.05 });
    b.box(W, h * 0.32, D, { top: 0.94 });
    b.paint(wall, { rough: 0.45, metal: 0.05, win: WIN.GRID, cw: 0.04, ch: 0.09 });
    b.box(W * 0.94, h * 0.68, D * 0.94, { y: h * 0.32, top: 0.86 });
    b.paint(TRIM, { rough: 0.4, metal: 0.3 });
    b.box(W * 0.84, 0.01, D * 0.84, { y: h });
    if (tier > 0.3 && rng.chance(0.5)) {
      // Corner turrets with pointed steel caps: the fortress silhouette.
      for (const [x, z] of [[1, 1], [-1, 1], [1, -1], [-1, -1]]) {
        b.save().move(x * W * 0.42, 0, z * D * 0.42);
        b.paint(wall, { rough: 0.45, metal: 0.05 });
        b.ngon(4, s * 0.16, h * 1.12, { rot: Math.PI / 4, cap: false });
        b.paint(TRIM, { rough: 0.4, metal: 0.3 });
        b.ngon(4, s * 0.19, s * 0.3, { y: h * 1.12, top: 0.02, rot: Math.PI / 4, cap: false });
        b.restore();
      }
    } else if (rng.chance(0.4)) b.box(W * 0.4, s * 0.25, D * 0.4, { y: h, top: 0.6 });
    if (rng.chance(0.45)) {
      b.save().move(W * 0.25, h, -D * 0.2);
      rod(b, s * rng.range(0.8, 1.6), 0.006, rng.chance(0.5) ? ARC : VIOLET, -6);
      b.restore();
    }
  } else if (roll < 0.86) {
    // A small coil on a plinth.
    const h = s * rng.range(1.6, 2.6) * (1 + tier);
    b.paint(BASALT, { rough: 0.3 });
    b.box(s * 0.9, 0.025, s * 0.9);
    b.paint(wall, { rough: 0.4, metal: 0.3 });
    b.ngon(6, s * 0.26, h, { y: 0.025, top: 0.55 });
    coil(b, s * 0.3, h * 0.45, h * 0.16, 2, rng.chance(0.6) ? ARC : VIOLET, 1.3, 0.8);
    b.paint(WHITE, { glow: -6 });
    b.save().move(0, h + 0.025, 0).sphere(0.012, { seg: 5, rings: 3, y: -0.012 }).restore();
  } else {
    // Capacitor bank: a row of black glass domes.
    b.paint(BASALT, { rough: 0.3 });
    b.box(s * 1.5, 0.02, s * 0.7);
    for (let i = -1; i <= 1; i++) {
      b.save().move(i * s * 0.48, 0, 0);
      capacitor(b, s * 0.2, 0.02, 1.0);
      b.restore();
    }
  }
}

export default {
  id: 'fulmen',
  name: { en: 'Fulmen', de: 'Fulmen' },
  people: { en: 'The Stormcallers', de: 'Die Sturmrufer' },
  blurb: {
    en: 'A slate world under thunderheads that never lift. Its people farm the lightning: bastions bristle with rods, arcs crackle between the spires, and every road hums with charge.',
    de: 'Eine Schieferwelt unter Gewittertürmen, die nie aufreißen. Ihre Bewohner ernten den Blitz: Bastionen voller Blitzableiter, knisternde Bögen zwischen den Spitzen, und jede Straße summt vor Ladung.',
  },
  bridge: { en: 'storm lines & arc skiffs', de: 'Sturmleitungen & Bogenschiffe' },
  dayLength: 180,
  tilt: 0.28,
  palette: { accent: 0x9cb2ff, window: 0xb4c6ff, route: 0xa898ff, scaffold: 0x5a6274 },
  env: { zenith: 0x48526c, horizon: 0x9ca6c2, ground: 0x1a1d26 },
  terrain: {
    amp: 0.9,
    power: 1.15,
    height(noise, x, y, z) {
      const c = noise.fbm(x * 1.6 + 7, y * 1.6, z * 1.6, 5, 2.0, 0.5);
      let h = c * 2.0 + 0.12;
      if (h > 0) {
        // Knife-edge ridges, rising out of the high ground.
        const r = noise.ridged(x * 3.0 + 19, y * 3.0, z * 3.0, 4, 2.1, 0.5);
        h += r * r * Math.min(1, h * 2.5) * 1.25;
      }
      return h;
    },
  },
  scatterDensity: 0.5,
  scatterMinH: 0.02,
  scatter(b, { rng, h, x, y, z, noise }) {
    if (noise.simplex(x * 10 + 4, y * 10, z * 10) < -0.35) return;
    const roll = rng.next();
    if (roll < 0.62) {
      // Jagged slate shards, wet and leaning.
      const n = rng.chance(0.4) ? 2 : 1;
      for (let i = 0; i < n; i++) {
        const t = rng.range(0.06, 0.2) * (h > 0.6 ? 1.3 : 1);
        b.save().move(i * t * 0.5, 0, i * t * 0.3).rotZ(rng.range(-0.35, 0.35)).rotX(rng.range(-0.35, 0.35));
        b.paint(rng.chance(0.5) ? BASALT : 0x2a2f38, { rough: 0.3, metal: 0.2 });
        b.ngon(rng.chance(0.5) ? 3 : 4, t * 0.32, t, { y: -0.02, top: 0.08, rot: rng.range(0, 3) });
        b.restore();
      }
    } else if (roll < 0.82) {
      // Fulgurite: glass fused by a strike, glowing faintly after dark.
      b.paint(VIOLET, { rough: 0.15, metal: 0.4, glow: -1.6 });
      b.save().rotZ(rng.range(-0.3, 0.3));
      b.tube([[0, 0, 0], [rng.range(-0.02, 0.02), 0.05, rng.range(-0.02, 0.02)], [rng.range(-0.03, 0.03), rng.range(0.08, 0.13), rng.range(-0.03, 0.03)]], 0.008, { seg: 3, taper: 0.2 });
      b.restore();
    } else {
      // A lone storm mast, catching strikes in the wild.
      rod(b, rng.range(0.14, 0.26), 0.006, rng.chance(0.5) ? ARC : VIOLET, -7);
    }
  },
  surfaceGLSL: /* glsl */`
    ${FLASH_GLSL}
    void surface(vec3 p, float h, float mask, float dist, float day, inout vec3 albedo, inout float rough, inout float metal, inout vec3 emissive, inout vec3 bump) {
      float night = smoothstep(0.3, -0.15, day);
      float n = fbm5(p * 7.0);
      float fine = n3(p * 64.0);
      float hh = h + (n - 0.5) * 0.14;
      // Rain: wet patches sheen like oil, dry slate stays matte.
      float wet = smoothstep(0.44, 0.6, fbm3(p * 9.0 + 2.0));
      float flash = stormFlash(p);
      if (hh < 0.0 && mask < 0.6) {
        liquid(p, hh, vec3(0.004, 0.005, 0.014), vec3(0.03, 0.04, 0.075), 22.0, albedo, rough, metal, bump);
        // Rain rings on the water.
        bump += bumpOf(p * 160.0 + vec3(0.0, uTime * 0.6, 0.0), 1.0, 0.05) * smoothstep(20.0, 4.0, dist);
        emissive += vec3(0.5, 0.58, 1.0) * flash * (0.05 + night * 0.3);
      } else {
        vec3 slate = mix(vec3(0.07, 0.078, 0.095), vec3(0.17, 0.18, 0.21), n);
        vec3 heath = mix(vec3(0.06, 0.075, 0.065), vec3(0.1, 0.11, 0.09), fine);
        // Layered strata, tilted by the noise so they read as folded rock.
        float strata = 1.0 - 0.14 * (0.5 + 0.5 * sin(hh * 32.0 + n * 9.0)) * smoothstep(50.0, 8.0, dist);
        albedo = mix(heath, slate, smoothstep(0.08, 0.3, hh + (fbm3(p * 5.0) - 0.5) * 0.3));
        albedo *= strata;
        albedo = mix(albedo, vec3(0.15, 0.17, 0.22), smoothstep(1.0, 1.4, hh + (fine - 0.5) * 0.3));
        albedo *= 0.82 + fine * 0.36;
        albedo = mix(vec3(0.05, 0.055, 0.065), albedo, smoothstep(0.0, 0.03, hh));
        // Never brighter than blue-grey slate, so lit slopes stay rock and never read as snow.
        albedo = min(albedo, vec3(0.13, 0.145, 0.18));
        albedo *= 1.0 - wet * 0.3;
        // Rain sheen: a soft glaze rather than a mirror.
        rough = mix(0.88, 0.66, wet);
        metal = 0.0;
        bump += bumpOf(p, 44.0, 0.1) * smoothstep(90.0, 10.0, dist);
        bump += bumpOf(p, 260.0, 0.1) * smoothstep(14.0, 2.0, dist) * (1.0 - wet * 0.6);
        // Fulgurite seams on the heights: glass veins left by old strikes.
        float v = 1.0 - abs(n3(p * 26.0 + 5.0) * 2.0 - 1.0);
        float seam = smoothstep(0.975, 1.0, v) * smoothstep(0.5, 0.9, hh) * smoothstep(0.55, 0.65, n3(p * 9.0 + 2.0));
        emissive += mix(vec3(0.35, 0.45, 1.0), vec3(0.7, 0.4, 1.0), n3(p * 4.0)) * seam * (0.02 + night * 0.22);
        emissive += vec3(0.5, 0.55, 1.0) * flash * (0.04 + night * 0.22);
        // Town ground: wet flagstones.
        vec3 town = mix(vec3(0.055, 0.06, 0.07), vec3(0.08, 0.085, 0.1), n3(p * 120.0));
        float m = smoothstep(0.3, 0.9, mask);
        albedo = mix(albedo, town, m);
        rough = mix(rough, 0.42, m);
      }
    }`,
  atmosphere: {
    thickness: 1.24,
    rayleigh: [1.3, 1.6, 2.7],
    mie: [1.2, 1.25, 1.4],
    g: 0.55,
    intensity: 7.0,
    haze: 0x7a88c0,
    night: [0.008, 0.01, 0.026],
    fog: { density: 0.021, day: 0x48526a, dusk: 0x5c4a78, night: 0x07080f },
  },
  clouds: { cover: 0.47, scale: 3.6, opacity: 0.94, color: 0x6a7184, shadow: 0x161a24, dusk: 0x6a6088, glow: 0x0a0b1a, speed: 1.7 },
  // Lightning inside the thunderheads: a flash layer just over the clouds, lit only where they are.
  customize(planet) {
    const { R } = planet;
    const cfg = this.clouds;
    const alt = R * 0.118;
    const u = planet.uniforms;
    const material = new THREE.ShaderMaterial({
      uniforms: {
        uNoise: u.uNoise,
        uTime: u.uTime,
        uSunLocal: u.uSunLocal,
        uCover: { value: cfg.cover },
        uScale: { value: cfg.scale },
        uSpeed: { value: cfg.speed },
        uCamAlt: { value: 10 },
        uAlt: { value: alt },
        uRp: { value: R },
      },
      vertexShader: /* glsl */`
        varying vec3 vP;
        void main() { vP = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,
      fragmentShader: /* glsl */`
        precision highp float;
        varying vec3 vP;
        uniform vec3 uSunLocal;
        uniform float uTime, uCover, uScale, uSpeed, uCamAlt, uAlt, uRp;
        ${NOISE_GLSL}
        ${FLASH_GLSL}
        void main() {
          float f = stormFlash(vP);
          if (f < 0.003) discard;
          // Same weather field as the cloud layer, so the flash lights up a cloud and not the void.
          vec3 q = vP * uScale + vec3(uTime * 0.006 * uSpeed, 0.0, uTime * 0.003 * uSpeed);
          float warp = n3(q * 0.7 + 11.0) - 0.5;
          float cloud = smoothstep(uCover - 0.04, uCover + 0.2, fbm5(q + warp * 1.3));
          float night = smoothstep(0.25, -0.2, dot(vP, uSunLocal));
          float fade = uCamAlt > uAlt
            ? mix(0.0, 1.0, smoothstep(uAlt * 2.6, uRp * 1.25, uCamAlt))
            : smoothstep(0.0, uAlt * 0.6, uAlt - uCamAlt) * 0.6;
          vec3 tint = mix(vec3(0.45, 0.56, 1.0), vec3(0.68, 0.5, 1.0), hash31(floor(vP * 4.0) + 5.0));
          gl_FragColor = vec4(tint * f * cloud * (0.5 + night * 1.6) * fade, 0.0);
        }`,
      side: THREE.DoubleSide,
      transparent: true,
      depthWrite: false,
      blending: THREE.CustomBlending,
      blendEquation: THREE.AddEquation,
      blendSrc: THREE.OneFactor,
      blendDst: THREE.OneFactor,
    });
    const mesh = new THREE.Mesh(new THREE.SphereGeometry(R + alt, 96, 64), material);
    mesh.renderOrder = 4;
    planet.spin.add(mesh);
    return {
      update() { material.uniforms.uCamAlt.value = planet.altitude; },
      setVisible(camDist) { mesh.visible = camDist < R * 40; },
    };
  },
  transit: { road: { en: 'Storm line', de: 'Sturmleitung' }, air: { en: 'Arc skiff', de: 'Bogenschiff' } },
  map: { title: { en: 'Storm chart', de: 'Sturmkarte' }, paper: '#0d0f17', edge: '#3a4264', ink: '#dde4ff', soft: '#7c88b4', sea: ['#06070c', '#10131d'], land: ['#1b1f2c', '#353c54'], contour: 'rgba(150,170,255,0.14)', grid: 'rgba(150,170,255,0.06)', road: '#9cb4ff', casing: '#1a2248', air: '#c4a0ff', traffic: '#ffffff', accent: '#a8bcff', lines: 'storm', glyph: 'bolt', font: 'mono' },
  layout: 'grid',
  block: 0.46,
  street: { color: 0x2a3044, rough: 0.3, width: 0.045, glow: -0.35 },
  lotFor(tier, rng) {
    if (tier > 0.42) return rng.pick([0x22262e, 0x262a33, 0x1e2129]);
    return rng.pick([0x262b2a, 0x2c312e, 0x23272a, 0x2a2e33]);
  },
  road: {
    width: 0.17,
    laneOffset: 0.24,
    meander: 0.3,
    lampEvery: 0.55,
    lampChance: 0.7,
    glsl: /* glsl */`
      void roadSurface(float x, float s, float night, inout vec3 albedo, inout float rough, inout float metal, inout vec3 emissive) {
        // Wet black paving with raised slate curbs.
        albedo = vec3(0.022, 0.025, 0.032) + 0.02 * n3(vRP * 260.0);
        rough = 0.2 + 0.22 * n3(vRP * 90.0);
        metal = 0.15;
        float curb = smoothstep(0.8, 0.86, abs(x));
        albedo = mix(albedo, vec3(0.12, 0.13, 0.16), curb);
        rough = mix(rough, 0.5, curb);
        // The conductor down the middle, with packets of charge racing along it.
        float line = smoothstep(0.09, 0.03, abs(x));
        float packet = pow(fract(s * 0.9 - uTime * 0.7), 12.0);
        float hum = 0.9 + 0.1 * sin(uTime * 23.0 + s * 9.0);
        albedo = mix(albedo, vec3(0.25, 0.3, 0.5), line);
        emissive += vec3(0.5, 0.62, 1.0) * line * (0.1 + night * 0.3 + packet * 1.8) * hum;
      }`,
  },
  plaza(b, { r }) {
    b.paint(0x1c2029, { rough: 0.25, metal: 0.2 });
    b.disc(r, { seg: 40 });
    b.paint(ARC, { glow: 1.4 });
    b.disc(r * 0.96, { y: 0.003, seg: 40, inner: r * 0.93 });
    // Conductor spokes run from the rim to the citadel.
    b.paint(VIOLET, { glow: -2.2 });
    for (let i = 0; i < 8; i++) {
      b.save().rotY((i / 8) * Math.PI * 2).move(0, 0.003, r * 0.72).box(0.01, 0.002, r * 0.4).restore();
    }
  },
  landmark: citadel,
  section,
  filler,
  roadside(b, { rng }) {
    if (rng.chance(0.3)) return;
    // Storm-line pylon: insulators on a crossarm, a node that glows at night.
    b.paint(STEEL, { rough: 0.35, metal: 0.85 });
    b.cyl(0.0045, 0.003, 0.13, 4, { caps: false, smooth: false });
    b.box(0.04, 0.004, 0.004, { y: 0.11 });
    b.paint(PORCELAIN, { rough: 0.25 });
    for (const x of [-0.017, 0.017]) b.save().move(x, 0.114, 0).cyl(0.004, 0.004, 0.008, 5).restore();
    b.paint(ARC, { glow: -9 });
    b.save().move(0, 0.13, 0).sphere(0.007, { seg: 5, rings: 3 }).restore();
  },
  vehicles: [
    {
      weight: 2,
      speed: 0.3,
      y: 0.004,
      build(b) {
        // Armoured crawler: a sloped hull on two tracks.
        b.paint(0x0f1115, { rough: 0.85 });
        for (const x of [-0.026, 0.026]) b.save().move(x, 0, 0).box(0.013, 0.016, 0.1).restore();
        b.paint(0x3a4150, { rough: 0.35, metal: 0.6 });
        b.box(0.044, 0.022, 0.094, { y: 0.01, top: 0.78, topZ: 0.82 });
        b.box(0.022, 0.01, 0.03, { y: 0.032, top: 0.7 });
        b.paint(STEEL, { rough: 0.3, metal: 0.9 });
        b.save().move(-0.008, 0.042, -0.01).cyl(0.0012, 0.0008, 0.026, 3, { caps: false, smooth: false }).restore();
        b.paint(ARC, { glow: 6 });
        b.save().move(0, 0.022, 0.048).box(0.028, 0.004, 0.002).restore();
        b.paint(VIOLET, { glow: -6 });
        b.save().move(0, 0.022, -0.048).box(0.03, 0.003, 0.002).restore();
      },
    },
    {
      weight: 1,
      speed: 0.24,
      y: 0.004,
      build(b) {
        // Charge hauler: a crawler carrying a capacitor drum.
        b.paint(0x0f1115, { rough: 0.85 });
        for (const x of [-0.028, 0.028]) b.save().move(x, 0, 0).box(0.013, 0.016, 0.13).restore();
        b.paint(0x454c5c, { rough: 0.35, metal: 0.6 });
        b.box(0.05, 0.014, 0.13, { y: 0.01 });
        b.box(0.04, 0.02, 0.03, { y: 0.024, top: 0.75 });
        b.save().move(0, 0.036, -0.022).rotX(Math.PI / 2);
        b.paint(BASALT, { rough: 0.15, metal: 0.7 });
        b.cyl(0.016, 0.016, 0.07, 8, { y: -0.035 });
        b.paint(ARC, { glow: 3 });
        for (const y of [-0.022, 0.0, 0.022]) b.cyl(0.0168, 0.0168, 0.004, 8, { y, caps: false });
        b.restore();
        b.paint(ARC, { glow: 6 });
        b.save().move(0, 0.03, 0.064).box(0.026, 0.004, 0.002).restore();
      },
    },
  ],
  flyer: {
    speed: 0.75,
    shadow: true,
    build(b) {
      // Storm skiff: a slim hull riding on a glowing keel, swept fins and a little mast.
      b.paint(0x3a4150, { rough: 0.3, metal: 0.7 });
      b.save().rotX(Math.PI / 2).scale(1, 1, 0.6);
      b.lathe([[0, -0.11], [0.018, -0.08], [0.024, 0.0], [0.018, 0.07], [0, 0.12]], 6);
      b.restore();
      b.paint(STEEL, { rough: 0.3, metal: 0.85 });
      b.prism([[0.085, -0.06], [0.012, 0.03], [-0.012, 0.03], [-0.085, -0.06], [0, -0.035]], 0.003);
      b.box(0.003, 0.035, 0.03, { y: 0.008 });
      b.paint(ARC, { glow: 5 });
      b.box(0.006, 0.005, 0.17, { y: -0.02 });
      b.paint(VIOLET, { glow: 6 });
      b.save().move(0, 0.045, 0.005).sphere(0.005, { seg: 5, rings: 3 }).restore();
      b.save().move(0.085, -0.002, -0.06).sphere(0.004, { seg: 4, rings: 2 }).restore();
      b.save().move(-0.085, -0.002, -0.06).sphere(0.004, { seg: 4, rings: 2 }).restore();
    },
  },
  walker: {
    speed: 0.08,
    lift: 0.008,
    bob: 0.003,
    bobRate: 9,
    colors: [0x4a5468, 0x3a4252, 0x5a5874, 0x6a7488, 0x48506a],
    build(b) {
      // Stormcaller in a long oilskin, carrying a little charged lamp.
      b.paint(0xffffff, { rough: 0.3, metal: 0.2 });
      b.cone(0.008, 0.024, 6, { smooth: false });
      b.save().move(0, 0.02, 0).sphere(0.0048, { seg: 5, rings: 3 }).restore();
      b.paint(0xd8e4ff, { glow: 5 });
      b.save().move(0.008, 0.012, 0.002).sphere(0.0022, { seg: 4, rings: 2 }).restore();
    },
  },
  ship(b) {
    // Arc cruiser: a black armoured wedge, wound with coils, a lightning keel beneath.
    b.paint(0x2e3440, { rough: 0.3, metal: 0.75 });
    b.box(0.5, 0.32, 2.4, { y: -0.16, top: 0.45, topZ: 0.85 });
    b.save().move(0, 0, 1.2).rotX(Math.PI / 2).cone(0.24, 0.6, 4, { smooth: false }).restore();
    b.paint(ARC, { glow: 4 });
    for (const z of [-0.6, 0, 0.6]) {
      b.save().move(0, 0, z).rotX(Math.PI / 2).ring(0.36, 0.025, { seg: 12, tseg: 3 }).restore();
    }
    b.box(0.08, 0.06, 2.2, { y: -0.22 });
    b.paint(VIOLET, { glow: 4.5 });
    b.save().move(0, 0, -1.2).sphere(0.16, { y: -0.16, seg: 7, rings: 4 }).restore();
  },
};
