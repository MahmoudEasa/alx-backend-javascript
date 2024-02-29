import calculateNumber from './2-calcul_chai.js';
import { expect } from 'chai';

describe('calculateNumber', () => {
	it('Should round a and b and return the SUM it (1.4, 4.5 = 6)', () => {
		expect(calculateNumber("SUM", 1.4, 4.5)).to.equal(6);
	});

	it('Should round a and b and return the SUBTRACT it (1.4, 4.5 = -4)', () => {
		expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
	});

	it('Should round a and b and return the DIVIDE it (1.4, 4.5 = 0.2)', () => {
		expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
	});

	it('Should round a and b and return the DIVIDE it (1.4, 0 = Error)', () => {
		expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
	});
});

