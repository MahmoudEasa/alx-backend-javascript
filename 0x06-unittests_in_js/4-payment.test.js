const sinon = require("sinon");
const { expect } = require("chai");
const sendPaymentRequestToApi = require("./4-payment");
const Utils = require('./utils');

describe("sendPaymentRequestToApi", () => {
    it("sendPaymentRequestToApi", () => {
    const calculateNumberSpy = sinon.stub(Utils, 'calculateNumber').returns(10);
    const consoleLogSpy = sinon.spy(console, 'log');

    sendPaymentRequestToApi(100, 20);
    expect(calculateNumberSpy.calledOnceWithExactly('SUM', 100, 20)).to.be.true;
    expect(consoleLogSpy.calledOnceWithExactly('The total is: 10')).to.be.true;

    // Restore the original method to avoid interference with other tests
    calculateNumberSpy.restore();
    consoleLogSpy.restore();
    });
});

