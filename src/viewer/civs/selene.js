// SELENE — the Stargazers. An airless grey moon under a black sky. They live in pressurised
// glass domes glowing amber from within, watch the heavens from turning observatories, and
// travel by maglev tube or hop from crater to crater in landers.
import { WIN, mix3 } from '../engine/builder.js';

const WHITE = 0xe2e6ec, SILVER = 0xaab2be, STEEL = 0x6c727c, DARK = 0x22262d, CONCRETE = 0x8a8c92;
const AMBER = 0xffb45a, CYAN = 0x6fe6ff, RED = 0xff4a3a, PANEL = 0x2c4f8f;
const HULLS = [0xe2e6ec, 0xd4d9e0, 0xc6ccd6];

// ---- terrain: a cratered regolith, generated identically on every call ---------------
const seeds = new WeakMap();
function seedOf(noise) {
  let s = seeds.get(noise);
  if (s === undefined) {
    s = Math.floor((noise.simplex(0.31, 0.77, 0.13) + 1) * 7919) | 0;
    seeds.set(noise, s);
  }
  return s;
}
function hash3(x, y, z, s) {
  let h = (Math.imul(x, 374761393) + Math.imul(y, 668265263) + Math.imul(z, 1274126177) + Math.imul(s, 144665)) | 0;
  h = Math.imul(h ^ (h >>> 13), 1103515245);
  h ^= h >>> 16;
  return (h >>> 0) / 4294967296;
}
/**
 * Cellular craters: a bowl and a raised rim per occupied cell. A crater never reaches further
 * than half a cell from its centre, so only the 2x2x2 cells around the point can touch it.
 * Centres float in 3D; the ground cuts each one at a different depth, which varies the sizes.
 */
function craters(x, y, z, scale, density, s) {
  const px = x * scale, py = y * scale, pz = z * scale;
  const ix = Math.floor(px - 0.5), iy = Math.floor(py - 0.5), iz = Math.floor(pz - 0.5);
  let sum = 0;
  for (let cx = ix; cx <= ix + 1; cx++) {
    for (let cy = iy; cy <= iy + 1; cy++) {
      for (let cz = iz; cz <= iz + 1; cz++) {
        if (hash3(cx, cy, cz, s) > density) continue;
        const rad = 0.2 + 0.14 * hash3(cx, cy, cz, s + 4);
        const dx = px - cx - hash3(cx, cy, cz, s + 1), dy = py - cy - hash3(cx, cy, cz, s + 2), dz = pz - cz - hash3(cx, cy, cz, s + 3);
        const d = Math.sqrt(dx * dx + dy * dy + dz * dz) / rad;
        if (d > 1.45) continue;
        const bowl = d < 1 ? Math.max(d * d - 1, -0.72) : 0;
        const rim = Math.exp(-(d - 1) * (d - 1) * 14) * 0.32;
        sum += (bowl + rim) * rad;
      }
    }
  }
  return sum;
}

// ---- building blocks --------------------------------------------------------------
function domeArc(r, sy, a0, a1, steps, y = 0) {
  const pts = [];
  for (let i = 0; i <= steps; i++) {
    const a = a0 + ((a1 - a0) * i) / steps;
    pts.push([Math.max(0, Math.cos(a)) * r, y + Math.sin(a) * r * sy]);
  }
  return pts;
}

/** Pressurised dome: an amber-lit glass belt at the foot, a silver lattice of panes above. */
function habDome(b, r, { sy = 0.8, seg = 16, rings = 5, y = 0 } = {}) {
  b.paint(CONCRETE, { rough: 0.85 });
  b.cyl(r * 1.06, r * 1.04, 0.025, seg, { y, caps: false });
  b.paint(AMBER, { rough: 0.2, metal: 0.1, glow: 0.55 });
  b.lathe(domeArc(r, sy, 0, 0.38, 1, y + 0.02), seg);
  b.paint(WHITE, { rough: 0.22, metal: 0.55, win: WIN.GRID, cw: Math.max(0.05, r * 0.32), ch: Math.max(0.04, r * 0.22) });
  b.lathe(domeArc(r, sy, 0.38, Math.PI / 2, rings - 1, y + 0.02), seg);
}

