import {
  distance,
  coin,
  coinN,
  rad,
  random,
  rrandom,
  genNum,
  randomArray,
  clamp,
  near,
  map,
  lerp,
  norm,
  steps,
  between,
} from './index';

describe('Utils functions', () => {
  describe('distance', () => {
    it('should calculate the distance between two points', () => {
      const point1 = { x: 0, y: 0 };
      const point2 = { x: 3, y: 4 };
      expect(distance(point1, point2)).toBe(5);
    });
  });

  describe('coin', () => {
    it('should return a boolean', () => {
      expect(typeof coin()).toBe('boolean');
    });
  });

  describe('coinN', () => {
    it('should return 1 or -1', () => {
      expect([1, -1]).toContain(coinN());
    });
  });

  describe('rad', () => {
    it('should convert degrees to radians', () => {
      expect(rad(180)).toBe(Math.PI);
    });
  });

  describe('random', () => {
    it('should return a random number between given range', () => {
      const res = random(5, 10);
      expect(res).toBeGreaterThanOrEqual(5);
      expect(res).toBeLessThan(10);
    });
  });

  describe('rrandom', () => {
    it('should return a rounded random number between given range', () => {
      const res = rrandom(5, 10);
      expect(res).toBeGreaterThanOrEqual(5);
      expect(res).toBeLessThanOrEqual(10);
    });
  });

  describe('genNum', () => {
    it('should generate a number of specified length', () => {
      expect(genNum(5).length).toBe(5);
    });
  });

  describe('randomArray', () => {
    it('should shuffle an array', () => {
      const arr = [1, 2, 3, 4, 5];
      const res = randomArray(arr);
      expect(res.length).toBe(arr.length);
    });
  });

  describe('clamp', () => {
    it('should clamp a value between two numbers', () => {
      expect(clamp(5, 10, 20)).toBe(10);
      expect(clamp(15, 10, 20)).toBe(15);
      expect(clamp(25, 10, 20)).toBe(20);
    });
  });

  describe('near', () => {
    it('should check if a number is close to another based on threshold', () => {
      expect(near(10, 12, 3)).toBe(true);
      expect(near(10, 14, 3)).toBe(false);
    });
  });

  describe('map', () => {
    it('should map a value from one range to another', () => {
      expect(map(50, 0, 100, 0, 200)).toBe(100);
      expect(map(25, 0, 100, 0, 200)).toBe(50);
    });
  });

  describe('lerp', () => {
    it('should linearly interpolate between two values', () => {
      expect(lerp(0.5, 0, 10)).toBe(5);
      expect(lerp(0.25, 0, 10)).toBe(2.5);
    });
  });

  describe('norm', () => {
    it('should return a normalized ratio of a value in a range', () => {
      expect(norm(5, 0, 10)).toBe(0.5);
      expect(norm(2.5, 0, 10)).toBe(0.25);
    });
  });

  describe('steps', () => {
    it('should count steps based on stepSize and overflow', () => {
      expect(steps(10, 2, 5)).toBe(0);
      expect(steps(3, 2, 5)).toBe(1);
    });
  });

  describe('between', () => {
    it('should check if a number is between two other numbers', () => {
      expect(between(5, 3, 7)).toBe(true);
      expect(between(2, 3, 7)).toBe(false);
    });
    it('should check inclusivity with the boundary numbers', () => {
      expect(between(3, 3, 7)).toBe(true);
      expect(between(7, 3, 7)).toBe(true);
    });
    it('should work regardless of the order of boundary numbers', () => {
      expect(between(5, 7, 3)).toBe(true);
    });
  });

  describe('edge cases', () => {
    it('distance should return 0 for two identical points', () => {
      const point = { x: 3, y: 4 };
      expect(distance(point, point)).toBe(0);
    });
    it('genNum should handle edge case of 0', () => {
      expect(genNum(0)).toBe('');
    });
    it('randomArray should return an empty array for 0', () => {
      expect(randomArray(0).length).toBe(0);
    });
    it('clamp should handle min greater than max', () => {
      expect(clamp(5, 20, 10)).toBe(10);
    });
  });
});
