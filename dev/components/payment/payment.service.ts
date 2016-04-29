import {Injectable} from 'angular2/core';
import {CONSTANT} from '../../utility/constant';
import {Http,Headers} from 'angular2/http';

@Injectable()
export class PaymentService {

	constructor(private _http: Http) {}

	getHeader() {
	    var headers = new Headers();
	    headers.append("Content-Type","application/json");
	    return headers;
	}

	makePayment(data) {
		return this._http.post(CONSTANT.BASE_URL+'user_ordereds',data,{headers: this.getHeader()}).map( res=> res.json() );
	}

}
