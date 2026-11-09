// LITHOS — the Heirs. A world of pale mesas and canyons, older than anyone remembers. The Heirs
// live among the monuments of their forebears: terraces, colonnades and obelisks whose carved
// runes still wake at dusk, while stone sledges glide over the causeways.
import { WIN, mix3 } from '../engine/builder.js';

const LIME = [0xd2c9b4, 0xc8bfaa, 0xbcb39f, 0xd9d1bd];
const SAND = [0xc9a88a, 0xbe9c7e, 0xd2b496];
const MOSS = [0x3e7f6c, 0x4c8f78, 0x5a9a7e, 0x2f6e62];
const PLINTH = 0x958c7a;
// Turquoise inlay by day, soft cyan light after dark.
const RUNE = 0x5ec4b6;

/** A fluted-looking column: base block, slightly tapered shaft, capital block. */
function column(b, r, h, stone, { broken = false } = {}) {
  b.paint(mix3(stone, 0x000000, 0.12), { rough: 0.9 });
  b.box(r * 2.6, r * 0.8, r * 2.6);
  b.paint(stone, { rough: 0.86 });
  const shaft = broken ? h * 0.55 : h - r * 1.6;
  b.cyl(r, r * 0.86, shaft, 8, { y: r * 0.8, caps: broken });
  if (!broken) {
    b.paint(mix3(stone, 0xffffff, 0.1), { rough: 0.85 });
    b.box(r * 2.5, r * 0.8, r * 2.5, { y: h - r * 0.8, top: 1.12 });
  }
}

/** A thin turquoise inlay running round a block: carved runes that light up at night. */
function runeBand(b, w, d, y, hh = 0.012) {
  b.paint(RUNE, { rough: 0.5, glow: -3.2 });
  b.box(w + 0.006, hh, d + 0.006, { y, caps: false });
}

/** A ring of floating glyph-stones that turns slowly about a vertical axis. */
function runeHalo(spin, r, y, rate, rng, tilt = 0) {
  spin.save().move(0, y, 0).rotX(tilt);
  spin.spinAbout(0, 0, 0, 0, 1, 0, rate);
  spin.paint(RUNE, { rough: 0.4, glow: 1.4 });
  spin.ring(r, r * 0.022, { seg: 24, tseg: 3 });
  spin.paint(0xd6cfbc, { rough: 0.7, glow: -0.6 });
  const n = 6;
  for (let i = 0; i < n; i++) {
    const a = (i / n) * Math.PI * 2 + rng.range(-0.15, 0.15);
    spin.save().rotY(a).move(0, -r * 0.06, r).box(r * 0.12, r * 0.12, r * 0.03).restore();
  }
  spin.restore();
}

function obelisk(b, r, h, stone, { glyphs = true } = {}) {
  b.paint(mix3(stone, 0x000000, 0.15), { rough: 0.9 });
  b.box(r * 3.2, r * 1.2, r * 3.2);
  b.paint(stone, { rough: 0.8 });
  b.ngon(4, r * 1.41, h * 0.86, { y: r * 1.2, top: 0.66, rot: Math.PI / 4, cap: false });
  b.paint(RUNE, { rough: 0.35, glow: -4 });
  if (glyphs) {
    // Columns of glyphs down each face; the slight taper is hidden inside the inlay's depth.
    for (let i = 0; i < 4; i++) {
      b.save().rotY((i / 4) * Math.PI * 2);
      for (let k = 0; k < 3; k++) {
        const y0 = r * 1.2 + h * (0.12 + k * 0.2);
        const inset = r * (1 - (0.34 * (y0 - r * 1.2 + h * 0.07)) / (h * 0.86));
        b.save().move(0, 0, inset).box(r * 0.26, h * 0.13, r * 0.12 + 0.004, { y: y0 }).restore();
      }
      b.restore();
    }
  }
  b.ngon(4, r * 1.41 * 0.66, Math.max(r * 2, h * 0.14 - r * 1.2), { y: r * 1.2 + h * 0.86, top: 0.001, rot: Math.PI / 4, cap: false });
}

/** Stairs from the ground up to height H, between z = back and z = front. */
function stairs(b, sw, H, back, front, steps = 7) {
  for (let k = 0; k < steps; k++) {
    const f = front - ((front - back) * k) / steps;
    b.save().move(0, 0, (f + back) / 2).box(sw, (H * (k + 1)) / steps, f - back).restore();
  }
}

/** Arch: two piers and a ring of voussoirs, all of rough blocks. */
function arch(b, span, h, t, stone) {
  b.paint(stone, { rough: 0.88 });
  const pier = h * 0.6;
  b.save().move(-span / 2 - t / 2, 0, 0).box(t, pier, t * 1.1).restore();
  b.save().move(span / 2 + t / 2, 0, 0).box(t, pier, t * 1.1).restore();
  const R = span / 2 + t / 2, n = 7;
  for (let i = 0; i < n; i++) {
    const a = ((i + 0.5) / n) * Math.PI;
    b.save().move(Math.cos(a) * R, pier + Math.sin(a) * R, 0).rotZ(a - Math.PI / 2).box(t * 1.05, (Math.PI * R) / n + 0.002, t * 1.1, { y: -((Math.PI * R) / n) / 2 }).restore();
  }
  b.paint(RUNE, { rough: 0.4, glow: -4 });
  b.save().move(0, pier + R, 0).box(t * 0.5, t * 0.5, t * 1.2, { y: -t * 0.25 }).restore();
}

