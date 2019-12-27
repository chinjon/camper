const getUserParams = require('./../getUserParams.js');

describe('getUserParams()', () => {
  test('should return a value', () => {
    expect.anything(getUserParams('hello world'));
  });
});
