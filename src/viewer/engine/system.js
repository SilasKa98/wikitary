// Between the worlds: orbits, trade routes, the asteroid belt of orphan pages, the log comet.
import * as THREE from 'three';
import { MeshBuilder } from './builder.js';
import { createCityMaterial } from './materials.js';
import { Noise3, RNG, NOISE_GLSL } from './noise.js';

export function createOrbitLine(radius, inclination, ascending, color) {
  const n = 360;
  const pos = new Float32Array((n + 1) * 3), ang = new Float32Array(n + 1);
  const axZ = new THREE.Vector3(0, 0, 1), axY = new THREE.Vector3(0, 1, 0);
  const v = new THREE.Vector3();
  for (let i = 0; i <= n; i++) {
    const a = (i / n) * Math.PI * 2;
    v.set(Math.cos(a) * radius, 0, Math.sin(a) * radius).applyAxisAngle(axZ, inclination).applyAxisAngle(axY, ascending);
    pos[i * 3] = v.x; pos[i * 3 + 1] = v.y; pos[i * 3 + 2] = v.z;
    ang[i] = a;
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  g.setAttribute('aAngle', new THREE.BufferAttribute(ang, 1));
  const m = new THREE.ShaderMaterial({
    uniforms: { uColor: { value: new THREE.Color(color) }, uAt: { value: 0 }, uBoost: { value: 0 } },
    vertexShader: /* glsl */`
      attribute float aAngle; varying float vA;
      void main() { vA = aAngle; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,
    fragmentShader: /* glsl */`
      varying float vA; uniform vec3 uColor; uniform float uAt, uBoost;
      void main() {
        // A comet-like trail of brightness following the planet.
        float d = mod(uAt - vA, 6.28318);
        float trail = pow(1.0 - d / 6.28318, 7.0);
        gl_FragColor = vec4(uColor * (0.05 + trail * 0.75 + uBoost * 0.2), 1.0);
      }`,
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
  });
  const line = new THREE.Line(g, m);
  line.frustumCulled = false;
  return line;
}

/** A quadratic Bézier ribbon, evaluated in the vertex shader so it can follow moving planets. */
export class Route {
  constructor({ from, to, count, color, reverse, group, rng }) {
    this.from = from; this.to = to; this.count = count;
    const n = 64;
    const t = [], side = [], idx = [];
    for (let i = 0; i <= n; i++) {
      t.push(i / n, i / n);
      side.push(-1, 1);
      if (i < n) {
        const v = i * 2;
        idx.push(v, v + 1, v + 3, v, v + 3, v + 2);
      }
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute('aT', new THREE.BufferAttribute(new Float32Array(t), 1));
    g.setAttribute('aSide', new THREE.BufferAttribute(new Float32Array(side), 1));
    g.setAttribute('position', new THREE.BufferAttribute(new Float32Array((n + 1) * 6), 3));
    g.setIndex(idx);
    this.A = new THREE.Vector3(); this.B = new THREE.Vector3(); this.C = new THREE.Vector3();
    this.material = new THREE.ShaderMaterial({
      uniforms: {
        uA: { value: this.A }, uB: { value: this.B }, uC: { value: this.C },
        uColor: { value: new THREE.Color(color) },
        uWidth: { value: 0.55 + Math.min(1.1, Math.log2(1 + count) * 0.24) },
        uRes: { value: new THREE.Vector2(1, 1) },
        uTime: { value: 0 },
        uAlpha: { value: 0.25 },
        uLen: { value: 100 },
      },
      vertexShader: /* glsl */`
        attribute float aT, aSide;
        uniform vec3 uA, uB, uC; uniform float uWidth; uniform vec2 uRes;
        varying float vT; varying float vSide;
        vec3 bez(float t) { float u = 1.0 - t; return u * u * uA + 2.0 * u * t * uC + t * t * uB; }
        void main() {
          vT = aT; vSide = aSide;
          vec4 a = projectionMatrix * viewMatrix * vec4(bez(aT), 1.0);
          vec4 b = projectionMatrix * viewMatrix * vec4(bez(min(aT + 0.012, 1.0)), 1.0);
          vec4 c = projectionMatrix * viewMatrix * vec4(bez(max(aT - 0.012, 0.0)), 1.0);
          vec2 asp = vec2(uRes.x / uRes.y, 1.0);
          vec2 d = (b.xy / max(b.w, 0.001) - c.xy / max(c.w, 0.001)) * asp;
          vec2 n = normalize(vec2(-d.y, d.x) + 1e-5) / asp;
          a.xy += n * aSide * uWidth * a.w / uRes.y * 2.0;
          gl_Position = a;
        }`,
      fragmentShader: /* glsl */`
        varying float vT; varying float vSide;
        uniform vec3 uColor; uniform float uTime, uAlpha, uLen;
        void main() {
          float cross = pow(max(1.0 - abs(vSide), 0.0), 1.6);
          float ends = smoothstep(0.0, 0.06, vT) * (1.0 - smoothstep(0.94, 1.0, vT));
          float dash = fract(vT * uLen * 0.1 - uTime * 0.35);
          float flow = smoothstep(0.0, 0.08, dash) * (1.0 - smoothstep(0.08, 0.55, dash));
          vec3 col = uColor * (0.1 + flow * 0.75) * cross * ends * uAlpha;
          gl_FragColor = vec4(col, 1.0);
        }`,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      side: THREE.DoubleSide,
    });
    this.mesh = new THREE.Mesh(g, this.material);
    this.mesh.frustumCulled = false;
    this.mesh.renderOrder = 7;
    group.add(this.mesh);
    this.sign = reverse ? -1 : 1;
    this.ships = [];
    const nShips = Math.max(1, Math.min(5, Math.round(Math.log2(1 + count) * 1.1)));
    for (let i = 0; i < nShips; i++) this.ships.push({ t: (i + rng.next() * 0.7) / nShips, v: rng.range(0.018, 0.03) });
  }

  update(sunWorld, time, res, alpha) {
    const a = this.from.node.position, b = this.to.node.position;
    const dir = _d.subVectors(b, a);
    const len = dir.length();
    dir.divideScalar(len || 1);
    const ra = this.from.R * 1.06, rb = this.to.R * 1.06;
    this.A.copy(a).addScaledVector(dir, ra);
    this.B.copy(b).addScaledVector(dir, -rb);
    _mid.addVectors(this.A, this.B).multiplyScalar(0.5);
    const lift = len * 0.2;
    const out = _o.copy(_mid);
    if (out.lengthSq() < 1) out.set(1, 0, 0);
    out.normalize();
    this.C.copy(_mid).addScaledVector(out, lift * 0.65).addScaledVector(_up, this.sign * lift * 0.8);
    const u = this.material.uniforms;
    u.uRes.value.copy(res);
    u.uTime.value = time;
    u.uAlpha.value += (alpha - u.uAlpha.value) * 0.08;
    u.uLen.value = len;
  }

  sample(t, out, fwd) {
    const u = 1 - t;
    out.set(0, 0, 0).addScaledVector(this.A, u * u).addScaledVector(this.C, 2 * u * t).addScaledVector(this.B, t * t);
    fwd.set(0, 0, 0).addScaledVector(this.A, -2 * u).addScaledVector(this.C, 2 * u - 2 * t).addScaledVector(this.B, 2 * t).normalize();
  }
}

const _d = new THREE.Vector3(), _mid = new THREE.Vector3(), _o = new THREE.Vector3();
const _up = new THREE.Vector3(0, 1, 0);

export function createBelt({ radius, width, count, orphans, graph, seed = 11 }) {
  const group = new THREE.Group();
  const rng = new RNG(seed);
  const noise = new Noise3(seed);

  const rock = new THREE.IcosahedronGeometry(1, 2);
  const p = rock.attributes.position;
  for (let i = 0; i < p.count; i++) {
    const x = p.getX(i), y = p.getY(i), z = p.getZ(i);
    const k = 1 + noise.fbm(x * 1.4, y * 1.4, z * 1.4, 3) * 0.55;
    p.setXYZ(i, x * k, y * k * 0.8, z * k);
  }
  rock.computeVertexNormals();
  const material = new THREE.MeshStandardMaterial({ color: 0x7a7168, roughness: 0.96, metalness: 0.05, flatShading: true, emissive: 0x241f1b, emissiveIntensity: 0.55 });
  const mesh = new THREE.InstancedMesh(rock, material, count);
  const dummy = new THREE.Object3D();
  const c = new THREE.Color();
  for (let i = 0; i < count; i++) {
    const a = rng.range(0, 6.283);
    const r = radius + (rng.next() + rng.next() - 1) * width;
    dummy.position.set(Math.cos(a) * r, (rng.next() + rng.next() - 1) * width * 0.11, Math.sin(a) * r);
    dummy.rotation.set(rng.range(0, 6), rng.range(0, 6), rng.range(0, 6));
    const s = Math.pow(rng.next(), 4) * 2.1 + 0.2;
    dummy.scale.set(s, s * rng.range(0.6, 1), s * rng.range(0.7, 1.2));
    dummy.updateMatrix();
    mesh.setMatrixAt(i, dummy.matrix);
    c.setHSL(rng.range(0.05, 0.11), rng.range(0.08, 0.2), rng.range(0.26, 0.5));
    mesh.setColorAt(i, c);
  }
  group.add(mesh);

  // Orphan pages live out here: glowing beacons on larger rocks, waiting to be linked.
  const beacons = [];
  orphans.forEach((pageId, i) => {
    const a = (i / Math.max(orphans.length, 1)) * Math.PI * 2 + 0.6;
    const r = radius + rng.range(-width * 0.3, width * 0.3);
    const size = 3.6 + Math.log2(1 + graph.pages[pageId].words / 200) * 0.7;
    const m = new THREE.Mesh(rock, new THREE.MeshStandardMaterial({ color: 0x8b7d6e, roughness: 0.95, flatShading: true }));
    const holder = new THREE.Group();
    holder.position.set(Math.cos(a) * r, rng.range(-3, 3), Math.sin(a) * r);
    m.scale.setScalar(size);
    holder.add(m);
    const glow = new THREE.Mesh(
      new THREE.SphereGeometry(size * 0.16, 12, 8),
      new THREE.MeshBasicMaterial({ color: new THREE.Color(0xffb36b).multiplyScalar(6) }),
    );
    glow.position.set(0, size * 1.02, 0);
    holder.add(glow);
    group.add(holder);
    beacons.push({ pageId, holder, size });
  });
  return { group, beacons };
}

/** The log page travels the system on a long ellipse, trailing its history. */
export function createComet({ pageId, a, b, noiseTex }) {
  const group = new THREE.Group();
  const head = new THREE.Mesh(
    new THREE.IcosahedronGeometry(1.5, 3),
    new THREE.MeshStandardMaterial({ color: 0xd9e4ee, roughness: 0.65, emissive: 0x304858, emissiveIntensity: 0.6, flatShading: true }),
  );
  group.add(head);
  const uTime = { value: 0 };
  const tail = new THREE.Mesh(
    new THREE.CylinderGeometry(9, 0.8, 90, 28, 28, true).translate(0, 45, 0),
    new THREE.ShaderMaterial({
      uniforms: { uTime, uNoise: { value: noiseTex } },
      vertexShader: /* glsl */`
        varying vec3 vP; varying float vL;
        void main() { vP = position; vL = position.y / 90.0; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,
      fragmentShader: /* glsl */`
        precision highp float;
        varying vec3 vP; varying float vL;
        uniform float uTime;
        ${NOISE_GLSL}
        void main() {
          vec3 q = vec3(atan(vP.z, vP.x) * 1.1, vL * 3.0 - uTime * 0.22, 2.0);
          float n = fbm3(q * 2.0);
          float a = pow(1.0 - vL, 2.0) * smoothstep(0.32, 0.72, n);
          vec3 col = mix(vec3(0.55, 0.85, 1.0), vec3(0.3, 0.45, 1.0), vL) * a * 0.75;
          gl_FragColor = vec4(col, 1.0);
        }`,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      side: THREE.DoubleSide,
    }),
  );
  group.add(tail);
  const glow = new THREE.Mesh(
    new THREE.SphereGeometry(2.2, 16, 12),
    new THREE.MeshBasicMaterial({ color: new THREE.Color(0xa8dcff).multiplyScalar(2.6), transparent: true, opacity: 0.55, depthWrite: false, blending: THREE.AdditiveBlending }),
  );
  group.add(glow);
  const body = {
    isComet: true, pageId, R: 2, G: 2, node: group, spin: group, minD: 5, maxD: 60, maxTilt: 0.6,
    angle: 2.2,
    update(dt, time) {
      uTime.value = time;
      this.angle += dt * 0.012 * (1 + 900 / (group.position.lengthSq() / 40 + 400));
      const x = Math.cos(this.angle) * a - a * 0.55, z = Math.sin(this.angle) * b;
      group.position.set(x, Math.sin(this.angle * 0.5) * 24, z);
      // The tail always points away from the sun.
      tail.quaternion.setFromUnitVectors(_up, _o.copy(group.position).normalize());
      head.rotation.y += dt * 0.3;
    },
  };
  return { group, body };
}

/** Instanced interplanetary ships, one pool per civilisation that sends them. */
export function createShipPool(civ, capacity, uniforms) {
  const b = new MeshBuilder();
  civ.ship(b);
  const material = createCityMaterial(civ, uniforms, { instanced: true });
  const mesh = new THREE.InstancedMesh(b.toGeometry(), material, capacity);
  mesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
  mesh.frustumCulled = false;
  mesh.count = 0;
  return mesh;
}
