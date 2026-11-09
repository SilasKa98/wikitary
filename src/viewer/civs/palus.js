// PALUS — the Alchemists. A drowned olive world of reeds, mist and mangrove roots. On stilts above
// the bog they tend bulbous copper stills, and the runoff of their brews glows in every pool.
import { WIN, mix3 } from '../engine/builder.js';

const WOOD = [0x6a5a44, 0x5c5040, 0x76644a, 0x544a3a];
const THATCH = [0x8a8048, 0x7a7040, 0x968a52, 0x6e6a3c];
const COPPER = 0xb0603a, DARKCU = 0x7a4026, PATINA = 0x5f8f72, IRON = 0x2e2c28;
const ACID = 0xb4ff3c, VIOLET = 0xb070ff, LAMP = 0xc8ff70;
const LEAF = [0x3c4c22, 0x4a5a28, 0x34441e];
const PAD = [0x4f7a2e, 0x5c8a34, 0x46702a, 0x6a8a3a];

/** Splayed wooden legs under a deck: `pts` are [x, z] foot positions. */
function stilts(b, pts, top, r, color) {
  b.paint(color, { rough: 0.95 });
  for (const [x, z] of pts) {
    b.save().move(x * 1.12, -0.02, z * 1.12);
    b.rotZ(Math.sign(x) * 0.08).rotX(-Math.sign(z) * 0.08);
    b.cyl(r, r * 0.8, top + 0.02, 4, { caps: false, smooth: false });
    b.restore();
  }
}

/** A tapered pipe wound around a vertical axis: the condenser coil of a still. */
function coil(b, rc, y0, y1, turns, r) {
  const pts = [];
  const n = Math.round(turns * 7);
  for (let i = 0; i <= n; i++) {
    const a = (i / 7) * Math.PI * 2;
    pts.push([Math.cos(a) * rc, y0 + (y1 - y0) * (i / n), Math.sin(a) * rc]);
  }
  b.tube(pts, r, { seg: 4 });
}

/** Pot still: copper belly, swan neck and a glowing glass globe. */
function still(b, { r, h, rng, glass = ACID, neck = true }) {
  b.paint(rng.chance(0.3) ? PATINA : COPPER, { rough: 0.38, metal: 0.85 });
  b.lathe([[r * 0.55, 0], [r * 0.95, r * 0.35], [r, r * 0.75], [r * 0.82, r * 1.2], [r * 0.4, r * 1.45], [r * 0.18, r * 1.6]], 10);
  b.paint(DARKCU, { rough: 0.45, metal: 0.8 });
  b.cyl(r * 0.16, r * 0.11, h - r * 1.6, 6, { y: r * 1.6, caps: false });
  b.paint(glass, { rough: 0.12, glow: 2.2 });
  const gr = r * 0.42;
  b.save().move(0, h, 0).sphere(gr, { y: -gr * 0.3, seg: 8, rings: 5 }).restore();
  if (neck) {
    // Lyne arm curving down into a small receiver flask.
    b.paint(DARKCU, { rough: 0.45, metal: 0.8 });
    const hy = h - gr * 0.2;
    b.tube([[0, hy, 0], [r * 0.7, hy + r * 0.12, 0], [r * 1.25, hy - r * 0.3, 0], [r * 1.45, r * 0.55, 0]], r * 0.07, { seg: 4 });
    b.paint(glass, { rough: 0.12, glow: 1.6 });
    b.save().move(r * 1.45, 0, 0).sphere(r * 0.3, { seg: 7, rings: 4 }).restore();
  }
}

/** A stilt hut: deck on legs, plank walls with glowing slits, reed-thatch roof and a chimney. */
function stiltHut(b, { s, h, rng, deck = true }) {
  const w = s * rng.range(0.85, 1.1), d = s * rng.range(0.75, 1.0);
  const L = s * rng.range(0.45, 0.8);
  const wood = rng.pick(WOOD);
  stilts(b, [[w * 0.5, d * 0.5], [-w * 0.5, d * 0.5], [w * 0.5, -d * 0.5], [-w * 0.5, -d * 0.5]], L, 0.008, mix3(wood, 0x000000, 0.2));
  if (deck) {
    b.paint(0x6a5a42, { rough: 0.9 });
    b.box(w * 1.35, 0.012, d * 1.35, { y: L });
  }
  b.paint(wood, { rough: 0.92, win: WIN.SPOTS, cw: 0.045, ch: 0.05 });
  b.box(w, h, d, { y: L + 0.012, top: 0.94 });
  const top = L + 0.012 + h * 0.97;
  if (rng.chance(0.28)) {
    // Onion roof hammered from an old copper vat, with a glass finial.
    const r = Math.min(w, d) * 0.62;
    b.paint(rng.chance(0.5) ? PATINA : COPPER, { rough: 0.4, metal: 0.8 });
    b.lathe([[r * 1.05, top], [r * 1.12, top + r * 0.4], [r * 0.7, top + r * 0.95], [r * 0.15, top + r * 1.35], [0, top + r * 1.45]], 8);
    b.paint(rng.chance(0.7) ? ACID : VIOLET, { rough: 0.1, glow: 1.8 });
    b.save().move(0, top + r * 1.45, 0).sphere(0.008, { seg: 5, rings: 3 }).restore();
    return L;
  }
  b.paint(rng.pick(THATCH), { rough: 0.98 });
  b.save().rotY(Math.PI / 2).gable(d * 1.05, s * 0.5, w * 1.05, { y: top, over: s * 0.12 }).restore();
  // Stovepipe with a copper cowl.
  b.paint(IRON, { rough: 0.6, metal: 0.6 });
  b.save().move(w * 0.28, L + h, d * 0.12).cyl(0.009, 0.008, s * 0.75, 5, { caps: false }).restore();
  b.paint(COPPER, { rough: 0.4, metal: 0.85 });
  b.save().move(w * 0.28, L + h + s * 0.75, d * 0.12).cone(0.016, 0.014, 5).restore();
  return L;
}

