// One continuous camera: system overview ⇄ orbit ⇄ street level, with cinematic flights.
import * as THREE from 'three';

const clamp = (x, a, b) => Math.max(a, Math.min(b, x));
const smooth = (t) => t * t * (3 - 2 * t);
const smoother = (t) => t * t * t * (t * (t * 6 - 15) + 10);
const sstep = (a, b, x) => smooth(clamp((x - a) / (b - a), 0, 1));

const _a = new THREE.Vector3(), _b = new THREE.Vector3(), _c = new THREE.Vector3();

function perpendicular(n) {
  const r = Math.abs(n.y) > 0.9 ? new THREE.Vector3(1, 0, 0) : new THREE.Vector3(0, 1, 0);
  return r.sub(n.clone().multiplyScalar(r.dot(n))).normalize();
}

export class CameraRig {
  constructor(camera, world) {
    this.camera = camera;
    this.world = world;
    this.mode = 'system';
    this.sys = { az: 0.6, el: 0.36, dist: 620, azT: 0.6, elT: 0.36, distT: 620, drift: 0.018 };
    this.body = null;
    this.dir = new THREE.Vector3(0, 0, 1);
    this.fwd = new THREE.Vector3(0, 1, 0);
    this.d = 40; this.dT = 40;
    this.tiltOffset = 0; this.tiltOffsetT = 0;
    this.lift = 0; this.liftT = 0;
    this.pan = new THREE.Vector2();
    this.turn = 0;
    this.flight = null;
    this.warp = 0;
    this.baseFov = 40;
    this.pose = { pos: new THREE.Vector3(), look: new THREE.Vector3(), up: new THREE.Vector3(0, 1, 0) };
    this.onArrive = null;
    this.onModeChange = null;
  }

  get busy() { return !!this.flight; }

  setSystemFit(maxOrbit) {
    this.sysMin = maxOrbit * 0.38;
    this.sysMax = maxOrbit * 3.6;
    this.sys.dist = this.sys.distT = maxOrbit * 1.32;
  }

  // ---- poses ---------------------------------------------------------------------
  systemPose(out) {
    const s = this.sys;
    const ce = Math.cos(s.el);
    out.pos.set(Math.sin(s.az) * ce * s.dist, Math.sin(s.el) * s.dist, Math.cos(s.az) * ce * s.dist);
    out.look.set(0, 0, 0);
    out.up.set(0, 1, 0);
    return out;
  }

  tiltFor(body, d, offset) {
    const near = body.minD ?? 0.35;
    const far = (body.R ?? 10) * 2.1;
    const u = clamp((Math.log(d) - Math.log(near)) / (Math.log(far) - Math.log(near)), 0, 1);
    const auto = (1 - sstep(0.42, 1, u)) * (body.maxTilt ?? 1.36);
    return clamp(auto + offset, 0, 1.5);
  }

  /** Local-space orbit camera around a ground point; widens smoothly into a whole-planet view. */
  bodyPose(body, dir, fwd, d, tiltOffset, out) {
    const R = body.R, G = body.G ?? R;
    const tilt = this.tiltFor(body, d, tiltOffset);
    const k = sstep(R * 0.45, R * 2.1, d);
    const lookR = (G + this.lift) * (1 - k);
    const up = dir, f = fwd;
    const st = Math.sin(tilt), ct = Math.cos(tilt);
    const look = _a.copy(up).multiplyScalar(lookR);
    const pos = _b.copy(look).addScaledVector(up, ct * d).addScaledVector(f, -st * d);
    if (k < 1) {
      // A hint of elevation so the camera never scrapes the street, or passes through a tower.
      const floor = (body.eyeFloor ? body.eyeFloor(pos) : G) + (body.minEye ?? 0.05);
      const len = pos.length();
      if (len < floor) pos.multiplyScalar(floor / len);
    }
    const camUp = _c.copy(up).multiplyScalar(st).addScaledVector(f, ct).normalize();
    const parent = body.spin || body.node;
    parent.updateWorldMatrix(true, false);
    out.pos.copy(pos).applyMatrix4(parent.matrixWorld);
    out.look.copy(look).applyMatrix4(parent.matrixWorld);
    out.up.copy(camUp).transformDirection(parent.matrixWorld);
    return out;
  }