/** Observatory turret that slowly sweeps the sky, telescope out of the shutter. */
function turret(spin, y, r, rate) {
  spin.save().move(0, y, 0);
  spin.spinAbout(0, 0, 0, 0, 1, 0, rate);
  spin.paint(WHITE, { rough: 0.3, metal: 0.35 });
  spin.dome(r, { seg: 12, rings: 4 });
  spin.save().rotX(Math.PI / 2 - 0.85);
  spin.paint(DARK, { rough: 0.4, metal: 0.4 });
  spin.box(r * 0.36, 0.006, r * 0.9, { y: r * 0.985 });
  spin.paint(SILVER, { rough: 0.25, metal: 0.85 });
  spin.cyl(r * 0.15, r * 0.19, r * 1.4, 8, { y: r * 0.1 });
  spin.paint(CYAN, { glow: 2.5 });
  spin.disc(r * 0.15, { y: r * 1.5 + 0.001, seg: 8 });
  spin.restore();
  spin.restore();
}

/** A radio dish on a pedestal, panning round the horizon. */
function radioDish(b, spin, y, r, rate) {
  b.paint(WHITE, { rough: 0.45, metal: 0.3 });
  b.cyl(r * 0.16, r * 0.1, y, 6, { caps: false, smooth: false });
  spin.save().move(0, y, 0);
  spin.spinAbout(0, 0, 0, 0, 1, 0, rate);
  spin.paint(SILVER, { rough: 0.35, metal: 0.7 });
  spin.box(r * 0.3, r * 0.22, r * 0.22);
  spin.save().move(0, r * 0.24, 0).rotX(0.75);
  spin.paint(WHITE, { rough: 0.35, metal: 0.25 });
  spin.lathe([[r * 0.08, 0], [r * 0.5, r * 0.07], [r, r * 0.3]], 12);
  spin.lathe([[r * 0.97, r * 0.3 + 0.003], [r * 0.5, r * 0.07 + 0.003], [r * 0.08, 0.003]], 12);
  spin.paint(STEEL, { rough: 0.4, metal: 0.8 });
  spin.cyl(r * 0.03, r * 0.02, r * 0.62, 4, { caps: false, smooth: false });
  spin.paint(CYAN, { glow: 4 });
  spin.save().move(0, r * 0.64, 0).sphere(r * 0.06, { seg: 5, rings: 3 }).restore();
  spin.restore();
  spin.restore();
}

/** Lattice mast with a red warning light. */
function mast(b, h, r = 0.012) {
  b.paint(SILVER, { rough: 0.4, metal: 0.8 });
  b.cyl(r * 1.6, r * 0.6, h, 3, { caps: false, smooth: false });
  b.box(r * 6, 0.004, 0.004, { y: h * 0.7 });
  b.paint(RED, { glow: 7 });
  b.save().move(0, h, 0).sphere(r * 0.9, { seg: 5, rings: 3 }).restore();
}

/** Horizontal hab canister on saddles, with round amber portholes. */
function canister(b, len, r, y = 0) {
  b.paint(STEEL, { rough: 0.5, metal: 0.6 });
  b.save().move(len * 0.3, y, 0).box(r * 0.5, r * 0.6, r * 1.5).restore();
  b.save().move(-len * 0.3, y, 0).box(r * 0.5, r * 0.6, r * 1.5).restore();
  b.save().move(0, y + r * 1.4, 0).rotZ(Math.PI / 2);
  b.paint(WHITE, { rough: 0.4, metal: 0.25, win: WIN.SPOTS, cw: r * 0.95, ch: r * 0.95 });
  b.cyl(r, r, len, 10, { y: -len / 2 });
  b.paint(SILVER, { rough: 0.3, metal: 0.8 });
  b.cyl(r * 1.06, r * 1.06, len * 0.08, 10, { y: -len * 0.04, caps: false });
  b.restore();
}

/** Upright silo of stacked hab rings: the closest thing a dome town has to a tower. */
function silo(b, h, r, rng) {
  b.paint(rng.pick(HULLS), { rough: 0.38, metal: 0.3, win: WIN.SPOTS, cw: 0.055, ch: 0.075 });
  b.cyl(r, r, h, 10);
  b.paint(SILVER, { rough: 0.3, metal: 0.8 });
  for (let i = 1; i < 3; i++) b.cyl(r * 1.08, r * 1.08, 0.012, 10, { y: (h * i) / 3, caps: false });
  b.paint(WHITE, { rough: 0.3, metal: 0.4 });
  b.save().move(0, h, 0).dome(r, { seg: 10, rings: 3, sy: 0.6 }).restore();
}

