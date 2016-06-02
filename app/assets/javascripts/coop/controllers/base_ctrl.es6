
import {Error} from '../../angular/components/lib/error.es6';

if (typeof CoopProxy === 'function') {
	CoopProxy.addDefaultNamespace("http://www.intersail.it/coop");
}

export class BaseCtrl {
	constructor(proxy) {
		this.proxy = proxy;
	}

	get sessionId() {
		return this.proxy.sessionId;
	}
	
	set sessionId(value) {
		this.proxy.sessionId = value;
	}

	// automatically integrates error handling every new call
	call(promise) {
		return promise.catch( (error) => {
       	  if(error.hasOwnProperty('errors') && error.errors['errore']) {
       	  	let coopError = error.errors.errore[0];
       	  	return new Promise((resolve,reject)=>{reject(new Error({code: coopError.codice, msg: coopError.messaggio, source: coopError.source}))});
       	  }
       	  else {
       	  	return new Promise((resolve,reject)=>{reject(new Error({code: 'Exception-00', msg: error.errors.message, source: error.errors.stack}))});
       	  }
       	});
	}
}
