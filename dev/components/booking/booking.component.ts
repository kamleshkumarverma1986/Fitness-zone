import { Component, OnInit } from 'angular2/core';
import { BookingService } from '../booking/booking.service';
import { AuthHelper } from '../authentication/auth.helper';

@Component({
    templateUrl: '../prod/components/booking/booking.html',
    styleUrls: ['../prod/components/booking/booking.css'],
    providers: [ BookingService ]
})
export class BookingComponent implements OnInit {
	
	loggedInUser: any;
	bookingHistory: any = [];

	constructor(private _bookingService: BookingService, private _authHelper: AuthHelper) {

	};

	ngOnInit(): any {
	    this.loggedInUser = this._authHelper.getAuthorisedUser();
	    this.getBookingHistory(this.loggedInUser);
	}

	getBookingHistory(user) {
		this._bookingService.getBookingHistory(user).subscribe( (booking_history) => {
	        this.bookingHistory = booking_history;
	    });
	}
	
}