/** The Great Athanor: a giant still on a hexagonal pile platform, crowned by a glowing globe. */
function athanor(b, { h, w, rng, spin, capital }) {
  const R = w * 1.25;
  const deckY = h * 0.14;
  const glass = capital ? VIOLET : ACID;
  // Pile platform.
  const legs = [];
  for (let i = 0; i < 6; i++) {
    const a = (i / 6) * Math.PI * 2 + Math.PI / 6;
    legs.push([Math.cos(a) * R * 1.5, Math.sin(a) * R * 1.5]);
  }
  legs.push([0, 0]);
  stilts(b, legs, deckY, 0.022, 0x332c22);
  b.paint(0x5a4c38, { rough: 0.9 });
  b.ngon(6, R * 1.85, 0.035, { y: deckY });
  b.paint(0x3a3228, { rough: 0.9 });
  b.ngon(6, R * 1.9, 0.014, { y: deckY - 0.014 });
  // The great copper belly, banded with verdigris.
  const y0 = deckY + 0.035;
  const bh = h * 0.42;
  b.paint(COPPER, { rough: 0.34, metal: 0.9, win: WIN.SPOTS, cw: 0.09, ch: 0.12 });
  b.lathe([[R * 0.7, y0], [R * 1.1, y0 + bh * 0.22], [R * 1.18, y0 + bh * 0.5], [R * 1.0, y0 + bh * 0.8], [R * 0.55, y0 + bh * 0.98], [R * 0.3, y0 + bh * 1.06]], 14);
  b.paint(PATINA, { rough: 0.5, metal: 0.5 });
  b.ring(R * 1.12, 0.012, { y: y0 + bh * 0.3, seg: 18, tseg: 3 });
  b.ring(R * 1.13, 0.012, { y: y0 + bh * 0.62, seg: 18, tseg: 3 });
  // Tapering neck up to the globe.
  const neckTop = h * 0.8;
  b.paint(DARKCU, { rough: 0.4, metal: 0.85 });
  b.lathe([[R * 0.3, y0 + bh * 1.06], [R * 0.2, y0 + bh * 1.2], [R * 0.14, neckTop]], 10);
  // The globe: a hot chartreuse (or violet, at the capital) brew, held by a copper collar.
  const gr = R * 0.48;
  const gy = neckTop + gr * 0.8;
  b.paint(capital ? 0x7a3cff : 0x9ae030, { rough: 0.1, glow: capital ? 0.85 : 1.4 });
  b.save().move(0, gy, 0).sphere(gr, { y: -gr, seg: 12, rings: 7 }).restore();
  b.paint(COPPER, { rough: 0.3, metal: 0.9 });
  b.ring(gr * 0.55, 0.01, { y: gy - gr * 0.84, seg: 12, tseg: 3 });
  b.save().move(0, gy + gr * 0.94, 0).cyl(0.012, 0.004, h * 0.1, 5).restore();
  // Lyne arm from the neck down into a coiled condenser beside the belly.
  const cx = R * 2.0;
  b.paint(DARKCU, { rough: 0.4, metal: 0.85 });
  b.tube([[0, neckTop - 0.02, 0], [cx * 0.45, neckTop + 0.02, 0], [cx * 0.85, neckTop - bh * 0.25, 0], [cx, y0 + bh * 0.95, 0]], 0.014, { seg: 5 });
  b.save().move(cx, 0, 0);
  b.paint(0x4a3c2c, { rough: 0.9 });
  b.cyl(R * 0.34, R * 0.38, bh * 0.55, 10, { y: y0 });
  b.paint(COPPER, { rough: 0.32, metal: 0.9 });
  coil(b, R * 0.42, y0 + bh * 0.05, y0 + bh * 0.95, 4, 0.009);
  b.restore();
  // Smaller retorts around the deck, green and violet.
  const n = capital ? 4 : 3;
  for (let i = 0; i < n; i++) {
    const a = Math.PI * 0.55 + (i / n) * Math.PI * 1.25 + rng.range(-0.12, 0.12);
    const k = rng.range(0.3, 0.42);
    b.save().move(Math.cos(a) * R * 1.45, y0, Math.sin(a) * R * 1.45).rotY(-a + Math.PI);
    still(b, { r: R * k * 0.62, h: h * k * 0.62, rng, glass: i % 2 ? VIOLET : ACID, neck: i % 2 === 0 });
    b.restore();
  }
  // A brick-and-iron chimney for the furnace beneath.
  const ch = h * 0.42;
  b.paint(0x5a3a2c, { rough: 0.9 });
  b.save().move(-R * 0.9, y0, -R * 1.1).ngon(4, 0.055, ch, { top: 0.75 }).restore();
  b.paint(COPPER, { rough: 0.35, metal: 0.85 });
  b.save().move(-R * 0.9, y0 + ch, -R * 1.1).cyl(0.05, 0.032, 0.03, 6, { caps: false }).restore();
  b.paint(ACID, { glow: -3 });
  b.save().move(-R * 0.9, y0 + ch, -R * 1.1).disc(0.03, { y: 0.004, seg: 6 }).restore();
  // Two armillary rings turn slowly around the globe, like an alchemist's model of the heavens.
  for (let i = 0; i < 2; i++) {
    spin.save().move(0, gy - gr * 0.05, 0);
    spin.spinAbout(0, 0, 0, i ? 0.4 : -0.3, 1, i ? 0.2 : 0.35, (i ? 0.35 : -0.25) * (capital ? 1.4 : 1));
    spin.rotX(i ? 1.1 : 0.5).rotZ(i ? 0.4 : -0.7);
    spin.paint(i ? COPPER : 0xd8b060, { rough: 0.3, metal: 0.9 });
    spin.ring(gr * (1.3 + i * 0.22), 0.007, { seg: 22, tseg: 3 });
    spin.restore();
  }
}

