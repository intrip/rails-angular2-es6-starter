export class Error {
	constructor({code, msg, source}) {
		this._code = code;
		this.msg = msg;
		this.source = source || "";
	}

	get code() {
		// only the last part of the error
		return this._code.split("-").reverse()[0];
	}

	get fullCode() {
		return this._code;
	}
} 