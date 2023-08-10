interface Point {
  x: number;
  y: number;
}

/**
 * Calculate the distance between two points.
 * @param v1 - The first point {x, y}.
 * @param v2 - The second point {x, y}.
 * @returns The distance between the points.
 */
export const distance = (v1: Point, v2: Point): number => {
  const dx = v2.x - v1.x;
  const dy = v2.y - v1.y;
  return Math.sqrt(dx * dx + dy * dy);
};

export const coin = (prob: number = 0.5): boolean => Math.random() < prob;

export const coinN = (prob: number = 0.5): number =>
  Math.random() < prob ? 1 : -1;

export const rad = (deg: number): number => (deg * Math.PI) / 180;

export const random = (max: number, min: number = 0): number =>
  Math.random() * (max - min) + min;

export const rrandom = (max: number, min: number = 0): number =>
  Math.round(random(max, min));

export const genNum = (nums: number): string => {
  if (nums === 0) return '';
  const maxNum = parseInt('9'.repeat(nums));
  return String(Math.round(Math.random() * maxNum)).padStart(nums, '0');
};

export const randomArray = (elements: number | any[]): any[] => {
  if (typeof elements === 'number') {
    elements = [...Array(elements).keys()];
  }
  return elements.sort(() => Math.random() - 0.5);
};

export const clamp = (val: number, min: number, max: number): number => {
  if (min > max) {
    [min, max] = [max, min]; // Swap min and max
  }
  return Math.max(min, Math.min(max, val));
};

export const near = (val: number, target: number, threshold: number): boolean =>
  Math.abs(val - target) <= threshold;

export const map = (
  value: number,
  inMin: number,
  inMax: number,
  outMin: number,
  outMax: number,
): number => {
  const ratio = (clamp(value, inMin, inMax) - inMin) / (inMax - inMin);
  return outMin + ratio * (outMax - outMin);
};

export const lerp = (ratio: number, start: number, end: number): number =>
  start + (end - start) * ratio;

export const norm = (val: number, start: number, end: number): number =>
  (val - start) / (end - start);

export const steps = (
  val: number,
  stepSize: number,
  overflow: number,
): number => Math.floor(val / stepSize) % overflow;

export const between = (n1: number, n2: number, n3: number): boolean => {
  const min = Math.min(n2, n3);
  const max = Math.max(n2, n3);
  return n1 >= min && n1 <= max;
};
