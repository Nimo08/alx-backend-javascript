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
})
