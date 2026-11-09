// LANTERNA — the Lamplighters. A world caught in an endless dusk: indigo hills, rust-red groves,
// rivers that hold the colour of the sunset. Every tower is a stack of glowing paper lanterns,
// every road a string of lights, and each thought rises from the city as a sky lantern.
import * as THREE from 'three';
import { WIN, mix3 } from '../engine/builder.js';
import { RNG } from '../engine/noise.js';
import { offsetDir } from '../engine/layout.js';

const ROOFS = [0x2a2c62, 0x3a2656, 0x22345c, 0x44244c];
const WALLS = [0x8a3226, 0x6e2a2c, 0x9a5430, 0x5a3248];
const LEAF = [0xa8361e, 0xc04a24, 0x8a2a1e, 0xd2642a, 0x9c2c2c];
const LIGHTS = [0xff8a34, 0xffb04a, 0xff5c30, 0xffc860];
const PAPER = 0xe8984c, LACQUER = 0x7a2620, DARKWOOD = 0x2e1c22, STONE = 0x4e465e, GOLD = 0xd8a040, AMBER = 0xffa648;

/** Curved roof with upturned eaves; seg 4 makes it square, seg 8 octagonal. */
function roof(b, r, y, h, color, { seg = 8, flare = 1.7, under = true } = {}) {
  const R = r * flare;
  b.save().rotY(seg === 4 ? Math.PI / 4 : Math.PI / 8);
  // Gilded eave trim catches the low sun, and the lantern light after dark.
  b.paint(GOLD, { rough: 0.5, metal: 0.6, glow: -0.35 });
  b.lathe([[R, y + h * 0.18], [R * 0.9, y + h * 0.06]], seg, { smooth: false });
  b.paint(color, { rough: 0.5, metal: 0.25 });
  b.lathe([[R * 0.9, y + h * 0.06], [R * 0.62, y + h * 0.2], [r * 0.7, y + h * 0.62], [r * 0.24, y + h]], seg, { smooth: false });
  if (under) {
    b.paint(DARKWOOD, { rough: 0.85 });
    b.lathe([[r * 0.9, y], [R * 0.9, y + h * 0.06]], seg, { smooth: false });
  }
  b.restore();
  return R;
}

/** A paper lantern hanging with its top at (x, y, z). */
function lantern(b, x, y, z, s, color, glow = 2.6, seg = 6) {
  b.paint(color, { glow, rough: 0.6 });
  b.save().move(x, y - s * 2.5, z).sphere(s, { seg, rings: 3, sy: 1.25 }).restore();
}

/** A sagging string of lanterns between two points. */
function garland(b, a, c, count, rng) {
  const pts = [];
  for (let i = 0; i <= 4; i++) {
    const t = i / 4, sag = Math.sin(t * Math.PI) * 0.09;
    pts.push([a[0] + (c[0] - a[0]) * t, a[1] + (c[1] - a[1]) * t - sag, a[2] + (c[2] - a[2]) * t]);
  }
  b.paint(DARKWOOD, { rough: 0.9 });
  b.tube(pts, 0.0028, { seg: 3 });
  for (let i = 1; i <= count; i++) {
    const t = i / (count + 1), sag = Math.sin(t * Math.PI) * 0.09;
    const x = a[0] + (c[0] - a[0]) * t, y = a[1] + (c[1] - a[1]) * t - sag, z = a[2] + (c[2] - a[2]) * t;
    b.paint(rng.pick(LIGHTS), { glow: 3.2 });
    b.save().move(x, y - 0.034, z).sphere(0.013, { seg: 5, rings: 2, sy: 1.3 }).restore();
  }
}

