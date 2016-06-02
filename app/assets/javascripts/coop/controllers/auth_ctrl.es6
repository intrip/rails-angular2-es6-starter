import {BaseCtrl} from './base_ctrl.es6';

let MD5 = require("crypto-js/md5");
 
export class AuthCtrl extends BaseCtrl {	

	login(username, password, application = "") {
      let loginReqBody = new it_intersail_auth_BodyLoginReqType();

      loginReqBody.username = username;
      loginReqBody.applicationName = application;
      loginReqBody.password = MD5(password).toString().toUpperCase();

      return super.call(this.proxy.doCommandAsync('Auth.Login', loginReqBody).then( (res) => {
          this.sessionId = res.sessionId;
          return res;
       }));
	}
}