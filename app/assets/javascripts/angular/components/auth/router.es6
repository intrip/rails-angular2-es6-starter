import {Directive, AttributeMetadata, ElementRef, DynamicComponentLoader} from 'angular2/core';
import {Router, RouterOutlet, ComponentInstruction} from 'angular2/router';
import {AuthService} from './services/auth_service.es6';

@Directive({
  selector: 'router-outlet'
})
export class LoggedInRouterOutlet extends RouterOutlet {
  static get parameters() {
    return [[ElementRef], [DynamicComponentLoader], [Router], [new AttributeMetadata('name'), String], [AuthService]];
  }

  constructor(elementRef, componentLoader, parentRouter, name, authService) {
    super(elementRef, componentLoader, parentRouter, name);
    this.parentRouter = parentRouter;

    this.publicRoutes = ['login'];
    this.authService = authService;
  }

  activate(instruction) {
    let currentUrl = this.parentRouter._currentInstruction.urlPath;
    if (this.publicRoutes.indexOf(currentUrl) === -1 && !this.authService.check()) {
      this.parentRouter.navigate(['Login']);
    }

    return super.activate(instruction);
  }
}