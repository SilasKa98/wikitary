// MYZEL — the Network. A single fungal organism spanning a dim violet world. Its towers are
// fruiting bodies, its roads are living veins, and knowledge travels as glowing spores.
import { WIN, mix3 } from '../engine/builder.js';

const CAPS = [0xc44a9a, 0x9a4ad0, 0xe0568a, 0x5a68e0, 0xd45ab8];
const STEM = [0xd8c8d4, 0xc4b0c8, 0xe0d4d8];
const TEAL = 0x3cf0d0, PINK = 0xff5cc8, BLUE = 0x6ca8ff;

function mushroom(b, { h, w, rng, cap, stem, glow = TEAL, spots = true }) {
  const r = w;
  // Stem, slightly flared at the foot, with light pores.
  b.paint(stem, { rough: 0.72, win: WIN.PULSE, cw: 0.07, ch: 0.09 });
  b.lathe([[r * 0.52, 0], [r * 0.36, h * 0.08], [r * 0.28, h * 0.4], [r * 0.26, h * 0.72], [r * 0.3, h * 0.84]], 12);
  // Glowing gills beneath the cap.
  const capR = r * 1.45;
  b.paint(glow, { glow: 2.6, rough: 0.5 });
  b.lathe([[r * 0.3, h * 0.84], [capR * 0.7, h * 0.79], [capR * 0.98, h * 0.75]], 18);
  // The cap itself.
  b.paint(cap, { rough: 0.5 });
  b.lathe([[capR, h * 0.745], [capR * 1.02, h * 0.77], [capR * 0.92, h * 0.86], [capR * 0.62, h * 0.96], [capR * 0.26, h * 1.01], [0, h * 1.02]], 18);
  if (spots) {
    b.paint(mix3(cap, 0xffffff, 0.65), { rough: 0.5, glow: -0.8 });
    const n = 7;
    for (let i = 0; i < n; i++) {
      const a = rng.range(0, 6.28), t = rng.range(0.32, 0.82);
      const sx = Math.cos(a) * capR * t, sz = Math.sin(a) * capR * t;
      const sy = h * (1.015 - t * t * 0.22) - 0.004;
      b.save().move(sx, sy, sz).sphere(r * 0.075, { seg: 6, rings: 3, sy: 0.4 }).restore();
    }
  }
}

