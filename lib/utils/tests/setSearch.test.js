const setSearch = require('./../setSearch');
const assert = require('assert');

describe('setSearch()', () => {
  it('should return correct input', () => {
    assert.strictEqual(setSearch('Google'), 'Google');
  });

  it('should return a string', () => {
    assert.strictEqual(typeof setSearch('Google'), 'string');
  });
});
