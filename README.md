# FLUUUID Math utils

[![npm version](https://badge.fury.io/js/%40fluuuid%2Fmath-utils.svg)](https://badge.fury.io/js/%40fluuuid%2Fmath-utils)

A collection of utility functions to make your JavaScript and TypeScript development smoother.

## Table of Contents

- [FLUUUID Math utils](#fluuuid-math-utils)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [Usage](#usage)
    - [UMD](#umd)
  - [API Reference](#api-reference)
    - [`distance`](#distance)
    - [`coin`](#coin)
    - [`coinN`](#coinn)
    - [`rad`](#rad)
    - [`random`](#random)
    - [`rrandom`](#rrandom)
    - [`genNum`](#gennum)
    - [`randomArray`](#randomarray)
    - [`clamp`](#clamp)
    - [`near`](#near)
    - [`map`](#map)
    - [`lerp`](#lerp)
    - [`norm`](#norm)
    - [`steps`](#steps)
    - [`between`](#between)

## Installation

```sh
npm add @fluuuid/math-utils
```

## Usage

```ts
import { random } from '@fluuuid/math-utils'

const r = random(1, 2)
console.log(r) // 1.4471453026086136
```

### UMD

```html
<script src="./lib/bundle.umd.js"></script>
<script>
    const r = futils.random(1, 2)
    console.log(r) // 1.4471453026086136
</script>

```

## API Reference

### `distance`

Calculate the distance between two points.
- Parameters:
  - `v1` (Point): The first point `{x, y}`.
  - `v2` (Point): The second point `{x, y}`.
- Returns: Number - The distance between the points.

### `coin`

Return a boolean value based on a given probability.
- Parameters: None
- Returns: Boolean.

### `coinN`

Return 1 or -1 based on a given probability.
- Parameters: None
- Returns: Number.

### `rad`

Convert an angle from degrees to radians.
- Parameters:
  - `angle` (Number): Angle in degrees.
- Returns: Number - Angle in radians.

### `random`

Get a random number between the given range.
- Parameters:
  - `min` (Number): Minimum number.
  - `max` (Number): Maximum number.
- Returns: Number.

### `rrandom`

Get a random number including the given range.
- Parameters:
  - `min` (Number): Minimum number.
  - `max` (Number): Maximum number.
- Returns: Number.

### `genNum`

Generate a random number with n digits.
- Parameters:
  - `n` (Number): Number of digits.
- Returns: Number.

### `randomArray`

Get a random item from the provided array.
- Parameters:
  - `arr` (Array): Input array.
- Returns: Element from the array.

### `clamp`

Clamp a number between two values.
- Parameters:
  - `val` (Number): Input value.
  - `min` (Number): Minimum number.
  - `max` (Number): Maximum number.
- Returns: Number.

### `near`

Check if a number is near another within a given range.
- Parameters:
  - `value` (Number): Input value.
  - `target` (Number): Target value.
  - `range` (Number): Allowed range.
- Returns: Boolean.

### `map`

Map a number from one range to another.
- Parameters:
  - `value` (Number): Input value.
  - `start1` (Number): Start of the original range.
  - `stop1` (Number): End of the original range.
  - `start2` (Number): Start of the target range.
  - `stop2` (Number): End of the target range.
- Returns: Number.

### `lerp`

Linearly interpolate between two numbers.
- Parameters:
  - `value` (Number): The interpolation amount (usually between 0 and 1).
  - `start` (Number): Start number.
  - `end` (Number): End number.
- Returns: Number.

### `norm`

Normalize a number within a given range.
- Parameters:
  - `value` (Number): Input value.
  - `start` (Number): Start of the range.
  - `stop` (Number): End of the range.
- Returns: Number.

### `steps`

Return the number of steps between two numbers given a step size.
- Parameters:
  - `start` (Number): Start number.
  - `step` (Number): Step size.
  - `end` (Number): End number.
- Returns: Number.

### `between`

Check if a number is between two other numbers.
- Parameters:
  - `value` (Number): Input value.
  - `min` (Number): Minimum number.
  - `max` (Number): Maximum number.
- Returns: Boolean.
