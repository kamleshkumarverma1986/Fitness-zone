import { Component, Output, EventEmitter } from 'angular2/core';
import { ControlGroup, FormBuilder, Control, Validators } from 'angular2/common';
import { LoginService } from '../login/login.service';
import { AuthHelper } from '../authentication/auth.helper';
import { Alert } from 'ng2-bootstrap/ng2-bootstrap';

@Component({
    selector: 'login',
    templateUrl: '../prod/components/login/login.html',
    styleUrls: ['../prod/components/login/login.css'],
    directives: [ Alert ],
    providers: [ LoginService ]
})
export class LoginComponent {

    @Output() userLoggedIn = new EventEmitter();

    loginForm: ControlGroup;
    email: Control;
    password: Control;
    alerts:Array<Object> = [];

    constructor(private _formBuilder: FormBuilder, private _loginService: LoginService, private _authHelper: AuthHelper) {
    	this.buildLoginForm();
  	}

    buildLoginForm(): void {
      this.email = new Control('', Validators.required);
      this.password = new Control('', Validators.required);
      this.loginForm = this._formBuilder.group({
        "email": this.email ,
        "password": this.password
      });
    }
    
    userLogin(loginData, closeLoginModal): void {
      this._loginService.userLogin().subscribe( (users) => {
          let result = this._authHelper.isUserExistWhileLogin(users, loginData);
          if( result.isUserExist ) {
              this._authHelper.setAuthorisedUser(result.loggedInUser);
              this.userLoggedIn.emit({
                loggedInUser: result.loggedInUser
              });
              closeLoginModal.click();
          } else {
              this.alerts.push({msg: 'Invalid email or password!', type: 'danger', closable: true});
          }
      });
    }
	
}
