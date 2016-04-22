import { Component } from 'angular2/core';
import { ControlGroup, FormBuilder, Control, Validators } from 'angular2/common';
import { SignupService } from '../signup/signup.service';
import { AuthHelper } from '../authentication/auth.helper';
import { Alert } from 'ng2-bootstrap/ng2-bootstrap';

@Component({
	  selector: 'signup',
    templateUrl: '../prod/components/signup/signup.html',
    styleUrls: ['../prod/components/signup/signup.css'],
    directives: [ Alert ],
    providers: [ SignupService ]
})
export class SignupComponent {

    signupForm: ControlGroup;
    name: Control;
    email: Control;
    password: Control;
    alerts:Array<Object> = [];

    constructor(private _formBuilder: FormBuilder, private _signupService: SignupService, private _authHelper: AuthHelper) {
      	this.buildSignupForm();
  	}

    buildSignupForm(): void {
      this.name = new Control('', Validators.required);
      this.email = new Control('', Validators.required);
      this.password = new Control('', Validators.required);
      this.signupForm = this._formBuilder.group({
        "name": this.name ,
        "email": this.email ,
        "password": this.password
      });
    }


    userSignup(signupData) {
      this._authHelper.isUserExistWhileSignup(signupData).subscribe( (isUserExist) => {
          if(isUserExist) {
            this.alerts.push({msg: 'User Already Exist!', type: 'danger', closable: true});
          } else {
            signupData.date = new Date();
            this._signupService.userSignup(JSON.stringify(signupData)).subscribe( (user) => {
                this.buildSignupForm();
                this.alerts.push({msg: 'Successfully Signup! Please Login!', type: 'success', closable: true});
            });
          }
      });
    }

}
