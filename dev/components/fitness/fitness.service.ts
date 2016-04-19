import { Injectable } from 'angular2/core';
import { CONSTANT } from '../../utility/constant';
import { Http, Headers } from 'angular2/http';
import { HeaderService } from '../header/header.service';

@Injectable()
export class FitnessService {

	constructor(private _http: Http, private _headerService : HeaderService) {}

	getHeader() {
	    var headers = new Headers();
	    headers.append("Content-Type","application/json");
	    return headers;
	}

	getFitnessCenters(type) {
		return this._http.get(CONSTANT.BASE_URL+type,{headers: this.getHeader()}).map( res=> res.json() );
	}

	getFilterMenus() {
		return [
          { type: "radio", title: "Category", menus:  this._headerService.getMenus()[1].submenu},
          { type: "checkbox", title: "Price", menus: [
                            { label:"Rs. 0 to Rs. 500", value:"0-500" },
                            { label:"Rs. 501 to Rs. 1000", value:"501-1000" },
                            { label:"Rs. 1001 to Rs. 2000", value:"1001-2000" },
                            { label:"Rs. 2001 to Rs. 4000", value:"2001-4000" },
                            { label:"Rs. 4000 Above", value:"4001" } ]
          },
          { type: "checkbox", title: "Facility", menus: [
                            { label:"AC", value:"ac" },
                            { label:"Juice Bar", value:"juice_bar" },
                            { label:"Personal Trainer", value:"personal_trainer" },
                            { label:"Locker", value:"locker" },
                            { label:"Shower", value:"shower" },
                            { label:"Changing Room", value:"changing_room" },
                            { label:"Parking", value:"parking" },
                            { label:"Wifi", value:"wifi" } ] 
          }
        ];
	}

}