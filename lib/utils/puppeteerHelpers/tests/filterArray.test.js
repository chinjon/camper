const filterArray = require('./../filterArray');
const assert = require('assert');

describe('filterArray', () => {
    const arr = ['test', 'string', 'blue']
    it('should return an object', () => {
        assert.strictEqual(typeof filterArray(arr, 'red'), 'object');
    });

    it('should return correct filter items', ()=> {
        assert.strictEqual(filterArray(arr, 'test').length, 1);
    });

    it('should return the array with item matching critera', () => {
        assert.strictEqual(filterArray(arr, 'test')[0], 'test');
    });
});