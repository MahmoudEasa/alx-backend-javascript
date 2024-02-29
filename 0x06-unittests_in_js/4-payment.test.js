const sinon = require('sinon');
const { expect } = require('chai');
const utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', () => {
  it('Testing...', () => {
	const stub = sinon.stub(utils, 'calculateNumber').returns(10);
	const consoleLog = sinon.spy(console, 'log');

    sendPaymentRequestToApi(100, 20);
    expect(stub.calledWithExactly('SUM', 100, 20)).to.be.true;
	expect(consoleLog.calledWith('The total is: 10')).to.be.true;

	consoleLog.restore();
	stub.restore();
  });
});
