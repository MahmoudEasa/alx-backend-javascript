const Utils = require('./utils');

const sendPaymentRequestToApi = (totalAmount, totalShipping) => {
    const utils = new Utils();
    const sum = Utils.calculateNumber("SUM", totalAmount, totalShipping)
    console.log(`The total is: ${sum}`);
}

module.exports = sendPaymentRequestToApi;