  // ---- input ------------------------------------------------------------------------
  drag(dx, dy, height) {
    if (this.flight) return;
    this.world.endRide?.(false);
    if (this.mode === 'system') {
      this.sys.azT -= dx * 0.0042;
      this.sys.elT = clamp(this.sys.elT + dy * 0.0036, -1.25, 1.35);
      this.sys.drift = 0;
    } else {
      const fovScale = (2 * Math.tan((this.baseFov * Math.PI) / 360)) / height;
      const body = this.body;
      const ref = Math.max(this.d, 0.1);
      const dist = Math.min(ref, body.R * 2.8);
      const rate = (dist * fovScale) / (body.G ?? body.R);
      this.pan.x = clamp(-dx * rate, -0.5, 0.5);
      this.pan.y = clamp(dy * rate, -0.5, 0.5);
      this.applyPan(this.pan.x, this.pan.y);
      this.pan.multiplyScalar(0.85);
    }
  }

  applyPan(x, y) {
    const right = _a.crossVectors(this.fwd, this.dir).normalize();
    this.dir.addScaledVector(right, x).addScaledVector(this.fwd, y).normalize();
    this.fwd.addScaledVector(this.dir, -this.fwd.dot(this.dir)).normalize();
  }

  rotateDrag(dx, dy) {
    if (this.flight || this.mode !== 'body') return;
    this.world.endRide?.(false);
    this.fwd.applyAxisAngle(this.dir, -dx * 0.004).normalize();
    this.tiltOffsetT = clamp(this.tiltOffsetT - dy * 0.0035, -1.3, 0.8);
  }

  zoom(delta) {
    if (this.flight) return;
    this.world.endRide?.(false);
    const f = Math.exp(delta * 0.0011);
    if (this.mode === 'system') {
      this.sys.distT = clamp(this.sys.distT * f, this.sysMin, this.sysMax);
    } else {
      const min = this.body.minD ?? 0.35;
      const max = this.body.maxD ?? this.body.R * 7;
      this.dT = clamp(this.dT * f, min, max);
    }
  }

  // ---- flights ----------------------------------------------------------------------
  /** Interplanetary or system-to-planet: a sweeping arc in world space. */
  flyToBody(body, { dir, fwd, d, tiltOffset = 0, duration, onArrive } = {}) {
    const target = {
      body,
      dir: (dir ? dir.clone() : this.dir.clone()).normalize(),
      fwd: null,
      d: d ?? body.R * 2.6,
      tiltOffset,
    };
    target.fwd = (fwd ? fwd.clone() : perpendicular(target.dir));
    target.fwd.addScaledVector(target.dir, -target.fwd.dot(target.dir)).normalize();

    const sameBody = this.mode === 'body' && this.body === body && !this.flight;
    if (sameBody) {
      this.flight = {
        kind: 'hop',
        t: 0,
        dur: this.reducedMotion ? 0.4 : duration ?? clamp(1.5 + this.dir.angleTo(target.dir) * 1.3, 1.4, 3.6),
        dir0: this.dir.clone(), fwd0: this.fwd.clone(), d0: this.d, tilt0: this.tiltOffset,
        target, onArrive,
      };
      return;
    }
    this._startArc((out) => this.bodyPose(body, target.dir, target.fwd, target.d, target.tiltOffset, out), {
      duration, onArrive, endBody: target,
    });
  }

  flyToSystem({ onArrive, duration } = {}) {
    this.sys.drift = 0.018;
    this._startArc((out) => this.systemPose(out), { duration: duration ?? 3.2, onArrive, endBody: null });
  }

  _startArc(poseFn, { duration, onArrive, endBody }) {
    const from = {
      pos: this.camera.position.clone(),
      look: this.pose.look.clone(),
      up: this.camera.up.clone(),
    };
    const fromBody = this.mode === 'body' ? this.body : null;
    const probe = poseFn({ pos: new THREE.Vector3(), look: new THREE.Vector3(), up: new THREE.Vector3() });
    const distance = from.pos.distanceTo(probe.pos);
    this.flight = {
      kind: 'arc',
      t: 0,
      dur: this.reducedMotion ? 0.5 : duration ?? clamp(2.2 + distance / 170, 2.6, 6.2),
      from, poseFn, onArrive, endBody, fromBody, distance,
      out: { pos: new THREE.Vector3(), look: new THREE.Vector3(), up: new THREE.Vector3() },
    };
    this.world.onFlightStart?.(endBody?.body || null);
  }

