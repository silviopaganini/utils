# FLUUUID Math utils

[![npm version](https://badge.fury.io/js/%40fluuuid%2Fmath-utils.svg)](https://badge.fury.io/js/%40fluuuid%2Fmath-utils)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install
```bash
$ yarn add @fluuuid/math-utils --save
```

## Usage

Floor
```js
import {floor} from '@fluuuid/math-utils'
floor(0.5)
```


Round
```js
import {round} from '@fluuuid/math-utils'
round(0.6)
```


Flip a coin
```js
import {coin} from '@fluuuid/math-utils'
coin()
```


Flip a coin -1 / 1:
```js
import {coinN} from '@fluuuid/math-utils'
coinN()
```


Angle to Radians
```js
import {rad} from '@fluuuid/math-utils'
rad(35)
```


Random number in range:
```js
import {random} from '@fluuuid/math-utils'
random(1, 2)
```

Round Random number in range:
```js
import {rrandom} from '@fluuuid/math-utils'
rrandom(1, 2)
```


Clamp
```js
import {clamp} from '@fluuuid/math-utils'
clamp(0.5, 1, 2)
```


Near
```js
import {near} from '@fluuuid/math-utils'
near(0.5, 1, 2)
```


Map
```js
import {map} from '@fluuuid/math-utils'
map(1.5, 1, 2, 3, 4)
```


Lerp
```js
import {lerp} from '@fluuuid/math-utils'
lerp(0.5, 1, 2)
```


Normalize
```js
import {norm} from '@fluuuid/math-utils'
norm(0.5, 1, 2)
```


Steps
```js
import {steps} from '@fluuuid/math-utils'
steps(1, 0.1, 2)
```


Between
```js
import {between} from '@fluuuid/math-utils'
between(0.5, 1, 2)
```

Randomise Array
```js
import {randomArray} from '@fluuuid/math-utils'
const arr = ["a", "b", "c", 'd', 'e', 'f']
const rr = randomArray(arr)