export default {
  id: 'myzel',
  name: { en: 'Myzel', de: 'Myzel' },
  people: { en: 'The Network', de: 'Das Geflecht' },
  blurb: {
    en: 'One fungal organism spanning a violet world. Towers are fruiting bodies, roads are living veins, and thoughts drift as glowing spores.',
    de: 'Ein einziger Pilzorganismus, der eine violette Welt umspannt. Türme sind Fruchtkörper, Straßen lebende Adern, Gedanken treiben als leuchtende Sporen.',
  },
  bridge: { en: 'living veins & spore drift', de: 'Lebende Adern & Sporenflug' },
  dayLength: 240,
  tilt: 0.2,
  palette: { accent: 0x4cf2d4, window: 0x54f0d8, route: 0xe46cff, scaffold: 0x7a5a8a },
  env: { zenith: 0x26113f, horizon: 0xb04a9a, ground: 0x130a1c },
  terrain: {
    amp: 0.9,
    power: 1.2,
    height(noise, x, y, z) {
      const c = noise.fbm(x * 1.9, y * 1.9 + 5, z * 1.9, 5, 2.0, 0.52);
      const w = noise.simplex(x * 6, y * 6, z * 6) * 0.1;
      return c * 2.2 + w + 0.1;
    },
  },
  scatterDensity: 0.45,
  scatterMinH: 0.01,
  scatter(b, { rng, x, y, z, noise }) {
    const patch = noise.simplex(x * 9, y * 9, z * 9);
    if (patch < -0.25) return;
    const roll = rng.next();
    if (roll < 0.62) {
      const s = rng.range(0.05, 0.16);
      mushroom(b, { h: s * 1.7, w: s * 0.65, rng, cap: rng.pick(CAPS), stem: rng.pick(STEM), glow: rng.pick([TEAL, PINK, BLUE]), spots: false });
    } else if (roll < 0.86) {
      // A tuft of glowing tendrils.
      const col = rng.pick([TEAL, PINK, BLUE]);
      for (let i = 0; i < 4; i++) {
        const a = rng.range(0, 6.28), lean = rng.range(0.02, 0.06), h = rng.range(0.07, 0.17);
        b.paint(0x1c1228, { rough: 0.7 });
        b.tube([[0, 0, 0], [Math.cos(a) * lean * 0.5, h * 0.6, Math.sin(a) * lean * 0.5], [Math.cos(a) * lean, h, Math.sin(a) * lean]], 0.005, { seg: 3, taper: 0.4 });
        b.paint(col, { glow: 5 });
        b.save().move(Math.cos(a) * lean, h, Math.sin(a) * lean).sphere(0.008, { seg: 5, rings: 3 }).restore();
      }
    } else {
      // Puffballs.
      b.paint(rng.pick(STEM), { rough: 0.8, win: WIN.PULSE, cw: 0.05, ch: 0.05 });
      b.sphere(rng.range(0.03, 0.07), { seg: 8, rings: 5, sy: 0.85 });
    }
  },
  surfaceGLSL: /* glsl */`
    void surface(vec3 p, float h, float mask, float dist, float day, inout vec3 albedo, inout float rough, inout float metal, inout vec3 emissive, inout vec3 bump) {
      float night = smoothstep(0.3, -0.15, day);
      float n = fbm5(p * 8.0);
      float fine = n3(p * 62.0);
      float hh = h + (n - 0.5) * 0.15;
      vec3 moss = mix(vec3(0.06, 0.028, 0.11), vec3(0.16, 0.05, 0.2), n);
      vec3 rust = vec3(0.24, 0.07, 0.17);
      albedo = mix(moss, rust, smoothstep(0.44, 0.62, fbm3(p * 4.0 + 9.0)));
      albedo = mix(albedo, vec3(0.2, 0.15, 0.24), smoothstep(0.75, 1.15, hh));
      albedo *= 0.8 + fine * 0.4;
      rough = 0.82;
      bump += bumpOf(p, 40.0, 0.1) * smoothstep(90.0, 10.0, dist);
      bump += bumpOf(p, 240.0, 0.11) * smoothstep(14.0, 2.0, dist);
      // Mycelium: a web of veins through the soil, pulsing with traffic.
      float v1 = 1.0 - abs(n3(p * 21.0) * 2.0 - 1.0);
      float v2 = 1.0 - abs(n3(p * 53.0 + 7.0) * 2.0 - 1.0);
      float vein = smoothstep(0.955, 1.0, v1) + smoothstep(0.97, 1.0, v2) * 0.55;
      float pulse = 0.55 + 0.45 * sin(dot(p, vec3(13.0, 9.0, 11.0)) * 2.5 - uTime * 1.3);
      vec3 veinCol = mix(vec3(0.1, 1.0, 0.82), vec3(1.0, 0.25, 0.8), smoothstep(0.42, 0.6, n3(p * 3.0)));
      emissive += veinCol * vein * pulse * (0.18 + night * 0.95);
      // Pale bioluminescent patches.
      emissive += vec3(0.08, 0.5, 0.45) * smoothstep(0.58, 0.72, n3(p * 12.0 + 4.0)) * night * 0.16;
      if (hh < 0.0 && mask < 0.6) {
        liquid(p, hh, vec3(0.004, 0.03, 0.05), vec3(0.03, 0.22, 0.2), 20.0, albedo, rough, metal, bump);
        emissive += vec3(0.05, 0.75, 0.6) * pow(n3(p * 42.0 + uTime * 0.06), 7.0) * (0.3 + night * 1.3);
      }
      vec3 spongy = mix(vec3(0.09, 0.04, 0.12), vec3(0.15, 0.07, 0.17), n3(p * 130.0));
      albedo = mix(albedo, spongy, smoothstep(0.3, 0.9, mask));
    }`,
  atmosphere: {
    thickness: 1.25,
    rayleigh: [3.2, 1.0, 3.8],
    mie: [0.8, 0.5, 0.9],
    g: 0.7,
    scaleR: 0.08,
    intensity: 5.5,
    haze: 0xd86cf0,
    night: [0.012, 0.012, 0.03],
    fog: { density: 0.019, day: 0x6a2f7a, dusk: 0xb0407a, night: 0x0e0620 },
  },
  clouds: { cover: 0.58, scale: 5.5, opacity: 0.5, color: 0xd8a8e0, shadow: 0x301848, dusk: 0xff70b0, glow: 0x08140f },
  transit: { road: { en: 'Living vein', de: 'Lebensader' }, air: { en: 'Spore drift', de: 'Sporenflug' } },
  map: { title: { en: 'Spore chart', de: 'Sporenkarte' }, paper: '#120a1c', edge: '#4a2a66', ink: '#d8ffe9', soft: '#7fb79c', sea: ['#090410', '#1a0f2c'], land: ['#21122f', '#40265a'], contour: 'rgba(140,255,200,0.11)', grid: 'rgba(140,255,200,0.05)', road: '#7dffcb', casing: '#14533f', air: '#ff7de0', traffic: '#f4fff9', accent: '#7dffcb', lines: 'vein', glyph: 'spore', font: 'ui' },
  layout: 'organic',
  block: 0.5,
  lot: null,
  road: {
    width: 0.17,
    laneOffset: 0.2,
    meander: 0.75,
    lampEvery: 0.5,
    lampChance: 0.7,
    glsl: /* glsl */`
      void roadSurface(float x, float s, float night, inout vec3 albedo, inout float rough, inout float metal, inout vec3 emissive) {
        float w = n3(vec3(s * 2.0, x * 2.0, 1.0));
        float edge = 1.0 - smoothstep(0.55, 1.0, abs(x) + (w - 0.5) * 0.5);
        albedo = mix(vec3(0.05, 0.02, 0.06), vec3(0.16, 0.08, 0.15), edge);
        rough = 0.5;
        float vein = exp(-x * x * 14.0);
        float pulse = pow(0.5 + 0.5 * sin(s * 2.6 - uTime * 2.3), 4.0);
        emissive += mix(vec3(0.06, 0.9, 0.72), vec3(1.0, 0.4, 0.85), pulse) * vein * (0.35 + pulse * 1.2 + night * 0.25);
      }`,
  },
  plaza(b, { r }) {
    b.paint(0x2a1838, { rough: 0.65 });
    b.disc(r, { seg: 48 });
    b.paint(TEAL, { glow: 1.6 });
    b.disc(r * 0.97, { y: 0.003, seg: 48, inner: r * 0.93 });
    b.paint(0x38204a, { rough: 0.6 });
    b.disc(r * 0.6, { y: 0.003, seg: 32, inner: r * 0.5 });
  },
  landmark(b, { h, w, rng, spin, capital }) {
    mushroom(b, { h, w: w * 1.05, rng, cap: rng.pick(CAPS), stem: rng.pick(STEM), glow: capital ? PINK : TEAL });
    // Smaller fruiting bodies cluster around the base.
    const siblings = capital ? 7 : rng.int(3, 5);
    for (let i = 0; i < siblings; i++) {
      const a = (i / siblings) * Math.PI * 2 + rng.range(-0.3, 0.3);
      const k = rng.range(0.24, 0.5);
      b.save().move(Math.cos(a) * w * 1.1, 0, Math.sin(a) * w * 1.1).rotZ(Math.cos(a) * -0.14).rotX(Math.sin(a) * 0.14);
      mushroom(b, { h: h * k, w: w * k * 0.8, rng, cap: rng.pick(CAPS), stem: rng.pick(STEM), glow: rng.pick([TEAL, PINK, BLUE]), spots: false });
      b.restore();
    }
    // Spores slowly orbit the crown.
    for (let i = 0; i < 6; i++) {
      const a = (i / 6) * Math.PI * 2;
      spin.save().move(0, h * rng.range(1.1, 1.3), 0);
      spin.spinAbout(0, 0, 0, 0, 1, 0, rng.range(0.25, 0.6) * (i % 2 ? 1 : -1));
      spin.paint(rng.pick([TEAL, PINK]), { glow: 7 });
      spin.save().move(Math.cos(a) * w * 1.4, 0, Math.sin(a) * w * 1.4).sphere(0.012, { seg: 5, rings: 3 }).restore();
      spin.restore();
    }
  },
  section(b, { h, w, rng }) {
    mushroom(b, { h: h * 1.1, w: w * 0.75, rng, cap: rng.pick(CAPS), stem: rng.pick(STEM), glow: rng.pick([TEAL, BLUE]) });
  },
  filler(b, { s, rng, tier }) {
    const roll = rng.next();
    if (roll < 0.62) {
      const h = s * rng.range(1.3, 2.6) * (1 + tier * 1.4);
      mushroom(b, { h, w: s * rng.range(0.55, 0.85), rng, cap: rng.pick(CAPS), stem: rng.pick(STEM), glow: rng.pick([TEAL, PINK, BLUE]), spots: rng.chance(0.4) });
    } else if (roll < 0.85) {
      b.paint(rng.pick(STEM), { rough: 0.75, win: WIN.PULSE, cw: 0.05, ch: 0.05 });
      b.sphere(s * 0.5, { seg: 10, rings: 6, sy: 0.9 });
      b.save().move(s * 0.5, 0, 0).sphere(s * 0.28, { seg: 8, rings: 5 }).restore();
    } else {
      b.paint(rng.pick([TEAL, PINK]), { glow: 4 });
      for (let i = 0; i < 3; i++) {
        const a = rng.range(0, 6.28), rr = rng.range(0, s * 0.5);
        b.save().move(Math.cos(a) * rr, 0, Math.sin(a) * rr).cyl(0.006, 0.002, s * rng.range(0.6, 1.3), 4, { caps: false, smooth: false }).restore();
      }
    }
  },
  roadside(b, { rng }) {
    const col = rng.pick([TEAL, PINK, BLUE]);
    b.paint(0x32203e, { rough: 0.7 });
    b.tube([[0, 0, 0], [0.008, 0.05, 0], [0.018, 0.09, 0]], 0.0065, { seg: 4, taper: 0.5 });
    b.paint(col, { glow: 5 });
    b.save().move(0.018, 0.09, 0).sphere(0.014, { seg: 6, rings: 4 }).restore();
  },
  vehicles: [
    {
      weight: 1,
      speed: 0.32,
      y: 0.03,
      shadow: false,
      build(b) {
        b.paint(TEAL, { glow: 6 });
        b.sphere(0.022, { seg: 8, rings: 5, y: -0.022 });
        b.paint(0x2a1838, { rough: 0.4 });
        b.save().move(0, -0.002, -0.022).sphere(0.01, { seg: 5, rings: 3 }).restore();
      },
    },
    {
      weight: 1,
      speed: 0.26,
      y: 0.03,
      shadow: false,
      build(b) {
        b.paint(PINK, { glow: 6 });
        b.sphere(0.018, { seg: 8, rings: 5, y: -0.018, sx: 0.8 });
      },
    },
  ],
  flyer: {
    speed: 0.5,
    shadow: false,
    build(b) {
      // Drifting jelly-balloon with trailing tendrils.
      b.paint(0xe080e0, { rough: 0.4, glow: 1.4 });
      b.lathe([[0.075, -0.015], [0.08, 0.02], [0.06, 0.06], [0.03, 0.085], [0, 0.09]], 12);
      b.paint(TEAL, { glow: 4 });
      for (let i = 0; i < 6; i++) {
        const a = (i / 6) * Math.PI * 2;
        const x = Math.cos(a) * 0.05, z = Math.sin(a) * 0.05;
        b.tube([[x, -0.015, z], [x * 1.12, -0.07, z * 1.12], [x * 0.85, -0.13, z * 0.85]], 0.0025, { seg: 3, taper: 0.4 });
      }
    },
  },
  walker: {
    speed: 0.06,
    lift: 0.03,
    bob: 0.012,
    bobRate: 2,
    colors: [0x8cffe8, 0xff9ce0, 0xa8c8ff],
    build(b) {
      // Little jelly bell with a glowing heart.
      b.paint(0xffffff, { rough: 0.3, glow: 1.3 });
      b.lathe([[0.011, 0], [0.012, 0.007], [0.009, 0.014], [0.004, 0.018], [0, 0.0185]], 8);
      b.save().move(0, -0.012, 0).cyl(0.0015, 0.004, 0.012, 3, { caps: false, smooth: false }).restore();
    },
  },
  ship(b) {
    b.paint(0x9a4ad0, { rough: 0.45, glow: 0.45 });
    b.save().rotX(Math.PI / 2);
    b.lathe([[0, -1], [0.34, -0.72], [0.52, -0.1], [0.42, 0.5], [0.16, 1], [0, 1.12]], 12);
    b.restore();
    b.paint(TEAL, { glow: 4 });
    b.save().move(0, 0, -1).sphere(0.2, { seg: 8, rings: 5, y: -0.2 }).restore();
  },
};
