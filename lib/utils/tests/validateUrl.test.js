const validateUrl = require('./../validateUrl');

describe('validateUrl()', () => {
  it('should return a string if argument is valid', () => {
    expect(typeof validateUrl('http://google.com')).toBe('boolean');
  });
  
  it('should return "true" with a valid url', () => {
    expect(validateUrl('http://google.com')).toBe(true);
  });  
  
  it('should return "false" with a valid url', () => {
    expect(validateUrl('notrealurl.d')).toBe(false);
  });
});