  _updateFlight(dt) {
    const fl = this.flight;
    fl.t = Math.min(1, fl.t + dt / fl.dur);
    if (fl.kind === 'hop') {
      const e = smoother(fl.t);
      const tg = fl.target;
      const om = fl.dir0.angleTo(tg.dir);
      if (om > 1e-4) {
        const s = Math.sin(om);
        this.dir.copy(fl.dir0).multiplyScalar(Math.sin((1 - e) * om) / s).addScaledVector(tg.dir, Math.sin(e * om) / s).normalize();
      } else this.dir.copy(tg.dir);
      this.fwd.copy(fl.fwd0).lerp(tg.fwd, e);
      this.fwd.addScaledVector(this.dir, -this.fwd.dot(this.dir)).normalize();
      const bump = Math.sin(fl.t * Math.PI) * om * (this.body.R * 0.8);
      this.d = Math.exp(Math.log(fl.d0) * (1 - e) + Math.log(tg.d) * e) + bump;
      this.dT = this.d;
      this.tiltOffset = this.tiltOffsetT = fl.tilt0 * (1 - e) + tg.tiltOffset * e;
      if (fl.t >= 1) {
        this.d = this.dT = tg.d;
        const done = fl.onArrive;
        this.flight = null;
        done?.();
      }
      return false;
    }

    const e = smoother(fl.t);
    const tg = fl.poseFn(fl.out);
    const L = fl.distance;
    const sun = this.world.sunWorld;
    // Leave along the current body's up vector, arrive from above the target.
    const p0 = fl.from.pos;
    const startOut = fl.fromBody ? _a.copy(p0).sub(fl.fromBody.node.position).normalize() : _a.copy(fl.from.look).sub(p0).normalize();
    const endOut = fl.endBody ? _b.copy(tg.pos).sub(fl.endBody.body.node.position).normalize() : _b.copy(tg.pos).normalize();
    const c1 = new THREE.Vector3().copy(p0).addScaledVector(startOut, L * 0.42);
    const c2 = new THREE.Vector3().copy(tg.pos).addScaledVector(endOut, L * 0.42);
    // Keep clear of the sun if the direct route would graze it.
    const mid = new THREE.Vector3().addVectors(c1, c2).multiplyScalar(0.5);
    const avoid = this.world.sunRadius * 2.4;
    if (mid.distanceTo(sun) < avoid) {
      const side = new THREE.Vector3(0, 1, 0);
      c1.addScaledVector(side, avoid);
      c2.addScaledVector(side, avoid);
    }
    const u = 1 - e;
    const pos = this.camera.position;
    pos.set(0, 0, 0)
      .addScaledVector(p0, u * u * u)
      .addScaledVector(c1, 3 * u * u * e)
      .addScaledVector(c2, 3 * u * e * e)
      .addScaledVector(tg.pos, e * e * e);
    const lookT = sstep(0.05, 0.82, fl.t);
    this.pose.look.copy(fl.from.look).lerp(tg.look, lookT);
    this.camera.up.copy(fl.from.up).lerp(tg.up, sstep(0.15, 0.95, fl.t)).normalize();
    this.camera.lookAt(this.pose.look);

    this.warp = this.reducedMotion ? 0 : Math.sin(Math.PI * clamp(fl.t * 1.04, 0, 1)) ** 2 * clamp(L / 240, 0.25, 1);
    this.camera.fov = this.baseFov + this.warp * 20;
    this.camera.updateProjectionMatrix();

    if (fl.t >= 1) {
      const endBody = fl.endBody;
      const done = fl.onArrive;
      this.flight = null;
      this.warp = 0;
      if (endBody) {
        this._setMode('body', endBody.body);
        this.dir.copy(endBody.dir);
        this.fwd.copy(endBody.fwd);
        this.d = this.dT = endBody.d;
        this.tiltOffset = this.tiltOffsetT = endBody.tiltOffset;
      } else {
        this._setMode('system', null);
      }
      done?.();
    }
    return true;
  }

