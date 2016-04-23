import {Injectable} from 'angular2/core';
import {CONSTANT} from '../../utility/constant';
import {Http,Headers} from 'angular2/http';

@Injectable()
export class ProfileService {

	constructor(private _http: Http) {}

	getHeader() {
	    var headers = new Headers();
	    headers.append("Content-Type","application/json");
	    return headers;
	}

	updateProfile(userId, userObject) {
		return this._http.put(CONSTANT.BASE_URL+'users/'+userId,userObject,{headers: this.getHeader()}).map( res=> res.json() );
	}

}
