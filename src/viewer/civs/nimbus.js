// NIMBUS — the Skyfarers. A soft gas world with no ground at all, only a rolling sea of pastel
// cloud. Its towns float on decks hung beneath gasbags, moored by tethers, turned by wind.
import { WIN, mix3 } from '../engine/builder.js';

const ENVELOPE = [0xf6b49a, 0xf2a2b8, 0xc4aaf0, 0x9ccaf2, 0xf6da98, 0xa8e2cc];
const BAND = [0xffffff, 0xfff2e0, 0xe86a8a, 0x6a8ad8, 0xf09a5a];
const CANVAS = [0xf6efe4, 0xf2e6f0, 0xeef0f6, 0xfaeadc];
const ROOF = [0xe88a8a, 0x8aa6e0, 0xb48ad8, 0xf0b070, 0x7cc4b0];
const WOOD = 0xc89c74, KEEL = 0x9a84a0, ROPE = 0x6c5a66, STONE = 0x9a90a8;
const LANTERN = 0xffc070, FLAME = 0xff9a48;

/** A thin rope between two points. */
function line(b, a, c, r = 0.004) {
  b.tube([a, c], r, { seg: 3 });
}

/** Hot-air style envelope with a coloured belly band, resting on y; optional wicker basket. */
function balloon(b, { r, color, band, y = 0, seg = 8, basket = true }) {
  const P = [[r * 0.2, y], [r * 0.58, y + r * 0.38], [r * 0.93, y + r * 0.92], [r, y + r * 1.3], [r * 0.85, y + r * 1.7], [r * 0.46, y + r * 1.97], [0, y + r * 2.05]];
  // Envelopes glow faintly from their burners after dark.
  b.paint(color, { rough: 0.6, glow: -0.1 });
  b.lathe(P.slice(0, 3), seg, { smooth: false });
  b.paint(band, { rough: 0.6, glow: -0.1 });
  b.lathe(P.slice(2, 4), seg, { smooth: false });
  b.paint(color, { rough: 0.6, glow: -0.1 });
  b.lathe(P.slice(3), seg, { smooth: false });
  if (!basket) return;
  b.paint(0xa07850, { rough: 0.9 });
  b.box(r * 0.34, r * 0.24, r * 0.34, { y: y - r * 0.5 });
  b.paint(ROPE, { rough: 0.9 });
  b.cyl(r * 0.03, r * 0.03, r * 0.28, 3, { y: y - r * 0.27, caps: false, smooth: false });
  b.paint(FLAME, { glow: -6 });
  b.box(r * 0.1, r * 0.08, r * 0.1, { y: y - r * 0.1 });
}

/** A floating deck: planked disc over an inverted keel, lanterns hung on its rim. */
function deck(b, { r, y, seg = 14, lamps = 0, rng }) {
  b.paint(KEEL, { rough: 0.85 });
  b.lathe([[0, y - r * 0.62], [r * 0.4, y - r * 0.38], [r * 0.82, y - r * 0.12], [r, y]], seg);
  b.paint(WOOD, { rough: 0.8 });
  b.cyl(r, r * 1.02, r * 0.06 + 0.008, seg, { y });
  b.paint(mix3(WOOD, 0xffffff, 0.35), { rough: 0.8 });
  b.ring(r * 1.01, 0.006, { y: y + r * 0.06 + 0.008, seg, tseg: 3 });
  if (!lamps) return y + r * 0.06 + 0.008;
  b.paint(LANTERN, { glow: -7 });
  const off = rng ? rng.range(0, 1) : 0;
  for (let i = 0; i < lamps; i++) {
    const a = ((i + off) / lamps) * Math.PI * 2;
    b.save().move(Math.cos(a) * r * 1.02, y - 0.022, Math.sin(a) * r * 1.02).box(0.012, 0.016, 0.012).restore();
  }
  return y + r * 0.06 + 0.008;
}

/** Round cottage under a pastel cone, windows lit warm. */
function cottage(b, { r, h, y, rng }) {
  b.paint(rng.pick(CANVAS), { rough: 0.75, win: WIN.SPOTS, cw: 0.045, ch: 0.05 });
  b.cyl(r, r * 0.92, h, 8, { y });
  b.paint(rng.pick(ROOF), { rough: 0.7 });
  b.cone(r * 1.25, r * 1.1, 8, { y: y + h });
}

