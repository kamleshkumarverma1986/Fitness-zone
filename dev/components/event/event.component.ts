import { Component, OnInit } from 'angular2/core';
import { RouteParams, ROUTER_DIRECTIVES } from 'angular2/router';
import { EventService } from '../event/event.service';

@Component({
    templateUrl: '../prod/components/event/event.html',
    styleUrls: ['../prod/components/event/event.css'],
    directives: [ ROUTER_DIRECTIVES ],
    providers: [ EventService ]
})
export class EventComponent implements OnInit {

	location: string;
	events: Array<any>;

  	constructor(params: RouteParams, private _eventService: EventService) {
    	this.location = params.get('location');
  	}

  	ngOnInit(): any {
       	this._eventService.getEvents(this.location).subscribe(events => this.events = events);
    }
}