  _setMode(mode, body) {
    this.mode = mode;
    this.body = body;
    this.onModeChange?.(mode, body);
  }

  // ---- tick -----------------------------------------------------------------------------
  update(dt, keys) {
    const cam = this.camera;
    this.lift += (this.liftT - this.lift) * (1 - Math.exp(-dt * 3));
    if (this.flight) {
      const handled = this._updateFlight(dt);
      if (handled) { this._nearFar(); return; }
    } else if (this.warp > 0) this.warp = 0;

    const k = 1 - Math.exp(-dt * 6.5);
    if (this.mode === 'system') {
      const s = this.sys;
      s.azT += s.drift * dt;
      s.az += (s.azT - s.az) * k;
      s.el += (s.elT - s.el) * k;
      s.dist = Math.exp(Math.log(s.dist) + (Math.log(s.distT) - Math.log(s.dist)) * k);
      this.systemPose(this.pose);
    } else {
      if (!this.flight) {
        const b = this.body;
        this.d = Math.exp(Math.log(this.d) + (Math.log(this.dT) - Math.log(this.d)) * k);
        this.tiltOffset += (this.tiltOffsetT - this.tiltOffset) * k;

        // Keyboard flying, scaled with altitude.
        if (keys) {
          const speed = (Math.min(this.d, b.R * 2) / (b.G ?? b.R)) * dt * 1.1;
          const x = (keys.has('KeyD') || keys.has('ArrowRight') ? 1 : 0) - (keys.has('KeyA') || keys.has('ArrowLeft') ? 1 : 0);
          const y = (keys.has('KeyW') || keys.has('ArrowUp') ? 1 : 0) - (keys.has('KeyS') || keys.has('ArrowDown') ? 1 : 0);
          if (x || y) { this.world.endRide?.(false); this.applyPan(x * speed, y * speed); }
          const q = (keys.has('KeyE') ? 1 : 0) - (keys.has('KeyQ') ? 1 : 0);
          if (q) this.fwd.applyAxisAngle(this.dir, q * dt * 0.9).normalize();
          const z = (keys.has('KeyF') || keys.has('PageDown') ? 1 : 0) - (keys.has('KeyR') || keys.has('PageUp') ? 1 : 0);
          if (z) this.zoom(-z * dt * 900);
        }
        if (this.pan.lengthSq() > 1e-9) {
          this.applyPan(this.pan.x * Math.min(1, dt * 30), this.pan.y * Math.min(1, dt * 30));
          this.pan.multiplyScalar(Math.exp(-dt * 5));
        }
      }
      this.bodyPose(this.body, this.dir, this.fwd, this.d, this.tiltOffset, this.pose);
    }
    cam.position.copy(this.pose.pos);
    cam.up.copy(this.pose.up);
    cam.lookAt(this.pose.look);
    if (cam.fov !== this.baseFov) {
      cam.fov += (this.baseFov - cam.fov) * k;
      if (Math.abs(cam.fov - this.baseFov) < 0.01) cam.fov = this.baseFov;
      cam.updateProjectionMatrix();
    }
    this._nearFar();
  }

  /** Tight near plane on the ground, generous in space; depth precision follows the camera. */
  _nearFar() {
    const cam = this.camera;
    let nearest = Infinity;
    for (const p of this.world.planets) {
      const dist = cam.position.distanceTo(p.node.position) - p.R * 1.32;
      nearest = Math.min(nearest, dist);
    }
    nearest = Math.min(nearest, cam.position.length() - this.world.sunRadius * 1.1);
    const small = this.flight?.endBody?.body || this.body;
    if (small && !small.isPlanet) {
      small.node.getWorldPosition(_a);
      nearest = Math.min(nearest, cam.position.distanceTo(_a) - small.R * 1.6);
    }
    const near = clamp(nearest * 0.25, 0.006, 40);
    if (Math.abs(cam.near - near) > near * 0.05) {
      cam.near = near;
      cam.far = 16000;
      cam.updateProjectionMatrix();
    }
  }
}
