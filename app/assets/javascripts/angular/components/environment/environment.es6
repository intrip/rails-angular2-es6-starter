import {enableProdMode} from 'angular2/core';
import configJson from './config.json';

export class Environment {
	static get environment() {
		// if (ENVIRONMENT === 'production') {
		//   enableProdMode();
		// 

		return this._environment || "development";
	}

	static  set environment(value) {
		this._environment = value;
	}

	static get testing() {
		return this._environment === "testing";
	}

	static  get development() {
		return this._environment === "development";
	}

	static get production() {
		return this._environment === "production";
	}

	static get config() {
		if(this._config === undefined)
			this._config = configJson;

		return this._config;
	}

	static get configuration() {
		return Object.assign({},this.config["defaults"],this.config[this.environment]);
	}
}