// The Equal Earth projection: areas stay true, so a big city looks big wherever it lies.

const A1 = 1.340264, A2 = -0.081106, A3 = 0.000893, A4 = 0.003796;
const M = Math.sqrt(3) / 2;

export const MAP_X = 2.7064;
export const MAP_Y = 1.3173;

/** lon and lat in radians → map coordinates. */
export function project(lon, lat, out = [0, 0]) {
  const theta = Math.asin(M * Math.sin(lat));
  const t2 = theta * theta, t6 = t2 * t2 * t2;
  out[0] = (lon * Math.cos(theta)) / (M * (A1 + 3 * A2 * t2 + t6 * (7 * A3 + 9 * A4 * t2)));
  out[1] = theta * (A1 + A2 * t2 + t6 * (A3 + A4 * t2));
  return out;
}

/** The latitude parameter for a map row, solved once per row when drawing the terrain. */
export function thetaForY(y) {
  let theta = y / A1;
  for (let i = 0; i < 8; i++) {
    const t2 = theta * theta, t6 = t2 * t2 * t2;
    const f = theta * (A1 + A2 * t2 + t6 * (A3 + A4 * t2)) - y;
    const df = A1 + 3 * A2 * t2 + t6 * (7 * A3 + 9 * A4 * t2);
    theta -= f / df;
  }
  return theta;
}

/** Map coordinates → lon and lat, or null outside the outline of the world. */
export function unproject(x, y, out = [0, 0]) {
  if (Math.abs(y) > MAP_Y) return null;
  const theta = thetaForY(y);
  const t2 = theta * theta, t6 = t2 * t2 * t2;
  const lon = (x * M * (A1 + 3 * A2 * t2 + t6 * (7 * A3 + 9 * A4 * t2))) / Math.cos(theta);
  if (Math.abs(lon) > Math.PI) return null;
  out[0] = lon;
  out[1] = Math.asin(Math.sin(theta) / M);
  return out;
}

export function wrapLon(lon) {
  let l = lon;
  while (l > Math.PI) l -= Math.PI * 2;
  while (l < -Math.PI) l += Math.PI * 2;
  return l;
}

/**
 * The meridian to centre a map on, so that its edge falls in the widest gap between cities.
 * Then no city, and few roads, get torn in two by the seam.
 */
export function bestCentre(longitudes) {
  if (!longitudes.length) return 0;
  const sorted = [...longitudes].map(wrapLon).sort((a, b) => a - b);
  let widest = -1, seam = 0;
  for (let i = 0; i < sorted.length; i++) {
    const a = sorted[i], b = i + 1 < sorted.length ? sorted[i + 1] : sorted[0] + Math.PI * 2;
    if (b - a > widest) { widest = b - a; seam = (a + b) / 2; }
  }
  return wrapLon(seam + Math.PI);
}
