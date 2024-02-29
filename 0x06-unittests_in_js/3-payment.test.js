// const sinon = require("sinon");
import sinon from 'sinon';
import { expect } from 'chai';
import sendPaymentRequestToApi from './3-payment.js';
// const sendPaymentRequestToApi = require("./3-payment");
import Utils from './utils.js';
// const Utils = require('./utils');

describe("sendPaymentRequestToApi", () => {
    it("sendPaymentRequestToApi", () => {
    const calculateNumberSpy = sinon.spy(Utils);

    sendPaymentRequestToApi(100, 20);
    expect(calculateNumberSpy.sendPaymentRequestToApi('SUM', 100, 20)).to.be.true;

    // Restore the original method to avoid interference with other tests
    calculateNumberSpy.restore();
    });
});
