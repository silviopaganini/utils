'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/**
 * Calculate the distance between two points.
 * @param v1 - The first point {x, y}.
 * @param v2 - The second point {x, y}.
 * @returns The distance between the points.
 */
const distance = (v1, v2) => {
    const dx = v2.x - v1.x;
    const dy = v2.y - v1.y;
    return Math.sqrt(dx * dx + dy * dy);
};
const coin = (prob = 0.5) => Math.random() < prob;
const coinN = (prob = 0.5) => Math.random() < prob ? 1 : -1;
const rad = (deg) => (deg * Math.PI) / 180;
const random = (max, min = 0) => Math.random() * (max - min) + min;
const rrandom = (max, min = 0) => Math.round(random(max, min));
const genNum = (nums) => {
    if (nums === 0)
        return '';
    const maxNum = parseInt('9'.repeat(nums));
    return String(Math.round(Math.random() * maxNum)).padStart(nums, '0');
};
const randomArray = (elements) => {
    if (typeof elements === 'number') {
        elements = [...Array(elements).keys()];
    }
    return elements.sort(() => Math.random() - 0.5);
};
const clamp = (val, min, max) => {
    if (min > max) {
        [min, max] = [max, min]; // Swap min and max
    }
    return Math.max(min, Math.min(max, val));
};
const near = (val, target, threshold) => Math.abs(val - target) <= threshold;
const map = (value, inMin, inMax, outMin, outMax) => {
    const ratio = (clamp(value, inMin, inMax) - inMin) / (inMax - inMin);
    return outMin + ratio * (outMax - outMin);
};
const lerp = (ratio, start, end) => start + (end - start) * ratio;
const norm = (val, start, end) => (val - start) / (end - start);
const steps = (val, stepSize, overflow) => Math.floor(val / stepSize) % overflow;
const between = (n1, n2, n3) => {
    const min = Math.min(n2, n3);
    const max = Math.max(n2, n3);
    return n1 >= min && n1 <= max;
};

exports.between = between;
exports.clamp = clamp;
exports.coin = coin;
exports.coinN = coinN;
exports.distance = distance;
exports.genNum = genNum;
exports.lerp = lerp;
exports.map = map;
exports.near = near;
exports.norm = norm;
exports.rad = rad;
exports.random = random;
exports.randomArray = randomArray;
exports.rrandom = rrandom;
exports.steps = steps;
//# sourceMappingURL=bundle.cjs.js.map
