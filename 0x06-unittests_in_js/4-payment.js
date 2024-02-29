const utils = require('./utils');

const sendPaymentRequestToApi = (totalAmount, totalShipping) => {
  console.log(
    `The total is: ${utils.calculateNumber('SUM', totalAmount, totalShipping)}`,
  );
};

module.exports = sendPaymentRequestToApi;