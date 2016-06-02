import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES, Router} from 'angular2/router';
import {AuthService} from '../auth/services/auth_service.es6';
import {Environment} from '../environment/environment.es6';

import template from './nav_menu.html';
import css from './nav_menu.css';

@Component({ 
	selector: 'nav-menu',
	template: template,
	styles: [css],
	directives: [ROUTER_DIRECTIVES],
	providers: []
})
export class NavMenuComponent {
	static get parameters() {
		return [[AuthService], [Router]];
	}

	get currentUser() {
		return this.authService.currentUser;
	}

	constructor(authService, router) {
		this.authService = authService;
		this._router = router;
		this._loadConfig();
	}

	check() {
		return this.authService.check();
	}

	logout() {
		this.authService.logout();	
		this._router.navigate(['Login']);
	}

	_loadConfig() {
		this.appName = Environment.configuration["appName"];
		this.appLogoPath = Environment.configuration["appLogoPath"];
		this.version = Environment.configuration["version"];
	}
}