const setSearch = require('./../setSearch');

describe('setSearch()', () => {
  it('should return correct input', () => {
    expect(setSearch('Google')).toBe('Google');
  });

  it('should return a string', () => {
    expect(typeof setSearch('Google')).toBe('string');
  });
});