function solarArray(b, s, rng) {
  // Rows of panels on posts, all tilted to the same low sun.
  const rows = rng.int(2, 3), w = s * 0.9, d = s * 0.32;
  for (let i = 0; i < rows; i++) {
    const z = (i - (rows - 1) / 2) * d * 1.35;
    b.paint(STEEL, { rough: 0.5, metal: 0.7 });
    b.save().move(0, 0, z).box(0.008, s * 0.2, 0.008).restore();
    b.save().move(0, s * 0.2, z).rotX(-0.55);
    b.paint(SILVER, { rough: 0.3, metal: 0.8 });
    b.box(w * 1.04, 0.004, d * 1.04, { y: -0.004 });
    b.paint(PANEL, { rough: 0.28, metal: 0.35 });
    b.box(w, 0.004, d);
    b.restore();
  }
}

function landingPad(b, s, rng) {
  b.paint(CONCRETE, { rough: 0.8 });
  b.ngon(8, s * 0.8, 0.012, { rot: Math.PI / 8 });
  b.paint(mix3(CONCRETE, 0xffffff, 0.35), { rough: 0.7 });
  b.disc(s * 0.5, { y: 0.0125, seg: 16, inner: s * 0.42 });
  b.paint(AMBER, { glow: -7 });
  for (let i = 0; i < 8; i++) {
    const a = (i / 8) * Math.PI * 2;
    b.save().move(Math.cos(a) * s * 0.72, 0.012, Math.sin(a) * s * 0.72).box(0.012, 0.006, 0.012).restore();
  }
  if (rng.chance(0.55)) {
    b.save().move(0, 0.012 + s * 0.28, 0).scale(s * 2.4);
    lander(b);
    b.restore();
  }
}

/** Lander: a cabin on four splayed legs with a cyan-burning engine. Unit size about 0.1. */
function lander(b) {
  b.paint(WHITE, { rough: 0.35, metal: 0.35 });
  b.ngon(8, 0.04, 0.032, { rot: Math.PI / 8 });
  b.ngon(8, 0.04, 0.018, { y: 0.032, top: 0.55, rot: Math.PI / 8 });
  b.paint(AMBER, { rough: 0.15, glow: 1.6 });
  b.save().move(0, 0.022, 0.035).box(0.026, 0.008, 0.008).restore();
  b.paint(SILVER, { rough: 0.3, metal: 0.85 });
  for (let i = 0; i < 4; i++) {
    const a = (i / 4) * Math.PI * 2 + Math.PI / 4, c = Math.cos(a), s = Math.sin(a);
    b.tube([[c * 0.03, 0.012, s * 0.03], [c * 0.07, -0.05, s * 0.07]], 0.0028, { seg: 3 });
    b.save().move(c * 0.07, -0.054, s * 0.07).cyl(0.009, 0.009, 0.004, 6).restore();
  }
  b.paint(STEEL, { rough: 0.4, metal: 0.8 });
  b.cyl(0.02, 0.012, 0.02, 8, { y: -0.02, caps: false });
  b.paint(CYAN, { glow: 5 });
  b.disc(0.016, { y: -0.019, seg: 8 });
}

