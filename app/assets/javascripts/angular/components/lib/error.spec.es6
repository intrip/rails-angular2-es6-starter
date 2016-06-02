import {Error} from './error.es6';

describe('Error', () => {
	describe('#code', () => {
		it('returns the last part of the code', () => {
			let error = new Error({code: "Exception-100", msg: "msg"});
			expect(error.code).toEqual("100");
		});
	});

	describe('#fullCode', () => {
		it('returns the original code', () => {
			let error = new Error({code: "Exception-100", msg: "msg"});
			expect(error.fullCode).toEqual("Exception-100");
		});
	});
});