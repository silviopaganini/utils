/**
 * distance between 2 vectors
 * @param {Point {x, y}} v1
 * @param {Point {x, y}} v2
 */
var distance = function distance(v1, v2) {
  return Math.sqrt(Math.pow(v2.x - v1.x, 2) + Math.pow(v2.y - v1.y, 2));
};

/**
 * faster Math.floor
 * @param {Number} n
 */
var floor = function floor(n) {
  return n >> 0;
};

/**
 * faster Math.round
 * @param {Number} n
 */
var round = function round(n) {
  return ~~(n + 0.5);
};

/**
 * flip a coin // n for probability
 * @param {Number} n
 */
var coin = function coin() {
  var n = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0.5;
  return Math.random() < n;
};

/**
 * random 1 or -1 // n for probability
 * @param {Number} n
 */
var coinN = function coinN() {
  var n = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0.5;
  return Math.random() < n ? 1 : -1;
};

/**
 * to radians
 * @param {Number} n
 */
var rad = function rad(n) {
  return n * Math.PI / 180;
};

/**
 * random in range
 * @param {Number} max
 * @param {Number} min
 */
var random = function random(max) {
  var min = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  return Math.random() * (max - min) + min;
};

/**
 * round random in range
 * @param {Number} max
 * @param {Number} min
 */
var rrandom = function rrandom(max) {
  var min = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  return ~~(Math.random() * (max - min) + min + 0.5);
};

/**
 * generate number 0-9999
 * @param {Number} nums
 */
var genNum = function genNum(nums) {
  var maxNum = '';
  var i = 0;
  while (i < nums) {
    maxNum += '9';
    i++;
  }

  var a = Math.round(Math.random() * Number(maxNum)).toString();
  var result = '';

  i = a.length;
  while (i < nums) {
    result += '0';
    i++;
  }

  result += a.toString();
  return result;
};

/**
 * random array
 * @param {Array} elements
 */
var randomArray = function randomArray(elements) {
  var rr;
  if (typeof elements === 'number') {
    rr = [];
    for (var i = elements - 1; i >= 0; i--) {
      rr.push(i);
    }
  } else {
    rr = elements;
  }

  for (i = rr.length; i--;) {
    rr.push(rr.splice(Math.floor(Math.random() * (i + 1)), 1)[0]);
  }return rr;
};

/**
 * clamp number
 * @param {Number} val
 * @param {Number} min
 * @param {Number} max
 */
var clamp = function clamp(val, min, max) {
  return Math.max(min, Math.min(max, val));
};

/**
 * check if number is close to another, based on threshold
 * @param {Number} val
 * @param {Number} target
 * @param {Number} threshold
 */
var near = function near(val, target, threshold) {
  return Math.abs(val - target) <= threshold;
};

/**
 * map value
 * @param {Number} value
 * @param {Number} inMin
 * @param {Number} inMax
 * @param {Number} outMin
 * @param {Number} outMax
 */
var map = function map(value, inMin, inMax, outMin, outMax) {
  // clamping, then norm, then lerp, in one to avoid stack calls
  return (Math.max(inMin, Math.min(inMax, value)) - inMin) / (inMax - inMin) * (outMax - outMin) + outMin;
  // return this.lerp( this.norm( this.clamp( value , inMin , inMax ) , inMin , inMax ) , outMin , outMax );
};

/**
 * lerp - get percentage ( 0 - 1 ) between start and end
 * @param {Number} ratio
 * @param {Number} start
 * @param {Number} end
 */
var lerp = function lerp(ratio, start, end) {
  return start + (end - start) * ratio;
};

/**
 * get normamlized ratio ( 0-1 ) of number in a range ( opposite of lerp )
 * @param {Number} val
 * @param {Number} start
 * @param {Number} end
 */
var norm = function norm(val, start, end) {
  return (val - start) / (end - start);
};

/**
 * count steps
 * @param {Number} val
 * @param {Number} stepSize
 * @param {Number} overflow
 */
var steps = function steps(val, stepSize, overflow) {
  return (val / stepSize >> 0) % overflow;
};

/**
 * return true/false if number in between
 * @param {Number} n1
 * @param {Number} n2
 * @param {Number} n3
 */
var between = function between(n1, n2, n3) {
  return isNaN(n1) || isNaN(n2) || isNaN(n3) ? NaN : n1 >= Math.min(n2, n3) && n1 <= Math.max(n2, n3);
};

export { distance, floor, round, coin, coinN, rad, random, rrandom, genNum, randomArray, clamp, near, map, lerp, norm, steps, between };
