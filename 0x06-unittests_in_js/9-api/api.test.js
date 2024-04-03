const request = require('request');
const { expect } = require('chai');

describe('Index Page', function() {
    const apiUrl = 'http://localhost:7865';
    it('should return status code 200 and correct GET / message', function(done) {
        request.get(`${apiUrl}/`, (_error, res, body) => {
            expect(res.statusCode).to.be.equal(200);
            expect(body).to.be.equal('Welcome to the payment system');
            done();
        })
    })
    it('should return status code 200 when :id is a number', function(done) {
        const cartId = 123;
        request.get(`${apiUrl}/cart/${cartId}`, (_error, res, body) => {
            expect(res.statusCode).to.be.equal(200);
            expect(body).to.be.equal(`Payment methods for cart ${cartId}`);
            done();
        });
    });

    it('should return status code 404 when :id is NOT a number', function(done) {
        const invalidCartId = 'abc';
        request.get(`${apiUrl}/cart/${invalidCartId}`, (_error, res, body) => {
            expect(res.statusCode).to.be.equal(404);
            done();
        });
    });
})
