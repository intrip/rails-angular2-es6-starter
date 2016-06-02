import {
	afterEach,
	beforeEach,
	beforeEachProviders,
	describe,
	expect,
	inject,
	injectAsync,
	it,
	TestComponentBuilder,
} from 'angular2/testing';
import {provide, bind} from 'angular2/core';
import {ListComponent} from './list.es6';
import {Router} from 'angular2/router';

// Stubs

describe('ListComponent', () => {


	 beforeEachProviders(() => [
	    ListComponent,
	  ]);

	it('shows the login form', injectAsync([TestComponentBuilder], (builder) => {
		return builder.overrideProviders(ListComponent,
						[
							
						])
						.createAsync(ListComponent)
						.then((componentFixture) => {
							
						});
		})
	);
});