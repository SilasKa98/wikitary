// Everything beyond the planets: baked nebula sky, twinkling stars, and the sun.
import * as THREE from 'three';
import { NOISE_GLSL, RNG } from './noise.js';

/** Paints the galaxy once into a cube map, so the sky costs nothing at runtime. */
export function bakeSky(renderer, noiseTex, seed = 7) {
  const rng = new RNG(seed);
  const tilt = new THREE.Vector3(rng.range(-0.5, 0.5), 1, rng.range(-0.5, 0.5)).normalize();
  const mat = new THREE.ShaderMaterial({
    side: THREE.BackSide,
    depthWrite: false,
    uniforms: {
      uNoise: { value: noiseTex },
      uTilt: { value: tilt },
      uHueA: { value: new THREE.Color().setHSL(rng.range(0.62, 0.8), 0.7, 0.32) },
      uHueB: { value: new THREE.Color().setHSL(rng.range(0.48, 0.56), 0.75, 0.3) },
      uHueC: { value: new THREE.Color().setHSL(rng.range(0.94, 1.08) % 1, 0.65, 0.42) },
      uShift: { value: rng.range(0, 40) },
    },
    vertexShader: /* glsl */`
      varying vec3 vDir;
      void main() { vDir = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,
    fragmentShader: /* glsl */`
      precision highp float;
      varying vec3 vDir;
      uniform vec3 uTilt, uHueA, uHueB, uHueC;
      uniform float uShift;
      ${NOISE_GLSL}
      float starLayer(vec3 d, float scale, float density, float size) {
        vec3 p = d * scale;
        vec3 id = floor(p);
        vec3 f = fract(p) - 0.5;
        float h = hash31(id + 3.1);
        if (h > density) return 0.0;
        vec3 off = (vec3(hash31(id + 7.7), hash31(id + 13.3), hash31(id + 19.9)) - 0.5) * 0.7;
        float dist = length(f - off);
        return smoothstep(size, 0.0, dist) * (0.3 + 0.7 * hash31(id + 29.0));
      }
      void main() {
        vec3 d = normalize(vDir);
        vec3 q = d + uShift;
        float gal = dot(d, uTilt);
        float band = exp(-gal * gal * 7.0);
        float warp = n3(q * 2.1) - 0.5;
        float n1 = fbm5(q * 2.4 + warp * 2.4);
        float n2 = fbm5(q * 4.6 - warp * 1.7 + 5.0);
        float n3a = fbm5(q * 1.3 + 17.0);
        vec3 col = vec3(0.0009, 0.0013, 0.003);
        float wisps = fbm5(q * 11.0 + warp * 3.0);
        float cloud = smoothstep(0.5, 0.82, n1) * (0.45 + wisps * 0.9);
        col += uHueA * cloud * cloud * 0.05 * (0.22 + band);
        col += uHueB * smoothstep(0.54, 0.84, n2) * (0.4 + wisps * 0.8) * 0.032 * (0.15 + band);
        col += uHueC * pow(smoothstep(0.58, 0.86, n3a), 2.0) * (0.4 + wisps) * 0.03;
        // The bright river of the galaxy, cut by dark dust lanes.
        float dust = smoothstep(0.42, 0.66, fbm5(q * 6.0 + 2.0));
        col += vec3(0.16, 0.135, 0.17) * band * band * band * (0.2 + n2 * 0.7) * (1.0 - dust * 0.86);
        float dense = band * band;
        float stars = starLayer(d, 240.0, 0.09 + dense * 0.28, 0.2) * 0.8
                    + starLayer(d, 130.0, 0.05 + dense * 0.1, 0.17) * 1.3
                    + starLayer(d, 62.0, 0.03, 0.13) * 2.4;
        vec3 tint = mix(vec3(0.72, 0.82, 1.0), vec3(1.0, 0.86, 0.72), n1);
        col += stars * tint * 0.45;
        gl_FragColor = vec4(col, 1.0);
      }`,
  });
  const scene = new THREE.Scene();
  scene.add(new THREE.Mesh(new THREE.SphereGeometry(5, 32, 24), mat));
  const target = new THREE.WebGLCubeRenderTarget(1536, {
    type: THREE.HalfFloatType,
    generateMipmaps: false,
    minFilter: THREE.LinearFilter,
    magFilter: THREE.LinearFilter,
  });
  const cam = new THREE.CubeCamera(0.1, 10, target);
  const previous = renderer.toneMapping;
  renderer.toneMapping = THREE.NoToneMapping;
  cam.update(renderer, scene);
  renderer.toneMapping = previous;
  mat.dispose();
  return target.texture;
}

/** Foreground stars: real points so they stay crisp and can twinkle. */
export function createStarfield(count = 5200, seed = 21) {
  const rng = new RNG(seed);
  const pos = new Float32Array(count * 3), col = new Float32Array(count * 3), size = new Float32Array(count), phase = new Float32Array(count);
  const palette = [[0.68, 0.8, 1], [1, 1, 1], [1, 0.92, 0.78], [1, 0.76, 0.56], [0.8, 0.86, 1]];
  for (let i = 0; i < count; i++) {
    const z = rng.range(-1, 1), a = rng.range(0, Math.PI * 2), r = Math.sqrt(1 - z * z);
    pos[i * 3] = r * Math.cos(a) * 6000; pos[i * 3 + 1] = z * 6000; pos[i * 3 + 2] = r * Math.sin(a) * 6000;
    const c = rng.pick(palette);
    const mag = Math.pow(rng.next(), 7);
    col[i * 3] = c[0]; col[i * 3 + 1] = c[1]; col[i * 3 + 2] = c[2];
    size[i] = 0.9 + mag * 3.4;
    phase[i] = rng.range(0, 6.28);
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  g.setAttribute('aColor', new THREE.BufferAttribute(col, 3));
  g.setAttribute('aSize', new THREE.BufferAttribute(size, 1));
  g.setAttribute('aPhase', new THREE.BufferAttribute(phase, 1));
  const m = new THREE.ShaderMaterial({
    uniforms: { uTime: { value: 0 }, uPixel: { value: 1 } },
    vertexShader: /* glsl */`
      attribute vec3 aColor; attribute float aSize, aPhase;
      uniform float uTime, uPixel;
      varying vec3 vC; varying float vB;
      void main() {
        vC = aColor;
        vB = (0.72 + 0.28 * sin(uTime * (0.6 + aPhase * 0.5) + aPhase)) * (aSize > 2.0 ? 2.4 : 1.0);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        gl_PointSize = aSize * uPixel;
      }`,
    fragmentShader: /* glsl */`
      varying vec3 vC; varying float vB;
      void main() {
        float d = length(gl_PointCoord - 0.5) * 2.0;
        float a = smoothstep(1.0, 0.0, d);
        gl_FragColor = vec4(vC * vB * a * a, a);
      }`,
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
  });
  const points = new THREE.Points(g, m);
  points.frustumCulled = false;
  points.renderOrder = -10;
  return points;
}

export function createSun(radius, noiseTex, { core = 0xffb066, hot = 0xfff0d0 } = {}) {
  const group = new THREE.Group();
  const shared = { uTime: { value: 0 } };

  const surface = new THREE.Mesh(
    new THREE.SphereGeometry(radius, 128, 96),
    new THREE.ShaderMaterial({
      uniforms: { uTime: shared.uTime, uNoise: { value: noiseTex }, uCore: { value: new THREE.Color(core) }, uHot: { value: new THREE.Color(hot) }, uDim: { value: 1 } },
      vertexShader: /* glsl */`
        varying vec3 vP; varying vec3 vN; varying vec3 vV;
        void main() {
          vP = normalize(position);
          vN = normalize(normalMatrix * normal);
          vec4 mv = modelViewMatrix * vec4(position, 1.0);
          vV = normalize(-mv.xyz);
          gl_Position = projectionMatrix * mv;
        }`,
      fragmentShader: /* glsl */`
        precision highp float;
        varying vec3 vP; varying vec3 vN; varying vec3 vV;
        uniform float uTime, uDim; uniform vec3 uCore, uHot;
        ${NOISE_GLSL}
        void main() {
          float t = uTime * 0.018;
          vec3 p = vP * 3.0;
          float w = fbm3(p + vec3(t, -t * 0.6, t * 0.4));
          float cells = fbm5(p * 2.4 + w * 3.2 + vec3(0.0, t * 1.4, 0.0));
          float grain = n3(p * 16.0 + t * 5.0);
          float heat = smoothstep(0.28, 0.76, cells) * 0.8 + grain * 0.22;
          float spots = smoothstep(0.66, 0.74, fbm3(vP * 2.4 + 40.0));
          heat *= 1.0 - spots * 0.65;
          float mu = max(dot(normalize(vN), normalize(vV)), 0.0);
          float limb = 0.5 + 0.5 * pow(mu, 0.5);
          vec3 col = mix(uCore * 1.05, uHot, heat) * (1.3 + heat * 3.4) * limb * uDim;
          gl_FragColor = vec4(col, 1.0);
        }`,
    }),
  );
  surface.userData.kind = 'sun';
  group.add(surface);

  // Corona: a camera-facing quad with animated radial streamers.
  const corona = new THREE.Mesh(
    new THREE.PlaneGeometry(radius * 11, radius * 11),
    new THREE.ShaderMaterial({
      uniforms: { uTime: shared.uTime, uNoise: { value: noiseTex }, uCore: { value: new THREE.Color(core) }, uR: { value: radius / (radius * 5.5) } },
      vertexShader: /* glsl */`
        varying vec2 vUv;
        void main() { vUv = uv * 2.0 - 1.0; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,
      fragmentShader: /* glsl */`
        precision highp float;
        varying vec2 vUv;
        uniform float uTime, uR; uniform vec3 uCore;
        ${NOISE_GLSL}
        void main() {
          float r = length(vUv);
          float a = atan(vUv.y, vUv.x);
          vec3 q = vec3(cos(a), sin(a), 0.0) * 3.0;
          float rays = fbm3(q + vec3(0.0, 0.0, uTime * 0.03));
          float rays2 = fbm3(q * 3.3 + vec3(0.0, 0.0, uTime * 0.05));
          float d = max(r - uR, 0.0);
          float glow = exp(-d * mix(16.0, 6.5, rays)) * (0.55 + rays2 * 0.8);
          float wide = exp(-d * 4.5) * 0.09;
          float k = (glow * 0.7 + wide) * (1.0 - smoothstep(0.72, 1.0, r));
          vec3 col = mix(uCore, vec3(1.0, 0.9, 0.75), exp(-d * 18.0)) * k * 1.25;
          gl_FragColor = vec4(col, 0.0);
        }`,
      transparent: true,
      depthWrite: false,
      blending: THREE.CustomBlending,
      blendEquation: THREE.AddEquation,
      blendSrc: THREE.OneFactor,
      blendDst: THREE.OneFactor,
    }),
  );
  corona.renderOrder = 5;
  group.add(corona);

  group.userData = {
    update(t, camera) {
      shared.uTime.value = t;
      surface.rotation.y = t * 0.012;
      corona.quaternion.copy(camera.quaternion);
      const dist = camera.position.length() / radius;
      surface.material.uniforms.uDim.value = 0.2 + 0.8 * Math.min(1, Math.max(0, (dist - 2) / 12));
    },
    surface,
  };
  return group;
}
