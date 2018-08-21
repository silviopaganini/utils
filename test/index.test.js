const assert = require('assert')
const {
  floor,
  distance,
  round
} = require('../lib/bundle.js')

describe('FLUUUID utils collection', () => {
  it('should floor to 0', () => {
    const res = floor(0.5)
    assert.equal(res, 0)
  })

  it('should floor to 0', () => {
    const res = floor(0.7)
    assert.equal(res, 0)
  })

  it('should calculate distance', () => {
    const res = distance({x: 1, y: 1}, {x: 2, y: 2})
    assert.equal(res, 1.4142135623730951)
  })

  it('should round to 3', () => {
    const res = round(2.5)
    assert.equal(res, 3)
  })

  it('should round to 2', () => {
    const res = round(2.4)
    assert.equal(res, 2)
  })
})
