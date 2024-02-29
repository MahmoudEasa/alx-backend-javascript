const sinon = require("sinon");
const { expect } = require("chai");
const sendPaymentRequestToApi = require("./3-payment");
const Utils = require('./utils');

describe("sendPaymentRequestToApi", () => {
    it("sendPaymentRequestToApi", () => {
    const calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');

    sendPaymentRequestToApi(100, 20);
    expect(calculateNumberSpy.calledOnceWithExactly('SUM', 100, 20)).to.be.true;

    // Restore the original method to avoid interference with other tests
    calculateNumberSpy.restore();
    });
});
