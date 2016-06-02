import {Injectable} from 'angular2/core';
import {Environment} from '../environment/environment.es6';

@Injectable()
export class ProxyService {
	instance() {
		if(this._proxy === undefined) {
			if(! Environment.testing) {
			this._proxy = new CoopProxy(it_intersail_coop_SoggettoType.create('Utente', '[MyId]', Environment.configuration.myAddress),
							it_intersail_coop_SoggettoType.create('Servizio', 'COOPSVC-01', Environment.configuration.remoteServerName),
							{debug: Environment.configuration.debug});
			}
		}

		return this._proxy;	
	}
}