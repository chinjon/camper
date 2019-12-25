const validateUrl = require('./../validateUrl');

describe('validateUrl()', () => {
  it('should return a string if argument is valid', () => {
    expect(typeof validateUrl('http://google.com')).toBe('string');
  });
});
