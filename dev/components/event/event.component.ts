import { Component, OnInit } from 'angular2/core';
import { RouteParams, ROUTER_DIRECTIVES } from 'angular2/router';
import { EventService } from '../event/event.service';
import { CartService } from '../cart/cart.service';
import { Alert } from 'ng2-bootstrap/ng2-bootstrap';

@Component({
    templateUrl: '../prod/components/event/event.html',
    styleUrls: ['../prod/components/event/event.css'],
    directives: [ ROUTER_DIRECTIVES, Alert ],
    providers: [ EventService ]
})
export class EventComponent implements OnInit {

    alerts:Array<Object> = [];
    location: string;
    events: Array<any>;

  	constructor(params: RouteParams, private _eventService: EventService, private _cartService: CartService) {
    	this.location = params.get('location');
  	}

  	ngOnInit(): any {
       	this._eventService.getEvents(this.location).subscribe(events => this.events = events);
    }

    eventBooking(event) {
        let result = this._cartService.addItem(event);
        this.alerts.push({msg: result.msg, type: result.status});
    }
}
