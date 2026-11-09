// THALASSA — the Pearlkeepers. An ocean world dotted with coral atolls: nacre spirals and
// pearl domes above the waves, manta-craft skimming between them along chains of buoys.
import { WIN, mix3 } from '../engine/builder.js';

const NACRE = [0xf2ece4, 0xe8e0ec, 0xe4f0ee, 0xf4e6dc];
const CORAL = [0xf0795c, 0xf29a6c, 0xe85a7c, 0xc85aa8];
const AQUA = 0x56f0d8, PEARL = 0xfff6e8;

function spiralTower(b, { h, w, rng, spin, capital }) {
  const nacre = rng.pick(NACRE);
  // A shell-like tower: stacked whorls narrowing to a point.
  const whorls = capital ? 8 : 6;
  b.paint(mix3(nacre, 0x6c8a94, 0.3), { rough: 0.5 });
  b.dome(w * 1.25, { sy: 0.24, seg: 28 });
  let y = 0.05, r = w * 0.92;
  const stepH = (h * 0.9) / whorls;
  for (let i = 0; i < whorls; i++) {
    const next = r * 0.78;
    b.paint(i % 2 ? nacre : mix3(nacre, 0xd8c8e0, 0.45), { rough: 0.16, metal: 0.45, win: WIN.SPOTS, cw: 0.08, ch: 0.065 });
    b.lathe([[r * 0.8, y], [r, y + stepH * 0.36], [r * 0.96, y + stepH * 0.7], [next * 0.82, y + stepH]], 20);
    y += stepH;
    r = next;
  }
  b.paint(nacre, { rough: 0.14, metal: 0.5 });
  b.lathe([[r * 0.82, y], [r * 0.5, y + h * 0.06], [0, y + h * 0.1]], 16);
  // The pearl at the crown, with a slow halo.
  b.paint(PEARL, { rough: 0.05, metal: 0.25, glow: capital ? 1.15 : 0.6 });
  b.save().move(0, y + h * 0.08, 0).sphere(w * 0.19, { seg: 16, rings: 10 }).restore();
  spin.save().move(0, y + h * 0.17, 0);
  spin.spinAbout(0, 0, 0, 0, 1, 0, 0.6);
  spin.paint(AQUA, { glow: 1.3 });
  spin.ring(w * 0.42, 0.007, { seg: 28, tseg: 4 });
  spin.restore();
  // Coral fans on the shoulders of the base.
  for (let i = 0; i < 6; i++) {
    const a = (i / 6) * Math.PI * 2 + 0.3;
    b.save().move(Math.cos(a) * w * 1.08, 0.02, Math.sin(a) * w * 1.08).rotY(-a);
    coralFan(b, rng, w * 0.34);
    b.restore();
  }
}

function coralFan(b, rng, s) {
  b.paint(rng.pick(CORAL), { rough: 0.72 });
  const arms = 4;
  for (let i = 0; i < arms; i++) {
    const t = (i / (arms - 1) - 0.5) * 1.4;
    b.tube([[0, 0, 0], [Math.sin(t) * s * 0.45, s * 0.55, 0], [Math.sin(t) * s * 0.9, s, s * 0.08]], s * 0.075, { seg: 4, taper: 0.3 });
  }
}

