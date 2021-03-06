﻿import Expectation from '../function-expectation';

describe('FunctionExpectation', () => {
	describe('toBe()', () => {
		it('should not throw an error when functions reference the same object', () => {
			const actual = () => { };
			const expected = actual;

			const expect = new Expectation(actual);

			expect.toBe(expected);
		});

		it('should throw an error when functions do not reference the same object', () => {
			const actual = () => { };
			const expected = () => { };

			const expect = new Expectation(actual);

			let threwAnError = false;

			try {
				expect.toBe(expected);
			}
			catch (e) {
				threwAnError = true;
			}

			if (!threwAnError) {
				throw new Error('Expected an error to be thrown');
			}
		});
	});

	describe('toNotBe()', () => {
		it('should not throw an error when functions do not refence the same object', () => {
			const actual = () => { };
			const expected = () => { };

			const expect = new Expectation(actual);

			expect.toNotBe(expected);
		});

		it('should throw an error when functions reference the same object', () => {
			const actual = () => { };
			const expected = actual

			const expect = new Expectation(actual);

			let threwAnError = false;

			try {
				expect.toNotBe(expected);
			}
			catch (e) {
				threwAnError = true;
			}

			if (!threwAnError) {
				throw new Error('Expected an error to be thrown');
			}
		});
	});

	describe('toThrow', () => {
		it('should not throw an error when the tested function throws an error', () => {
			const expect = new Expectation(() => { throw new Error() });

			expect.toThrow();
		});

		it('should not throw an error when the tested function throws an error with the specified message', () => {
			const expect = new Expectation(() => { throw new Error('An Error') });

			expect.toThrow('An Error');
		});

		it('should not throw an error when the tested function throws an error of the specified type', () => {
			const expect = new Expectation(() => { throw new ReferenceError() });

			expect.toThrow(ReferenceError);
		});

		it('should throw an error when the tested function does not throw an error', () => {
			const expect = new Expectation(() => true);

			let threwAnError = false;

			try {
				expect.toThrow();
			}
			catch (e) {
				threwAnError = true;
			}

			if (!threwAnError) {
				throw new Error('Expected an error to be thrown');
			}
		});
	});

	describe('toNotThrow', () => {
		it('should not throw an error when the tested function does not throw an error', () => {
			const expect = new Expectation(() => true);

			expect.toNotThrow();
		});

		it('should throw an error when the tested function throws an error', () => {
			const expect = new Expectation(() => { throw new Error() });

			let threwAnError = false;

			try {
				expect.toNotThrow();
			}
			catch (e) {
				threwAnError = true;
			}

			if (!threwAnError) {
				throw new Error('Expected an error to be thrown');
			}
		});
	});
});
