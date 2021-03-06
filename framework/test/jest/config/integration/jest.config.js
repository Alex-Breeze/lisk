const base = require('../jest.config.base');

module.exports = {
	...base,
	testMatch: [
		'<rootDir>/framework/test/jest/specs/integration/**/*.(spec|test).js',
	],
	coverageDirectory: '.coverage/integration',
};
