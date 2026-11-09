// KRONOS — the Clockmakers. A copper planet wound up like a watch: brass towers with turning
// gears and clock faces, steam trams on trestles, zeppelins moored to every spire.
import { WIN } from '../engine/builder.js';

const BRASS = 0xc99a42, COPPER = 0xb8693e, VERDIGRIS = 0x4f9c8a, IRON = 0x3c3a38, STEAM = 0xe8e4dc;
const BRICK = [0x7a4a36, 0x6c3e2e, 0x875540];

function gear(spin, radius, teeth, thickness, color, rate, axis) {
  spin.paint(color, { rough: 0.3, metal: 1 });
  spin.spinAbout(0, 0, 0, axis[0], axis[1], axis[2], rate);
  spin.save();
  if (axis[2]) spin.rotX(Math.PI / 2);
  spin.cyl(radius * 0.82, radius * 0.82, thickness, Math.max(10, teeth), { y: -thickness / 2 });
  for (let i = 0; i < teeth; i++) {
    const a = (i / teeth) * Math.PI * 2;
    spin.save().rotY(a).move(0, -thickness / 2, radius * 0.92).box(radius * 0.2, thickness, radius * 0.2).restore();
  }
  spin.paint(IRON, { rough: 0.4, metal: 0.9 });
  spin.cyl(radius * 0.22, radius * 0.22, thickness * 1.3, 8, { y: (-thickness * 1.3) / 2 });
  spin.restore();
}

function clockTower(b, { h, w, rng, spin, capital }) {
  const wall = rng.pick(BRICK);
  const W = w * 1.25;
  // Heavy stone plinth, then the brick shaft.
  b.paint(0x4c4842, { rough: 0.85 });
  b.box(W * 1.8, 0.08, W * 1.8);
  b.paint(wall, { rough: 0.84, win: WIN.GRID, cw: 0.075, ch: 0.11 });
  b.box(W * 1.25, h * 0.62, W * 1.25, { y: 0.08, top: 0.84 });
  b.paint(BRASS, { rough: 0.3, metal: 1 });
  for (let i = 1; i <= 3; i++) b.box(W * (1.28 - i * 0.05), 0.016, W * (1.28 - i * 0.05), { y: 0.08 + h * 0.155 * i });
  // Clock chamber with a glowing dial on each side.
  const chamberY = 0.08 + h * 0.62;
  const CW = W * 1.08;
  b.paint(COPPER, { rough: 0.36, metal: 0.9 });
  b.box(CW, CW, CW, { y: chamberY });
  const faceR = CW * 0.4;
  for (let i = 0; i < 4; i++) {
    b.save().rotY((i / 4) * Math.PI * 2).move(0, chamberY + CW / 2, CW / 2 + 0.002).rotX(Math.PI / 2);
    b.paint(BRASS, { rough: 0.3, metal: 1 });
    b.ring(faceR, 0.008, { seg: 28, tseg: 4 });
    b.paint(0xfff0c8, { rough: 0.6, glow: -0.6 });
    b.disc(faceR, { seg: 28 });
    b.restore();
    // Hands that really turn: one revolution a minute.
    spin.save().rotY((i / 4) * Math.PI * 2).move(0, chamberY + CW / 2, CW / 2 + 0.008);
    spin.spinAbout(0, 0, 0, 0, 0, 1, -0.105);
    spin.paint(0x1a1a1a, { rough: 0.5 });
    spin.box(faceR * 0.09, faceR * 0.86, 0.002);
    spin.spinAbout(0, 0, 0, 0, 0, 1, -0.0087);
    spin.box(faceR * 0.14, faceR * 0.56, 0.003);
    spin.restore();
  }
  // Verdigris spire.
  b.paint(VERDIGRIS, { rough: 0.55, metal: 0.55 });
  b.ngon(4, CW * 0.72, h * 0.26, { y: chamberY + CW, top: 0.04, rot: Math.PI / 4 });
  b.paint(BRASS, { rough: 0.28, metal: 1 });
  b.save().move(0, chamberY + CW + h * 0.26, 0).sphere(0.024, { seg: 8, rings: 5 }).restore();
  // A great exposed gear on the flank.
  spin.save().move(W * 0.84, h * 0.34, 0);
  gear(spin, W * 0.46, 12, 0.03, BRASS, capital ? 0.7 : 0.5, [0, 0, 1]);
  spin.restore();
  spin.save().move(W * 0.84, h * 0.34 + W * 0.74, 0);
  gear(spin, W * 0.3, 8, 0.03, COPPER, capital ? -1.05 : -0.75, [0, 0, 1]);
  spin.restore();
}

