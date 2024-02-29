const sinon = require("sinon");
const { expect } = require("chai");
const Utils = require('./utils');
const sendPaymentRequestToApi = require("./4-payment");


describe("sendPaymentRequestToApi", () => {
    let calculateNumber, consoleLogSpy;
    
    beforeEach(() => {
        calculateNumber = sinon.spy(Utils, 'calculateNumber');
        consoleLogSpy = sinon.spy(console, 'log');
    });

    afterEach(() => {
        // Restore the original method to avoid interference with other tests
        calculateNumber.restore();
        consoleLogSpy.restore();
    });

    it("Task 5 First Testing...", () => {
        sendPaymentRequestToApi(100, 20);
        expect(calculateNumber.calledWithExactly('SUM', 100, 20)).to.be.true;
        expect(consoleLogSpy.calledOnceWithExactly('The total is: 120')).to.be.true;
    });

    it("Task 5 Seconde Testing...", () => {
        sendPaymentRequestToApi(10, 10);
        expect(calculateNumber.calledWithExactly('SUM', 10, 10)).to.be.true;
        expect(consoleLogSpy.calledOnceWithExactly('The total is: 20')).to.be.true;
    });
});
