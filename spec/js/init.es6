import 'babel-polyfill';
import 'reflect-metadata';
import 'rxjs/Rx';
import 'zone.js';

import {TEST_BROWSER_PLATFORM_PROVIDERS, TEST_BROWSER_APPLICATION_PROVIDERS } from 'angular2/platform/testing/browser';
import { setBaseTestProviders } from 'angular2/testing';

import {Environment} from '../../app/assets/javascripts/angular/components/environment/environment.es6';

setBaseTestProviders(TEST_BROWSER_PLATFORM_PROVIDERS,
                     TEST_BROWSER_APPLICATION_PROVIDERS);

Environment.environment = "testing";

