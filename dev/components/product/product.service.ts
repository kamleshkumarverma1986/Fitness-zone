import {Injectable} from 'angular2/core';
import {CONSTANT} from '../../utility/constant';
import {Http,Headers} from 'angular2/http';

@Injectable()
export class ProductService {

	constructor(private _http: Http) {}

	getHeader() {
	    var headers = new Headers();
	    headers.append("Content-Type","application/json");
	    return headers;
	}

	getProduct(productId) {
		return this._http.get(CONSTANT.BASE_URL+'products/'+productId,{headers: this.getHeader()}).map( res=> res.json() );
	}

	postReview(reviewObject) {
		return this._http.post(CONSTANT.BASE_URL+'product_reviews',reviewObject,{headers: this.getHeader()}).map( res=> res.json() );
	}

}