/** The landmark: a slender spire of glowing paper drums under flared roofs, lantern strings to the plaza. */
function lanternSpire(b, { h, w, rng, spin, capital }) {
  const tiers = capital ? 6 : h > 2.2 ? 5 : h > 1.2 ? 4 : 3;
  const tile = rng.pick(ROOFS), wall = rng.pick(WALLS);
  b.paint(STONE, { rough: 0.85 });
  b.ngon(8, w * 1.4, 0.04, { rot: Math.PI / 8 });
  b.ngon(8, w * 1.12, 0.04, { y: 0.04, rot: Math.PI / 8 });
  let y = 0.08, r = w * 0.64;
  const body = h * 0.86 - 0.08;
  let sum = 0;
  for (let i = 0; i < tiers; i++) sum += 1 - i * 0.07;
  const eaves = [];
  for (let i = 0; i < tiers; i++) {
    const th = (body * (1 - i * 0.07)) / sum;
    const wallH = th * 0.62, roofH = th * 0.38;
    // Lacquered gallery, then the drum: a hall at the foot, lit paper above.
    b.paint(LACQUER, { rough: 0.5 });
    b.cyl(r * 1.1, r * 1.1, th * 0.05, 8, { y, smooth: false });
    if (i === 0) b.paint(wall, { rough: 0.6, win: WIN.GRID, cw: 0.05, ch: 0.07 });
    else b.paint(PAPER, { rough: 0.75, glow: -0.55 });
    b.cyl(r, r * 0.94, wallH, 8, { y: y + th * 0.05, smooth: false, caps: false });
    const ry = y + th * 0.05 + wallH;
    const R = roof(b, r * 0.94, ry, roofH, tile, { flare: 1.72 });
    // Lanterns hang from alternate eave tips.
    for (let k = 0; k < 4; k++) {
      const a = Math.PI / 8 + ((k * 2 + (i % 2)) / 8) * Math.PI * 2;
      lantern(b, Math.sin(a) * R * 0.97, ry + roofH * 0.12, Math.cos(a) * R * 0.97, 0.016 + w * 0.012, LIGHTS[(k + i) % LIGHTS.length], 2.8, 5);
    }
    eaves.push({ y: ry + roofH * 0.15, R });
    y += th;
    r *= 0.84;
  }
  // Crown: one great lantern and a gilded needle.
  const big = w * (capital ? 0.34 : 0.26);
  b.paint(0xff6a30, { glow: 1.1, rough: 0.6 });
  b.save().move(0, y - 0.01, 0).rotY(Math.PI / 8).lathe([[big * 0.55, 0], [big * 0.92, big * 0.5], [big, big * 1.25], [big * 0.92, big * 2.0], [big * 0.55, big * 2.5]], 8, { smooth: false }).restore();
  b.paint(GOLD, { rough: 0.3, metal: 0.9 });
  b.cyl(big * 0.6, big * 0.6, big * 0.12, 8, { y: y - 0.01 - big * 0.06 });
  b.cyl(big * 0.6, big * 0.3, big * 0.25, 8, { y: y - 0.01 + big * 2.5 });
  b.cyl(0.012, 0.002, h * 0.12, 5, { y: y - 0.01 + big * 2.7 });
  // Festival strings fan out from the upper eaves to masts around the plaza.
  const plaza = w * 0.82 + 0.3;
  const masts = capital ? 8 : 5;
  const from = eaves[Math.max(0, tiers - 3)];
  const turn = rng.range(0, 6.28);
  for (let i = 0; i < masts; i++) {
    const a = turn + (i / masts) * Math.PI * 2;
    const mr = plaza * 0.9, mh = 0.16 + h * 0.12;
    const mx = Math.sin(a) * mr, mz = Math.cos(a) * mr;
    b.paint(DARKWOOD, { rough: 0.85 });
    b.save().move(mx, 0, mz).cyl(0.007, 0.005, mh, 4, { caps: false, smooth: false }).restore();
    lantern(b, mx, mh + 0.03, mz, 0.014, AMBER, 3, 5);
    garland(b, [Math.sin(a) * from.R * 0.9, from.y, Math.cos(a) * from.R * 0.9], [mx, mh, mz], 3, rng);
  }
  // Sky lanterns drift slowly around the crown.
  for (let i = 0; i < (capital ? 7 : 4); i++) {
    const a = (i / 6) * Math.PI * 2, rr = w * rng.range(1.0, 1.8);
    spin.save().move(0, h * rng.range(1.0, 1.3), 0);
    spin.spinAbout(0, 0, 0, 0, 1, 0, rng.range(0.05, 0.14) * (i % 2 ? 1 : -1));
    spin.paint(rng.pick(LIGHTS), { glow: 3.4, rough: 0.6 });
    spin.save().move(Math.sin(a) * rr, 0, Math.cos(a) * rr).cyl(0.016, 0.022, 0.04, 6, { smooth: false }).restore();
    spin.restore();
  }
}

