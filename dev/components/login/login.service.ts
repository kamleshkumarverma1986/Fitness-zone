import { Injectable } from 'angular2/core';
import { CONSTANT } from '../../utility/constant';
import { Http, Headers } from 'angular2/http';
import * as _ from 'lodash'

@Injectable()
export class LoginService {

    constructor(private _http: Http) {}

    getHeader() {
        var headers = new Headers();
        headers.append("Content-Type","application/json");
        return headers;
    }

    getLodashVersion() {
        console.log('lodash version:', _.VERSION);
    }

}