const sinon = require("sinon");
const { expect } = require("chai");
const Utils = require('./utils');
const sendPaymentRequestToApi = require("./4-payment");

describe("sendPaymentRequestToApi", () => {
    it("Testing...", () => {
    const calculateNumberSpy = sinon.stub(Utils, 'calculateNumber').returns(10);
    const consoleLogSpy = sinon.spy(console, 'log');

    sendPaymentRequestToApi(100, 20);
    expect(calculateNumberSpy.calledWith('SUM', 100, 20)).to.be.true;
    expect(consoleLogSpy.calledWith('The total is: 10')).to.be.true;

    calculateNumberSpy.restore();
    consoleLogSpy.restore();
    });
});