function terraceTemple(b, { h, w, rng, spin, capital }) {
  const stone = rng.pick(LIME);
  const W = w * (capital ? 2.2 : 1.95);
  const tiers = h > 1.6 ? 4 : 3;
  const tierH = (h * (capital ? 0.36 : 0.46)) / tiers;
  let y = 0, ww = W;
  // Stepped terraces, each with a band of runes and a row of dark niches.
  for (let i = 0; i < tiers; i++) {
    b.paint(i % 2 ? mix3(stone, rng.pick(SAND), 0.35) : stone, { rough: 0.9, win: WIN.GRID, cw: 0.11, ch: tierH * 1.4 });
    b.box(ww, tierH, ww, { y, top: 0.97 });
    runeBand(b, ww * 0.97, ww * 0.97, y + tierH - 0.016);
    // Moss creeps along the treads.
    b.paint(rng.pick(MOSS), { rough: 0.95 });
    b.box(ww * 0.86, 0.008, ww * 0.86, { y: y + tierH });
    y += tierH;
    ww *= 0.76;
  }
  const top = y, topW = ww / 0.76;
  b.paint(mix3(stone, 0xffffff, 0.08), { rough: 0.85 });
  stairs(b, W * 0.26, top, topW * 0.3, W * 0.5 + tierH * 1.3, tiers * 3);
  // Colonnaded sanctum on the summit.
  const cw = topW * 0.72, cd = topW * 0.56, colH = Math.min(h * 0.24, 0.5);
  b.paint(mix3(stone, 0x000000, 0.18), { rough: 0.9, win: WIN.SPOTS, cw: 0.06, ch: 0.07 });
  b.box(cw * 0.7, colH, cd * 0.6, { y: top });
  const r = Math.max(0.011, w * 0.03);
  const nx = capital ? 6 : 5;
  for (let i = 0; i < nx; i++) {
    const x = (i / (nx - 1) - 0.5) * cw;
    for (const z of [-cd / 2, cd / 2]) {
      b.save().move(x, top, z);
      column(b, r, colH, stone);
      b.restore();
    }
  }
  b.paint(stone, { rough: 0.85 });
  b.box(cw * 1.12, colH * 0.12, cd * 1.2, { y: top + colH });
  b.box(cw * 0.8, colH * 0.1, cd * 0.85, { y: top + colH * 1.12 });
  runeBand(b, cw * 1.12, cd * 1.2, top + colH + colH * 0.02, colH * 0.05);
  // Obelisks guard the foot of the stair.
  const ob = Math.min(0.5, h * 0.22);
  for (const s of [-1, 1]) {
    b.save().move(s * W * 0.26, 0, W * 0.5 + tierH * 1.6);
    obelisk(b, 0.016, ob, stone, { glyphs: false });
    b.restore();
  }
  if (capital) {
    // The capital raises a great obelisk from the sanctum roof, ringed by turning glyph-stones.
    const oy = top + colH * 1.22;
    const oh = Math.max(0.6, h - oy);
    b.save().move(0, oy, 0);
    obelisk(b, w * 0.09, oh, mix3(stone, 0xffffff, 0.1));
    b.restore();
    runeHalo(spin, w * 0.55, oy + oh * 0.45, 0.22, rng, 0.12);
    runeHalo(spin, w * 0.4, oy + oh * 0.72, -0.34, rng, -0.18);
  } else {
    runeHalo(spin, topW * 0.42, top + colH * 1.6, 0.25, rng);
  }
}

function spireOfRunes(b, { h, w, rng, spin }) {
  const stone = rng.pick(LIME);
  const W = w * 1.6;
  // Three-stepped plinth.
  b.paint(PLINTH, { rough: 0.92 });
  b.box(W * 1.5, 0.05, W * 1.5);
  b.paint(stone, { rough: 0.9 });
  b.box(W * 1.15, 0.05, W * 1.15, { y: 0.05 });
  b.box(W * 0.8, 0.05, W * 0.8, { y: 0.1 });
  runeBand(b, W * 0.8, W * 0.8, 0.13, 0.01);
  b.save().move(0, 0.15, 0);
  obelisk(b, w * 0.12, h - 0.15, mix3(stone, 0xffffff, 0.08));
  b.restore();
  // A ring of columns with lintels; time has brought some of them down.
  const n = 10, R = W * 0.95, colH = Math.min(h * 0.3, 0.55), r = Math.max(0.012, w * 0.032);
  const standing = [];
  for (let i = 0; i < n; i++) {
    const a = (i / n) * Math.PI * 2;
    const broken = rng.chance(0.25);
    standing.push(!broken);
    b.save().move(Math.cos(a) * R, 0, Math.sin(a) * R);
    column(b, r, colH, stone, { broken });
    b.restore();
  }
  b.paint(stone, { rough: 0.88 });
  const chord = 2 * R * Math.sin(Math.PI / n);
  for (let i = 0; i < n; i++) {
    if (!standing[i] || !standing[(i + 1) % n]) continue;
    const a = ((i + 0.5) / n) * Math.PI * 2;
    b.save().move(Math.cos(a) * R * Math.cos(Math.PI / n), colH, Math.sin(a) * R * Math.cos(Math.PI / n)).rotY(-a + Math.PI / 2);
    b.box(chord + r * 2, r * 1.8, r * 2.4);
    b.restore();
  }
  // Fallen drums lie where they dropped.
  b.paint(stone, { rough: 0.92 });
  for (let i = 0; i < n; i++) {
    if (standing[i]) continue;
    const a = (i / n) * Math.PI * 2 + 0.25;
    b.save().move(Math.cos(a) * R * 1.12, r, Math.sin(a) * R * 1.12).rotY(rng.range(0, 3)).rotZ(Math.PI / 2);
    b.cyl(r, r, colH * 0.3, 7, { y: -colH * 0.15 });
    b.restore();
  }
  runeHalo(spin, w * 0.5, h * 0.42, 0.28, rng, 0.1);
  runeHalo(spin, w * 0.36, h * 0.66, -0.4, rng, -0.14);
}

