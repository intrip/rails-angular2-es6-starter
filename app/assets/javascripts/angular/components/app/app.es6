import {Component} from 'angular2/core';
import {RouteConfig} from 'angular2/router';
import {LoggedInRouterOutlet} from '../auth/router.es6';
import {routes} from './routes.es6';
import {NavMenuComponent} from '../nav_menu/nav_menu.es6';
import {ViewEncapsulation} from 'angular2/core';

import template from './app.html';
import css from './app.css';

@Component({ 
  selector: 'app',
  directives: [NavMenuComponent, LoggedInRouterOutlet],
  template: template,
  styles: [css],
  encapsulation: ViewEncapsulation.None
})
@RouteConfig(routes.config)
export class AppComponent {} 