// ---- landmark & sections --------------------------------------------------------------
function domeCity(b, { h, w, rng, spin, capital }) {
  const R = w * 1.4;
  // The great dome, and the observatory tower rising through its crown.
  habDome(b, R, { sy: 0.8, seg: 20, rings: 6 });
  const towerH = Math.max(h * 0.74, R * 0.9);
  b.paint(0x8e949e, { rough: 0.35, metal: 0.65 });
  b.ngon(8, w * 0.17, towerH, { top: 0.82, cap: false });
  // Lit observation decks ring the shaft.
  for (let i = 1; i <= 4; i++) {
    const y = towerH * (0.3 + i * 0.13), rr = w * 0.17 * (1 - (0.18 * y) / towerH) + 0.012;
    b.paint(SILVER, { rough: 0.3, metal: 0.8 });
    b.cyl(rr, rr, 0.01, 8, { y, caps: false });
    b.paint(AMBER, { rough: 0.2, glow: 0.5 });
    b.cyl(rr * 0.97, rr * 0.97, 0.03, 8, { y: y + 0.01, caps: false });
  }
  b.paint(SILVER, { rough: 0.3, metal: 0.8 });
  b.cyl(w * 0.3, w * 0.3, 0.018, 12, { y: towerH });
  b.paint(CYAN, { glow: 2.2 });
  b.cyl(w * 0.31, w * 0.31, 0.006, 12, { y: towerH + 0.018, caps: false });
  b.paint(WHITE, { rough: 0.4, metal: 0.25 });
  b.cyl(w * 0.24, w * 0.24, w * 0.12, 12, { y: towerH + 0.018 });
  turret(spin, towerH + 0.018 + w * 0.12, w * 0.25, capital ? 0.12 : 0.08);

  // Satellite domes, each joined to the great dome by a pressurised corridor.
  const sats = capital ? 4 : rng.int(2, 3);
  const off = rng.range(0, 6.28);
  for (let i = 0; i < sats; i++) {
    const a = off + (i / sats) * Math.PI * 2 + rng.range(-0.25, 0.25);
    const rs = w * rng.range(0.38, 0.5);
    const d = R + rs * 1.05;
    const c = Math.cos(a), s = Math.sin(a);
    b.paint(SILVER, { rough: 0.35, metal: 0.6, win: WIN.SPOTS, cw: 0.04, ch: 0.04 });
    b.tube([[c * R * 0.85, 0.045, s * R * 0.85], [c * d, 0.045, s * d]], 0.03, { seg: 6 });
    b.save().move(c * d, 0, s * d);
    habDome(b, rs, { sy: 0.85, seg: 12, rings: 4 });
    b.restore();
  }
  // The capital listens to the sky with a great dish; the others make do with masts.
  const mA = off + Math.PI / Math.max(sats, 1);
  if (capital) {
    b.save().move(Math.cos(mA) * (R + w * 0.75), 0, Math.sin(mA) * (R + w * 0.75));
    spin.save().move(Math.cos(mA) * (R + w * 0.75), 0, Math.sin(mA) * (R + w * 0.75));
    radioDish(b, spin, w * 0.9, w * 0.62, 0.1);
    spin.restore();
    b.restore();
  }
  b.save().move(Math.cos(mA + 1.4) * R * 0.92, 0, Math.sin(mA + 1.4) * R * 0.92);
  mast(b, Math.max(h * 0.62, 0.5), 0.014);
  b.restore();
}

function section(b, { h, w, rng, spin, index }) {
  const kind = index % 4 === 0 ? 0 : rng.int(0, 3);
  if (kind === 0) {
    // Observatory: a ribbed drum under a turning shutter dome.
    b.paint(CONCRETE, { rough: 0.85 });
    b.cyl(w * 0.62, w * 0.6, 0.03, 12);
    b.paint(rng.pick(HULLS), { rough: 0.4, metal: 0.25, win: WIN.BANDS, cw: 0.07, ch: 0.055 });
    b.cyl(w * 0.46, w * 0.44, h * 0.62, 12, { y: 0.03, caps: false });
    b.paint(SILVER, { rough: 0.3, metal: 0.8 });
    b.cyl(w * 0.5, w * 0.5, 0.014, 12, { y: 0.03 + h * 0.62 });
    turret(spin, 0.044 + h * 0.62, w * 0.46, rng.range(0.05, 0.14) * (rng.chance(0.5) ? 1 : -1));
  } else if (kind === 1) {
    // Hab dome with an airlock.
    habDome(b, w * 0.6, { sy: Math.min(1.3, Math.max(0.75, h / (w * 0.9))), seg: 14, rings: 5 });
    b.paint(SILVER, { rough: 0.35, metal: 0.6 });
    b.save().move(w * 0.55, 0, 0).box(w * 0.3, w * 0.18, w * 0.2).restore();
    b.paint(AMBER, { glow: -6 });
    b.save().move(w * 0.71, w * 0.08, 0).box(0.004, w * 0.08, w * 0.08).restore();
  } else if (kind === 2) {
    // Radio dish.
    b.paint(CONCRETE, { rough: 0.85 });
    b.ngon(6, w * 0.5, 0.03);
    radioDish(b, spin, Math.max(0.18, h * 0.5), w * 0.55, rng.range(0.05, 0.16) * (rng.chance(0.5) ? 1 : -1));
  } else {
    // Hab block: a silo with a canister wing.
    silo(b, h * 0.95, w * 0.32, rng);
    b.save().move(0, 0, w * 0.4).rotY(Math.PI / 2);
    canister(b, w * 0.9, w * 0.14);
    b.restore();
  }
}

