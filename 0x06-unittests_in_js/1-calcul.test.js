// const calculateNumber = require('./1-calcul');
// const assert = require('assert');
import calculateNumber from './1-calcul.js';
import assert from 'assert';

describe('calculateNumber', () => {
	it('Should round a and b and return the SUM it (1.4, 4.5 = 6)', () => {
		assert.strictEqual(calculateNumber("SUM", 1.4, 4.5), 6);
	});

	it('Should round a and b and return the SUBTRACT it (1.4, 4.5 = -4)', () => {
		assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
	});

	it('Should round a and b and return the DIVIDE it (1.4, 4.5 = 0.2)', () => {
		assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
	});

	it('Should round a and b and return the DIVIDE it (1.4, 0 = Error)', () => {
		assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
	});
});
