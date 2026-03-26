'use strict'

const test = require('node:test')
const assert = require('node:assert')
const add = require('./src/index.js')

test('sum of 1 and 2 should be 3', () => {
    // arrange
    const a = 1
    const b = 2
    // act
    const result = add(a, b)
    // assert
    assert.strictEqual(result, 3)
})