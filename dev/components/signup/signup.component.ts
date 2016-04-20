import { Component } from 'angular2/core';
import { ControlGroup, FormBuilder, Validators } from 'angular2/common';
import { SignupService } from '../signup/signup.service';
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
    alerts:Array<Object> = [];

    constructor(fb: FormBuilder, private _signupService: SignupService) {
      	this.signupForm = fb.group({
          "name":["", Validators.required],
          "email":["", Validators.required],
          "password":["", Validators.required],
          "confirmPassword":["", Validators.required]
      	});
  	}

    userSignup(signupData): void {
      console.log(signupData);
      this.alerts.push({msg: 'Signup successfully!', type: 'success', closable: true});
    }
  	
}