function colossus(b, { h, w, rng, spin }) {
  const stone = rng.pick(LIME);
  const W = w * 1.5;
  // Stepped plinth with a rune band and a row of niches.
  b.paint(PLINTH, { rough: 0.92 });
  b.box(W * 1.7, 0.05, W * 1.5);
  b.paint(stone, { rough: 0.9, win: WIN.GRID, cw: 0.12, ch: h * 0.16 });
  b.box(W * 1.3, h * 0.1, W * 1.1, { y: 0.05, top: 0.94 });
  runeBand(b, W * 1.26, W * 1.06, 0.05 + h * 0.1 - 0.02);
  const base = 0.05 + h * 0.1;
  const H = h - base;
  const S = Math.min(W, H * 0.34);
  // A hooded, robed figure worn down to its essentials, leaning very slightly with age.
  b.save().move(0, base, 0).rotZ(rng.range(-0.035, 0.035));
  // The robe is of warmer sandstone, so that the pale head and hands stand out against it.
  b.paint(rng.pick(SAND), { rough: 0.94 });
  b.ngon(8, S * 0.42, H * 0.58, { top: 0.66, rot: Math.PI / 8 });
  b.paint(stone, { rough: 0.9 });
  b.box(S * 0.5, H * 0.16, S * 0.34, { y: H * 0.56, top: 0.86 });
  // Mantle across the shoulders, and arms folded over a glowing tablet.
  b.box(S * 0.9, H * 0.05, S * 0.44, { y: H * 0.7, top: 0.6 });
  for (const sd of [-1, 1]) {
    b.save().move(sd * S * 0.3, H * 0.44, S * 0.02).rotZ(sd * 0.1).box(S * 0.14, H * 0.28, S * 0.26, { top: 0.85 }).restore();
  }
  b.save().move(0, H * 0.45, S * 0.15).rotX(-0.2).box(S * 0.36, H * 0.13, S * 0.06).restore();
  // The hood, its face in shadow.
  b.paint(mix3(stone, 0xffffff, 0.08), { rough: 0.9 });
  b.save().move(0, H * 0.74, 0).rotX(0.12);
  b.ngon(6, S * 0.28, H * 0.24, { top: 0.4, rot: Math.PI / 6 });
  b.paint(0x4c463c, { rough: 0.95 });
  b.save().move(0, H * 0.04, S * 0.17).box(S * 0.22, H * 0.1, S * 0.04).restore();
  b.paint(RUNE, { rough: 0.4, glow: -5 });
  b.save().move(0, H * 0.085, S * 0.19).box(S * 0.16, H * 0.012, S * 0.03).restore();
  b.restore();
  b.save().move(0, H * 0.48, S * 0.17).rotX(-0.2).box(S * 0.2, H * 0.06, S * 0.04).restore();
  b.restore();
  // A ceremonial arch in front of the statue.
  b.save().move(0, 0.05, W * 0.95);
  arch(b, W * 0.55, Math.min(h * 0.4, 0.55), Math.max(0.03, w * 0.07), stone);
  b.restore();
  runeHalo(spin, S * 0.5, base + H * 1.02, 0.3, rng);
}

/** Amphitheatre: tiers of seats stepping up from a round stage, arcades outside. */
function amphitheatre(b, { r, h, rng }) {
  const stone = rng.pick(LIME);
  const steps = 4;
  const prof = [[r * 0.4, 0]];
  for (let i = 0; i < steps; i++) {
    const rr = r * (0.4 + (0.6 * (i + 1)) / steps);
    const yy = (h * (i + 1)) / steps;
    prof.push([prof[prof.length - 1][0], yy], [rr, yy]);
  }
  prof.push([r, 0]);
  b.paint(stone, { rough: 0.9 });
  b.lathe(prof.slice(0, -1), 14, { smooth: false });
  b.paint(mix3(stone, 0x000000, 0.08), { rough: 0.9, win: WIN.GRID, cw: 0.07, ch: h * 0.55 });
  b.cyl(r, r, h, 14, { caps: false, smooth: false });
  b.paint(rng.pick(MOSS), { rough: 0.95 });
  b.disc(r * 0.4, { y: 0.004, seg: 14 });
  b.paint(RUNE, { rough: 0.4, glow: -3 });
  b.disc(r * 0.24, { y: 0.008, seg: 14, inner: r * 0.2 });
}

