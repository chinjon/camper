const setRegExpPattern = require('../setRegExpPattern.js');

describe('setRegExPattern()', () => {
  test('should create a RegExp instance', () => {
    expect(setRegExpPattern(/^foo(bar)?$/) instanceof RegExp).toBe(true);
  });
});