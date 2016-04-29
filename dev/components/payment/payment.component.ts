import { Component, OnInit } from 'angular2/core';
import { ControlGroup, FormBuilder, Control, Validators } from 'angular2/common';
import { PaymentService } from '../payment/payment.service';
import { AuthHelper } from '../authentication/auth.helper';
import { CartService } from '../cart/cart.service';

@Component({
    templateUrl: '../prod/components/payment/payment.html',
    styleUrls: ['../prod/components/payment/payment.css'],
    providers: [ PaymentService ]
})
export class PaymentComponent implements OnInit {

	shippingAddress: string; 
	shippingAddressForm: ControlGroup;
  pincode: Control;
  name: Control;
  address: Control;
  landmark: Control;
  city: Control;
  state: Control;
  mobileNumber: Control;
	step: number = 1;
	loggedInUser: any;

	constructor(private _formBuilder: FormBuilder, private _paymentService: PaymentService, private _authHelper: AuthHelper, private _cartService: CartService) {
		this.buildShippingAddressForm();
    this._authHelper.authorisedUserChange.subscribe(user => this.loggedInUser = user);
  }

	buildShippingAddressForm(): void {
    this.pincode = new Control('', Validators.required);
    this.name = new Control('', Validators.required);
    this.address = new Control('', Validators.required);
    this.landmark = new Control('', Validators.required);
    this.city = new Control('', Validators.required);
    this.state = new Control('', Validators.required);
    this.mobileNumber = new Control('', Validators.required);
    this.shippingAddressForm = this._formBuilder.group({
      "pincode": this.pincode ,
      "name": this.name,
      "address": this.address,
      "landmark": this.landmark,
      "city": this.city,
      "state": this.state,
      "mobileNumber": this.mobileNumber,
    });
  }

	ngOnInit(): any {
     	this.loggedInUser = this._authHelper.getAuthorisedUser();
  }

	goToNextStep() {
		this.step++;
	}

	goToBack() {
		this.step--;
	}

	saveShippingAddress(value) {
		this.shippingAddress = JSON.stringify(value);
		this.step++;
	}

	makePayment() {
		let orderedData:any = {};
		let order_detail = { subTotal: this._cartService.subTotal, items: this._cartService.getItems() };
		orderedData.user = this.loggedInUser.id;
		orderedData.date = new Date();
		orderedData.order_detail = JSON.stringify(order_detail);
		orderedData.shipping_address = this.shippingAddress;
		this._paymentService.makePayment(JSON.stringify(orderedData)).subscribe( (data) => {
        this.buildShippingAddressForm();
        alert("done");
    });
	}
	
}
