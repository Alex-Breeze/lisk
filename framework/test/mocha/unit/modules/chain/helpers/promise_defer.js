/*
 * Copyright © 2018 Lisk Foundation
 *
 * See the LICENSE file at the top-level directory of this distribution
 * for licensing information.
 *
 * Unless otherwise agreed in a custom licensing agreement with the Lisk Foundation,
 * no part of this software, including this file, may be copied, modified,
 * propagated, or distributed except according to the terms contained in the
 * LICENSE file.
 *
 * Removal or modification of this copyright notice is prohibited.
 */

'use strict';

const PromiseDefer = require('../../../../../../src/modules/chain/helpers/promise_defer');

describe('PromiseDefer', () => {
	let promiseDefer;
	const RESOLVED = 'resolved';
	const REJECTED = 'rejected';

	beforeEach(done => {
		promiseDefer = new PromiseDefer();
		promiseDefer.promise
			.then(input => {
				expect(input.message).to.equal(RESOLVED);
				input.done();
			})
			.catch(input => {
				expect(input.message).to.equal(REJECTED);
				input.done();
			});
		done();
	});

	describe('when it fails', () => {
		it('should reject', done => {
			expect(promiseDefer.promise.isRejected()).to.be.false;
			promiseDefer.reject({
				message: REJECTED,
				done: async () => {
					expect(promiseDefer.promise.isRejected()).to.be.true;
					done();
				},
			});
		});
	});

	describe('when it succeeds', () => {
		it('should resolve', done => {
			expect(promiseDefer.promise.isFulfilled()).to.be.false;
			promiseDefer.resolve({
				message: RESOLVED,
				done: async () => {
					expect(promiseDefer.promise.isFulfilled()).to.be.true;
					done();
				},
			});
		});
	});
});
