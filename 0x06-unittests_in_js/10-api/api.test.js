const { expect } = require("chai");
const request = require('request');

const url = "http://localhost:7865";

describe("Index page", () => {
	it("Index Page Testing...", (done) => {
		request(`${url}`, (err, res) => {
			expect(res.statusCode).to.equal(200);
			expect(res.body).to.equal("Welcome to the payment system");
			done();
		})
	});

	it("Cart Page Testing...", (done) => {
		request(`${url}/cart/12`, (err, res) => {
			expect(res.statusCode).to.equal(200);
			expect(res.body).to.equal("Payment methods for cart 12");
            done();
		})
	});
    
	it("Cart Page Testing...", (done) => {
        request(`${url}/cart/hello`, (err, res) => {
            expect(res.statusCode).to.equal(404);
            done();
		})
	});
    
	it("login Testing...", (done) => {
        const reqData = {
            url: `${url}/login`,
            json: {
                userName: 'Mahmoud Easa',
            }
        }
        request.post(reqData, (err, res) => {
            expect(res.statusCode).to.equal(200);
            expect(res.body).to.equal("Welcome Mahmoud Easa");
            done();
		})
	});
    
	it("Available Payments Testing...", (done) => {
        request(`${url}/available_payments`, (err, res) => {
            expect(res.statusCode).to.equal(200);
            const data = {
                payment_methods: {
                    credit_cards: true,
                    paypal: false,
                },
            };
            expect(JSON.parse(res.body)).to.deep.equal(data);
            done();
		})
	});
});