/** Tall stilt house of a master brewer, with a still on its roof terrace. */
function brewHouse(b, { h, w, rng }) {
  const s = w * 1.05;
  const L = s * rng.range(0.5, 0.75);
  const wood = rng.pick(WOOD);
  const W = s * 1.15, D = s;
  stilts(b, [[W * 0.5, D * 0.5], [-W * 0.5, D * 0.5], [W * 0.5, -D * 0.5], [-W * 0.5, -D * 0.5]], L, 0.012, 0x302a20);
  b.paint(0x6a5a42, { rough: 0.9 });
  b.box(W * 1.35, 0.014, D * 1.35, { y: L });
  const body = Math.max(s * 0.8, h * 0.72 - L);
  b.paint(wood, { rough: 0.92, win: WIN.SPOTS, cw: 0.05, ch: 0.06 });
  b.box(W, body, D, { y: L + 0.014, top: 0.9 });
  const top = L + 0.014 + body;
  if (rng.chance(0.5)) {
    // Thatched gable with a stove pipe.
    b.paint(rng.pick(THATCH), { rough: 0.98 });
    b.save().rotY(Math.PI / 2).gable(D * 0.95, s * 0.55, W * 0.95, { y: top, over: s * 0.12 }).restore();
    b.save().move(-W * 0.4, top, 0);
    still(b, { r: s * 0.26, h: s * 0.95, rng, glass: rng.chance(0.7) ? ACID : VIOLET, neck: false });
    b.restore();
  } else {
    // Flat terrace with a still and its receiver.
    b.paint(0x5a4c38, { rough: 0.9 });
    b.box(W * 0.98, 0.012, D * 0.98, { y: top });
    b.save().move(-W * 0.18, top + 0.012, 0);
    still(b, { r: s * 0.3, h: s * 0.85, rng, glass: rng.chance(0.7) ? ACID : VIOLET });
    b.restore();
  }
}

/** Mangrove: a crown on arching roots that stand in the shallows. */
function mangrove(b, rng, s) {
  const trunkY = s * 0.35;
  b.paint(rng.pick([0x3c3226, 0x463a2c]), { rough: 0.95 });
  const roots = 4;
  for (let i = 0; i < roots; i++) {
    const a = (i / roots) * Math.PI * 2 + rng.range(-0.3, 0.3);
    const c = Math.cos(a), sn = Math.sin(a), r = s * rng.range(0.3, 0.42);
    b.tube([[0, trunkY, 0], [c * r * 0.6, trunkY * 0.9, sn * r * 0.6], [c * r, -0.01, sn * r]], s * 0.03, { seg: 3, taper: 0.6 });
  }
  b.tube([[0, trunkY, 0], [s * 0.05, s * 0.6, 0], [0, s * 0.82, s * 0.04]], s * 0.04, { seg: 4, taper: 0.6 });
  b.paint(rng.pick(LEAF), { rough: 0.92 });
  b.save().move(0, s * 0.8, 0).sphere(s * 0.38, { seg: 7, rings: 3, sy: 0.42 }).restore();
  if (rng.chance(0.5)) {
    b.paint(mix3(rng.pick(LEAF), 0xb0b070, 0.18), { rough: 0.92 });
    b.save().move(s * 0.18, s * 0.72, -s * 0.1).sphere(s * 0.22, { seg: 6, rings: 3, sy: 0.5 }).restore();
  }
}

