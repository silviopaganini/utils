(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (factory((global.futils = {})));
}(this, (function (exports) { 'use strict';

  /**
   * distance between 2 vectors
   * @param {Point {x, y}} v1
   * @param {Point {x, y}} v2
   */
  const distance = (v1, v2) => Math.sqrt(Math.pow((v2.x - v1.x), 2) + Math.pow((v2.y - v1.y), 2));

  /**
   * faster Math.floor
   * @param {Number} n
   */
  const floor = (n) => n >> 0;

  /**
   * faster Math.round
   * @param {Number} n
   */
  const round = (n) => ~~(n + 0.5);

  /**
   * flip a coin // n for probability
   * @param {Number} n
   */
  const coin = (n = 0.5) => Math.random() < n;

  /**
   * random 1 or -1 // n for probability
   * @param {Number} n
   */
  const coinN = (n = 0.5) => Math.random() < n ? 1 : -1;

  /**
   * to radians
   * @param {Number} n
   */
  const rad = (n) => n * Math.PI / 180;

  /**
   * random in range
   * @param {Number} max
   * @param {Number} min
   */
  const random = (max, min = 0) => Math.random() * (max - min) + min;

  /**
   * round random in range
   * @param {Number} max
   * @param {Number} min
   */
  const rrandom = (max, min = 0) => ~~(Math.random() * (max - min) + min + 0.5);

  /**
   * generate number 0-9999
   * @param {Number} nums
   */
  const genNum = (nums) => {
    var maxNum = '';
    var i = 0;
    while (i < nums) {
      maxNum += '9';
      i++;
    }

    var a = (Math.round(Math.random() * Number(maxNum))).toString();
    var result = '';

    i = a.length;
    while (i < nums) {
      result += '0';
      i++;
    }

    result += a.toString();
    return result
  };

  /**
   * random array
   * @param {Array} elements
   */
  const randomArray = (elements) => {
    var rr;
    if (typeof elements === 'number') {
      rr = [];
      for (var i = elements - 1; i >= 0; i--) rr.push(i);
    } else {
      rr = elements;
    }

    for (i = rr.length; i--;) rr.push(rr.splice(Math.floor(Math.random() * (i + 1)), 1)[0]);
    return rr
  };

  /**
   * clamp number
   * @param {Number} val
   * @param {Number} min
   * @param {Number} max
   */
  const clamp = (val, min, max) => Math.max(min, Math.min(max, val));

  /**
   * check if number is close to another, based on threshold
   * @param {Number} val
   * @param {Number} target
   * @param {Number} threshold
   */
  const near = (val, target, threshold) => (Math.abs(val - target) <= threshold);

  /**
   * map value
   * @param {Number} value
   * @param {Number} inMin
   * @param {Number} inMax
   * @param {Number} outMin
   * @param {Number} outMax
   */
  const map = (value, inMin, inMax, outMin, outMax) => {
  // clamping, then norm, then lerp, in one to avoid stack calls
    return ((Math.max(inMin, Math.min(inMax, value)) - inMin) / (inMax - inMin)) * (outMax - outMin) + outMin
  // return this.lerp( this.norm( this.clamp( value , inMin , inMax ) , inMin , inMax ) , outMin , outMax );
  };

  /**
   * lerp - get percentage ( 0 - 1 ) between start and end
   * @param {Number} ratio
   * @param {Number} start
   * @param {Number} end
   */
  const lerp = (ratio, start, end) => start + (end - start) * ratio;

  /**
   * get normamlized ratio ( 0-1 ) of number in a range ( opposite of lerp )
   * @param {Number} val
   * @param {Number} start
   * @param {Number} end
   */
  const norm = (val, start, end) => ((val - start) / (end - start));

  /**
   * count steps
   * @param {Number} val
   * @param {Number} stepSize
   * @param {Number} overflow
   */
  const steps = (val, stepSize, overflow) => ((val / stepSize >> 0) % overflow);

  /**
   * return true/false if number in between
   * @param {Number} n1
   * @param {Number} n2
   * @param {Number} n3
   */
  const between = (n1, n2, n3) => isNaN(n1) || isNaN(n2) || isNaN(n3) ? NaN : n1 >= Math.min(n2, n3) && n1 <= Math.max(n2, n3);

  exports.distance = distance;
  exports.floor = floor;
  exports.round = round;
  exports.coin = coin;
  exports.coinN = coinN;
  exports.rad = rad;
  exports.random = random;
  exports.rrandom = rrandom;
  exports.genNum = genNum;
  exports.randomArray = randomArray;
  exports.clamp = clamp;
  exports.near = near;
  exports.map = map;
  exports.lerp = lerp;
  exports.norm = norm;
  exports.steps = steps;
  exports.between = between;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
