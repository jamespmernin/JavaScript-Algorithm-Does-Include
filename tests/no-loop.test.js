const doesInclude = require('../no-loop')
const fs = require('fs')

describe.each([
  [[1, 2, 3, 4], 3, true],
  [['a', 'e', 'y', 'z'], 'f', false],
  ['hello', 'e', true],
  [[], 'a', false],
  ['mandos', 'mda', true]
])('%# Does arr include x ?', (arr, x, expected) => {
  test('should check if item is in arr', () => {
    expect(doesInclude(arr, x)).toBe(expected)
  })
})

describe('Function should not use loops', () => {
  const file = fs.readFileSync(__dirname + '/../no-loop.js', 'utf-8')
  test('Should not use loops', () => {
    expect(file.toString().includes('for')).toBe(false)
  })
  test('Should not use loops', () => {
    expect(file.toString().includes('while')).toBe(false)
  })
})
