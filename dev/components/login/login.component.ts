import { Component } from 'angular2/core';
import { ControlGroup, FormBuilder, Validators } from 'angular2/common';
import { LoginService } from '../login/login.service';

@Component({
	selector: 'login',
    templateUrl: '../prod/components/login/login.html',
    styleUrls: ['../prod/components/login/login.css'],
    providers: [ LoginService ]
})
export class LoginComponent {
  
    loginForm: ControlGroup;

    constructor(fb: FormBuilder, private _loginService: LoginService) {
    	this.loginForm = fb.group({
        "email":["", Validators.required],
        "password":["", Validators.required]
    	});
  	}

  	userLogin(loginData) {
  		console.log(loginData);
      this._loginService.getLodashVersion();
  	}
	
}