/** A section: a lacquered hall under a square roof, with a paper lantern-room on top. */
function lanternHouse(b, { h, w, rng }) {
  const tile = rng.pick(ROOFS);
  b.paint(STONE, { rough: 0.85 });
  b.box(w * 1.2, 0.03, w * 1.2);
  const h1 = h * 0.5;
  b.paint(rng.pick(WALLS), { rough: 0.6, win: WIN.GRID, cw: 0.045, ch: 0.06 });
  b.box(w * 0.9, h1, w * 0.9, { y: 0.03 });
  const y1 = 0.03 + h1;
  const R = roof(b, w * 0.45 * Math.SQRT2, y1, h * 0.17, tile, { seg: 4, flare: 1.32 });
  const r2 = w * 0.3;
  b.paint(PAPER, { rough: 0.75, glow: -0.55 });
  b.cyl(r2, r2 * 0.92, h * 0.2, 8, { y: y1 + h * 0.1, smooth: false, caps: false });
  roof(b, r2 * 0.92, y1 + h * 0.3, h * 0.16, tile, { flare: 1.6, under: false });
  b.paint(GOLD, { rough: 0.3, metal: 0.9 });
  b.cyl(0.008, 0.002, h * 0.12, 4, { y: y1 + h * 0.45, caps: false });
  // Two lanterns hang from opposite corners.
  for (const s of [1, -1]) lantern(b, s * R * 0.7, y1 + h * 0.03, s * R * 0.7, 0.014, rng.pick(LIGHTS), 2.6, 5);
}

function rustTree(b, rng, s) {
  b.paint(DARKWOOD, { rough: 0.95 });
  b.cyl(s * 0.07, s * 0.045, s * 0.5, 3, { smooth: false, caps: false });
  const c = rng.pick(LEAF);
  b.paint(c, { rough: 0.85 });
  b.sphere(s * 0.36, { y: s * 0.32, seg: 6, rings: 3, sy: 0.82 });
  if (rng.chance(0.45)) {
    b.paint(mix3(c, 0xffb060, 0.18), { rough: 0.85 });
    b.save().move(s * 0.16, s * 0.42, s * 0.06).sphere(s * 0.2, { seg: 5, rings: 3 }).restore();
  }
}

function cypress(b, rng, s) {
  b.paint(DARKWOOD, { rough: 0.95 });
  b.cyl(s * 0.04, s * 0.03, s * 0.2, 3, { smooth: false, caps: false });
  b.paint(rng.pick([0x262650, 0x2e2448, 0x1e2c48]), { rough: 0.9 });
  b.cone(s * 0.15, s * 0.95, 5, { y: s * 0.12, smooth: false });
}

function stoneLantern(b, s) {
  // Wayside lantern of stacked stone; it is never allowed to go out.
  b.paint(STONE, { rough: 0.9 });
  b.ngon(4, s * 0.22, s * 0.36, { top: 0.6 });
  b.paint(AMBER, { glow: 2.4 });
  b.box(s * 0.2, s * 0.14, s * 0.2, { y: s * 0.36 });
  b.paint(STONE, { rough: 0.9 });
  b.ngon(4, s * 0.3, s * 0.14, { y: s * 0.5, top: 0.12 });
}