function portico(b, { h, w, rng }) {
  const stone = rng.pick(LIME);
  const W = w * 1.25, D = w * 1.05;
  b.paint(PLINTH, { rough: 0.92 });
  b.box(W * 1.18, 0.04, D * 1.3);
  b.paint(stone, { rough: 0.88, win: WIN.GRID, cw: 0.1, ch: 0.16 });
  b.box(W, h * 0.86, D * 0.8, { y: 0.04, top: 0.97 });
  const r = Math.max(0.009, w * 0.04);
  const n = 4;
  for (let i = 0; i < n; i++) {
    b.save().move((i / (n - 1) - 0.5) * W * 0.86, 0.04, D * 0.55);
    column(b, r, h * 0.86, stone);
    b.restore();
  }
  b.paint(mix3(stone, 0xffffff, 0.08), { rough: 0.85 });
  b.box(W * 1.08, h * 0.08, D * 1.22, { y: 0.04 + h * 0.86 });
  runeBand(b, W * 1.08, D * 1.22, 0.04 + h * 0.86 + h * 0.02, h * 0.035);
  b.box(W * 0.7, h * 0.06, D * 0.7, { y: 0.04 + h * 0.94 });
}

function steppedBlock(b, { h, w, rng }) {
  const stone = rng.chance(0.6) ? rng.pick(LIME) : rng.pick(SAND);
  let y = 0, ww = w * 1.3;
  const tiers = 3;
  for (let i = 0; i < tiers; i++) {
    const th = (h * [0.5, 0.3, 0.2][i]);
    b.paint(i === 1 ? mix3(stone, 0x000000, 0.08) : stone, { rough: 0.9, win: WIN.SPOTS, cw: 0.06, ch: 0.08 });
    b.box(ww, th, ww * 0.9, { y, top: 0.94 });
    y += th;
    if (i < tiers - 1) {
      b.paint(rng.pick(MOSS), { rough: 0.95 });
      b.box(ww * 0.9, 0.008, ww * 0.8, { y });
    }
    ww *= 0.72;
  }
  runeBand(b, w * 1.3, w * 1.17, h * 0.5 - 0.016);
}

function tholos(b, { h, w, rng, spin }) {
  // A roofless ring of columns around a small obelisk: a shrine open to the sky.
  const stone = rng.pick(LIME);
  const R = w * 0.62, r = Math.max(0.009, w * 0.04), n = 8;
  b.paint(PLINTH, { rough: 0.92 });
  b.cyl(R * 1.25, R * 1.25, 0.035, 12, { smooth: false });
  b.paint(stone, { rough: 0.9 });
  b.cyl(R * 1.1, R * 1.1, 0.03, 12, { y: 0.035, smooth: false });
  for (let i = 0; i < n; i++) {
    const a = (i / n) * Math.PI * 2;
    b.save().move(Math.cos(a) * R, 0.065, Math.sin(a) * R);
    column(b, r, h * 0.8, stone);
    b.restore();
  }
  b.paint(stone, { rough: 0.88 });
  b.cyl(R * 1.12, R * 1.12, h * 0.07, 12, { y: 0.065 + h * 0.8, smooth: false, caps: false });
  b.cyl(R * 0.88, R * 0.88, h * 0.07, 12, { y: 0.065 + h * 0.8, smooth: false, caps: false });
  b.disc(R * 1.12, { y: 0.065 + h * 0.87, seg: 12, inner: R * 0.88 });
  b.save().move(0, 0.065, 0);
  obelisk(b, r * 1.1, h * 0.7, mix3(stone, 0xffffff, 0.1));
  b.restore();
}

