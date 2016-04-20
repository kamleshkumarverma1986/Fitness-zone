import { Component } from 'angular2/core';
import { ControlGroup, FormBuilder, Validators } from 'angular2/common';
import { LoginService } from '../login/login.service';
import { Alert } from 'ng2-bootstrap/ng2-bootstrap';

@Component({
    selector: 'login',
    templateUrl: '../prod/components/login/login.html',
    styleUrls: ['../prod/components/login/login.css'],
    directives: [ Alert ],
    providers: [ LoginService ]
})
export class LoginComponent {

    loginForm: ControlGroup;
    alerts:Array<Object> = [];

    constructor(fb: FormBuilder, private _loginService: LoginService) {
    	this.loginForm = fb.group({
        "email":["", Validators.required],
        "password":["", Validators.required]
    	});
  	}

  	userLogin(loginData): void {
  		console.log(loginData);
      this._loginService.getLodashVersion();
      this.alerts.push({msg: 'Another alert!', type: 'danger', closable: true});
  	}
	
}
