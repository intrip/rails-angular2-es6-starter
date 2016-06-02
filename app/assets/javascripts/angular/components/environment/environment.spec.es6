import {
  afterEach,
  beforeEach,
  beforeEachProviders,
  describe,
  expect,
  inject,
  injectAsync,
  it
} from 'angular2/testing';

import {Environment} from './environment.es6';
import configJson from './config.json';

describe('Environment', () => {
	describe('#environment', () => {
		
	});

	describe('#development', () => {
		
	});

	describe('#testing', () => {
		
	});

	describe('#production', () => {
		
	});

	describe('#config', () => {
		describe('_config not loaded yet', () => {
			beforeEach(() => {
				Environment._config = undefined;
			});

			it('loads config.json and returns _config', () => {
				expect(Environment.config).toEqual(configJson);
			});

		});

		describe('_config loaded', ()=> {
			beforeEach(() => {
				Environment._config = {};
			});

			it('returns _config', () => {
				expect(Environment.config).toEqual({});
			});
		});
	});


	let devConfig;
	let defaultConfig;

	describe('#configuration', () => {
		beforeEach(() => {
			// Setup custom configuration
			devConfig = { key: "value" }
			defaultConfig = { key: "originalValue"}
			Environment.environment = "development";
			Environment._config = {
				defaults: defaultConfig,
				development: devConfig
			};
		});

		it('returns the current evironment configuration overriding default configuration if exists', () => {
			expect(Environment.configuration).toEqual(devConfig);
		});

		it('loads default configuration', () => {
			Environment.environment= "testing";
			expect(Environment.configuration).toEqual(defaultConfig);
		});
	});
});