export default {
  id: 'lithos',
  name: { en: 'Lithos', de: 'Lithos' },
  people: { en: 'The Heirs', de: 'Die Erben' },
  blurb: {
    en: 'A world of pale mesas and still turquoise pools. The Heirs dwell among the monuments of a forgotten age, and the carved runes still wake at dusk.',
    de: 'Eine Welt aus hellen Tafelbergen und stillen türkisfarbenen Teichen. Die Erben leben zwischen den Monumenten eines vergessenen Zeitalters, und die gemeißelten Runen erwachen noch immer in der Dämmerung.',
  },
  bridge: { en: 'stone causeways & rune barges', de: 'Steindämme & Runenbarken' },
  dayLength: 260,
  tilt: 0.16,
  palette: { accent: 0x6ef0dc, window: 0xffcf8e, route: 0x86f4e4, scaffold: 0xa89c84 },
  env: { zenith: 0x5c9ea4, horizon: 0xe6e8d8, ground: 0x9c937e },
  terrain: {
    amp: 1.2,
    power: 1.0,
    height(noise, x, y, z) {
      const c = noise.fbm(x * 1.35 + 9, y * 1.35, z * 1.35, 5, 2.0, 0.5);
      let v = c * 1.9 + 0.36;
      // Winding canyons cut down through the tableland; their floors hold the pools.
      const k = Math.abs(noise.simplex(x * 2.6 + 4, y * 2.6, z * 2.6) + noise.simplex(x * 7, y * 7, z * 7 + 3) * 0.18);
      const cut = Math.max(0, 1 - k / 0.13);
      v -= cut * cut * 0.7;
      // Terraces: broad flat treads, short steep risers.
      const steps = 4;
      const t = v * steps + noise.simplex(x * 11, y * 11 + 5, z * 11) * 0.12, f = t - Math.floor(t);
      const riser = f < 0.8 ? 0 : (f - 0.8) / 0.2;
      const terr = (Math.floor(t) + riser * riser * (3 - 2 * riser)) / steps;
      return terr * 0.88 + v * 0.12;
    },
  },
  scatterDensity: 0.7,
  scatterMinH: 0.02,
  scatter(b, { rng, h, x, y, z, noise }) {
    const roll = rng.next();
    const patch = noise.simplex(x * 10 + 2, y * 10, z * 10);
    if (roll < 0.36) {
      // Lichen cushions and low teal shrubs, clustered in sheltered patches.
      if (patch < -0.1) return;
      for (let i = 0; i < 3; i++) {
        const a = rng.range(0, 6.28), d = rng.range(0, 0.08), s = rng.range(0.025, 0.06);
        b.paint(rng.pick(MOSS), { rough: 0.95 });
        b.save().move(Math.cos(a) * d, 0, Math.sin(a) * d).sphere(s, { y: -s * 0.35, seg: 6, rings: 3, sy: 0.55 }).restore();
      }
    } else if (roll < 0.52) {
      // Slender dark cypress.
      const t = rng.range(0.14, 0.26);
      b.paint(0x24584c, { rough: 0.95 });
      b.cyl(t * 0.13, 0.002, t, 5, { smooth: false, caps: false });
    } else if (roll < 0.72) {
      // Broken columns, half sunk in the ground.
      const stone = rng.pick(LIME);
      const n = rng.int(1, 3);
      for (let i = 0; i < n; i++) {
        b.save().move(i * 0.06 - 0.06, 0, rng.range(-0.03, 0.03));
        column(b, 0.012, rng.range(0.08, 0.2), stone, { broken: true });
        b.restore();
      }
      b.paint(stone, { rough: 0.92 });
      b.save().move(0.05, 0.012, 0.05).rotY(rng.range(0, 3)).rotZ(Math.PI / 2).cyl(0.012, 0.012, 0.05, 7, { y: -0.025 }).restore();
    } else if (roll < 0.84) {
      // A standing stone with a rune that glows after dark.
      const t = rng.range(0.1, 0.2);
      b.paint(rng.pick(LIME), { rough: 0.9 });
      b.save().rotZ(rng.range(-0.08, 0.08));
      b.box(t * 0.32, t, t * 0.14, { top: 0.78 });
      b.paint(RUNE, { rough: 0.4, glow: -4 });
      b.box(t * 0.1, t * 0.36, t * 0.15, { y: t * 0.4 });
      b.restore();
    } else if (roll < 0.94) {
      // A lone arch, all that is left of some gate.
      b.save().rotY(rng.range(0, 3));
      arch(b, rng.range(0.07, 0.12), rng.range(0.12, 0.2), 0.022, rng.pick(LIME));
      b.restore();
    } else if (h > 0.15) {
      // The head of a fallen colossus, gazing at the sky.
      const s = rng.range(0.07, 0.12);
      b.paint(rng.pick(LIME), { rough: 0.94 });
      b.save().rotX(-1.2).rotZ(rng.range(-0.4, 0.4));
      b.box(s, s * 1.2, s, { y: -s * 0.3, top: 0.82 });
      b.paint(RUNE, { rough: 0.4, glow: -4 });
      b.box(s * 0.7, s * 0.06, s * 1.02, { y: s * 0.55 });
      b.restore();
    }
  },
  surfaceGLSL: /* glsl */`
    void surface(vec3 p, float h, float mask, float dist, float day, inout vec3 albedo, inout float rough, inout float metal, inout vec3 emissive, inout vec3 bump) {
      float night = smoothstep(0.3, -0.15, day);
      float n = fbm5(p * 6.0);
      float fine = n3(p * 64.0);
      float hh = h + (n - 0.5) * 0.04;
      // Geometric slope: flat treads collect moss, risers show bare strata.
      vec3 fn = normalize(cross(dFdx(vLocal), dFdy(vLocal)));
      float cliff = smoothstep(0.08, 0.3, 1.0 - abs(dot(fn, p)));
      if (hh < 0.0 && mask < 0.6) {
        vec3 b0 = bump;
        liquid(p, hh, vec3(0.008, 0.11, 0.12), vec3(0.14, 0.6, 0.54), 12.0, albedo, rough, metal, bump);
        // Still pools: barely a ripple, rimmed with pale travertine.
        bump = b0 + (bump - b0) * 0.22;
        albedo = mix(albedo, vec3(0.5, 0.6, 0.5), smoothstep(-0.035, 0.0, hh) * 0.5);
      } else {
        // Strata follow the true height, so treads stay one colour and only cliffs are banded.
        float strata = 0.5 + 0.5 * sin(h * 46.0 + n * 1.5);
        vec3 lime = mix(vec3(0.56, 0.52, 0.44), vec3(0.7, 0.66, 0.57), fine);
        vec3 sand = vec3(0.64, 0.47, 0.34);
        float blush = smoothstep(0.42, 0.62, fbm3(p * 3.0 + 2.0));
        vec3 rock = mix(lime, sand, blush * 0.35);
        // Cliff faces: warmer sandstone in layered bands, darker than the treads above them.
        vec3 face = mix(vec3(0.46, 0.36, 0.27), vec3(0.62, 0.52, 0.4), strata) * (0.85 + fine * 0.2);
        rock = mix(rock, face, cliff);
        vec3 moss = mix(vec3(0.06, 0.2, 0.16), vec3(0.18, 0.36, 0.27), n3(p * 28.0));
        float wet = smoothstep(0.05, -0.3, hh - 0.25);
        float mossAmt = (1.0 - cliff) * smoothstep(0.32, 0.56, fbm3(p * 5.0 + 4.0) + wet * 0.25);
        albedo = mix(rock, moss, mossAmt);
        // Pale sand right at the waterline.
        albedo = mix(vec3(0.66, 0.64, 0.54), albedo, smoothstep(0.004, 0.03, hh));
        albedo *= 0.84 + fine * 0.32;
        rough = mix(0.88, 0.95, mossAmt);
        bump += bumpOf(p, 44.0, 0.08) * smoothstep(80.0, 10.0, dist);
        float near = smoothstep(14.0, 2.0, dist);
        if (near > 0.0) bump += bumpOf(p, 300.0, 0.1) * near;
        // City ground: big worn flagstones, mossy where nobody walks.
        vec3 q = p * 320.0;
        vec3 g = abs(fract(q) - 0.5);
        float seam = smoothstep(0.04, 0.0, 0.5 - max(g.x, max(g.y, g.z))) * smoothstep(12.0, 3.0, dist);
        vec3 pave = mix(vec3(0.42, 0.4, 0.34), vec3(0.52, 0.49, 0.42), n3(floor(q) * 1.3));
        pave = mix(pave, vec3(0.16, 0.3, 0.24), smoothstep(0.55, 0.7, n3(p * 40.0)) * 0.6);
        pave *= 1.0 - seam * 0.25;
        float m = smoothstep(0.3, 0.9, mask);
        albedo = mix(albedo, pave, m);
      }
    }`,
  atmosphere: {
    thickness: 1.22,
    rayleigh: [1.0, 2.35, 2.75],
    mie: [0.55, 0.58, 0.52],
    g: 0.78,
    intensity: 7.6,
    haze: 0x9ad8cc,
    fog: { density: 0.014, day: 0xbcd2c8, dusk: 0xe2a68c, night: 0x081214 },
  },
  clouds: { cover: 0.6, scale: 3.6, opacity: 0.62, color: 0xf6f4ea, shadow: 0x7a8c86, dusk: 0xf0a88c },
  transit: { road: { en: 'Causeway', de: 'Steindamm' }, air: { en: 'Rune barge', de: 'Runenbarke' } },
  map: { title: { en: 'Rune survey', de: 'Runenvermessung' }, paper: '#dcd6c6', edge: '#8c8470', ink: '#1e3d38', soft: '#5f746c', sea: ['#5fb3a8', '#9fd3c8'], land: ['#d4ccb6', '#a89a7c'], contour: 'rgba(70,64,48,0.26)', grid: 'rgba(30,110,100,0.12)', road: '#b4a888', casing: '#4a4234', air: '#1f9c8c', traffic: '#1e2c28', accent: '#1f9c8c', lines: 'causeway', glyph: 'obelisk', font: 'serif' },
  layout: 'grid',
  block: 0.5,
  street: { color: 0x9a9280, rough: 0.9, width: 0.05 },
  lotFor(tier, rng) {
    if (tier > 0.4) return rng.pick([0xa8a08c, 0xb2aa96, 0x9c947f]);
    return rng.pick([0x4e7a66, 0x5a866e, 0x6a8c72, 0x8c8a74]);
  },
  road: {
    width: 0.18,
    elev: 0.045,
    laneOffset: 0.22,
    meander: 0.3,
    lampEvery: 0.7,
    lampChance: 0.6,
    pillarEvery: 0.32,
    pillar(b, { elev }) {
      // Solid piers under the causeway, wider at the foot.
      b.paint(0xb4ab96, { rough: 0.92 });
      b.box(0.17, elev + 0.04, 0.07, { y: -0.04, top: 0.94, topZ: 0.8 });
    },
    glsl: /* glsl */`
      void roadSurface(float x, float s, float night, inout vec3 albedo, inout float rough, inout float metal, inout vec3 emissive) {
        // Big flagstones in staggered courses, with pale kerbs.
        float row = floor((x + 1.0) * 1.5);
        float u = s * 8.0 + row * 0.5;
        float id = floor(u);
        vec2 f = vec2(fract(u), fract((x + 1.0) * 1.5));
        float joint = smoothstep(0.0, 0.06, f.x) * smoothstep(1.0, 0.94, f.x) * smoothstep(0.0, 0.08, f.y) * smoothstep(1.0, 0.92, f.y);
        float tone = n3(vec3(id * 1.7, row * 3.1, 2.0));
        albedo = mix(vec3(0.4, 0.37, 0.31), vec3(0.58, 0.54, 0.45), tone);
        albedo *= 0.6 + 0.4 * joint;
        rough = 0.88;
        float kerb = smoothstep(0.84, 0.88, abs(x));
        albedo = mix(albedo, vec3(0.66, 0.62, 0.53), kerb);
        // A rune line inlaid down the middle, breathing softly after dark.
        float line = smoothstep(0.07, 0.03, abs(x));
        float glyph = step(0.25, fract(s * 2.5)) * step(fract(s * 2.5), 0.85);
        albedo = mix(albedo, vec3(0.2, 0.46, 0.43), line * glyph);
        float pulse = 0.65 + 0.35 * sin(s * 1.3 - uTime * 0.7);
        emissive += vec3(0.25, 0.95, 0.85) * line * glyph * night * 1.2 * pulse;
      }`,
  },
  plaza(b, { r }) {
    b.paint(0x9c9480, { rough: 0.9 });
    b.disc(r, { seg: 40 });
    b.paint(0xc4bca8, { rough: 0.88 });
    b.disc(r * 0.97, { y: 0.002, seg: 40, inner: r * 0.86 });
    b.paint(RUNE, { rough: 0.45, glow: -2.6 });
    b.disc(r * 0.8, { y: 0.003, seg: 40, inner: r * 0.77 });
    for (let i = 0; i < 12; i++) {
      b.save().rotY((i / 12) * Math.PI * 2).move(0, 0.003, r * 0.9).box(0.012, 0.002, r * 0.1).restore();
    }
  },
  landmark(b, s) {
    if (s.capital || s.h < 1.4) terraceTemple(b, s);
    else if (s.rng.chance(0.5)) spireOfRunes(b, s);
    else colossus(b, s);
  },
  section(b, s) {
    const roll = s.rng.next();
    if (roll < 0.34) portico(b, s);
    else if (roll < 0.62) steppedBlock(b, s);
    else if (roll < 0.82) tholos(b, s);
    else amphitheatre(b, { r: s.w * 0.85, h: s.h * 0.45, rng: s.rng });
  },
  filler(b, { s, rng, tier }) {
    const roll = rng.next();
    if (tier > 0.4) {
      const stone = rng.chance(0.7) ? rng.pick(LIME) : rng.pick(SAND);
      if (roll < 0.6) {
        // Town house: a stepped stone block with a roof garden, few and deep windows.
        const h = s * rng.range(0.7, 1.3) * (1 + tier * 0.9);
        // Battered walls pierced by small round openings.
        b.paint(stone, { rough: 0.9, win: WIN.SPOTS, cw: 0.065, ch: 0.085 });
        b.box(s * 1.4, h, s * 1.3, { top: 0.93 });
        b.paint(mix3(stone, 0x000000, 0.12), { rough: 0.9 });
        b.box(s * 1.36, 0.014, s * 1.26, { y: h });
        if (rng.chance(0.7)) {
          b.paint(stone, { rough: 0.9, win: WIN.SPOTS, cw: 0.065, ch: 0.085 });
          b.save().move(-s * 0.22, h, -s * 0.2).box(s * 0.85, h * 0.42, s * 0.8, { top: 0.9 }).restore();
          b.paint(rng.pick(MOSS), { rough: 0.95 });
          b.save().move(s * 0.38, h, s * 0.3).box(s * 0.5, 0.014, s * 0.55).restore();
        }
        if (rng.chance(0.5)) runeBand(b, s * 1.4, s * 1.3, h * 0.55, 0.008);
      } else if (roll < 0.85) {
        // Colonnaded hall.
        const h = s * rng.range(0.6, 0.9) * (1 + tier * 0.6);
        b.paint(PLINTH, { rough: 0.92 });
        b.box(s * 1.5, 0.02, s * 1.4);
        b.paint(stone, { rough: 0.9, win: WIN.GRID, cw: 0.08, ch: 0.12 });
        b.box(s * 1.3, h, s * 0.8, { y: 0.02, top: 0.98 });
        for (let i = 0; i < 3; i++) {
          b.save().move((i - 1) * s * 0.55, 0.02, s * 0.56);
          column(b, s * 0.05, h, stone);
          b.restore();
        }
        b.paint(mix3(stone, 0xffffff, 0.08), { rough: 0.85 });
        b.box(s * 1.42, h * 0.1, s * 1.3, { y: 0.02 + h });
      } else {
        obelisk(b, s * 0.1, s * rng.range(1.8, 3.0) * (1 + tier * 0.5), stone);
      }
      return;
    }
    if (roll < 0.45) {
      // Courtyard house: low walls around a mossy yard.
      const h = s * rng.range(0.45, 0.75);
      const stone = rng.pick(LIME);
      b.paint(stone, { rough: 0.92, win: WIN.SPOTS, cw: 0.06, ch: 0.08 });
      b.box(s * 1.4, h, s * 0.5, { top: 0.92 });
      b.save().move(-s * 0.48, 0, s * 0.4).box(s * 0.44, h * 0.8, s * 0.55).restore();
      b.paint(rng.pick(MOSS), { rough: 0.95 });
      b.save().move(s * 0.25, 0, s * 0.45).box(s * 0.8, 0.01, s * 0.6).restore();
      b.paint(0x24584c, { rough: 0.95 });
      b.save().move(s * 0.4, 0, s * 0.5).cyl(s * 0.12, 0.002, s * 1.2, 5, { smooth: false, caps: false }).restore();
    } else if (roll < 0.7) {
      // A small obelisk on a mossy mound.
      b.paint(rng.pick(MOSS), { rough: 0.95 });
      b.sphere(s * 0.6, { y: -s * 0.4, seg: 7, rings: 3, sy: 0.6 });
      b.save().move(0, s * 0.18, 0);
      obelisk(b, s * 0.09, s * rng.range(1.2, 2.0), rng.pick(LIME));
      b.restore();
    } else {
      // Ruins: a couple of column stumps and a fallen lintel.
      const stone = rng.pick(LIME);
      for (const [x, z] of [[-0.4, -0.3], [0.4, -0.3], [-0.4, 0.35]]) {
        b.save().move(x * s, 0, z * s);
        column(b, s * 0.08, s * rng.range(0.6, 1.4), stone, { broken: rng.chance(0.6) });
        b.restore();
      }
      b.paint(stone, { rough: 0.92 });
      b.save().move(s * 0.2, 0, s * 0.35).rotY(rng.range(-0.5, 0.5)).box(s * 0.9, s * 0.14, s * 0.18).restore();
    }
  },
  roadside(b, { rng, elev }) {
    if (rng.chance(0.3)) {
      b.paint(0x24584c, { rough: 0.95 });
      b.cyl(0.018, 0.002, 0.14 + elev, 5, { smooth: false, caps: false });
      return;
    }
    // Waystone with a glowing glyph, tall enough to be seen over the causeway.
    const t = 0.07 + elev;
    b.paint(rng.pick(LIME), { rough: 0.9 });
    b.box(0.022, t, 0.012, { top: 0.8 });
    b.paint(RUNE, { rough: 0.4, glow: -6 });
    b.box(0.008, 0.022, 0.014, { y: t * 0.62 });
  },
  vehicles: [
    {
      weight: 2,
      speed: 0.24,
      y: 0.012,
      build(b) {
        // Cargo sledge carrying a cut block, drifting a hand's breadth above the stone.
        b.paint(0x6a5c48, { rough: 0.8 });
        b.save().move(0.02, 0, 0).box(0.006, 0.006, 0.12, { top: 1, topZ: 1.08 }).restore();
        b.save().move(-0.02, 0, 0).box(0.006, 0.006, 0.12, { top: 1, topZ: 1.08 }).restore();
        b.paint(0xa89c84, { rough: 0.85 });
        b.box(0.05, 0.008, 0.11, { y: 0.006 });
        b.paint(0xd2c9b4, { rough: 0.9 });
        b.box(0.04, 0.032, 0.07, { y: 0.014 });
        b.paint(RUNE, { rough: 0.4, glow: 1.6 });
        b.box(0.04, 0.002, 0.1, { y: -0.004 });
      },
    },
    {
      weight: 1,
      speed: 0.3,
      y: 0.012,
      build(b) {
        // Passenger sledge with a canopy on four posts.
        b.paint(0x6a5c48, { rough: 0.8 });
        b.save().move(0.02, 0, 0).box(0.006, 0.006, 0.1).restore();
        b.save().move(-0.02, 0, 0).box(0.006, 0.006, 0.1).restore();
        b.paint(0xc8bfaa, { rough: 0.85 });
        b.box(0.05, 0.01, 0.09, { y: 0.006 });
        for (const [x, z] of [[1, 1], [-1, 1], [1, -1], [-1, -1]]) {
          b.save().move(x * 0.021, 0.016, z * 0.038).box(0.004, 0.03, 0.004).restore();
        }
        b.paint(0x3e7f6c, { rough: 0.9 });
        b.box(0.054, 0.006, 0.094, { y: 0.046 });
        b.paint(RUNE, { rough: 0.4, glow: 1.6 });
        b.box(0.04, 0.002, 0.08, { y: -0.004 });
      },
    },
  ],
  flyer: {
    speed: 0.34,
    shadow: true,
    build(b) {
      // Rune barge: an octagonal stone raft with a small pavilion, held aloft by its rune ring.
      b.paint(0xc8bfaa, { rough: 0.85 });
      b.ngon(8, 0.07, 0.014, { rot: Math.PI / 8 });
      b.paint(0xa89c84, { rough: 0.9 });
      b.cyl(0.006, 0.066, 0.05, 8, { y: -0.05, smooth: false, caps: false });
      b.paint(0xd2c9b4, { rough: 0.85 });
      for (const [x, z] of [[1, 1], [-1, 1], [1, -1], [-1, -1]]) {
        b.save().move(x * 0.026, 0.014, z * 0.026).cyl(0.004, 0.004, 0.034, 6, { caps: false }).restore();
      }
      b.box(0.068, 0.008, 0.068, { y: 0.048 });
      b.paint(RUNE, { rough: 0.35, glow: 2.4 });
      b.ring(0.078, 0.003, { y: 0.002, seg: 16, tseg: 3 });
      b.save().move(0, -0.054, 0).sphere(0.008, { seg: 6, rings: 3 }).restore();
    },
  },
  walker: {
    speed: 0.05,
    lift: 0.004,
    bob: 0.002,
    bobRate: 6,
    colors: [0xe8e0cc, 0xc89a6c, 0x6aa894, 0xb4685a, 0x8a8aa0, 0xd8c08a],
    build(b) {
      // Robed figure with a hood and a staff whose tip glows at night.
      b.paint(0xffffff, { rough: 0.9 });
      b.cyl(0.0085, 0.004, 0.02, 6, { caps: false, smooth: false });
      b.save().move(0, 0.02, 0).sphere(0.0048, { seg: 6, rings: 3 }).restore();
      b.paint(0x5a4c3c, { rough: 0.8 });
      b.save().move(0.008, 0, 0.002).cyl(0.0008, 0.0008, 0.028, 3, { caps: false, smooth: false }).restore();
      b.paint(0xc8fff6, { glow: -6 });
      b.save().move(0.008, 0.029, 0.002).sphere(0.0022, { seg: 4, rings: 2 }).restore();
    },
  },
  ship(b) {
    // A stone ark between the worlds, bound by two rune rings.
    b.paint(0xc8bfaa, { rough: 0.85 });
    b.save().rotX(Math.PI / 2);
    b.ngon(8, 0.3, 2.0, { y: -1.1, top: 0.75, rot: Math.PI / 8 });
    b.ngon(8, 0.225, 0.5, { y: 0.9, top: 0.001, rot: Math.PI / 8 });
    b.restore();
    b.paint(RUNE, { glow: 4 });
    for (const z of [-0.5, 0.35]) {
      b.save().move(0, 0, z).rotX(Math.PI / 2).ring(0.4, 0.025, { seg: 16, tseg: 3 }).restore();
    }
    b.save().move(0, 0, -1.1).sphere(0.16, { y: -0.16, seg: 7, rings: 4 }).restore();
  },
};
