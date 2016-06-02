import {
  afterEach,
  beforeEach,
  beforeEachProviders,
  describe,
  expect,
  inject,
  injectAsync,
  it
} from 'angular2/testing';

import {AuthService} from './auth_service.es6';
import {Error} from '../../lib/error.es6';

describe('AuthService', () => {
  describe('#login', () => {
    describe('valid credentials', () =>{
      it('login user given username and password with success', (done) => {
        let fakeUser = {username: "test"};
        let fakeRes = {sessionId: "123", user: fakeUser};
        let fakeCtrl = {
          login: function({}) {
            return new Promise(function(resolve, reject) {
              return resolve(fakeRes);
            });
          } 
        };

        let service = new AuthService(fakeCtrl, "application");
        let res = service.login({username: "user", password: "pwd"})
        .then( (res) => {
          setTimeout( () => {
            expect(res).toEqual(fakeUser);
            expect(service.currentUser).toEqual(fakeUser);
            done();
          },0);
        });
      });
    });

    describe('invalid credentials', () =>{
      it('returns an auth error msg', (done) =>{
        let errorMsg = new Error({code: "Exception-200", msg: "Auth error"});
        let fakeCtrl = {
          login: function({}) {
            return new Promise(function(resolve, reject) {
              return reject(errorMsg);
            });
          } 
        };

        let service = new AuthService(fakeCtrl, "application");
        let res = service.login({username: "user", password: "pwd"})
        .catch((errorPromise) => {
          setTimeout( () => {
            expect(errorPromise).toEqual("Credenziali errate");
            expect(service.currentUser).toBeUndefined();

            done();
          },0);
        });
      });
    });

    describe('other error (Error-00)', () => {
      it('returns a general error msg', (done) => {
        let errorMsg = new Error({code: "Exception-00", msg: "Auth error"});
        let fakeCtrl = {
          login: function({}) {
            return new Promise(function(resolve, reject) {
              return reject(errorMsg);
            });
          } 
        };

        let service = new AuthService(fakeCtrl, "application");
        let res = service.login({username: "user", password: "pwd"})
        .catch( (errorPromise) => {
          setTimeout( () => {
            expect(errorPromise).toEqual("C'è stato un'errore nel contattare il server, per piacere riprova più tardi.");
            expect(service.currentUser).toBeUndefined();

            done();
          },0);
        });
      });
    });

  });


  describe('#check', () => {
      describe('currentUser exists', () => {
        it('returns true', () => {
          let service = new AuthService({}, "application");
          service.currentUser = {username: "test"};
          expect(service.check()).toBeTruthy();
        });
      });

      describe("currentUser doesn't exists", () => {
        it('returns false', () => {
          let service = new AuthService({}, "application");
          service.currentUser = null;
          expect(service.check()).toBeFalsy();
        });
      });
  });

  describe('#logout', () => {
      it('sets to null the proxy session_id and currentUser', () =>{
        let service = new AuthService({proxy: {sessionId: "123"}}, "application");
        service.currentUser = {username: "test"};
        service.logout();
        expect(service.currentUser).toEqual(null);
        expect(service.ctrl.proxy.sessionId).toEqual(null);
      });
  });
});