const sum = require('./sum');

describe('sum', () => {
  test('sum of 4 + 5', () => {
    expect(sum(4, 5)).toEqual(9);
  })
  test('sum of 0 + 0', () => {
    expect(sum(0, 0)).toEqual(0);
  })
  test('error', () => {
    expect(() => {sum()}).toThrow();
  })
  test('error mensage', () => {
    expect(() => {sum()}).toThrowError(new Error('parameters must be numbers'));
  })
})