export default {
  id: 'selene',
  name: { en: 'Selene', de: 'Selene' },
  people: { en: 'The Stargazers', de: 'Die Sternseher' },
  blurb: {
    en: 'A grey, airless moon under a black sky. Its people live in glass domes glowing amber from within and watch the heavens from turning observatories.',
    de: 'Ein grauer Mond ohne Luft unter schwarzem Himmel. Seine Bewohner leben in Glaskuppeln, die von innen bernsteinfarben leuchten, und beobachten den Himmel aus drehbaren Sternwarten.',
  },
  bridge: { en: 'maglev tubes & lander hops', de: 'Magnetröhren & Landerhüpfer' },
  dayLength: 320,
  tilt: 0.05,
  palette: { accent: 0x7ce8ff, window: 0xffb860, route: 0x9ce8ff, scaffold: 0xc4c8d0 },
  env: { zenith: 0x040507, horizon: 0x14161c, ground: 0x3a3b40 },
  terrain: {
    amp: 0.8,
    power: 1.15,
    height(noise, x, y, z) {
      const s = seedOf(noise);
      const hi = noise.fbm(x * 1.6 + 4, y * 1.6, z * 1.6, 5, 2.0, 0.5);
      // Dark maria: broad, smooth lowlands between the battered highlands.
      const mare = Math.min(1, Math.max(0, (noise.fbm(x * 0.9 + 17, y * 0.9, z * 0.9, 3) + 0.02) * 4));
      const base = 0.36 + hi * 0.5 - mare * (0.22 + hi * 0.4);
      const c = craters(x, y, z, 1.7, 0.45, s + 37) * 1.3 + craters(x, y, z, 4, 0.5, s) * 0.9 + craters(x, y, z, 9, 0.6, s + 11) * 0.5 + craters(x, y, z, 20, 0.6, s + 23) * 0.22;
      return Math.max(0, base + c);
    },
  },
  scatterDensity: 0.55,
  scatterMinH: 0,
  scatter(b, { rng, x, y, z, noise }) {
    const roll = rng.next();
    if (roll < 0.9) {
      // Boulders thrown out by impacts, in loose clusters.
      if (noise.simplex(x * 14, y * 14 + 3, z * 14) < -0.2) return;
      const n = rng.int(1, 3);
      for (let i = 0; i < n; i++) {
        const s = rng.range(0.02, 0.07) * (i ? 0.6 : 1);
        b.paint(mix3(0x6e6e72, 0x9a9a9c, rng.next()), { rough: 0.95 });
        b.save().move(rng.range(-0.08, 0.08), 0, rng.range(-0.08, 0.08)).rotY(rng.range(0, 3)).rotZ(rng.range(-0.4, 0.4));
        b.sphere(s, { y: -s * 0.35, seg: 5, rings: 3, sx: rng.range(0.8, 1.4), sy: rng.range(0.55, 0.9) });
        b.restore();
      }
    } else if (roll < 0.96) {
      // Survey beacon on a tripod.
      b.paint(SILVER, { rough: 0.4, metal: 0.8 });
      for (let i = 0; i < 3; i++) {
        const a = (i / 3) * Math.PI * 2;
        b.tube([[0, 0.08, 0], [Math.cos(a) * 0.04, 0, Math.sin(a) * 0.04]], 0.003, { seg: 3 });
      }
      b.paint(CYAN, { glow: 5 });
      b.save().move(0, 0.085, 0).sphere(0.008, { seg: 5, rings: 3 }).restore();
    } else {
      // A lone solar mast left by an old survey.
      b.paint(STEEL, { rough: 0.5, metal: 0.7 });
      b.cyl(0.004, 0.004, 0.12, 4, { caps: false, smooth: false });
      b.save().move(0, 0.12, 0).rotX(-0.5);
      b.paint(PANEL, { rough: 0.2, metal: 0.75 });
      b.box(0.09, 0.003, 0.05);
      b.restore();
    }
  },
  surfaceGLSL: /* glsl */`
    // Small craters too fine for the mesh (same scheme as craters() above): returns depth,
    // accumulates the slope for shading and bright ejecta rays around the young ones.
    float craterLayer(vec3 p, float scale, float dens, inout vec3 grad, inout float rays) {
      vec3 q = p * scale;
      vec3 i0 = floor(q - 0.5);
      float hsum = 0.0;
      for (int x = 0; x <= 1; x++) for (int y = 0; y <= 1; y++) for (int z = 0; z <= 1; z++) {
        vec3 c = i0 + vec3(float(x), float(y), float(z));
        float r0 = hash31(c * 0.731 + scale);
        if (r0 > dens) continue;
        vec3 dv = q - c - vec3(hash31(c + 17.1), hash31(c + 31.7), hash31(c + 47.3));
        float rad = 0.14 + 0.16 * hash31(c + 63.1);
        float len = length(dv);
        float d = len / rad;
        if (d > 1.65) continue;
        vec3 dir = dv / max(len, 1e-4);
        float k = exp(-(d - 1.0) * (d - 1.0) * 14.0);
        hsum += (d < 1.0 ? d * d - 1.0 : 0.0) + k * 0.32;
        grad += dir * ((d < 1.0 ? 2.0 * d : 0.0) - k * 0.32 * 28.0 * (d - 1.0));
        // Young craters splash bright streaks across the dust.
        float young = step(dens * 0.7, r0);
        float streak = 0.35 + pow(n3(dir * 4.0 + c), 2.0) * 1.6;
        rays += young * smoothstep(1.65, 0.9, d) * streak;
      }
      return hsum;
    }
    void surface(vec3 p, float h, float mask, float dist, float day, inout vec3 albedo, inout float rough, inout float metal, inout vec3 emissive, inout vec3 bump) {
      float n = fbm5(p * 5.0);
      float fine = n3(p * 70.0);
      // Pale highlands, dark basalt maria on the low ground.
      vec3 high = mix(vec3(0.19, 0.19, 0.195), vec3(0.3, 0.295, 0.29), n);
      vec3 mare = mix(vec3(0.06, 0.063, 0.07), vec3(0.1, 0.102, 0.11), fbm3(p * 9.0));
      float m = smoothstep(0.17, 0.04, h + (n - 0.5) * 0.1);
      albedo = mix(high, mare, m);
      vec3 grad = vec3(0.0);
      float rays = 0.0;
      float c1 = craterLayer(p, 48.0, 0.6, grad, rays);
      bump -= grad * 0.035;
      float near = smoothstep(16.0, 3.0, dist);
      float c2 = 0.0;
      if (near > 0.0) {
        vec3 g2 = vec3(0.0);
        float r2 = 0.0;
        c2 = craterLayer(p, 160.0, 0.6, g2, r2);
        bump -= g2 * 0.02 * near;
        rays += r2 * 0.5 * near;
      }
      albedo *= 1.0 + c1 * 0.18 + c2 * 0.12;
      albedo = mix(albedo, vec3(0.42, 0.42, 0.43), clamp(rays, 0.0, 1.0) * 0.55);
      albedo *= 0.84 + fine * 0.32;
      rough = 0.97;
      metal = 0.0;
      bump += bumpOf(p, 60.0, 0.05) * smoothstep(60.0, 6.0, dist);
      bump += bumpOf(p, 320.0, 0.09) * smoothstep(10.0, 1.5, dist);
      // Sintered regolith pads where the domes stand.
      vec3 pad = mix(vec3(0.15, 0.152, 0.16), vec3(0.2, 0.2, 0.21), n3(p * 140.0));
      albedo = mix(albedo, pad, smoothstep(0.3, 0.9, mask));
      // Faint light reflected from the sky's other worlds keeps the night side from going flat black.
      emissive += albedo * vec3(0.05, 0.06, 0.08) * smoothstep(0.2, -0.2, day);
    }`,
  atmosphere: {
    // Barely an exosphere: a hair-thin rim from orbit and a black sky from the ground.
    thickness: 1.06,
    rayleigh: [0.35, 0.42, 0.6],
    mie: [0.12, 0.12, 0.14],
    g: 0.8,
    scaleR: 0.03,
    intensity: 1.6,
    haze: 0x5a6070,
    night: [0.0005, 0.0006, 0.001],
    fog: { density: 0.004, day: 0x16181d, dusk: 0x1c1a1a, night: 0x040507 },
  },
  transit: { road: { en: 'Maglev tube', de: 'Magnetröhre' }, air: { en: 'Lander', de: 'Landefähre' } },
  map: { title: { en: 'Selenographic chart', de: 'Selenografische Karte' }, paper: '#101216', edge: '#3c424c', ink: '#e8ecf2', soft: '#8a929e', sea: ['#0c0d10', '#16181c'], land: ['#1e2026', '#4c5058'], contour: 'rgba(210,220,235,0.13)', grid: 'rgba(120,230,255,0.07)', road: '#7ce8ff', casing: '#0c3a46', air: '#ffb45a', traffic: '#ffffff', accent: '#7ce8ff', lines: 'tube', glyph: 'dome', font: 'mono' },
  layout: 'rings',
  block: 0.5,
  street: { color: 0x5a6e78, rough: 0.6, width: 0.026, glow: -0.6 },
  lot: [0x7a7c80, 0x74767a, 0x6e7074],
  road: {
    width: 0.14,
    elev: 0.12,
    laneOffset: 0.0,
    meander: 0.35,
    lampEvery: 0.7,
    lampChance: 0.5,
    pillarEvery: 0.55,
    pillar(b, { elev }) {
      // Slim pylon with a cradle for the tube.
      b.paint(WHITE, { rough: 0.4, metal: 0.3 });
      b.ngon(6, 0.012, elev + 0.004, { top: 0.7 });
      b.box(0.17, 0.012, 0.024, { y: elev - 0.006 });
      b.paint(CYAN, { glow: -4 });
      b.save().move(0, elev * 0.5, 0).cyl(0.011, 0.011, 0.006, 6, { caps: false }).restore();
    },
    glsl: /* glsl */`
      void roadSurface(float x, float s, float night, inout vec3 albedo, inout float rough, inout float metal, inout vec3 emissive) {
        // A glass tube seen from above: rounded highlight, ribs every few metres, a guide rail glowing within.
        float ax = abs(x);
        float shell = sqrt(max(0.0, 1.0 - ax * ax));
        albedo = mix(vec3(0.03, 0.035, 0.045), vec3(0.32, 0.36, 0.42), shell * shell);
        rough = 0.1;
        metal = 0.6;
        float rib = smoothstep(0.86, 0.94, fract(s * 3.2));
        float edge = smoothstep(0.86, 0.96, ax);
        albedo = mix(albedo, vec3(0.78, 0.8, 0.84), max(rib * 0.85, edge));
        rough = mix(rough, 0.35, max(rib, edge));
        float core = exp(-x * x * 90.0);
        float pulse = pow(0.5 + 0.5 * sin(s * 1.6 - uTime * 3.2), 8.0);
        emissive += vec3(0.25, 0.85, 1.0) * core * (0.2 + pulse * 1.4) * (0.5 + night * 0.8);
        emissive += vec3(1.0, 0.66, 0.3) * rib * edge * night * 1.6;
      }`,
  },
  plaza(b, { r }) {
    // Landing apron: concentric markings and a cyan ring.
    b.paint(0x66686e, { rough: 0.8 });
    b.disc(r, { seg: 48 });
    b.paint(0x8e9096, { rough: 0.7 });
    b.disc(r * 0.98, { y: 0.002, seg: 48, inner: r * 0.9 });
    b.paint(CYAN, { glow: 1.4 });
    b.disc(r * 0.995, { y: 0.003, seg: 48, inner: r * 0.975 });
    b.paint(AMBER, { glow: -7 });
    for (let i = 0; i < 16; i++) {
      const a = (i / 16) * Math.PI * 2;
      b.save().move(Math.cos(a) * r * 0.94, 0.002, Math.sin(a) * r * 0.94).box(0.014, 0.006, 0.014).restore();
    }
  },
  landmark: domeCity,
  section,
  filler(b, { s, rng, spin, tier }) {
    const roll = rng.next();
    if (tier > 0.45 && roll < 0.3) {
      // Downtown: a few hab silos rise between the domes.
      const h = s * rng.range(1.0, 1.8) * (1 + tier * 0.9);
      silo(b, h, s * rng.range(0.34, 0.46), rng);
      if (rng.chance(0.35)) {
        b.save().move(s * 0.32, h + s * 0.2, 0);
        mast(b, s * 0.8, 0.007);
        b.restore();
      }
    } else if (roll < (tier > 0.45 ? 0.72 : 0.45)) {
      habDome(b, s * rng.range(0.55, 0.75) * (1 + tier * 0.25), { sy: rng.range(0.7, 1.0), seg: 12, rings: 4 });
      if (rng.chance(0.5)) {
        b.save().move(s * 0.7, 0, 0).rotY(rng.range(-0.6, 0.6));
        canister(b, s * 0.7, s * 0.13);
        b.restore();
      }
    } else if (roll < 0.62) {
      canister(b, s * 1.2, s * 0.2);
    } else if (roll < 0.82) {
      solarArray(b, s * 1.2, rng);
    } else if (roll < 0.94) {
      landingPad(b, s, rng);
    } else {
      // Small dish on the outskirts.
      radioDish(b, spin, s * 0.5, s * 0.5, rng.range(-0.15, 0.15));
    }
  },
  roadside(b, { elev }) {
    // Beacon post: a cyan marker for the tube, an amber lamp for the regolith path.
    b.paint(SILVER, { rough: 0.4, metal: 0.8 });
    b.cyl(0.004, 0.003, elev + 0.05, 4, { caps: false, smooth: false });
    b.paint(CYAN, { glow: 3 });
    b.save().move(0, elev + 0.05, 0).sphere(0.006, { seg: 5, rings: 3 }).restore();
    b.paint(AMBER, { glow: -8 });
    b.box(0.012, 0.008, 0.012, { y: 0.03 });
  },
  vehicles: [
    {
      weight: 2,
      speed: 0.6,
      y: 0.012,
      build(b) {
        // Maglev passenger pod.
        b.save().rotX(Math.PI / 2);
        b.paint(WHITE, { rough: 0.25, metal: 0.4 });
        b.lathe([[0, -0.07], [0.014, -0.064], [0.02, -0.045], [0.021, 0.035], [0.015, 0.062], [0, 0.074]], 8);
        b.paint(CYAN, { glow: 3 });
        b.cyl(0.0215, 0.0215, 0.006, 8, { y: -0.052, caps: false });
        b.restore();
        b.paint(AMBER, { rough: 0.2, glow: 1.4 });
        b.box(0.043, 0.006, 0.07, { y: 0.004 });
      },
    },
    {
      weight: 1,
      speed: 0.45,
      y: 0.006,
      build(b) {
        // Cargo sled carrying ore canisters.
        b.paint(STEEL, { rough: 0.4, metal: 0.8 });
        b.box(0.04, 0.012, 0.12);
        b.paint(SILVER, { rough: 0.3, metal: 0.7 });
        for (let i = -1; i <= 1; i++) b.save().move(0, 0.024, i * 0.036).sphere(0.014, { seg: 6, rings: 4, y: -0.012 }).restore();
        b.paint(CYAN, { glow: 4 });
        b.save().move(0, 0.006, 0.061).box(0.03, 0.004, 0.002).restore();
      },
    },
  ],
  flyer: {
    speed: 0.6,
    shadow: true,
    build: lander,
  },
  walker: {
    speed: 0.06,
    lift: 0.012,
    bob: 0.012,
    bobRate: 3.2,
    colors: [0xffffff, 0xf4eee4, 0xe4ecf4, 0xffe8cc, 0xd8f0f4],
    build(b) {
      // Astronaut in a pressure suit, loping in low gravity.
      b.paint(0xf2f2f2, { rough: 0.7 });
      b.cyl(0.0066, 0.0074, 0.016, 6, {});
      b.save().move(0, 0.004, -0.007).box(0.009, 0.011, 0.004).restore();
      b.save().move(0, 0.0205, 0).sphere(0.0058, { seg: 6, rings: 4 }).restore();
      b.paint(AMBER, { rough: 0.1, metal: 0.8, glow: 0.6 });
      b.save().move(0, 0.021, 0.0042).box(0.007, 0.004, 0.002).restore();
    },
  },
  ship(b) {
    // Long-haul tug: a spine of trusses, fuel spheres and a turning hab ring.
    b.paint(SILVER, { rough: 0.35, metal: 0.8 });
    b.box(0.08, 0.08, 2.2, { y: -0.04 });
    b.paint(WHITE, { rough: 0.3, metal: 0.4 });
    for (let i = 0; i < 3; i++) {
      b.save().move(0.16, 0, -0.5 + i * 0.36).sphere(0.15, { seg: 8, rings: 5, y: -0.15 }).restore();
      b.save().move(-0.16, 0, -0.5 + i * 0.36).sphere(0.15, { seg: 8, rings: 5, y: -0.15 }).restore();
    }
    b.save().move(0, 0, 0.6).rotX(Math.PI / 2).ring(0.42, 0.05, { seg: 18, tseg: 4 }).restore();
    b.paint(AMBER, { glow: 2.5 });
    b.save().move(0, 0, 1.05).sphere(0.12, { seg: 8, rings: 5, y: -0.12 }).restore();
    b.paint(CYAN, { glow: 4 });
    b.save().move(0, 0, -1.1).rotX(-Math.PI / 2).cone(0.16, 0.4, 8).restore();
  },
};
