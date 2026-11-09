// A generative ambient score, synthesised live. Each world has its own chord and timbre,
// and the sound of the wind fades in as you enter an atmosphere. Off until asked for.

const CHORDS = {
  system: [55, 82.41, 110, 164.81],
  terra: [65.41, 98, 130.81, 196],
  vektor: [55, 110, 164.81, 233.08],
  ignis: [41.2, 61.74, 82.41, 123.47],
  prisma: [87.31, 130.81, 174.61, 261.63],
  myzel: [51.91, 77.78, 103.83, 155.56],
  auris: [58.27, 87.31, 116.54, 174.61],
  thalassa: [73.42, 110, 146.83, 220],
  kronos: [49, 73.42, 98, 146.83],
  sylva: [69.3, 103.83, 138.59, 207.65],
  nimbus: [77.78, 116.54, 155.56, 233.08],
  selene: [46.25, 69.3, 92.5, 138.59],
  lanterna: [61.74, 92.5, 123.47, 185],
  apis: [82.41, 123.47, 164.81, 246.94],
  lithos: [43.65, 65.41, 87.31, 130.81],
  fulmen: [38.89, 58.27, 77.78, 116.54],
  palus: [55, 77.78, 110, 155.56],
};

export class Ambience {
  constructor() {
    this.ctx = null;
    this.on = false;
  }

  start() {
    if (this.ctx) {
      this.ctx.resume();
      this.master.gain.setTargetAtTime(0.5, this.ctx.currentTime, 1.2);
      this.on = true;
      return;
    }
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return;
    const ctx = new AC();
    this.ctx = ctx;
    this.master = ctx.createGain();
    this.master.gain.value = 0;
    const filter = ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.value = 600;
    filter.Q.value = 0.6;
    this.filter = filter;

    // A small feedback delay, standing in for the reverb of a very large room.
    const delay = ctx.createDelay(2);
    delay.delayTime.value = 0.61;
    const fb = ctx.createGain();
    fb.gain.value = 0.46;
    const wet = ctx.createGain();
    wet.gain.value = 0.4;
    filter.connect(this.master);
    filter.connect(delay);
    delay.connect(fb);
    fb.connect(delay);
    delay.connect(wet);
    wet.connect(this.master);
    this.master.connect(ctx.destination);

    // Pad voices: two detuned oscillators each, breathing slowly.
    this.voices = CHORDS.system.map((freq, i) => {
      const a = ctx.createOscillator(), b = ctx.createOscillator();
      a.type = 'sine'; b.type = 'triangle';
      a.frequency.value = freq; b.frequency.value = freq * 1.003;
      const gain = ctx.createGain();
      gain.gain.value = 0.11 / (1 + i * 0.5);
      const lfo = ctx.createOscillator();
      lfo.frequency.value = 0.03 + i * 0.017;
      const lfoGain = ctx.createGain();
      lfoGain.gain.value = 0.045 / (1 + i * 0.5);
      lfo.connect(lfoGain);
      lfoGain.connect(gain.gain);
      a.connect(gain); b.connect(gain);
      gain.connect(filter);
      a.start(); b.start(); lfo.start();
      return { a, b };
    });

    // Wind: filtered noise, audible only inside an atmosphere.
    const len = ctx.sampleRate * 3;
    const buf = ctx.createBuffer(1, len, ctx.sampleRate);
    const data = buf.getChannelData(0);
    let last = 0;
    for (let i = 0; i < len; i++) {
      last = last * 0.985 + (Math.random() * 2 - 1) * 0.015;
      data[i] = last * 8;
    }
    const noise = ctx.createBufferSource();
    noise.buffer = buf;
    noise.loop = true;
    const windFilter = ctx.createBiquadFilter();
    windFilter.type = 'bandpass';
    windFilter.frequency.value = 380;
    windFilter.Q.value = 0.5;
    this.wind = ctx.createGain();
    this.wind.gain.value = 0;
    noise.connect(windFilter);
    windFilter.connect(this.wind);
    this.wind.connect(this.master);
    noise.start();

    this.master.gain.setTargetAtTime(0.5, ctx.currentTime, 1.6);
    this.on = true;
    if (this.pendingChord) this.setWorld(this.pendingChord);
  }

  stop() {
    if (!this.ctx) return;
    this.master.gain.setTargetAtTime(0, this.ctx.currentTime, 0.5);
    this.on = false;
  }

  toggle() {
    if (this.on) this.stop();
    else this.start();
    return this.on;
  }

  setWorld(id) {
    this.pendingChord = id;
    if (!this.ctx) return;
    const chord = CHORDS[id] || CHORDS.system;
    const t = this.ctx.currentTime;
    this.voices.forEach((v, i) => {
      v.a.frequency.setTargetAtTime(chord[i], t, 2.4);
      v.b.frequency.setTargetAtTime(chord[i] * 1.003, t, 2.4);
    });
  }

  /** 0 in space, 1 at street level. */
  setAtmosphere(amount) {
    if (!this.ctx) return;
    const t = this.ctx.currentTime;
    this.wind.gain.setTargetAtTime(amount * 0.1, t, 0.8);
    this.filter.frequency.setTargetAtTime(420 + amount * 900, t, 1.2);
  }
}
