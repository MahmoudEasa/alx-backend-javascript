const { expect } = require("chai");
const request = require('request');

describe("Index page", () => {
	it("Testing...", (done) => {
		request("http://localhost:7865", (err, res) => {
			expect(res.statusCode).to.equal(200);
			expect(res.body).to.equal("Welcome to the payment system");
			done();
		})
	});
});
