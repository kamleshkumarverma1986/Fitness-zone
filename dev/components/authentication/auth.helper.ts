import { Injectable, EventEmitter } from 'angular2/core';
import { CONSTANT } from '../../utility/constant';
import { Http, Headers } from 'angular2/http';
import { CookieService } from 'angular2-cookie/core';

@Injectable()
export class AuthHelper {

    public authorisedUserChange: EventEmitter<any> = new EventEmitter();

    constructor(private _http: Http, private _cookieService: CookieService) {}

    getHeader() {
        var headers = new Headers();
        headers.append("Content-Type","application/json");
        return headers;
    }

    setAuthorisedUser(loggedInUser) {
        this._cookieService.putObject("USER_OBJECT", loggedInUser);
    }

    getAuthorisedUser() {
        return this._cookieService.getObject("USER_OBJECT");
    }

    removeAuthorisedUser() {
        this._cookieService.remove("USER_OBJECT");
        this.authorisedUserChange.emit(null);
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
      let result = { isUserExist: false, loggedInUser: {} };
      users.forEach((user: any) => {
          if( user.email === userObject.email && user.password === userObject.password ) {
            result.isUserExist = true;
            result.loggedInUser = user;
            this.authorisedUserChange.emit(user);
            return;
          }
      });
      return result;
    }

}
