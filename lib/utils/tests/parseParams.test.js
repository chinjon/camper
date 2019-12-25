const parseParams = require('./../parseParams');

describe('parseParams()', () => {
  it('should return an array', () => {
    expect(typeof parseParams(['--t=tags'])).toBe('object');
  });
});
