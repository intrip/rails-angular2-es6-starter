import {Error} from '../../lib/error.es6';

const INVALID_CREDENTIALS = "Credenziali errate";
const GENERAL_ERROR = "C'è stato un'errore nel contattare il server, per piacere riprova più tardi.";

export class AuthService {
	constructor(authCtrl, application) {
		this.ctrl = authCtrl;
		this.application = application;
	}

	login({username, password}) {
		return this.ctrl.login(username, password, this.application)
		.then( (session) => {
			this.currentUser = session.user;
			return this.currentUser;
		})
		.catch( (error) => {
			return new Promise((resolve,reject)=>{ (error.code !== "00") ? reject(INVALID_CREDENTIALS) : reject(GENERAL_ERROR)});      		
		});
	}

	logout() {
		this.currentUser = null;
		this.ctrl.proxy.sessionId = null;
	}

	check() {
		return (this.currentUser) ? true : false;
	}
}