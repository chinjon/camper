const validateUrl = require('./../validateUrl');
const assert = require('assert');

describe('validateUrl()', () => {
  it('should return a string if argument is valid', () => {
    assert.strictEqual(typeof validateUrl('http://google.com'), 'string');
  });
});
