import {
	afterEach,
	beforeEach,
	beforeEachProviders,
	describe,
	expect,
	inject,
	injectAsync,
	it,
	tick,
	TestComponentBuilder,
} from 'angular2/testing';
import {provide, bind} from 'angular2/core';
import {LoginComponent} from './login.es6';
import {AuthService} from './services/auth_service.es6';
import {Router} from 'angular2/router';

// Stubs

class AuthServiceSuccess {
	login() {
		return Promise.resolve("");
	}
}

class AuthServiceError {
	login() {
		return Promise.reject("errorMsg");
	}
}

class FakeRouter {
       navigate() {}
}


describe('LoginComponent', () => {


	 beforeEachProviders(() => [
	    LoginComponent,
	  ]);

	it('shows the login form', injectAsync([TestComponentBuilder], (builder) => {
		return builder.overrideProviders(LoginComponent,
						[
							bind(AuthService).toValue( new AuthServiceSuccess()),
							bind(Router).toValue( new FakeRouter())
						])
						.createAsync(LoginComponent)
						.then((componentFixture) => {
							expect(componentFixture.debugElement.nativeElement.innerHTML).toContain('Accedi');
						});
		})
	);

	describe('#doLogin', () => {
		describe('successfull login', () => {
			it('logs in the user and redirects to home', 
				injectAsync([TestComponentBuilder], (builder) => {
					return builder.overrideProviders(LoginComponent,
						[
							bind(AuthService).toValue( new AuthServiceSuccess()),
							bind(Router).toValue( new FakeRouter())
						])
					.createAsync(LoginComponent)
					.then((componentFixture) => {
						let login = componentFixture.componentInstance;
						login.loginForm = {value: {}};

						let router = login._router;
						spyOn(router, 'navigate');
						
						login.doLogin().then( (res) => {
							expect(router.navigate).toHaveBeenCalledWith('List');	
						});
					});
				}));
		});
		describe('login error', () => {
			it('show error message', 
				injectAsync([TestComponentBuilder], (builder) => {
					return builder.overrideProviders(LoginComponent,
						[
							bind(AuthService).toValue( new AuthServiceError()),
							bind(Router).toValue( new FakeRouter())
						])
					.createAsync(LoginComponent)
					.then((componentFixture) => {
						let login = componentFixture.componentInstance;
						login.loginForm = {value: {}};
						
						let router = login._router;
						spyOn(router, 'navigate');

						login.doLogin().then( (res) => {
							expect(login.loginError).toEqual("errorMsg");
							expect(router.navigate.calls.any()).toEqual(false);
						});
					});
			}));
		});
	});
});