/** Three-bladed wind rotor on the spin builder, facing +Z. */
function rotor(spin, { x = 0, y, z = 0, len, rate, color = 0xfaf6f0 }) {
  spin.save().move(x, y, z);
  spin.spinAbout(0, 0, 0, 0, 0, 1, rate);
  spin.paint(color, { rough: 0.5 });
  for (let i = 0; i < 3; i++) spin.save().rotZ((i / 3) * Math.PI * 2).box(len * 0.12, len, len * 0.03).restore();
  spin.paint(0xe86a8a, { rough: 0.4 });
  spin.cyl(len * 0.1, len * 0.04, len * 0.12, 6, { y: -len * 0.06 });
  spin.restore();
}

/** Two-sided triangular pennant on a pole, fluttering out along +X. */
function pennant(b, { x = 0, y, z = 0, len, color }) {
  b.paint(color, { rough: 0.7 });
  const A = [x, y, z], B = [x + len, y - len * 0.14, z], C = [x, y - len * 0.32, z];
  b.tri(A, C, B).tri(A, B, C);
}

function aerie(b, { h, w, rng, spin, capital }) {
  const R = w * (capital ? 1.6 : 1.4);
  const deckY = h * 0.26;
  const env = rng.pick(ENVELOPE);
  // Anchor stone on the cloud, and the mooring line up to the keel.
  b.paint(STONE, { rough: 0.9 });
  b.cyl(w * 0.3, w * 0.2, 0.05, 8);
  b.paint(ROPE, { rough: 0.9 });
  line(b, [0, 0.05, 0], [0, deckY - R * 0.6, 0], 0.01);
  for (let i = 0; i < 3; i++) {
    const a = (i / 3) * Math.PI * 2 + 0.5;
    line(b, [Math.cos(a) * R * 1.3, 0, Math.sin(a) * R * 1.3], [Math.cos(a) * R * 0.5, deckY - R * 0.36, Math.sin(a) * R * 0.5], 0.005);
    b.paint(STONE, { rough: 0.9 });
    b.save().move(Math.cos(a) * R * 1.3, 0, Math.sin(a) * R * 1.3).cyl(0.03, 0.02, 0.03, 5).restore();
    b.paint(ROPE, { rough: 0.9 });
  }
  // The main deck, then a hall of stacked drums and a second terrace.
  const top = deck(b, { r: R, y: deckY, seg: 18, lamps: capital ? 14 : 10, rng });
  const canvas = rng.pick(CANVAS);
  b.paint(canvas, { rough: 0.72, win: WIN.SPOTS, cw: 0.06, ch: 0.075 });
  b.cyl(w * 0.62, w * 0.54, h * 0.18, 12, { y: top });
  const t2 = deck(b, { r: w * 1.0, y: top + h * 0.18, seg: 14, lamps: 6, rng });
  b.paint(mix3(canvas, 0xffd8c8, 0.25), { rough: 0.72, win: WIN.SPOTS, cw: 0.05, ch: 0.065 });
  b.cyl(w * 0.42, w * 0.36, h * 0.11, 10, { y: t2 });
  b.paint(rng.pick(ROOF), { rough: 0.65 });
  b.save().move(0, t2 + h * 0.11, 0).dome(w * 0.46, { seg: 10, rings: 4, sy: 0.9 }).restore();
  // Cottages around the rim of the main deck.
  const huts = capital ? 6 : 4;
  for (let i = 0; i < huts; i++) {
    const a = (i / huts) * Math.PI * 2 + 0.4;
    b.save().move(Math.cos(a) * R * 0.74, 0, Math.sin(a) * R * 0.74);
    cottage(b, { r: w * 0.17, h: w * rng.range(0.22, 0.34), y: top, rng });
    b.restore();
  }
  // The great gasbag that carries it all, rigged down to the deck rim.
  const gy = t2 + h * 0.11 + w * 0.6;
  const gr = w * (capital ? 1.22 : 1.08);
  // Faceted gores, like a sewn envelope, with a coloured belt round the waist.
  const G = [];
  for (let i = 0; i <= 8; i++) {
    const a = -Math.PI / 2 + (i / 8) * Math.PI;
    G.push([Math.cos(a) * gr, gy + gr * 0.76 * (1 + Math.sin(a))]);
  }
  b.paint(env, { rough: 0.55, glow: -0.1 });
  b.lathe(G, 14, { smooth: false });
  b.paint(rng.pick(BAND), { rough: 0.55, glow: -0.1 });
  b.ring(gr * 1.0, gr * 0.05, { y: gy + gr * 0.76, seg: 14, tseg: 3 });
  b.paint(ROPE, { rough: 0.9 });
  for (let i = 0; i < 6; i++) {
    const a = (i / 6) * Math.PI * 2;
    line(b, [Math.cos(a) * R * 0.92, top, Math.sin(a) * R * 0.92], [Math.cos(a) * gr * 0.8, gy + gr * 0.46, Math.sin(a) * gr * 0.8], 0.0045);
  }
  // A mast with pennants on the crown.
  b.cyl(0.008, 0.005, h * 0.12, 4, { y: gy + gr * 1.5, caps: false, smooth: false });
  pennant(b, { y: gy + gr * 1.5 + h * 0.115, len: h * 0.07, color: 0xe86a8a });
  // Satellite balloons, each tethered to the rim.
  const sats = capital ? 5 : 3;
  for (let i = 0; i < sats; i++) {
    const a = (i / sats) * Math.PI * 2 + rng.range(-0.3, 0.3);
    const d = R * rng.range(1.25, 1.55), y = deckY + h * rng.range(0.18, 0.5), r = w * rng.range(0.24, 0.34);
    b.paint(ROPE, { rough: 0.9 });
    line(b, [Math.cos(a) * R * 0.98, top, Math.sin(a) * R * 0.98], [Math.cos(a) * d, y - r * 0.4, Math.sin(a) * d], 0.003);
    b.save().move(Math.cos(a) * d, 0, Math.sin(a) * d);
    balloon(b, { r, y, color: rng.pick(ENVELOPE), band: rng.pick(BAND), seg: 8 });
    b.restore();
  }
  // Wind turbines on the rim keep the lanterns burning.
  for (let i = 0; i < 2; i++) {
    const a = i * Math.PI + 1.2;
    const x = Math.cos(a) * R * 0.95, z = Math.sin(a) * R * 0.95, mh = h * 0.2;
    b.paint(0xf4f0ea, { rough: 0.6 });
    b.save().move(x, 0, z).cyl(0.012, 0.008, mh, 5, { y: top, caps: false }).restore();
    rotor(spin, { x, y: top + mh, z: z + 0.012, len: h * 0.08, rate: capital ? 1.4 : 1.1 });
  }
}

