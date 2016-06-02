import 'reflect-metadata';
import 'babel-polyfill';
import 'rxjs/Rx';
import 'zone.js';

import {bootstrap} from 'angular2/platform/browser';
import {provide} from 'angular2/core';
import {ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy} from 'angular2/router';
import {HTTP_PROVIDERS} from 'angular2/http';
import {Environment} from './components/environment/environment.es6';
import {AuthServiceProvider} from './components/auth/services/auth_service.provider.es6';
import {AppComponent} from './components/app/app.es6';
import {ProxyService} from './components/lib/proxy_service.es6';

bootstrap(AppComponent, [
  ROUTER_PROVIDERS,
  HTTP_PROVIDERS,
  provide(LocationStrategy, { useClass: HashLocationStrategy }),
  Environment,
  ProxyService,
  AuthServiceProvider,
]);