const expect = require('chai').expect;
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', function() {
    it('should return resolved promise when success is true' , function(done) {
        getPaymentTokenFromAPI(true).then(result => {
            expect(result).to.deep.equal({data: 'Successful response from the API' });
            done();
        }).catch(error => done(error));
    })
    it('should return undefined when success is false', function(done) {
        const result = getPaymentTokenFromAPI(false);
        expect(result).to.be.undefined;
        done();
    })
})
