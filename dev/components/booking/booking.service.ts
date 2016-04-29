import { Injectable } from 'angular2/core';
import { CONSTANT } from '../../utility/constant';
import { Http, Headers } from 'angular2/http';

@Injectable()
export class BookingService {

    constructor(private _http: Http) {}

    getHeader() {
        var headers = new Headers();
        headers.append("Content-Type","application/json");
        return headers;
    }

    getBookingHistory(user) {
    	return this._http.get(CONSTANT.BASE_URL+'user_ordereds',{headers:this.getHeader()}).map( (res) => {
         return res.json();
        })
        .map((user_ordereds) => {
          	user_ordereds.forEach(function(order, index, object) {
			  if (order.user !== user.id) {
			    object.splice(index, 1);
			  }else {
			  	order.order_detail = JSON.parse(order.order_detail);
			  	order.shipping_address = JSON.parse(order.shipping_address);
			  }
			});
          return user_ordereds;
        });
    }

}

		