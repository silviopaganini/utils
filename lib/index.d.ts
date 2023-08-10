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
export declare const distance: (v1: Point, v2: Point) => number;
export declare const coin: (prob?: number) => boolean;
export declare const coinN: (prob?: number) => number;
export declare const rad: (deg: number) => number;
export declare const random: (max: number, min?: number) => number;
export declare const rrandom: (max: number, min?: number) => number;
export declare const genNum: (nums: number) => string;
export declare const randomArray: (elements: number | any[]) => any[];
export declare const clamp: (val: number, min: number, max: number) => number;
export declare const near: (val: number, target: number, threshold: number) => boolean;
export declare const map: (value: number, inMin: number, inMax: number, outMin: number, outMax: number) => number;
export declare const lerp: (ratio: number, start: number, end: number) => number;
export declare const norm: (val: number, start: number, end: number) => number;
export declare const steps: (val: number, stepSize: number, overflow: number) => number;
export declare const between: (n1: number, n2: number, n3: number) => boolean;
export {};
