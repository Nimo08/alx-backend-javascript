// Test cases for calculateNumber
const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', function() {
    it('should return the sum of rounded numbers', function() {
        assert.strictEqual(calculateNumber(1, 3), 4);
        assert.strictEqual(calculateNumber(1, 3.7), 5);
        assert.strictEqual(calculateNumber(1.2, 3.7), 5);
        assert.strictEqual(calculateNumber(1.5, 3.7), 6);
    })
    it('should handle zero values correctly', function() {
        assert.strictEqual(calculateNumber(0, 2.1), 2);
        assert.strictEqual(calculateNumber(8.9, 0), 9);
    })
    it('should handle negative rounded integers', function() {
        assert.strictEqual(calculateNumber(-1.6, -3.7), -6);
        assert.strictEqual(calculateNumber(-7.2, -2.9), -10);
    })
    it('should handle large rounded numbers', function() {
        assert.strictEqual(calculateNumber(21.2, 34.8), 56);
        assert.strictEqual(calculateNumber(345.7, 123.1), 469);
    })
})
