// const Utils = require('./utils');
// import Utils from './utils.js';
import Utils from './utils.js';

const sendPaymentRequestToApi = (totalAmount, totalShipping) => {
    const sum = Utils.sendPaymentRequestToApi("SUM", totalAmount, totalShipping);
    console.log(`The total is: ${sum}`);
}

// module.exports = sendPaymentRequestToApi;
export default sendPaymentRequestToApi;