function skiff(b, { h, w, rng, spin }) {
  // A small floating deck held up by a single balloon.
  const y = h * 0.34;
  b.paint(ROPE, { rough: 0.9 });
  line(b, [0, 0, 0], [0, y - w * 0.5, 0], 0.006);
  b.paint(STONE, { rough: 0.9 });
  b.cyl(w * 0.22, w * 0.16, 0.03, 6);
  const top = deck(b, { r: w * 0.86, y, seg: 12, lamps: 4, rng });
  b.paint(rng.pick(CANVAS), { rough: 0.75, win: WIN.SPOTS, cw: 0.045, ch: 0.05 });
  b.cyl(w * 0.5, w * 0.44, h * 0.3, 10, { y: top });
  b.paint(rng.pick(ROOF), { rough: 0.7 });
  b.cone(w * 0.62, w * 0.36, 10, { y: top + h * 0.3 });
  const by = top + h * 0.3 + w * 0.5, r = w * 0.52;
  b.paint(ROPE, { rough: 0.9 });
  line(b, [w * 0.7, top, 0], [r * 0.25, by, 0], 0.003);
  line(b, [-w * 0.7, top, 0], [-r * 0.25, by, 0], 0.003);
  balloon(b, { r, y: by, color: rng.pick(ENVELOPE), band: rng.pick(BAND), seg: 9, basket: false });
  if (rng.chance(0.4)) {
    b.paint(0xf4f0ea, { rough: 0.6 });
    b.save().move(w * 0.7, 0, 0).cyl(0.006, 0.004, h * 0.22, 4, { y: top, caps: false, smooth: false }).restore();
    rotor(spin, { x: w * 0.7, y: top + h * 0.22, z: 0.008, len: w * 0.24, rate: rng.range(0.9, 1.6) });
  }
}

