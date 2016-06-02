import {AuthService} from './auth_service.es6';
import {AuthCtrl} from '../../../../coop/controllers/auth_ctrl.es6';
import {provide} from 'angular2/core';
import {Environment} from '../../environment/environment.es6';
import {ProxyService} from '../../lib/proxy_service.es6';

let AuthServiceFactory = (proxyService) => {
	return new AuthService(new AuthCtrl(proxyService.instance() ), Environment.configuration.appplication);
}

export let AuthServiceProvider =
provide(AuthService, {
	useFactory: AuthServiceFactory,
	deps: [ProxyService]
});
