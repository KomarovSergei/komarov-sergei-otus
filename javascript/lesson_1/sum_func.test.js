/* eslint-disable no-undef */
const sum = require('./sum_func');

test('check sum(0)(1)() to equal 1', () => {
  expect(sum(0)(1)()).toBe(1);
});

test('sum(1)(2)(3)() to equal 6', () => {
  expect(sum(1)(2)(3)()).toBe(6);
});
