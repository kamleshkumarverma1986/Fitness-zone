import { Component } from 'angular2/core';
import { ControlGroup, FormBuilder, Validators } from 'angular2/common';

@Component({
	selector: 'login',
    templateUrl: '../prod/components/login/login.html',
    styleUrls: ['../prod/components/login/login.css']
})
export class LoginComponent {

    loginForm: ControlGroup;

	constructor(fb: FormBuilder) {
      	this.loginForm = fb.group({
          "email":["", Validators.required],
          "password":["", Validators.required]
      	});
  	}

  	userLogin(loginData) {
  		console.log(loginData);
  	}
	
}