export default {
  id: 'thalassa',
  name: { en: 'Thalassa', de: 'Thalassa' },
  people: { en: 'The Pearlkeepers', de: 'Die Perlenhüter' },
  blurb: {
    en: 'An ocean with a few islands in it. Nacre spirals and pearl domes rise from coral atolls; manta-craft skim along chains of glowing buoys.',
    de: 'Ein Ozean mit wenigen Inseln. Perlmuttspiralen und Perlenkuppeln wachsen aus Korallenatollen; Manta-Schiffe gleiten an Ketten leuchtender Bojen entlang.',
  },
  bridge: { en: 'sea-lanes & manta flight', de: 'Seewege & Mantaflug' },
  dayLength: 185,
  tilt: 0.26,
  palette: { accent: 0x62f4dc, window: 0xbdfff0, route: 0x6ef0e0, scaffold: 0xb4c8c4 },
  env: { zenith: 0x3a9ae0, horizon: 0xd8f6f4, ground: 0x0e5a70 },
  terrain: {
    amp: 0.55,
    power: 1.1,
    height(noise, x, y, z) {
      const c = noise.fbm(x * 2.2 + 2, y * 2.2, z * 2.2, 5, 2.1, 0.5);
      return c * 1.8 - 0.42;
    },
  },
  scatterDensity: 0.6,
  scatterMinH: 0.0,
  scatter(b, { rng }) {
    if (rng.chance(0.55)) {
      coralFan(b, rng, rng.range(0.05, 0.13));
    } else {
      const t = rng.range(0.12, 0.2);
      b.paint(0x7a6448, { rough: 0.85 });
      b.tube([[0, 0, 0], [0.014, t * 0.6, 0], [0.03, t, 0.006]], 0.006, { seg: 4, taper: 0.6 });
      b.paint(0x2ea06a, { rough: 0.7 });
      for (let i = 0; i < 6; i++) {
        const a = (i / 6) * Math.PI * 2;
        b.tube([[0.03, t, 0.006], [0.03 + Math.cos(a) * 0.04, t + 0.014, 0.006 + Math.sin(a) * 0.04], [0.03 + Math.cos(a) * 0.075, t - 0.028, 0.006 + Math.sin(a) * 0.075]], 0.005, { seg: 3, taper: 0.2 });
      }
    }
  },
  surfaceGLSL: /* glsl */`
    void surface(vec3 p, float h, float mask, float dist, float day, inout vec3 albedo, inout float rough, inout float metal, inout vec3 emissive, inout vec3 bump) {
      float night = smoothstep(0.25, -0.15, day);
      float n = fbm5(p * 9.0);
      float hh = h + (n - 0.5) * 0.11;
      if (hh < 0.0 && mask < 0.6) {
        float d = clamp(-hh / 0.5, 0.0, 1.0);
        vec3 lagoon = vec3(0.06, 0.62, 0.55), reef = vec3(0.02, 0.32, 0.46), deep = vec3(0.004, 0.05, 0.16);
        albedo = mix(lagoon, reef, smoothstep(0.0, 0.2, d));
        albedo = mix(albedo, deep, smoothstep(0.2, 0.75, d));
        // Coral reefs show through the shallows.
        albedo = mix(albedo, vec3(0.5, 0.35, 0.34), smoothstep(0.5, 0.64, n3(p * 44.0)) * (1.0 - smoothstep(0.0, 0.14, d)) * 0.6);
        rough = 0.07;
        vec3 q = p * 30.0;
        bump += bumpOf(q + vec3(uTime * 0.06, 0.0, uTime * 0.05), 1.0, 0.11);
        bump += bumpOf(q * 3.3 - vec3(0.0, uTime * 0.1, uTime * 0.07), 1.0, 0.06);
        float foam = smoothstep(-0.018, -0.003, hh) * (0.5 + 0.5 * sin(uTime * 1.1 + n * 34.0));
        albedo = mix(albedo, vec3(0.62), foam * 0.42);
        // Plankton lights up the night sea.
        emissive += vec3(0.05, 0.7, 0.62) * pow(n3(p * 62.0 + uTime * 0.05), 8.0) * night * 1.5;
      } else {
        vec3 sand = mix(vec3(0.68, 0.62, 0.48), vec3(0.8, 0.74, 0.6), n3(p * 92.0));
        vec3 green = mix(vec3(0.1, 0.3, 0.13), vec3(0.2, 0.42, 0.15), n);
        albedo = mix(sand, green, smoothstep(0.03, 0.09, hh));
        rough = 0.9;
        bump += bumpOf(p, 80.0, 0.05);
        vec3 terrace = mix(vec3(0.62, 0.58, 0.48), vec3(0.72, 0.68, 0.58), n3(p * 140.0));
        albedo = mix(albedo, terrace, smoothstep(0.35, 0.9, mask));
      }
    }`,
  atmosphere: {
    thickness: 1.22,
    rayleigh: [0.6, 2.4, 4.6],
    mie: [0.5, 0.55, 0.55],
    intensity: 8.5,
    haze: 0x7ce8ff,
    fog: { density: 0.012, day: 0xb0e4ee, dusk: 0xf0a488, night: 0x061020 },
  },
  clouds: { cover: 0.54, scale: 5.2, opacity: 0.92, color: 0xffffff, shadow: 0x608aa0, dusk: 0xffa880 },
  transit: { road: { en: 'Sea-lane', de: 'Seeweg' }, air: { en: 'Manta craft', de: 'Mantagleiter' } },
  map: { title: { en: 'Sea chart', de: 'Seekarte' }, paper: '#0d2a3f', edge: '#3d7a9c', ink: '#eaf6ff', soft: '#8fbcd4', sea: ['#0a2f4a', '#15557f'], land: ['#e8dcb4', '#cdb98a'], contour: 'rgba(170,220,255,0.18)', grid: 'rgba(170,220,255,0.1)', road: '#f5e7b8', casing: '#0a2f4a', air: '#7ff0e0', traffic: '#ffffff', accent: '#7ff0e0', lines: 'sealane', glyph: 'pearl', font: 'serif' },
  layout: 'rings',
  block: 0.46,
  street: { color: 0xc4b89c, rough: 0.8, width: 0.03 },
  lot: [0xd4c8a8, 0xc8bea0, 0xdcd4b8],
  road: {
    width: 0.13,
    laneOffset: 0.2,
    meander: 0.65,
    lampEvery: 0.6,
    lampChance: 0.9,
    pillarEvery: 2,
    pillar(b, { overWater }) {
      if (!overWater) return;
      b.paint(0xe8e0d4, { rough: 0.4 });
      b.cyl(0.018, 0.024, 0.13, 6, { y: -0.12, caps: false });
    },
    glsl: /* glsl */`
      void roadSurface(float x, float s, float night, inout vec3 albedo, inout float rough, inout float metal, inout vec3 emissive) {
        // Pontoon causeway of pale, sea-worn nacre.
        float plank = step(0.1, fract(s * 9.0));
        albedo = mix(vec3(0.2, 0.2, 0.2), mix(vec3(0.62, 0.6, 0.54), vec3(0.76, 0.76, 0.72), n3(vRP * 500.0)), plank);
        rough = 0.32;
        float edge = smoothstep(0.84, 0.92, abs(x));
        emissive += vec3(0.1, 0.9, 0.78) * edge * (0.25 + night * 1.2) * (0.6 + 0.4 * sin(s * 3.0 - uTime * 1.5));
      }`,
  },
  plaza(b, { r }) {
    b.paint(0xe8e0cc, { rough: 0.6 });
    b.disc(r, { seg: 48 });
    b.paint(0x4ac8c0, { rough: 0.1, metal: 0.3 });
    b.disc(r * 0.82, { y: 0.002, seg: 48, inner: r * 0.72 });
    b.paint(AQUA, { glow: -2 });
    b.disc(r * 0.99, { y: 0.0025, seg: 48, inner: r * 0.96 });
  },
  landmark: spiralTower,
  section(b, { h, w, rng }) {
    const nacre = rng.pick(NACRE);
    b.paint(nacre, { rough: 0.15, metal: 0.4, win: WIN.SPOTS, cw: 0.055, ch: 0.05 });
    b.dome(w * 0.78, { sy: h / (w * 0.78), seg: 22, rings: 8 });
    b.paint(AQUA, { rough: 0.15, glow: 0.8 });
    b.save().move(0, h * 0.98, 0).sphere(0.024, { seg: 8, rings: 5 }).restore();
  },
  filler(b, { s, rng, tier }) {
    const nacre = rng.pick(NACRE);
    const roll = rng.next();
    if (roll < 0.5) {
      const r = s * rng.range(0.55, 0.85), sy = rng.range(0.8, 1.2) * (1 + tier * 1.3);
      b.paint(nacre, { rough: 0.18, metal: 0.35, win: WIN.SPOTS, cw: 0.05, ch: 0.05 });
      b.dome(r, { sy, seg: 16, rings: 6 });
      if (rng.chance(0.45)) {
        b.save().move(r * 0.82, 0, 0).dome(r * 0.46, { sy, seg: 12, rings: 4 }).restore();
      }
    } else if (roll < 0.8) {
      const h = s * rng.range(1.8, 3.4) * (1 + tier * 1.3);
      b.paint(mix3(nacre, 0xc8b8d8, 0.3), { rough: 0.16, metal: 0.4, win: WIN.SPOTS, cw: 0.05, ch: 0.055 });
      b.lathe([[s * 0.42, 0], [s * 0.46, h * 0.25], [s * 0.34, h * 0.55], [s * 0.2, h * 0.86], [0, h]], 12);
    } else {
      coralFan(b, rng, s * 1.5);
    }
  },
  roadside(b, { rng }) {
    // Glowing buoy.
    b.paint(0xe8e0d4, { rough: 0.4 });
    b.cyl(0.011, 0.007, 0.06, 6, { caps: false });
    b.paint(rng.chance(0.25) ? 0xffc0a8 : AQUA, { glow: 4 });
    b.save().move(0, 0.06, 0).sphere(0.012, { seg: 7, rings: 4 }).restore();
  },
  vehicles: [
    {
      weight: 2,
      speed: 0.42,
      y: 0.012,
      build(b) {
        // Manta skiff.
        b.paint(0x3a5a6a, { rough: 0.3, metal: 0.4 });
        b.save().scale(1, 0.3, 1).sphere(0.03, { seg: 8, rings: 4, y: -0.03, sx: 1.2 }).restore();
        b.prism([[0.06, -0.02], [0.012, 0.045], [-0.012, 0.045], [-0.06, -0.02], [0, -0.012]], 0.004);
        b.paint(AQUA, { glow: 4 });
        b.save().move(0, 0.006, -0.03).box(0.03, 0.003, 0.006).restore();
      },
    },
    {
      weight: 1,
      speed: 0.28,
      y: 0.008,
      build(b) {
        // Pearl barge with a bubble cabin.
        b.paint(0xe8e0d4, { rough: 0.35, metal: 0.2 });
        b.box(0.05, 0.016, 0.11, { top: 0.8 });
        b.paint(0x8ce8e0, { rough: 0.05, metal: 0.6 });
        b.save().move(0, 0.016, -0.01).dome(0.018, { seg: 10, rings: 4 }).restore();
      },
    },
  ],
  flyer: {
    speed: 0.82,
    shadow: false,
    build(b) {
      // Sky-manta, wings gently swept.
      b.paint(0x2a4858, { rough: 0.35, metal: 0.35 });
      b.prism([[0.15, -0.05], [0.03, 0.11], [-0.03, 0.11], [-0.15, -0.05], [-0.015, -0.03], [0, -0.13], [0.015, -0.03]], 0.008);
      b.paint(AQUA, { glow: 4.5 });
      b.save().move(0.1, 0.005, -0.02).sphere(0.005, { seg: 5, rings: 3 }).restore();
      b.save().move(-0.1, 0.005, -0.02).sphere(0.005, { seg: 5, rings: 3 }).restore();
    },
  },
  walker: {
    speed: 0.08,
    lift: 0.012,
    bob: 0.006,
    bobRate: 3.4,
    build(b) {
      // Bubble-sprite: a translucent pearl with a lit heart.
      b.paint(0xd8fff8, { rough: 0.05, metal: 0.25, glow: 0.65 });
      b.sphere(0.01, { seg: 8, rings: 5 });
      b.paint(AQUA, { glow: 4 });
      b.save().move(0, 0.008, 0).sphere(0.0032, { seg: 5, rings: 3 }).restore();
    },
  },
  ship(b) {
    b.paint(0xe8e0d4, { rough: 0.25, metal: 0.4 });
    b.save().scale(1, 0.32, 1.6).sphere(0.55, { y: -0.55, seg: 14, rings: 7 }).restore();
    b.prism([[1.5, -0.4], [0.3, 0.7], [-0.3, 0.7], [-1.5, -0.4], [0, -0.1]], 0.05);
    b.paint(AQUA, { glow: 4.5 });
    b.save().move(0, 0.03, -0.82).box(0.4, 0.07, 0.04).restore();
  },
};
