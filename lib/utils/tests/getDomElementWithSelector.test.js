const getDomElementWithSelector = require('./../getDomElementWithSelector.js');
const testDom = require('./data/testDom.js');

describe('getDomElementWithSelector()', () => {
  beforeAll(() => {
    document.body.innerHTML = testDom;
  });

  test('should return an object', () => {
    expect(typeof getDomElementWithSelector('footer')).toBe('object');
  });

  test('should return an DOM element with a selector that exists on DOM - id', () => {
    expect(getDomElementWithSelector('#paragraph-1')).toBeTruthy();
  });

  test('should return an DOM element with a selector that exists on DOM - class', () => {
    expect(getDomElementWithSelector('.paragraph')).toBeTruthy();
  });
});