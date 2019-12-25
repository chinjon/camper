const getAllDomElementsWithSelector = require('../getAllDomElementsWithSelector.js');
const testDom = require('./data/testDom.js');

describe('getAllDomElementsWithSelector()', () => {
  beforeAll(() => {
    document.body.innerHTML = testDom;
  });

  it('should return an array', () => {
    expect(typeof getAllDomElementsWithSelector('.paragraph')).toBe('object');
  });

  it('should return the correct number of elements with a given selector - class', () => {
    expect(getAllDomElementsWithSelector('.paragraph').length).toBe(2);
  });

  it('should return the correct number of elements with a given selector - id', () => {
    expect(getAllDomElementsWithSelector('#paragraph-1').length).toBe(1);
  });

  it('should return the correct number of elements with a given selector - tag', () => {
    expect(getAllDomElementsWithSelector('footer').length).toBe(1);
  });

  it('should return a the correct number of elements with a given selector that does not exist', () => {
    expect(getAllDomElementsWithSelector('.not-exist').length).toBe(0);
  });
});