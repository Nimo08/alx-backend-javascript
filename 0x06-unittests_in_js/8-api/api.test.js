const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('./api');

chai.use(chaiHttp);
const expect = chai.expect;

describe('Express App', function() {
    it('should return status code 200 and correct GET / message', function(done) {
        chai.request(app)
            .get('/')
            .end(function(error, res) {
                expect(res).to.have.status(200);
                expect(res.text).to.equal('Welcome to the payment system');
                done();
            })
    })
})
