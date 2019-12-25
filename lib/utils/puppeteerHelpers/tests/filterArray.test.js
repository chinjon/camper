const filterArray = require('./../filterArray');

describe('filterArray', () => {
  const arr = ['test', 'string', 'blue']
  it('should return an object', () => {
    expect(typeof filterArray(arr, 'red')).toBe('object');
  });

  it('should return correct filter items', ()=> {
    expect(filterArray(arr, 'test').length).toBe(1);
  });

  it('should return the array with item matching critera', () => {
    expect(filterArray(arr, 'test')[0]).toBe('test');
  });
});