export default {
  id: 'nimbus',
  name: { en: 'Nimbus', de: 'Nimbus' },
  people: { en: 'The Skyfarers', de: 'Die Wolkenfahrer' },
  blurb: {
    en: 'A world without ground: only a rolling sea of pastel cloud. Towns float on decks beneath great gasbags, moored by tethers, turned by the wind.',
    de: 'Eine Welt ohne Boden, nur ein wogendes Meer aus Pastellwolken. Städte schweben auf Decks unter großen Gashüllen, vertäut an Seilen, vom Wind gedreht.',
  },
  bridge: { en: 'wind tethers & balloon ferries', de: 'Windseile & Ballonfähren' },
  dayLength: 230,
  tilt: 0.14,
  palette: { accent: 0xff9cb8, window: 0xffc47a, route: 0xa8d0ff, scaffold: 0xd8c4b4 },
  env: { zenith: 0x8eaae8, horizon: 0xffd6cc, ground: 0xc8b4e4 },
  terrain: {
    amp: 0.32,
    power: 1.0,
    height(noise, x, y, z) {
      // Billowing cloud dunes: abs-noise gives round tops with creases between them.
      const swell = noise.fbm(x * 1.5 + 4, y * 1.5, z * 1.5, 4, 2.0, 0.5);
      const billow = Math.abs(noise.simplex(x * 4.2, y * 4.2 + 9, z * 4.2));
      let h = swell * 1.0 + billow * 0.32 + 0.02;
      // Rare rock islets break through the cloud deck.
      const m = noise.simplex(x * 2.4 + 17, y * 2.4, z * 2.4 + 5);
      if (m > 0.62) {
        const k = Math.min(1, (m - 0.62) / 0.28);
        h = Math.max(h, 0) + k * k * (1.1 + noise.ridged(x * 7, y * 7, z * 7, 3) * 1.4);
      }
      return h;
    },
  },
  scatterDensity: 0.3,
  scatterMinH: -9,
  scatter(b, { rng, h, spin }) {
    const roll = rng.next();
    if (h > 1.1 || roll < 0.14) {
      // A floating islet: grass on top, a jagged rock keel below.
      const r = rng.range(0.08, 0.2), y = rng.range(0.18, 0.5);
      b.paint(rng.pick([0xa898b0, 0xb4a4b8, 0x9c8ca8]), { rough: 0.95 });
      b.lathe([[0, y - r * 1.6], [r * 0.45, y - r * 1.0], [r * 0.85, y - r * 0.35], [r, y]], 7, { smooth: false });
      b.paint(rng.pick([0x8ed0a0, 0xa8dca0, 0x9ad4b8]), { rough: 0.9 });
      b.dome(r, { y, seg: 7, rings: 2, sy: 0.3 });
      if (rng.chance(0.45)) {
        b.paint(rng.pick([0xf2a2b8, 0xf6c49a, 0xc4aaf0]), { rough: 0.85 });
        b.cone(r * 0.32, r * 0.9, 5, { y: y + r * 0.2 });
      }
    } else if (roll < 0.6) {
      // Cumulus puffs rising out of the sea.
      const s = rng.range(0.06, 0.15);
      const tint = rng.pick([0xffffff, 0xfff0ea, 0xf4eeff, 0xeef4ff]);
      b.paint(tint, { rough: 0.95 });
      b.sphere(s, { y: -s * 0.7, seg: 8, rings: 4, sy: 0.8 });
      b.save().move(s * 0.9, 0, s * 0.2).sphere(s * 0.7, { y: -s * 0.5, seg: 6, rings: 3, sy: 0.8 }).restore();
      if (rng.chance(0.5)) b.save().move(-s * 0.7, 0, -s * 0.4).sphere(s * 0.6, { y: -s * 0.45, seg: 6, rings: 3, sy: 0.8 }).restore();
    } else if (roll < 0.84) {
      // A weather balloon on a long line.
      const y = rng.range(0.25, 0.5), r = rng.range(0.035, 0.06);
      b.paint(ROPE, { rough: 0.9 });
      b.cyl(0.002, 0.002, y, 3, { caps: false, smooth: false });
      balloon(b, { r, y, color: rng.pick(ENVELOPE), band: rng.pick(BAND), seg: 6, basket: false });
    } else {
      // A wind buoy: a pole on a float, its rotor turning.
      b.paint(0xf4f0ea, { rough: 0.6 });
      b.dome(0.035, { seg: 6, rings: 2, sy: 0.5 });
      b.cyl(0.006, 0.004, 0.18, 4, { caps: false, smooth: false });
      rotor(spin, { y: 0.18, z: 0.008, len: 0.06, rate: rng.range(1, 2) });
    }
  },
  surfaceGLSL: /* glsl */`
    void surface(vec3 p, float h, float mask, float dist, float day, inout vec3 albedo, inout float rough, inout float metal, inout vec3 emissive, inout vec3 bump) {
      float night = smoothstep(0.3, -0.15, day);
      // Slowly drifting, warped billows.
      vec3 q = p * 6.0 + vec3(uTime * 0.004, 0.0, -uTime * 0.003);
      float warp = n3(q * 0.55 + 3.0) - 0.5;
      float n = fbm5(q + warp * 1.7);
      float fine = n3(p * 70.0 + vec3(0.0, uTime * 0.01, 0.0));
      float hh = h + (n - 0.5) * 0.12;
      // Pastel streams of peach, lilac and pale sky.
      float hue = fbm3(p * 2.1 + warp * 0.9 + vec3(0.0, uTime * 0.0015, 0.0));
      vec3 peach = vec3(0.98, 0.62, 0.48), lilac = vec3(0.66, 0.52, 0.9), sky = vec3(0.5, 0.7, 0.96);
      vec3 col = mix(peach, lilac, smoothstep(0.44, 0.54, hue));
      col = mix(col, sky, smoothstep(0.57, 0.66, hue));
      col = mix(col, vec3(0.98, 0.56, 0.62), smoothstep(0.34, 0.26, hue) * 0.6);
      // Billow tops whiten in the sun; the folds between them keep a violet shade.
      float billow = smoothstep(0.32, 0.72, n);
      col = mix(col * vec3(0.66, 0.58, 0.82), mix(col, vec3(0.95, 0.93, 0.96), 0.4), billow);
      // Cauliflower puffs at town scale, so the deck below a city is never a flat sheet.
      float puff = fbm3(p * 30.0 + warp * 2.0 + vec3(uTime * 0.01, 0.0, 0.0));
      col = mix(col * vec3(0.7, 0.64, 0.86), col * 1.06, smoothstep(0.3, 0.66, puff));
      albedo = col * (0.9 + fine * 0.14);
      rough = 0.96;
      bump += bumpOf(q, 1.6, 0.09) * smoothstep(90.0, 10.0, dist);
      bump += bumpOf(p * 30.0 + warp * 2.0, 1.0, 0.1) * smoothstep(40.0, 4.0, dist);
      bump += bumpOf(p, 160.0, 0.05) * smoothstep(16.0, 2.0, dist);
      if (hh < 0.0 && mask < 0.6) {
        // The deep cloud-sea: flatter, cooler, with slow currents of mist.
        float d = clamp(-hh / 0.5, 0.0, 1.0);
        float stream = 1.0 - abs(n3(q * 1.3 + vec3(uTime * 0.02, 0.0, 0.0)) * 2.0 - 1.0);
        vec3 sea = mix(vec3(0.62, 0.52, 0.9), vec3(0.34, 0.34, 0.76), smoothstep(0.0, 0.7, d));
        albedo = mix(albedo, sea, smoothstep(0.0, 0.08, d) * 0.85);
        albedo += vec3(0.12, 0.1, 0.14) * smoothstep(0.82, 1.0, stream) * (1.0 - night);
        rough = 0.8;
      }
      // Rare rock islets.
      float rock = smoothstep(0.95, 1.2, hh);
      vec3 stone = mix(vec3(0.5, 0.44, 0.54), vec3(0.68, 0.6, 0.66), n3(p * 90.0));
      stone = mix(stone, vec3(0.5, 0.78, 0.6), smoothstep(0.5, 0.66, n3(p * 30.0)) * 0.75);
      albedo = mix(albedo, stone, rock);
      bump += bumpOf(p, 60.0, 0.14) * rock;
      // Calm, pale cloud beneath the towns; at night it holds their lantern glow.
      vec3 calm = mix(vec3(0.96, 0.84, 0.8), vec3(0.9, 0.84, 0.96), n3(p * 40.0));
      albedo = mix(albedo, calm * (0.9 + fine * 0.1), smoothstep(0.3, 0.9, mask) * 0.35);
      // After dusk the cloud deck turns a dark violet; towns pool warm lantern light on it.
      albedo *= mix(vec3(1.0), vec3(0.13, 0.1, 0.24), night);
      emissive += vec3(1.0, 0.55, 0.28) * smoothstep(0.3, 0.95, mask) * night * (0.08 + 0.05 * puff);
      emissive += vec3(0.035, 0.016, 0.075) * night * (0.4 + billow * 0.6) * (1.0 - rock);
    }`,
  atmosphere: {
    thickness: 1.22,
    rayleigh: [1.7, 1.75, 3.2],
    mie: [0.9, 0.75, 0.8],
    g: 0.72,
    intensity: 8.6,
    haze: 0xffc4d8,
    night: [0.012, 0.006, 0.026],
    fog: { density: 0.013, day: 0xf2d4e2, dusk: 0xff9e94, night: 0x160c2a },
  },
  clouds: { cover: 0.64, scale: 3.6, opacity: 0.55, color: 0xfff6f4, shadow: 0x9a88c4, dusk: 0xffa08e, speed: 1.6 },
  transit: { road: { en: 'Wind tether', de: 'Windseil' }, air: { en: 'Balloon ferry', de: 'Ballonfähre' } },
  map: { title: { en: 'Wind chart', de: 'Windkarte' }, paper: '#f4eef8', edge: '#b8a6d8', ink: '#3a2c58', soft: '#8a7aa8', sea: ['#d6cef0', '#e6e0f6'], land: ['#fbe8de', '#f0c6b6'], contour: 'rgba(120,90,170,0.18)', grid: 'rgba(120,90,170,0.08)', road: '#e0708c', casing: '#f4eef8', air: '#5a94d6', traffic: '#3a2c58', accent: '#e0708c', lines: 'tether', glyph: 'cloud', font: 'ui' },
  layout: 'organic',
  block: 0.52,
  lot: null,
  road: {
    width: 0.06,
    elev: 0.26,
    laneOffset: 0.0,
    meander: 0.5,
    lampEvery: 0.7,
    lampChance: 0.6,
    pillarEvery: 0.9,
    pillar(b, { elev }) {
      // Buoy balloons hold each span of tether up; a thin line moors them to the cloud.
      b.paint(ROPE, { rough: 0.9 });
      b.cyl(0.003, 0.003, elev + 0.05, 3, { caps: false, smooth: false });
      balloon(b, { r: 0.035, y: elev + 0.05, color: 0xfff2ea, band: 0xe86a8a, seg: 6, basket: false });
    },
    glsl: /* glsl */`
      void roadSurface(float x, float s, float night, inout vec3 albedo, inout float rough, inout float metal, inout vec3 emissive) {
        // A braided sailcloth tether with rose edge cords and lanterns strung along it.
        float braid = step(0.5, fract(s * 24.0 + x * 1.5));
        albedo = mix(vec3(0.62, 0.54, 0.56), vec3(0.8, 0.74, 0.72), braid);
        float cord = smoothstep(0.62, 0.72, abs(x));
        albedo = mix(albedo, vec3(0.78, 0.3, 0.42), cord);
        rough = 0.85;
        float lamp = smoothstep(0.1, 0.0, abs(fract(s * 1.4) - 0.5));
        emissive += vec3(1.0, 0.7, 0.4) * lamp * (0.2 + night * 2.2);
      }`,
  },
  plaza(b, { r }) {
    // A round mooring raft on the cloud.
    b.paint(0xc89a78, { rough: 0.85 });
    b.disc(r, { seg: 40 });
    b.paint(0xf6eee6, { rough: 0.8 });
    b.disc(r * 0.97, { y: 0.003, seg: 40, inner: r * 0.9 });
    b.paint(0xf2a2b8, { rough: 0.75 });
    b.disc(r * 0.55, { y: 0.003, seg: 32, inner: r * 0.5 });
  },
  landmark: aerie,
  section: skiff,
  filler(b, { s, rng, spin, tier }) {
    const roll = rng.next();
    if (roll < 0.5) {
      // Floating cottage on a little deck, lifted by its own balloon.
      const y = s * (0.6 + tier * 2.4) * rng.range(0.8, 1.2);
      b.paint(ROPE, { rough: 0.9 });
      b.cyl(0.003, 0.003, y - s * 0.3, 3, { caps: false, smooth: false });
      const top = deck(b, { r: s * 0.62, y, seg: 9, lamps: tier > 0.4 ? 3 : 0, rng });
      cottage(b, { r: s * 0.32, h: s * rng.range(0.32, 0.5), y: top, rng });
      const r = s * 0.42;
      balloon(b, { r, y: top + s * 0.9, color: rng.pick(ENVELOPE), band: rng.pick(BAND), seg: 7, basket: false });
      b.paint(ROPE, { rough: 0.9 });
      line(b, [s * 0.5, top, 0], [r * 0.2, top + s * 0.9, 0], 0.0025);
    } else if (roll < 0.68) {
      // Wind mill: a slim mast on a float, rotor turning.
      const mh = s * (1.6 + tier * 2.6);
      b.paint(rng.pick(CANVAS), { rough: 0.7 });
      b.dome(s * 0.42, { seg: 7, rings: 2, sy: 0.45 });
      b.cyl(s * 0.07, s * 0.04, mh, 5, { caps: false });
      pennant(b, { y: mh * 0.98, len: s * 0.4, color: rng.pick(ROOF) });
      rotor(spin, { y: mh * 0.9, z: s * 0.06, len: s * 0.7, rate: rng.range(0.8, 1.8) });
    } else if (roll < 0.86) {
      // A mooring post with a cluster of balloons.
      b.paint(STONE, { rough: 0.9 });
      b.cyl(s * 0.16, s * 0.12, s * 0.2, 5);
      const n = rng.int(2, 3);
      for (let i = 0; i < n; i++) {
        const a = rng.range(0, 6.28), d = s * rng.range(0.2, 0.5), y = s * rng.range(0.9, 1.8) * (1 + tier);
        const r = s * rng.range(0.24, 0.36);
        b.paint(ROPE, { rough: 0.9 });
        line(b, [0, s * 0.2, 0], [Math.cos(a) * d, y, Math.sin(a) * d], 0.0025);
        b.save().move(Math.cos(a) * d, 0, Math.sin(a) * d);
        balloon(b, { r, y, color: rng.pick(ENVELOPE), band: rng.pick(BAND), seg: 6, basket: false });
        b.restore();
      }
    } else {
      // Low raft-house riding right on the cloud.
      b.paint(WOOD, { rough: 0.85 });
      b.cyl(s * 0.7, s * 0.6, s * 0.12, 9);
      cottage(b, { r: s * 0.38, h: s * rng.range(0.4, 0.6) * (1 + tier), y: s * 0.12, rng });
    }
  },
  roadside(b, { rng, elev }) {
    // Pennant poles along the tethers, with a lantern after dark.
    if (rng.chance(0.35)) return;
    const h = elev + rng.range(0.05, 0.12);
    b.paint(0xf4f0ea, { rough: 0.6 });
    b.cyl(0.004, 0.003, h, 3, { caps: false, smooth: false });
    pennant(b, { y: h, len: 0.06, color: rng.pick(ROOF) });
    b.paint(LANTERN, { glow: -7 });
    b.box(0.01, 0.014, 0.01, { y: h * 0.62 });
  },
  vehicles: [
    {
      weight: 2,
      speed: 0.3,
      y: 0,
      build(b) {
        // Gondola cabin hanging from a pulley on the tether.
        b.paint(0x5c4c64, { rough: 0.4, metal: 0.6 });
        b.save().rotZ(Math.PI / 2).cyl(0.008, 0.008, 0.012, 6, { y: -0.006 }).restore();
        b.paint(ROPE, { rough: 0.9 });
        b.cyl(0.0016, 0.0016, 0.03, 3, { y: -0.03, caps: false, smooth: false });
        b.paint(0xf6efe4, { rough: 0.6, win: WIN.SPOTS, cw: 0.016, ch: 0.016 });
        b.box(0.032, 0.026, 0.056, { y: -0.058, top: 0.9 });
        b.paint(0xe88a8a, { rough: 0.6 });
        b.box(0.038, 0.006, 0.062, { y: -0.033 });
        b.paint(LANTERN, { glow: -8 });
        b.box(0.008, 0.008, 0.008, { y: -0.066 });
      },
    },
    {
      weight: 1,
      speed: 0.22,
      y: 0,
      build(b) {
        // Cargo basket under a little lifting balloon.
        b.paint(ROPE, { rough: 0.9 });
        b.cyl(0.0016, 0.0016, 0.032, 3, { y: -0.032, caps: false, smooth: false });
        b.paint(0xa07850, { rough: 0.9 });
        b.box(0.03, 0.018, 0.04, { y: -0.05 });
        b.paint(0xf0b070, { rough: 0.8 });
        b.box(0.02, 0.012, 0.016, { y: -0.032 });
        b.paint(0x9ccaf2, { rough: 0.6, glow: -0.3 });
        b.sphere(0.018, { y: 0.004, seg: 7, rings: 4, sy: 1.1 });
      },
    },
  ],
  flyer: {
    speed: 0.5,
    shadow: true,
    build(b) {
      // Balloon ferry: a long gondola hull under a row of three gasbags.
      for (let i = -1; i <= 1; i++) {
        b.save().move(0, 0.012, i * 0.06);
        balloon(b, { r: 0.034, color: i ? 0xf6b49a : 0xc4aaf0, band: 0xffffff, seg: 8, basket: false });
        b.restore();
      }
      b.paint(0xb88a68, { rough: 0.7 });
      b.box(0.05, 0.022, 0.19, { y: -0.05, top: 0.8, topZ: 0.92 });
      b.paint(0xf6efe4, { rough: 0.6, win: WIN.SPOTS, cw: 0.016, ch: 0.014 });
      b.box(0.034, 0.02, 0.12, { y: -0.028 });
      b.paint(ROPE, { rough: 0.9 });
      b.box(0.002, 0.04, 0.16, { y: -0.01 });
      b.paint(0xf4f0ea, { rough: 0.6 });
      b.prism([[0, -0.1], [0.002, -0.06], [0, -0.13], [-0.002, -0.06]], 0.05, { y: -0.04 });
      b.paint(LANTERN, { glow: 5 });
      b.save().move(0, -0.04, 0.096).box(0.01, 0.008, 0.004).restore();
    },
  },
  walker: {
    speed: 0.06,
    lift: 0.012,
    bob: 0.008,
    bobRate: 2.2,
    colors: [0xffd0c0, 0xd8c8ff, 0xc0e0ff, 0xfff0b8, 0xc8f0dc],
    build(b) {
      // A skyfarer drifting along under a personal balloon.
      b.paint(0xffffff, { rough: 0.8 });
      b.cone(0.007, 0.018, 5, { smooth: false });
      b.paint(0xf0d0b8, { rough: 0.7 });
      b.save().move(0, 0.018, 0).sphere(0.004, { seg: 5, rings: 3 }).restore();
      b.paint(ROPE, { rough: 0.9 });
      b.cyl(0.0006, 0.0006, 0.016, 3, { y: 0.024, caps: false, smooth: false });
      b.paint(0xffffff, { rough: 0.5, glow: -0.4 });
      b.sphere(0.008, { y: 0.038, seg: 6, rings: 4, sy: 1.15 });
    },
  },
  ship(b) {
    // Cloud clipper: a keeled hull beneath one vast envelope.
    b.paint(0xb88a68, { rough: 0.7 });
    b.save().rotX(Math.PI / 2);
    b.lathe([[0, -1.1], [0.22, -0.8], [0.3, 0], [0.2, 0.8], [0, 1.1]], 10);
    b.restore();
    b.paint(0xf6b49a, { rough: 0.55 });
    b.save().scale(1, 0.75, 1.5).sphere(0.7, { y: 0.35, seg: 14, rings: 8 }).restore();
    b.paint(0xffffff, { rough: 0.55 });
    b.save().scale(1, 0.75, 1.5).ring(0.71, 0.04, { y: 1.05, seg: 20, tseg: 3 }).restore();
    b.paint(LANTERN, { glow: 4.5 });
    b.save().move(0, 0, -1.1).sphere(0.12, { y: -0.12, seg: 7, rings: 4 }).restore();
  },
};
