const HttpApi = require('./httpApi');
const BaseModule = require('../base_module');

/* eslint-disable class-methods-use-this */

/**
 * Http API module specification
 *
 * @namespace Framework.Modules
 * @type {module.HttpAPIModule}
 */
module.exports = class HttpAPIModule extends BaseModule {
	constructor(options) {
		super(options);

		this.chain = null;
	}

	static get alias() {
		return 'httpApi';
	}

	static get info() {
		return {
			author: 'LiskHQ',
			version: '0.1.0',
			name: 'lisk-core-http-api',
		};
	}

	get defaults() {
		return {};
	}

	get events() {
		return [];
	}

	get actions() {
		return {};
	}

	async load(channel) {
		this.httpApi = new HttpApi(channel, this.options);
		channel.once('lisk:ready', () => {
			this.httpApi.bootstrap();
		});
	}

	async unload() {
		// return this.chain.cleanup(0);
	}
};
