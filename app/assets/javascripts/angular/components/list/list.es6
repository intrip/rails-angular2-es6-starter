import {Component} from 'angular2/core';

import {ProcessInstanceCtrl} from '../../../coop/controllers/process_instance_ctrl.es6';
import {ProxyService} from '../lib/proxy_service.es6';

@Component({ 
	selector: 'nav-menu',
	template: 'To complete',
	providers: []
})
export class ListComponent {
	static get parameters() {
		return [[ProxyService]];
	}

	constructor(proxyService) {
		this.ctrl = new ProcessInstanceCtrl(proxyService.instance());
		this.ctrl.list()
		.then( (res) => {console.log(res)})
		.catch( (error) => {console.log(error)});
	}
} 