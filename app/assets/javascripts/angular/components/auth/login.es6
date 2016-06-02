import {Component} from 'angular2/core';
import {FORM_DIRECTIVES, ControlGroup, Control, ngFormModel, Validators} from 'angular2/common';
import {Router} from 'angular2/router';
import {AuthService} from './services/auth_service.es6';

import template from './login.html';
import css from './login.css';

@Component({ 
	selector: 'login',
	styles: [css],
	template: template,
	directives: [FORM_DIRECTIVES],
	providers: []
})
export class LoginComponent {
	static get parameters() {
	    return [[AuthService],[Router]];
	}

	constructor(authService, router) {
		this._authService = authService;		
		this._router = router;

		this.username = new Control('',Validators.required);
		this.password = new Control('',Validators.required);
		this.loginForm = new ControlGroup({
			username: this.username,
			password: this.password
		});
	}

	doLogin() {
		return this._authService.login(this.loginForm.value)
			.then((res) => {
				this._router.navigate(['List']);
			})
			.catch( (errorMsg) => {
				this.loginError = errorMsg;
			});
	}
} 
