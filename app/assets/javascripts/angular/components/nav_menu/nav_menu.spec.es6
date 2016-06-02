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
import {NavMenuComponent} from './nav_menu.es6';
import {AuthService} from '../auth/services/auth_service.es6';
// Routing stubs
import {RootRouter} from 'angular2/src/router/router';
import {Location, RouteParams, Router, RouteRegistry, ROUTER_PRIMARY_COMPONENT } from 'angular2/router';
import {SpyLocation} from 'angular2/src/mock/location_mock';
import {AppComponent} from '../app/app.es6';
import {Environment} from '../environment/environment.es6';

// Stubs

class AuthServiceLogged {
	check() {
		return true;
	}

	currentUser() {
		return {
			id: "2",
			cognome: "cognome", 
			nome: "nome", 
			username: "admin", 
			password: null, 
			descrizione: null, 
			avatar: null, 
			signature: null, 
			passwordExpireDate: null, 
			enabled: "true"
		}
	}

	logout () {}
}

class AuthServiceNotLogged {
	check() {
		return false;
	}
}


class EmptyRoutesComponent {}

describe('NavMenuComponent', () => {


	// 
	//@TODO: use e2e test here to check for the view data
	// describe('Login and Logout btn', () => {
	// 	describe('user is logged in', () => {
	// 		it('shows the logout btn with user info', 
	// 			injectAsync([TestComponentBuilder], (builder) => {
	// 				return builder.overrideProviders(NavMenuComponent,
	// 					[bind(AuthService).toValue( new AuthServiceLogged())])
	// 				.createAsync(NavMenuComponent)
	// 				.then((componentFixture) => {
	// 					componentFixture.detectChanges();

	// 					// expect(componentFixture.debugElement.nativeElement).toHaveText('nome cognome');
	// 				});
	// 			}));
	// 	});
	// 	describe('user is not logged in', () => {
	// 		it('shows the login btn', () => {
	// 		});
	// 	});
	// });

	describe('configuration', () => {
		beforeEachProviders(() => [
			NavMenuComponent,
			RouteRegistry,
			provide(Location, {useClass: SpyLocation}),
			provide(ROUTER_PRIMARY_COMPONENT, {useValue: EmptyRoutesComponent}),
			provide(Router, {useClass: RootRouter})
		]);

		it('loads configuration', 
			injectAsync([TestComponentBuilder], (builder) => {
				return builder.overrideProviders(NavMenuComponent,
					[bind(AuthService).toValue( new AuthServiceLogged())])
				.createAsync(NavMenuComponent)
				.then((componentFixture) => {
				let menu = componentFixture.componentInstance;

				expect(menu.appName).toEqual(Environment.configuration["appName"]);
				expect(menu.appLogoPath).toEqual(Environment.configuration["appLogoPath"]);
				expect(menu.version).toEqual(Environment.configuration["version"]);
				});
			}));
	});

	describe('#logout', () => {
		beforeEachProviders(() => [
			NavMenuComponent,
			RouteRegistry,
			provide(Location, {useClass: SpyLocation}),
			provide(ROUTER_PRIMARY_COMPONENT, {useValue: AppComponent}),
			provide(Router, {useClass: RootRouter})
		]);



		it('logs out currentUser and redirect to login', 
			injectAsync([TestComponentBuilder], (builder) => {
				return builder.overrideProviders(NavMenuComponent,
					[bind(AuthService).toValue( new AuthServiceLogged())])
				.createAsync(NavMenuComponent)
				.then((componentFixture) => {
					let menu = componentFixture.componentInstance;

					let authService = menu.authService;
					spyOn(authService, 'logout');

					let router = menu._router;
					spyOn(router, 'navigate');

					menu.logout();

					expect(authService.logout).toHaveBeenCalled();
					expect(router.navigate).toHaveBeenCalledWith(['Login']);	
				});
			}));
	}); 
});