function workshop(b, { h, w, rng, spin }) {
  b.paint(rng.pick(BRICK), { rough: 0.86, win: WIN.GRID, cw: 0.055, ch: 0.075 });
  b.box(w * 1.2, h * 0.7, w, {});
  b.paint(VERDIGRIS, { rough: 0.55, metal: 0.5 });
  b.save().rotY(Math.PI / 2).gable(w, h * 0.2, w * 1.2, { y: h * 0.7 }).restore();
  b.paint(IRON, { rough: 0.5, metal: 0.8 });
  b.save().move(w * 0.3, h * 0.7, 0).cyl(0.02, 0.016, h * 0.6, 7, { caps: false }).restore();
  spin.save().move(0, h * 0.42, w * 0.53);
  gear(spin, w * 0.24, 8, 0.016, BRASS, 0.9, [0, 0, 1]);
  spin.restore();
}

export default {
  id: 'kronos',
  name: { en: 'Kronos', de: 'Kronos' },
  people: { en: 'The Clockmakers', de: 'Die Uhrwerker' },
  blurb: {
    en: 'A copper world wound up like a watch. Brass towers with turning gears, steam trams on trestles, zeppelins moored to every spire.',
    de: 'Eine Kupferwelt, aufgezogen wie eine Taschenuhr. Messingtürme mit drehenden Zahnrädern, Dampftrams auf Viadukten, Zeppeline an jeder Turmspitze.',
  },
  bridge: { en: 'brass rails & zeppelin lines', de: 'Messingschienen & Zeppelinlinien' },
  dayLength: 200,
  tilt: 0.18,
  palette: { accent: 0xffc25e, window: 0xffd27e, route: 0xe8b860, scaffold: 0x8c6a42 },
  env: { zenith: 0x7a6a50, horizon: 0xe8c890, ground: 0x4a3524 },
  terrain: {
    amp: 0.75,
    power: 1.1,
    height(noise, x, y, z) {
      const c = noise.fbm(x * 1.5 + 3, y * 1.5, z * 1.5, 5, 2.0, 0.5);
      const stepped = Math.round((c * 2.0 + 0.1) * 7) / 7;
      return stepped * 0.8 + c * 0.45;
    },
  },
  scatterDensity: 0.3,
  scatterMinH: 0.02,
  scatter(b, { rng, spin }) {
    const roll = rng.next();
    if (roll < 0.34) {
      // Half-buried cog: the planet's mechanism showing through.
      const r = rng.range(0.1, 0.26);
      spin.save().move(0, r * 0.25, 0).rotY(rng.range(0, 3));
      gear(spin, r, 10, 0.04, rng.chance(0.5) ? BRASS : COPPER, rng.range(-0.5, 0.5), [0, 0, 1]);
      spin.restore();
    } else if (roll < 0.6) {
      // Steam vent stack.
      b.paint(IRON, { rough: 0.5, metal: 0.85 });
      b.cyl(0.02, 0.014, rng.range(0.12, 0.26), 7, { caps: false });
    } else if (roll < 0.86) {
      // Copper trees, leaves of hammered foil.
      const t = rng.range(0.1, 0.18);
      b.paint(0x5c3a26, { rough: 0.7, metal: 0.4 });
      b.cyl(0.009, 0.006, t, 5, { caps: false, smooth: false });
      b.paint(rng.chance(0.5) ? VERDIGRIS : COPPER, { rough: 0.5, metal: 0.8 });
      b.sphere(t * 0.42, { y: t * 0.76, seg: 5, rings: 3 });
    } else {
      b.paint(0x4c4842, { rough: 0.95 });
      b.sphere(rng.range(0.03, 0.08), { seg: 5, rings: 3, sy: 0.66 });
    }
  },
  surfaceGLSL: /* glsl */`
    void surface(vec3 p, float h, float mask, float dist, float day, inout vec3 albedo, inout float rough, inout float metal, inout vec3 emissive, inout vec3 bump) {
      float n = fbm5(p * 7.0);
      float fine = n3(p * 70.0);
      float hh = h + (n - 0.5) * 0.08;
      vec3 copper = mix(vec3(0.34, 0.15, 0.07), vec3(0.54, 0.28, 0.13), fine);
      vec3 verd = mix(vec3(0.1, 0.32, 0.26), vec3(0.2, 0.46, 0.38), fine);
      vec3 brass = vec3(0.5, 0.37, 0.14);
      float tarnish = smoothstep(0.44, 0.58, fbm3(p * 5.0 + 3.0));
      albedo = mix(copper, verd, tarnish * smoothstep(0.7, 0.15, hh));
      albedo = mix(albedo, brass, smoothstep(0.62, 1.0, hh));
      rough = mix(0.5, 0.75, tarnish);
      metal = mix(0.75, 0.2, tarnish);
      // Riveted plates cover the whole world.
      vec3 q = p * 18.0;
      vec3 g = abs(fract(q) - 0.5);
      float seam = smoothstep(0.03, 0.0, 0.5 - max(g.x, max(g.y, g.z)));
      albedo *= 1.0 - seam * 0.55;
      vec3 r = fract(q * 3.0) - 0.5;
      float rivet = smoothstep(0.12, 0.08, length(r)) * smoothstep(40.0, 8.0, dist);
      albedo += vec3(0.1, 0.08, 0.04) * rivet;
      bump += bumpOf(p, 66.0, 0.06);
      if (hh < 0.0 && mask < 0.6) {
        // A sea of oil and verdigris, turning slowly.
        liquid(p, hh, vec3(0.012, 0.05, 0.05), vec3(0.06, 0.3, 0.25), 18.0, albedo, rough, metal, bump);
        metal = 0.4;
      }
      vec3 yard = mix(vec3(0.24, 0.14, 0.08), vec3(0.32, 0.2, 0.11), n3(p * 130.0));
      albedo = mix(albedo, yard, smoothstep(0.3, 0.9, mask));
      metal = mix(metal, 0.3, smoothstep(0.3, 0.9, mask));
    }`,
  atmosphere: {
    thickness: 1.2,
    rayleigh: [2.0, 1.75, 1.3],
    mie: [1.1, 0.95, 0.7],
    g: 0.75,
    intensity: 6.6,
    haze: 0xeac084,
    fog: { density: 0.017, day: 0xb49a70, dusk: 0xc47a42, night: 0x120d0a },
  },
  clouds: { cover: 0.56, scale: 4.0, opacity: 0.72, color: 0xeadcc4, shadow: 0x584a3c, dusk: 0xe8884a },
  transit: { road: { en: 'Brass rail', de: 'Messingbahn' }, air: { en: 'Zeppelin', de: 'Zeppelin' } },
  map: { title: { en: 'Brass engraving', de: 'Messinggravur' }, paper: '#2a1a0f', edge: '#a8763f', ink: '#f2d9a8', soft: '#b08c5a', sea: ['#1a100a', '#2d1d12'], land: ['#6a4526', '#a8763f'], contour: 'rgba(240,200,130,0.16)', grid: 'rgba(240,200,130,0.07)', road: '#f0c060', casing: '#3a2412', air: '#e89a58', traffic: '#fff2d0', accent: '#f0c060', lines: 'rail', glyph: 'gear', font: 'serif' },
  layout: 'grid',
  block: 0.48,
  street: { color: 0x4a2c1c, rough: 0.5, width: 0.05 },
  lot: [0x3c2c20, 0x4a3626, 0x34261c],
  road: {
    width: 0.17,
    elev: 0.1,
    laneOffset: 0.22,
    meander: 0.2,
    lampEvery: 0.8,
    lampChance: 0.6,
    pillarEvery: 0.6,
    pillar(b, { elev }) {
      b.paint(IRON, { rough: 0.5, metal: 0.85 });
      b.save().move(0.06, 0, 0).box(0.012, elev + 0.012, 0.012).restore();
      b.save().move(-0.06, 0, 0).box(0.012, elev + 0.012, 0.012).restore();
      b.box(0.13, 0.008, 0.012, { y: elev * 0.5 });
    },
    glsl: /* glsl */`
      void roadSurface(float x, float s, float night, inout vec3 albedo, inout float rough, inout float metal, inout vec3 emissive) {
        // Sleepers and two polished brass rails on each track.
        float tie = step(0.45, fract(s * 13.0));
        albedo = mix(vec3(0.05, 0.035, 0.025), vec3(0.2, 0.13, 0.08), tie);
        rough = 0.75;
        metal = 0.2;
        float d = min(abs(abs(x) - 0.3), abs(abs(x) - 0.62));
        float rail = smoothstep(0.05, 0.02, d);
        albedo = mix(albedo, vec3(0.8, 0.62, 0.28), rail);
        rough = mix(rough, 0.2, rail);
        metal = mix(metal, 1.0, rail);
        float lamp = smoothstep(0.06, 0.0, abs(fract(s * 0.8) - 0.5)) * smoothstep(0.88, 0.96, abs(x));
        emissive += vec3(1.0, 0.75, 0.38) * lamp * night * 2.0;
      }`,
  },
  plaza(b, { r }) {
    b.paint(0x4a3a2c, { rough: 0.75 });
    b.disc(r, { seg: 48 });
    b.paint(BRASS, { rough: 0.3, metal: 1 });
    b.disc(r * 0.98, { y: 0.003, seg: 48, inner: r * 0.93 });
    for (let i = 0; i < 12; i++) {
      const a = (i / 12) * Math.PI * 2;
      b.save().rotY(a).move(0, 0.003, r * 0.8).box(0.016, 0.002, r * 0.2).restore();
    }
  },
  landmark: clockTower,
  section: workshop,
  filler(b, { s, rng, spin, tier }) {
    const h = s * rng.range(0.9, 1.9) * (1 + tier * 1.6);
    const wall = rng.pick(BRICK);
    b.paint(wall, { rough: 0.88, win: WIN.GRID, cw: 0.046, ch: 0.066 });
    b.box(s * 1.45, h, s * 1.35);
    const roof = rng.next();
    b.paint(rng.chance(0.55) ? VERDIGRIS : COPPER, { rough: 0.5, metal: 0.65 });
    if (roof < 0.5) b.save().rotY(Math.PI / 2).gable(s * 1.35, s * 0.5, s * 1.45, { y: h }).restore();
    else if (roof < 0.75) b.save().move(0, h, 0).dome(s * 0.58, { seg: 10, rings: 4 }).restore();
    else b.ngon(4, s * 0.92, s * 0.8, { y: h, top: 0.08, rot: Math.PI / 4 });
    if (rng.chance(0.5)) {
      b.paint(IRON, { rough: 0.5, metal: 0.85 });
      b.save().move(s * 0.45, h, s * 0.3).cyl(0.012, 0.01, s * 0.9, 6, { caps: false }).restore();
    }
    if (tier > 0.4 && rng.chance(0.3)) {
      spin.save().move(0, h * 0.55, s * 0.69);
      gear(spin, s * 0.34, 8, 0.012, BRASS, rng.range(-1.1, 1.1), [0, 0, 1]);
      spin.restore();
    }
  },
  roadside(b, { rng }) {
    if (rng.chance(0.3)) return;
    b.paint(IRON, { rough: 0.5, metal: 0.85 });
    b.cyl(0.004, 0.006, 0.1, 5, { caps: false, smooth: false });
    b.paint(0xffd27e, { glow: -9 });
    b.save().move(0, 0.1, 0).sphere(0.009, { seg: 6, rings: 4 }).restore();
  },
  vehicles: [
    {
      weight: 2,
      speed: 0.32,
      y: 0.006,
      build(b) {
        // Steam tram.
        b.paint(0x7a2e22, { rough: 0.4, metal: 0.4, win: WIN.GRID, cw: 0.024, ch: 0.022 });
        b.box(0.05, 0.036, 0.13, { y: 0.008 });
        b.paint(BRASS, { rough: 0.3, metal: 1 });
        b.box(0.054, 0.005, 0.134, { y: 0.044 });
        b.save().move(0, 0.05, 0.03).cyl(0.006, 0.008, 0.02, 6).restore();
        b.paint(0xffd27e, { glow: -9 });
        b.save().move(0, 0.022, 0.066).sphere(0.006, { seg: 5, rings: 3 }).restore();
      },
    },
    {
      weight: 1,
      speed: 0.42,
      y: 0.006,
      build(b) {
        // Clockwork runabout.
        b.paint(BRASS, { rough: 0.28, metal: 1 });
        b.box(0.04, 0.02, 0.08, { y: 0.01, top: 0.86 });
        b.paint(IRON, { rough: 0.5, metal: 0.85 });
        b.save().move(0, 0.03, -0.022).cyl(0.012, 0.012, 0.012, 8).restore();
        b.paint(0xffd27e, { glow: -8 });
        b.save().move(0, 0.018, 0.041).box(0.022, 0.005, 0.002).restore();
      },
    },
  ],
  flyer: {
    speed: 0.48,
    shadow: true,
    build(b) {
      // Zeppelin.
      b.paint(0xd8c8a4, { rough: 0.6 });
      b.save().rotX(Math.PI / 2);
      b.lathe([[0, -0.15], [0.03, -0.12], [0.044, -0.03], [0.042, 0.06], [0.024, 0.13], [0, 0.17]], 12);
      b.restore();
      b.paint(BRASS, { rough: 0.3, metal: 1 });
      b.ring(0.045, 0.002, { y: 0, seg: 12, tseg: 3 });
      b.paint(0x7a2e22, { rough: 0.5 });
      b.save().move(0, -0.054, 0).box(0.016, 0.012, 0.05).restore();
      b.paint(0xd8c8a4, { rough: 0.6 });
      b.save().move(0, 0, -0.12).box(0.002, 0.05, 0.04).restore();
      b.save().move(0, 0, -0.12).box(0.05, 0.002, 0.04).restore();
      b.paint(0xffd27e, { glow: -6 });
      b.save().move(0, -0.06, 0.02).box(0.01, 0.002, 0.004).restore();
    },
  },
  walker: {
    speed: 0.08,
    lift: 0.009,
    bob: 0.004,
    bobRate: 13,
    build(b) {
      // Little automaton.
      b.paint(COPPER, { rough: 0.36, metal: 0.9 });
      b.cyl(0.006, 0.0062, 0.016, 6, {});
      b.paint(BRASS, { rough: 0.3, metal: 1 });
      b.save().move(0, 0.021, 0).sphere(0.0046, { seg: 6, rings: 4 }).restore();
      b.paint(STEAM, { glow: 2 });
      b.save().move(0, 0.023, 0.0046).box(0.003, 0.001, 0.0006).restore();
    },
  },
  ship(b) {
    b.paint(0xd8c8a4, { rough: 0.55 });
    b.save().rotX(Math.PI / 2);
    b.lathe([[0, -1.3], [0.26, -1], [0.42, -0.2], [0.38, 0.6], [0.2, 1.2], [0, 1.4]], 12);
    b.restore();
    b.paint(BRASS, { rough: 0.3, metal: 1 });
    b.save().move(0, -0.5, 0).box(0.14, 0.12, 0.5).restore();
    b.paint(0xffd27e, { glow: 4 });
    b.save().move(0, 0, -1.3).sphere(0.14, { y: -0.14, seg: 7, rings: 4 }).restore();
  },
};
