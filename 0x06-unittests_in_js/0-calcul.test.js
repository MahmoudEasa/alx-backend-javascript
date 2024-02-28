const calculateNumber = require('./0-calcul');
const assert = require('assert');

/* eslint-disable */
describe('calculateNumber', () => {
	it('Should round a and b and return the sum of it', () => {
		assert.strictEqual(calculateNumber(1, 3), 4);
	});

	it('Should round a and b and return the sum of it', () => {
		assert.strictEqual(calculateNumber(1, 3.7), 5);
	});

	it('Should round a and b and return the sum of it', () => {
		assert.strictEqual(calculateNumber(1.2, 3.7), 5);
	});

	it('Should round a and b and return the sum of it', () => {
		assert.strictEqual(calculateNumber(1.5, 3.7), 6);
	});

	it('Should round a and b and return the sum of it', () => {
		assert.strictEqual(calculateNumber(), NaN);
	});

	it('Should round a and b and return the sum of it', () => {
		assert.strictEqual(calculateNumber(0, 0), 0);
	});

	it('Should round a and b and return the sum of it', () => {
		assert.strictEqual(calculateNumber('', 4), 4);
	});

	it('Should round a and b and return the sum of it', () => {
		assert.strictEqual(calculateNumber('4', 4), 8);
	});
});
/* eslint-disable */
