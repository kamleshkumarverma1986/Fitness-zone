import {Injectable} from 'angular2/core';
import {CONSTANT} from '../../utility/constant';
import {Http,Headers} from 'angular2/http';

@Injectable()
export class ShopService {

	constructor(private _http: Http) {}

	getHeader() {
	    var headers = new Headers();
	    headers.append("Content-Type","application/json");
	    return headers;
	}

	getProducts() {
		return this._http.get(CONSTANT.BASE_URL+'products',{headers: this.getHeader()}).map( res=> res.json() );
	}

}