export default {
  id: 'lanterna',
  name: { en: 'Lanterna', de: 'Lanterna' },
  people: { en: 'The Lamplighters', de: 'Die Laternenträger' },
  blurb: {
    en: 'A world of endless dusk. Indigo hills, rust-red groves and amber rivers; towers stacked from glowing paper lanterns, and every thought rises from the city as a sky lantern.',
    de: 'Eine Welt in ewiger Dämmerung. Indigoblaue Hügel, rostrote Haine und bernsteinfarbene Flüsse; Türme aus leuchtenden Papierlaternen, und jeder Gedanke steigt als Himmelslaterne über der Stadt auf.',
  },
  bridge: { en: 'lantern roads & sky lanterns', de: 'Laternenwege & Himmelslaternen' },
  dayLength: 560,
  tilt: 0.42,
  palette: { accent: 0xffa64a, window: 0xffb560, route: 0xff8a3a, scaffold: 0x6a3a2a },
  env: { zenith: 0x231c52, horizon: 0xf08a4a, ground: 0x1c1430 },
  terrain: {
    amp: 0.8,
    power: 1.25,
    height(noise, x, y, z) {
      const c = noise.fbm(x * 1.6 + 2, y * 1.6, z * 1.6, 5, 2.0, 0.5);
      let h = c * 1.9 + 0.48;
      // Winding river valleys cut through the lowlands down to the water table.
      const r = Math.abs(noise.simplex(x * 2.3 + 7, y * 2.3, z * 2.3 - 3));
      const t = Math.min(1, Math.max(0, (0.12 - r) / 0.06)), k = t * t * (3 - 2 * t) * Math.min(1, Math.max(0, (0.9 - h) * 2.5));
      h += (-0.1 - h) * k;
      if (h > 0.3) {
        const m = noise.ridged(x * 2.8 + 20, y * 2.8, z * 2.8, 4, 2.0, 0.45);
        h += m * m * Math.min(1, (h - 0.3) * 2) * 0.6;
      }
      return h;
    },
  },
  scatterDensity: 1.4,
  scatterMinH: 0.02,
  scatter(b, { rng, x, y, z, noise }) {
    const grove = noise.simplex(x * 9 + 4, y * 9, z * 9) + 0.2;
    if (grove < 0 && !rng.chance(0.1)) return;
    const roll = rng.next();
    if (roll < 0.6) rustTree(b, rng, rng.range(0.12, 0.24));
    else if (roll < 0.88) cypress(b, rng, rng.range(0.16, 0.32));
    else if (roll < 0.95) stoneLantern(b, rng.range(0.1, 0.16));
    else {
      b.paint(STONE, { rough: 0.95 });
      b.sphere(rng.range(0.03, 0.07), { seg: 5, rings: 3, sy: 0.6 });
    }
  },
  surfaceGLSL: /* glsl */`
    void surface(vec3 p, float h, float mask, float dist, float day, inout vec3 albedo, inout float rough, inout float metal, inout vec3 emissive, inout vec3 bump) {
      float night = smoothstep(0.3, -0.15, day);
      float n = fbm5(p * 6.5);
      float fine = n3(p * 64.0);
      float hh = h + (n - 0.5) * 0.12;
      if (hh < 0.0 && mask < 0.6) {
        // Amber water: still and mirror-bright, holding the colour of the sunset.
        liquid(p, hh, vec3(0.08, 0.025, 0.05), vec3(0.66, 0.32, 0.08), 22.0, albedo, rough, metal, bump);
        albedo = mix(albedo, vec3(0.05, 0.015, 0.04), smoothstep(-0.03, -0.3, hh) * 0.8);
        float shore = smoothstep(-0.06, 0.0, hh);
        emissive += mix(vec3(0.4, 0.13, 0.03), vec3(0.85, 0.45, 0.12), shore) * (0.04 + night * 0.3);
        // Floating lanterns drift downstream after dark.
        vec3 dp = p * 150.0 + vec3(uTime * 0.02, 0.0, uTime * 0.015);
        float drift = smoothstep(0.88, 0.97, n3(dp)) * smoothstep(0.55, 0.7, n3(p * 11.0));
        emissive += vec3(1.0, 0.6, 0.22) * drift * night * 3.0 * smoothstep(40.0, 4.0, dist);
      } else {
        vec3 indigo = mix(vec3(0.045, 0.045, 0.16), vec3(0.09, 0.08, 0.27), n);
        vec3 plum = mix(vec3(0.15, 0.06, 0.16), vec3(0.23, 0.09, 0.2), fine);
        vec3 leaves = vec3(0.36, 0.1, 0.05);
        vec3 crest = vec3(0.26, 0.23, 0.44);
        float m = fbm3(p * 3.6 + 4.0);
        albedo = mix(indigo, plum, smoothstep(0.42, 0.6, m));
        // Drifts of fallen rust-red leaves under the groves.
        albedo = mix(albedo, leaves, smoothstep(0.58, 0.7, fbm3(p * 9.0 + 2.0)) * 0.75);
        albedo = mix(vec3(0.42, 0.25, 0.14), albedo, smoothstep(0.004, 0.035, hh));
        albedo = mix(albedo, crest, smoothstep(0.65, 1.05, hh + (fine - 0.5) * 0.2));
        albedo *= 0.82 + fine * 0.36;
        rough = 0.9;
        bump += bumpOf(p, 44.0, 0.09) * smoothstep(80.0, 10.0, dist);
        bump += bumpOf(p, 260.0, 0.12) * smoothstep(14.0, 2.0, dist);
        // Fireflies over the meadows.
        float fly = smoothstep(0.9, 0.98, n3(p * 230.0)) * smoothstep(0.6, 0.72, n3(p * 13.0 + 5.0));
        emissive += vec3(1.0, 0.62, 0.24) * fly * night * 1.6 * smoothstep(30.0, 4.0, dist) * (1.0 - mask);
        // Town ground: dusky flagstones warmed by lantern light.
        vec3 town = mix(vec3(0.08, 0.065, 0.17), vec3(0.14, 0.1, 0.22), n3(p * 110.0));
        float t = smoothstep(0.3, 0.9, mask);
        albedo = mix(albedo, town, t);
        emissive += vec3(0.5, 0.22, 0.06) * t * night * 0.02 * (0.5 + n3(p * 90.0));
      }
    }`,
  atmosphere: {
    thickness: 1.24,
    rayleigh: [1.5, 1.35, 3.4],
    mie: [1.6, 0.9, 0.5],
    g: 0.8,
    scaleR: 0.075,
    intensity: 6.2,
    haze: 0xc87a96,
    night: [0.02, 0.012, 0.04],
    fog: { density: 0.017, day: 0x5c4278, dusk: 0xe0784a, night: 0x0e0a24 },
  },
  clouds: { cover: 0.64, scale: 3.6, opacity: 0.42, color: 0xf2c4cc, shadow: 0x3a2c60, dusk: 0xd86a5a, glow: 0x0a0408, banded: 0.7, speed: 0.6 },
  transit: { road: { en: 'Lantern road', de: 'Laternenweg' }, air: { en: 'Sky lantern', de: 'Himmelslaterne' } },
  map: { title: { en: 'Lantern chart', de: 'Laternenkarte' }, paper: '#17122a', edge: '#6a4a8a', ink: '#ffdcaa', soft: '#b08aa6', sea: ['#3a200e', '#6e4016'], land: ['#241c40', '#4a3468'], contour: 'rgba(255,190,120,0.13)', grid: 'rgba(255,190,120,0.05)', road: '#ffb04a', casing: '#3a1a12', air: '#ff7a3a', traffic: '#fff0d0', accent: '#ffb04a', lines: 'lantern', glyph: 'lantern', font: 'serif' },
  layout: 'organic',
  block: 0.52,
  lot: null,
  road: {
    width: 0.15,
    laneOffset: 0.22,
    meander: 0.6,
    lampEvery: 0.4,
    lampChance: 0.85,
    glsl: /* glsl */`
      void roadSurface(float x, float s, float night, inout vec3 albedo, inout float rough, inout float metal, inout vec3 emissive) {
        // Dusk-violet flagstones in staggered courses, with a red runner down the middle.
        float row = floor(s * 5.0);
        float off = mod(row, 2.0) * 0.5;
        vec2 cell = vec2(fract(x * 1.3 + off), fract(s * 5.0));
        float joint = smoothstep(0.0, 0.05, min(min(cell.x, 1.0 - cell.x), min(cell.y, 1.0 - cell.y)));
        float vary = n3(vec3(floor(x * 1.3 + off) * 3.0, row, 3.0));
        albedo = mix(vec3(0.08, 0.05, 0.09), mix(vec3(0.17, 0.12, 0.2), vec3(0.24, 0.16, 0.23), vary), joint);
        rough = 0.7;
        albedo = mix(albedo, vec3(0.32, 0.06, 0.04), smoothstep(0.24, 0.2, abs(x)) * 0.7);
        // Little lights strung along both kerbs, and pools of lantern light.
        float kerb = smoothstep(0.84, 0.92, abs(x));
        float bulb = smoothstep(0.22, 0.0, abs(fract(s * 7.0) - 0.5)) * kerb;
        emissive += vec3(1.0, 0.62, 0.24) * bulb * (0.25 + night * 2.4);
        float pool = exp(-pow((fract(s * 1.3) - 0.5) * 5.0, 2.0));
        emissive += vec3(1.0, 0.55, 0.2) * pool * (0.01 + night * 0.12);
      }`,
  },
  plaza(b, { r }) {
    b.paint(0x221e3a, { rough: 0.75 });
    b.disc(r, { seg: 40 });
    b.paint(AMBER, { glow: 1.4 });
    b.disc(r * 0.97, { y: 0.003, seg: 40, inner: r * 0.94 });
    b.paint(0x5a2a28, { rough: 0.7 });
    b.disc(r * 0.72, { y: 0.003, seg: 32, inner: r * 0.62 });
  },
  landmark: lanternSpire,
  section: lanternHouse,
  filler(b, { s, rng, tier }) {
    const roll = rng.next();
    if (tier > 0.5 && roll < 0.55) {
      // Slender stacked tower, taller toward the centre.
      const H = s * rng.range(1.6, 2.6) * (1 + tier * 1.1);
      const tile = rng.pick(ROOFS);
      const levels = H > s * 3 ? 3 : 2;
      let y = 0, hw = s * 0.5;
      for (let i = 0; i < levels; i++) {
        const lh = (H / levels) * (1 - i * 0.12);
        if (i === levels - 1 && rng.chance(0.6)) b.paint(PAPER, { rough: 0.75, glow: -0.55 });
        else b.paint(rng.pick(WALLS), { rough: 0.6, win: WIN.GRID, cw: 0.04, ch: 0.055 });
        b.box(hw * 2, lh * 0.72, hw * 2, { y });
        roof(b, hw * Math.SQRT2, y + lh * 0.72, lh * 0.3, tile, { seg: 4, flare: 1.34, under: i === 0 });
        y += lh;
        hw *= 0.78;
      }
      lantern(b, s * 0.5 * 1.3, H / levels * 0.74, s * 0.5 * 1.3, 0.012, rng.pick(LIGHTS), 2.6, 5);
    } else if (roll < 0.6) {
      // Low house with a curved roof and a lantern by the door.
      const w = s * rng.range(1.0, 1.4), d = s * rng.range(0.8, 1.1), hh = s * rng.range(0.55, 0.9) * (1 + tier * 0.5);
      b.paint(rng.pick(WALLS), { rough: 0.65, win: WIN.GRID, cw: 0.04, ch: 0.05 });
      b.box(w, hh, d);
      b.save().scale(1, 1, d / w);
      roof(b, (w / 2) * Math.SQRT2, hh, s * 0.42, rng.pick(ROOFS), { seg: 4, flare: 1.3, under: false });
      b.restore();
      lantern(b, w * 0.3, hh * 0.85, d * 0.62, 0.011, rng.pick(LIGHTS), 2.6, 5);
    } else if (roll < 0.86) {
      rustTree(b, rng, s * 1.4);
      if (rng.chance(0.5)) {
        b.save().move(s * 0.6, 0, -s * 0.4);
        rustTree(b, rng, s * 1.0);
        b.restore();
      }
    } else {
      // Festival pavilion: an open round roof on one post, ringed with lanterns.
      const ph = s * rng.range(1.0, 1.4);
      b.paint(LACQUER, { rough: 0.5 });
      b.cyl(s * 0.06, s * 0.06, ph, 5, { caps: false, smooth: false });
      b.paint(STONE, { rough: 0.85 });
      b.cyl(s * 0.7, s * 0.7, 0.012, 8, { smooth: false });
      const R = roof(b, s * 0.5, ph, s * 0.45, rng.pick(ROOFS), { flare: 1.4 });
      for (let k = 0; k < 4; k++) {
        const a = Math.PI / 8 + (k / 4) * Math.PI * 2;
        lantern(b, Math.sin(a) * R * 0.95, ph + s * 0.06, Math.cos(a) * R * 0.95, 0.012, LIGHTS[k], 2.8, 5);
      }
    }
  },
  roadside(b, { rng }) {
    if (rng.chance(0.22)) {
      rustTree(b, rng, rng.range(0.1, 0.16));
      return;
    }
    // Crook-necked post with a paper lantern swinging from it.
    b.paint(DARKWOOD, { rough: 0.85 });
    b.tube([[0, 0, 0], [0, 0.1, 0], [0.008, 0.118, 0], [0.024, 0.12, 0]], 0.0035, { seg: 3 });
    lantern(b, 0.024, 0.112, 0, 0.011, rng.pick(LIGHTS), 3, 6);
  },
  vehicles: [
    {
      weight: 2,
      speed: 0.26,
      y: 0.004,
      build(b) {
        // Lantern cart: a lacquered wagon under a curved roof, a lamp swinging at the front.
        b.paint(LACQUER, { rough: 0.45, win: WIN.GRID, cw: 0.02, ch: 0.02 });
        b.box(0.042, 0.03, 0.08, { y: 0.008 });
        b.paint(0x2a2c62, { rough: 0.5 });
        b.save().move(0, 0.038, 0).scale(1, 1, 1.9).rotY(Math.PI / 4);
        b.lathe([[0.036, 0.006], [0.031, 0], [0.02, 0.01], [0, 0.02]], 4, { smooth: false });
        b.restore();
        b.paint(DARKWOOD, { rough: 0.8 });
        b.box(0.05, 0.012, 0.012, { y: 0.004 });
        lantern(b, 0, 0.034, 0.05, 0.007, AMBER, 4, 6);
      },
    },
    {
      weight: 1,
      speed: 0.18,
      y: 0.004,
      build(b) {
        // Palanquin: a glowing paper room carried on two poles.
        b.paint(DARKWOOD, { rough: 0.8 });
        for (const x of [-0.028, 0.028]) b.save().move(x, 0, 0).box(0.006, 0.006, 0.12, { y: 0.016 }).restore();
        b.paint(PAPER, { rough: 0.7, glow: 1.2 });
        b.box(0.044, 0.034, 0.05, { y: 0.012 });
        roof(b, 0.032, 0.046, 0.022, 0x44244c, { seg: 4, flare: 1.3, under: false });
      },
    },
  ],
  flyer: {
    speed: 0.3,
    shadow: false,
    build(b) {
      // A little flotilla of sky lanterns, rising together.
      for (const [x, y, z, k] of [[0, 0, 0, 1], [0.07, -0.05, 0.05, 0.72], [-0.06, 0.03, -0.07, 0.58]]) {
        b.save().move(x, y, z).scale(k);
        b.paint(0xffa04a, { glow: 2.4, rough: 0.7 });
        b.lathe([[0.03, -0.045], [0.04, 0.0], [0.042, 0.03], [0.033, 0.052], [0, 0.056]], 8);
        b.paint(0xfff0a0, { glow: 9 });
        b.save().move(0, -0.054, 0).sphere(0.008, { seg: 5, rings: 3 }).restore();
        b.restore();
      }
    },
  },
  walker: {
    speed: 0.06,
    lift: 0.008,
    bob: 0.003,
    bobRate: 7,
    colors: [0x9a8ac8, 0xc87a8a, 0xd8905a, 0xe8c888, 0xa898b0],
    build(b) {
      // A lamplighter in a long robe, lantern held out on a pole.
      b.paint(0xffffff, { rough: 0.85 });
      b.cone(0.0078, 0.022, 6, { smooth: false });
      b.paint(0xe0c8b0, { rough: 0.7 });
      b.save().move(0, 0.018, 0).sphere(0.0045, { seg: 5, rings: 3 }).restore();
      b.paint(0x3a2a2a, { rough: 0.8 });
      b.save().move(0.006, 0.006, 0).rotZ(-0.35).box(0.0012, 0.026, 0.0012).restore();
      b.paint(0xffd090, { glow: 5 });
      b.save().move(0.0145, 0.022, 0).sphere(0.003, { seg: 5, rings: 3, sy: 1.3 }).restore();
    },
  },
  ship(b) {
    // Lantern barge: a long lacquered hull carrying a glowing paper hall.
    b.paint(LACQUER, { rough: 0.5 });
    b.save().rotX(Math.PI / 2);
    b.lathe([[0, -1.1], [0.3, -0.8], [0.42, -0.1], [0.36, 0.6], [0.14, 1.05], [0, 1.15]], 10);
    b.restore();
    b.paint(PAPER, { glow: 1.6, rough: 0.7 });
    b.cyl(0.26, 0.22, 0.42, 8, { y: 0.2, smooth: false });
    roof(b, 0.22, 0.62, 0.22, 0x2a2c62, { flare: 1.6 });
    for (const z of [-0.95, 0.95]) lantern(b, 0, 0.3, z, 0.08, AMBER, 4, 6);
  },
  customize(planet) {
    // Sky lanterns: from every city a slow stream of lights rises into the dusk and fades.
    const rng = new RNG(`skylanterns:${planet.cluster.id}`);
    const pos = [], info = [];
    for (const site of planet.sites) {
      const n = Math.round(6 + site.importance * site.importance * 40);
      for (let i = 0; i < n; i++) {
        const d = offsetDir(site.dir, rng.range(0, 6.28), (Math.sqrt(rng.next()) * site.rD * 1.1) / planet.G);
        pos.push(d.x, d.y, d.z);
        info.push(rng.next(), 1 / rng.range(45, 110), rng.range(1.2, 3.2));
      }
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(pos), 3));
    geo.setAttribute('aInfo', new THREE.BufferAttribute(new Float32Array(info), 3));
    const u = planet.uniforms;
    const material = new THREE.ShaderMaterial({
      uniforms: { uTime: u.uTime, uSunLocal: u.uSunLocal, uG: { value: planet.G }, uScale: { value: 600 } },
      vertexShader: /* glsl */`
        attribute vec3 aInfo;
        uniform float uTime, uG, uScale;
        uniform vec3 uSunLocal;
        varying float vA; varying float vHue;
        void main() {
          vec3 up = normalize(position);
          float t = fract(aInfo.x + uTime * aInfo.y);
          vec3 side = normalize(cross(up, abs(up.y) > 0.9 ? vec3(1.0, 0.0, 0.0) : vec3(0.0, 1.0, 0.0)));
          vec3 p = up * (uG + 0.08 + t * aInfo.z) + side * sin(uTime * 0.2 + aInfo.x * 40.0) * 0.12 * t;
          float night = smoothstep(0.3, -0.1, dot(up, uSunLocal));
          vA = smoothstep(0.0, 0.06, t) * smoothstep(1.0, 0.55, t) * (0.3 + night * 0.7) * (0.8 + 0.2 * sin(uTime * 3.0 + aInfo.x * 90.0));
          vHue = aInfo.x;
          vec4 mv = modelViewMatrix * vec4(p, 1.0);
          gl_Position = projectionMatrix * mv;
          gl_PointSize = clamp(0.05 * uScale / -mv.z, 1.0, 40.0);
        }`,
      fragmentShader: /* glsl */`
        varying float vA; varying float vHue;
        void main() {
          vec2 q = gl_PointCoord - 0.5;
          float body = smoothstep(0.5, 0.36, length(q * vec2(2.4, 1.7)));
          float halo = exp(-dot(q, q) * 18.0) * 0.45;
          float a = (body + halo) * vA;
          if (a < 0.01) discard;
          vec3 col = mix(vec3(1.0, 0.5, 0.16), vec3(1.0, 0.78, 0.36), vHue);
          gl_FragColor = vec4(col * a * 2.2, a);
        }`,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });
    const points = new THREE.Points(geo, material);
    points.frustumCulled = false;
    points.renderOrder = 5;
    planet.spin.add(points);
    const R = planet.R;
    return {
      update(dt, time, camera) {
        const height = planet.renderer.domElement.height || 900;
        material.uniforms.uScale.value = height * 0.5 / Math.tan(THREE.MathUtils.degToRad(camera.fov || 50) * 0.5);
      },
      setVisible(camDist) { points.visible = camDist < R * 4; },
    };
  },
};