function reeds(b, rng, s, n = 6) {
  for (let i = 0; i < n; i++) {
    const a = rng.range(0, 6.28), r = rng.range(0, s * 0.35), h = s * rng.range(0.6, 1.2);
    const x = Math.cos(a) * r, z = Math.sin(a) * r;
    b.paint(rng.pick([0x7a8a3a, 0x6a7a32, 0x8c8a48]), { rough: 0.9 });
    b.save().move(x, 0, z).rotZ(rng.range(-0.15, 0.15)).rotX(rng.range(-0.15, 0.15));
    b.cyl(s * 0.018, 0.0008, h, 3, { caps: false, smooth: false });
    if (i % 2 === 0) {
      // Cattail head.
      b.paint(0x4a3020, { rough: 0.9 });
      b.cyl(s * 0.03, s * 0.03, h * 0.16, 4, { y: h * 0.62, caps: false, smooth: false });
    }
    b.restore();
  }
}

function lilyPads(b, rng, s, glowChance = 0.18) {
  const n = rng.int(2, 4);
  for (let i = 0; i < n; i++) {
    const a = rng.range(0, 6.28), d = i ? s * rng.range(0.5, 1.1) : 0;
    const r = s * rng.range(0.4, 0.75);
    b.paint(rng.pick(PAD), { rough: 0.55 });
    b.save().move(Math.cos(a) * d, 0.003 + i * 0.0015, Math.sin(a) * d).disc(r, { seg: 10 }).restore();
    if (rng.chance(glowChance)) {
      // A pale blossom that glows like a lamp.
      b.paint(rng.chance(0.6) ? 0xe8d0ff : 0xe8ffb0, { rough: 0.5, glow: 1.4 });
      b.save().move(Math.cos(a) * d, 0.005, Math.sin(a) * d).sphere(r * 0.22, { seg: 6, rings: 3, sy: 0.7 }).restore();
    }
  }
}

function punt(color) {
  return (b) => {
    // Flat-bottomed punt, poled by a hooded boatman, with a flask lantern at the bow.
    b.paint(color, { rough: 0.85 });
    b.box(0.04, 0.012, 0.14, { y: 0.002, top: 1.15, topZ: 1.06 });
    b.paint(0x2a2418, { rough: 0.9 });
    b.box(0.032, 0.002, 0.12, { y: 0.0142 });
    b.paint(0x4a4a34, { rough: 0.9 });
    b.save().move(0, 0.014, -0.045).cone(0.009, 0.026, 5).restore();
    b.save().move(0, 0.038, -0.045).sphere(0.005, { seg: 5, rings: 3 }).restore();
    b.paint(0x6a5a42, { rough: 0.9 });
    b.save().move(0.008, 0.01, -0.045).rotX(0.35).rotZ(-0.2).cyl(0.0012, 0.0012, 0.07, 3, { caps: false, smooth: false }).restore();
    // Cargo: a stoppered demijohn.
    b.paint(0x5c7a34, { rough: 0.2, glow: 0.3 });
    b.save().move(0, 0.014, 0.012).sphere(0.011, { seg: 6, rings: 4 }).restore();
    b.paint(LAMP, { glow: -7 });
    b.save().move(0, 0.03, 0.066).sphere(0.005, { seg: 5, rings: 3 }).restore();
  };
}

