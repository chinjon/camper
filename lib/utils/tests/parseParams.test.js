const parseParams = require('./../parseParams');
const assert = require('assert');

describe('parseParams()', () => {
    it('should return an array', () => {
        assert.strictEqual(typeof parseParams(['--t=tags']), 'object');
    });
});
