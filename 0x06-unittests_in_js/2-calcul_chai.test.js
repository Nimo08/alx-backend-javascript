const expect = require('chai').expect;
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', function() {
    it('should handle addition', function() {
        expect(calculateNumber('SUM', 1.6, 3.1)).to.equal(5);
    });
    it('should handle subtraction', function() {
        expect(calculateNumber('SUBTRACT', 7.9, 4.6)).to.equal(3);
    })
    it('should handle division', function() {
        expect(calculateNumber('DIVIDE', 5.7, 2.2)).to.equal(3);
    })
    it('should handle zero values correctly', function() {
        expect(calculateNumber('SUM', 0, 2.1)).to.equal(2);
        expect(calculateNumber('SUBTRACT', 8.9, 0)).to.equal(9);
        expect(calculateNumber('DIVIDE', 9.1, 0)).to.equal('Error')
    })
    it('should handle large rounded numbers', function() {
        expect(calculateNumber('SUM', 21.2, 34.8)).to.equal(56);
        expect(calculateNumber('SUBTRACT', 345.7, 123.1)).to.equal(223);
        expect(calculateNumber('DIVIDE', 150.2, 75.3)).to.equal(2);
    })
    it('should handle negative rounded integers', function() {
        expect(calculateNumber('SUM', -1.6, -3.7)).to.equal(-6);
        expect(calculateNumber('SUBTRACT', -7.2, -2.9)).to.equal(-4);
        expect(calculateNumber('DIVIDE', -9.3, 3.1)).to.equal(-3);
    })
})
