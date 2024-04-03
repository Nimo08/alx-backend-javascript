const sinon = require('sinon');
const expect = require('chai').expect;
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToAPI', function() {
    let consoleLogSpy;

    beforeEach(function() {
        consoleLogSpy = sinon.spy(console, 'log');
    })
    afterEach(function() {
        consoleLogSpy.restore();
    })
    it('should log correct first result to console', function() {
        sendPaymentRequestToApi(100, 20);
        expect(consoleLogSpy.calledOnceWithExactly('The total is: 120')).to.be.true;
    })
    it('should log correct second result to console', function() {
        sendPaymentRequestToApi(10, 10);
        expect(consoleLogSpy.calledOnceWithExactly('The total is: 20')).to.be.true;
    })
})
