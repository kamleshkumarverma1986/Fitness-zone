import { Injectable } from 'angular2/core';
import { CONSTANT } from '../../utility/constant';
import { Http, Headers } from 'angular2/http';

@Injectable()
export class AuthHelper {

    constructor(private _http: Http) {}

    getHeader() {
        var headers = new Headers();
        headers.append("Content-Type","application/json");
        return headers;
    }

    isAuthorised() {
        
    }

    isUserExistWhileSignup( userObject ) {
        return this._http.get(CONSTANT.BASE_URL+'users',{headers:this.getHeader()}).map( (res) => {
         return res.json();
        })
        .map((users) => {
          let isUserExist: boolean = false;
          users.forEach((user: any) => {
              if(user.email === userObject.email) {
                isUserExist = true;
                return;
              }
          });
          return isUserExist;
        });
    }

    isUserExistWhileLogin(users, userObject) {
      let isUserExist: boolean = false;
      users.forEach((user: any) => {
          if( user.email === userObject.email && user.password === userObject.password ) {
            isUserExist = true;
            return;
          }
      });
      return isUserExist;
    }

}
