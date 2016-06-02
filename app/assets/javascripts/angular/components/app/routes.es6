import {LoginComponent} from '../auth/login.es6';
import {ListComponent} from '../list/list.es6';

export const routes = {
  config: [
    { path: '/login', as: 'Login', component: LoginComponent},
    { path: '/list', as: 'List', component: ListComponent},
    { path: '/**', redirectTo: ['List'] }
  ]
};