export default {
  id: 'palus',
  name: { en: 'Palus', de: 'Palus' },
  people: { en: 'The Alchemists', de: 'Die Alchemisten' },
  blurb: {
    en: 'A drowned olive world of reeds and mist. On stilts above the bog the alchemists tend bulbous copper stills, and the runoff of their brews glows in every pool.',
    de: 'Eine versunkene olivgrüne Welt aus Schilf und Nebel. Auf Stelzen über dem Moor hüten die Alchemisten bauchige Kupferdestillen, und was von ihren Gebräuen abfließt, leuchtet in jedem Tümpel.',
  },
  bridge: { en: 'plank walks & bubble skiffs', de: 'Bohlenstege & Blasenschiffe' },
  dayLength: 230,
  tilt: 0.14,
  palette: { accent: 0xb4ff3c, window: 0xcfff72, route: 0xb47cff, scaffold: 0x5a4a38 },
  env: { zenith: 0x4a5636, horizon: 0xc4c48c, ground: 0x222816 },
  terrain: {
    amp: 0.42,
    power: 1.5,
    height(noise, x, y, z) {
      const c = noise.fbm(x * 2.0 + 9, y * 2.0, z * 2.0, 5, 2.0, 0.5);
      const hummock = noise.simplex(x * 9, y * 9 + 3, z * 9) * 0.07;
      return c * 1.7 + hummock - 0.02;
    },
  },
  scatterDensity: 1.0,
  scatterMinH: -0.32,
  scatter(b, { rng, h, spin, x, y, z, noise }) {
    const patch = noise.simplex(x * 10 + 5, y * 10, z * 10);
    if (h < -0.22) {
      // Open water: only the odd raft of lily pads.
      if (rng.chance(0.35) && patch > 0) lilyPads(b, rng, rng.range(0.08, 0.16));
      return;
    }
    if (h < -0.03) {
      const roll = rng.next();
      if (roll < 0.45) lilyPads(b, rng, rng.range(0.08, 0.18), 0.25);
      else if (roll < 0.75) reeds(b, rng, rng.range(0.12, 0.2), 6);
      else if (patch > -0.2) mangrove(b, rng, rng.range(0.16, 0.3));
      return;
    }
    const roll = rng.next();
    if (roll < 0.36 && h < 0.3) {
      mangrove(b, rng, rng.range(0.18, 0.34));
    } else if (roll < 0.74) {
      reeds(b, rng, rng.range(0.12, 0.22), 7);
    } else if (roll < 0.94) {
      // A dead snag, bearded with hanging moss.
      const t = rng.range(0.14, 0.26);
      b.paint(0x4a4234, { rough: 0.95 });
      b.tube([[0, 0, 0], [t * 0.06, t * 0.5, 0], [-t * 0.04, t, t * 0.05]], t * 0.05, { seg: 4, taper: 0.3 });
      b.tube([[t * 0.04, t * 0.55, 0], [t * 0.25, t * 0.72, 0], [t * 0.38, t * 0.78, t * 0.05]], t * 0.025, { seg: 3, taper: 0.3 });
      b.paint(0x7a8456, { rough: 1 });
      b.save().move(t * 0.25, t * 0.72, 0).cone(t * 0.06, -t * 0.28, 4).restore();
    } else {
      // Will-o'-the-wisp: a marsh light circling slowly over the reeds.
      reeds(b, rng, 0.12, 4);
      spin.save().move(0, rng.range(0.1, 0.18), 0);
      spin.spinAbout(0, 0, 0, 0, 1, 0, rng.range(0.4, 0.9) * (rng.chance(0.5) ? 1 : -1));
      spin.paint(rng.chance(0.7) ? ACID : VIOLET, { glow: 6 });
      spin.save().move(rng.range(0.05, 0.1), 0, 0).sphere(0.01, { seg: 5, rings: 3 }).restore();
      spin.restore();
    }
  },
  surfaceGLSL: /* glsl */`
    void surface(vec3 p, float h, float mask, float dist, float day, inout vec3 albedo, inout float rough, inout float metal, inout vec3 emissive, inout vec3 bump) {
      float night = smoothstep(0.3, -0.15, day);
      float n = fbm5(p * 7.0);
      float fine = n3(p * 64.0);
      float hh = h + (n - 0.5) * 0.12;
      // Pools where the alchemists' runoff collects: mostly chartreuse, a few violet.
      float pool = smoothstep(0.62, 0.7, fbm3(p * 11.0 + 13.0));
      float violet = smoothstep(0.64, 0.7, n3(p * 4.0 + 21.0));
      vec3 brew = mix(vec3(0.5, 1.0, 0.1), vec3(0.62, 0.3, 1.0), violet);
      float swirl = 0.65 + 0.35 * sin(n3(p * 38.0) * 12.0 - uTime * 0.7);
      if (hh < 0.0 && mask < 0.6) {
        liquid(p, hh, vec3(0.018, 0.022, 0.008), vec3(0.08, 0.1, 0.03), 16.0, albedo, rough, metal, bump);
        // Duckweed and algae mats drift across the shallows.
        float shallow = smoothstep(-0.4, -0.02, hh);
        float weed = smoothstep(0.5, 0.64, fbm3(p * 14.0 + vec3(uTime * 0.002, 0.0, 0.0)) + n3(p * 70.0) * 0.12) * shallow;
        albedo = mix(albedo, mix(vec3(0.15, 0.2, 0.04), vec3(0.28, 0.33, 0.07), fine), weed);
        rough = mix(rough, 0.75, weed);
        float glowPool = pool * (1.0 - weed * 0.8);
        albedo = mix(albedo, brew * 0.22, glowPool * 0.6);
        emissive += brew * glowPool * swirl * (0.12 + night * 0.7);
        // Bubbles rising through the brew.
        emissive += brew * pow(n3(p * 160.0 + vec3(0.0, uTime * 0.25, 0.0)), 9.0) * glowPool * 2.5 * smoothstep(30.0, 4.0, dist);
      } else {
        vec3 moss = mix(vec3(0.12, 0.15, 0.05), vec3(0.23, 0.25, 0.08), n);
        vec3 peat = vec3(0.13, 0.1, 0.06);
        vec3 sedge = vec3(0.34, 0.32, 0.14);
        albedo = mix(moss, peat, smoothstep(0.46, 0.6, fbm3(p * 4.5 + 2.0)));
        albedo = mix(albedo, sedge, smoothstep(0.55, 0.7, fbm3(p * 8.0 + 4.0)) * 0.7);
        // Black wet mud along every shore.
        float shore = 1.0 - smoothstep(0.0, 0.05, hh);
        albedo = mix(albedo, vec3(0.07, 0.07, 0.04), shore);
        // Puddles of brew-tinted water across the bog.
        float pud = smoothstep(0.64, 0.69, n3(p * 24.0 + 3.0)) * (1.0 - mask);
        albedo = mix(albedo, vec3(0.05, 0.06, 0.02), pud);
        emissive += brew * pud * pool * swirl * (0.1 + night * 0.6);
        albedo *= 0.8 + fine * 0.4;
        rough = mix(0.9, 0.25, max(shore * 0.7, pud));
        bump += bumpOf(p, 44.0, 0.08) * smoothstep(80.0, 10.0, dist) * (1.0 - pud);
        bump += bumpOf(p, 260.0, 0.1) * smoothstep(14.0, 2.0, dist) * (1.0 - pud);
        // Fireflies over the reeds after dark.
        float tm = smoothstep(0.3, 0.9, mask);
        emissive += vec3(0.7, 1.0, 0.3) * pow(n3(p * 210.0), 22.0) * night * 2.0 * smoothstep(40.0, 6.0, dist) * (1.0 - tm);
        // Town ground: trampled peat and moss, with standing water between the stilts.
        vec3 town = mix(vec3(0.11, 0.1, 0.055), vec3(0.16, 0.18, 0.07), smoothstep(0.3, 0.7, n3(p * 90.0)));
        town *= 0.85 + n3(p * 420.0) * 0.3;
        float wet = smoothstep(0.56, 0.62, n3(p * 34.0 + 8.0) * 0.7 + n3(p * 120.0) * 0.3);
        town = mix(town, vec3(0.03, 0.04, 0.015), wet);
        albedo = mix(albedo, town, tm);
        rough = mix(rough, mix(0.88, 0.12, wet), tm);
        emissive += brew * wet * tm * smoothstep(0.75, 0.9, n3(p * 9.0 + 2.0)) * (0.02 + night * 0.06);
      }
    }`,
  atmosphere: {
    thickness: 1.2,
    rayleigh: [1.5, 2.1, 0.9],
    mie: [1.3, 1.25, 0.7],
    g: 0.72,
    scaleR: 0.07,
    intensity: 6.2,
    haze: 0xb4c070,
    night: [0.01, 0.016, 0.008],
    fog: { density: 0.038, day: 0x7e8a58, dusk: 0xa08a4a, night: 0x0a1008 },
  },
  clouds: { cover: 0.6, scale: 6.0, opacity: 0.6, altitude: 1.08, speed: 0.6, color: 0xd4dcac, shadow: 0x3c4428, dusk: 0xd8a868, glow: 0x0a1406 },
  transit: { road: { en: 'Plank walk', de: 'Bohlensteg' }, air: { en: 'Bubble skiff', de: 'Blasenschiff' } },
  map: { title: { en: "Alchemist's chart", de: 'Alchimistenkarte' }, paper: '#d2cc9c', edge: '#6b6a3a', ink: '#26301a', soft: '#5d6640', sea: ['#56653c', '#83905f'], land: ['#c2bd8c', '#8f9361'], contour: 'rgba(60,70,30,0.25)', grid: 'rgba(60,70,30,0.1)', road: '#6a3fa0', casing: '#d2cc9c', air: '#4f8a2a', traffic: '#1d2410', accent: '#7a48b8', lines: 'brew', glyph: 'flask', font: 'serif' },
  layout: 'organic',
  block: 0.44,
  lot: null,
  road: {
    width: 0.13,
    elev: 0.03,
    laneOffset: 0.2,
    meander: 0.7,
    lampEvery: 0.5,
    lampChance: 0.75,
    pillarEvery: 0.45,
    pillar(b, { elev, overWater }) {
      // Pairs of tarred piles; over open water they reach down into the murk.
      const foot = overWater ? -0.13 : -0.02;
      b.paint(0x2e2820, { rough: 0.95 });
      for (const x of [-0.072, 0.072]) {
        b.save().move(x, foot, 0).cyl(0.009, 0.008, elev - foot + 0.012, 4, { caps: true, smooth: false }).restore();
      }
      b.paint(0x3a3226, { rough: 0.95 });
      b.box(0.15, 0.01, 0.014, { y: elev - 0.004 });
    },
    glsl: /* glsl */`
      void roadSurface(float x, float s, float night, inout vec3 albedo, inout float rough, inout float metal, inout vec3 emissive) {
        // Weathered planks laid across the walk, with dark gaps and algae creeping in from the edges.
        float k = floor(s * 16.0);
        float vary = n3(vec3(k * 3.1, 0.0, 2.0));
        float gap = step(0.12, fract(s * 16.0));
        float ragged = n3(vec3(k * 7.0, 1.0, 0.0)) * 0.08;
        vec3 wood = mix(vec3(0.17, 0.14, 0.09), vec3(0.3, 0.25, 0.16), vary);
        albedo = mix(vec3(0.015, 0.018, 0.01), wood, gap * step(abs(x), 0.94 - ragged));
        albedo = mix(albedo, vec3(0.16, 0.2, 0.06), smoothstep(0.55, 0.9, abs(x)) * n3(vec3(s * 9.0, x * 4.0, 3.0)) * 0.8);
        rough = 0.85;
        // Flask lanterns along the rail glow green after dark.
        float post = smoothstep(0.06, 0.0, abs(fract(s * 0.9) - 0.5)) * smoothstep(0.8, 0.95, abs(x));
        emissive += vec3(0.6, 1.0, 0.25) * post * night * 2.4;
      }`,
  },
  plaza(b, { r }) {
    // A plank deck around a circular brew pool, rimmed in copper.
    b.paint(0x3e3426, { rough: 0.9 });
    b.disc(r, { seg: 40 });
    b.paint(COPPER, { rough: 0.35, metal: 0.85 });
    b.disc(r * 0.98, { y: 0.003, seg: 40, inner: r * 0.93 });
    b.disc(r * 0.46, { y: 0.003, seg: 32, inner: r * 0.4 });
    b.paint(ACID, { rough: 0.15, glow: 0.9 });
    b.disc(r * 0.4, { y: 0.002, seg: 32 });
  },
  landmark: athanor,
  section: brewHouse,
  filler(b, { s, rng, tier }) {
    const roll = rng.next();
    if (roll < 0.55) {
      const h = s * rng.range(0.6, 1.0) * (1 + tier * 1.1);
      const L = stiltHut(b, { s, h, rng });
      if (rng.chance(0.35)) {
        // A hanging flask lantern by the door.
        b.paint(rng.chance(0.75) ? LAMP : VIOLET, { glow: -6 });
        b.save().move(s * 0.62, L + h * 0.55, 0).sphere(0.009, { seg: 5, rings: 3 }).restore();
      }
    } else if (roll < 0.8) {
      // A small still on its own deck.
      const L = s * rng.range(0.3, 0.5);
      stilts(b, [[s * 0.5, s * 0.5], [-s * 0.5, s * 0.5], [s * 0.5, -s * 0.5], [-s * 0.5, -s * 0.5]], L, 0.008, 0x302a20);
      b.paint(0x5a4c38, { rough: 0.9 });
      b.box(s * 1.3, 0.012, s * 1.3, { y: L });
      b.save().move(-s * 0.2, L + 0.012, 0);
      still(b, { r: s * 0.38, h: s * (1.0 + tier * 0.9), rng, glass: rng.chance(0.72) ? ACID : VIOLET });
      b.restore();
    } else if (roll < 0.86) {
      // Fermenting vats: banded barrels with a glass bubbler.
      for (let i = 0; i < 2; i++) {
        const r = s * rng.range(0.3, 0.4), h = s * rng.range(0.6, 0.9);
        b.save().move((i - 0.5) * s * 0.85, 0, rng.range(-0.1, 0.1) * s);
        b.paint(rng.pick(WOOD), { rough: 0.9 });
        b.lathe([[r * 0.9, 0], [r, h * 0.5], [r * 0.9, h]], 8);
        b.paint(IRON, { rough: 0.55, metal: 0.7 });
        b.ring(r * 1.0, 0.004, { y: h * 0.5, seg: 8, tseg: 3 });
        b.paint(rng.chance(0.6) ? ACID : VIOLET, { rough: 0.1, glow: 1.6 });
        b.save().move(0, h, 0).sphere(r * 0.32, { seg: 6, rings: 4 }).restore();
        b.restore();
      }
    } else {
      // A pond in town: black water, giant pads, reeds and a mangrove on the bank.
      b.paint(0x0c1006, { rough: 0.08 });
      b.disc(s * 0.85, { y: 0.002, seg: 12 });
      lilyPads(b, rng, s * 0.4, 0.35);
      b.save().move(-s * 0.55, 0, s * 0.3);
      reeds(b, rng, s * 1.1, 5);
      b.restore();
      if (rng.chance(0.5)) {
        b.save().move(s * 0.6, 0, -s * 0.4);
        mangrove(b, rng, s * 1.3);
        b.restore();
      }
    }
  },
  roadside(b, { rng, elev }) {
    if (rng.chance(0.25)) return;
    // Crooked lamp post with a flask lantern hanging from a hook.
    b.paint(0x3a3226, { rough: 0.95 });
    b.cyl(0.0045, 0.0035, elev + 0.1, 4, { caps: false, smooth: false });
    b.box(0.003, 0.003, 0.026, { y: elev + 0.096 });
    b.paint(IRON, { rough: 0.6, metal: 0.6 });
    b.save().move(0, elev + 0.08, 0.022).cyl(0.0008, 0.0008, 0.016, 3, { caps: false, smooth: false }).restore();
    b.paint(rng.chance(0.8) ? LAMP : VIOLET, { glow: -9 });
    b.save().move(0, elev + 0.068, 0.022).sphere(0.009, { seg: 6, rings: 4 }).restore();
  },
  vehicles: [
    { weight: 1, speed: 0.2, y: 0.002, build: punt(0x5a4a34) },
    { weight: 1, speed: 0.2, y: 0.002, build: punt(0x4a4030) },
    {
      weight: 0.8,
      speed: 0.16,
      y: 0.002,
      build(b) {
        // Log raft carrying a portable still.
        b.paint(0x4a3e2e, { rough: 0.9 });
        for (let i = 0; i < 4; i++) {
          b.save().move((i - 1.5) * 0.013, 0.006, 0).rotX(Math.PI / 2).cyl(0.0065, 0.0065, 0.1, 5, { y: -0.05, caps: false, smooth: false }).restore();
        }
        b.paint(COPPER, { rough: 0.35, metal: 0.85 });
        b.save().move(0, 0.012, -0.01).sphere(0.016, { seg: 7, rings: 4 }).restore();
        b.paint(DARKCU, { rough: 0.4, metal: 0.8 });
        b.save().move(0, 0.04, -0.01).cyl(0.003, 0.003, 0.014, 4, { caps: false }).restore();
        b.paint(VIOLET, { rough: 0.1, glow: 2.2 });
        b.save().move(0, 0.054, -0.01).sphere(0.008, { seg: 6, rings: 3 }).restore();
        b.paint(LAMP, { glow: -6 });
        b.save().move(0, 0.02, 0.046).sphere(0.004, { seg: 5, rings: 3 }).restore();
      },
    },
  ],
  flyer: {
    speed: 0.42,
    shadow: false,
    build(b) {
      // Bubble skiff: a little hull hanging from a cluster of glowing brew-bubbles.
      b.paint(0xd8f0b0, { rough: 0.08, glow: 0.7 });
      b.sphere(0.06, { y: 0.02, seg: 10, rings: 6 });
      b.paint(0xd8c0ff, { rough: 0.08, glow: 0.8 });
      b.save().move(0.05, 0.03, 0.03).sphere(0.03, { seg: 8, rings: 5 }).restore();
      b.save().move(-0.045, 0.045, -0.02).sphere(0.024, { seg: 8, rings: 5 }).restore();
      b.paint(0x6a5a42, { rough: 0.9 });
      for (const [x, z] of [[0.02, 0.03], [-0.02, 0.03], [0.02, -0.03], [-0.02, -0.03]]) {
        b.tube([[x, -0.065, z], [x * 1.4, 0.03, z * 1.2]], 0.0012, { seg: 3 });
      }
      b.paint(0x4a3e2e, { rough: 0.85 });
      b.box(0.045, 0.014, 0.085, { y: -0.08, top: 1.2, topZ: 1.1 });
      b.paint(LAMP, { glow: 6 });
      b.save().move(0, -0.06, 0.04).sphere(0.006, { seg: 5, rings: 3 }).restore();
    },
  },
  walker: {
    speed: 0.05,
    lift: 0.004,
    bob: 0.003,
    bobRate: 7,
    colors: [0x6a7048, 0x5a4a6a, 0x7a6a4a, 0x4c5c44, 0x8a7a9a],
    build(b) {
      // Hooded alchemist carrying a lantern on a crook.
      b.paint(0xffffff, { rough: 0.9 });
      b.cone(0.008, 0.024, 6, { smooth: false });
      b.save().move(0, 0.019, -0.0012).sphere(0.0052, { seg: 6, rings: 3, sy: 1.25 }).restore();
      b.paint(0x8a7a5a, { rough: 0.9 });
      b.save().move(0.008, 0, 0.002).cyl(0.0007, 0.0007, 0.03, 3, { caps: false, smooth: false }).restore();
      b.paint(LAMP, { glow: 7 });
      b.save().move(0.008, 0.024, 0.006).sphere(0.0028, { seg: 5, rings: 3 }).restore();
    },
  },
  ship(b) {
    // A retort-shaped vessel: copper belly, long glass neck, a brew burning at the stern.
    b.paint(COPPER, { rough: 0.35, metal: 0.85 });
    b.save().rotX(Math.PI / 2);
    b.lathe([[0, -1.0], [0.36, -0.86], [0.55, -0.4], [0.5, 0.15], [0.22, 0.5], [0.13, 0.95], [0, 1.15]], 12);
    b.paint(PATINA, { rough: 0.5, metal: 0.5 });
    b.ring(0.53, 0.04, { y: -0.2, seg: 16, tseg: 3 });
    b.restore();
    b.paint(ACID, { glow: 4 });
    b.save().move(0, 0, -1.0).sphere(0.2, { y: -0.2, seg: 8, rings: 5 }).restore();
  },
};
