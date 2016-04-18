import { Component } from 'angular2/core';
import { ControlGroup, FormBuilder, Validators } from 'angular2/common';

@Component({
	selector: 'signup',
    templateUrl: '../prod/components/signup/signup.html',
    styleUrls: ['../prod/components/signup/signup.css']
})
export class SignupComponent {

	signupForm: ControlGroup;

	constructor(fb: FormBuilder) {
      	this.signupForm = fb.group({
          "name":["", Validators.required],
          "email":["", Validators.required],
          "password":["", Validators.required],
          "confirmPassword":["", Validators.required]
      	});
  	}

  	userSignup(signupData) {
  		console.log(signupData);
  	}
}
