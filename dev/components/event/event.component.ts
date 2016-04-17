import { Component, OnInit } from 'angular2/core';
import { RouteParams } from 'angular2/router';

@Component({
    templateUrl: '../prod/components/event/event.html',
    styleUrls: ['../prod/components/event/event.css']
})
export class EventComponent implements OnInit {
	location: string;
  	constructor(params: RouteParams) {
    	this.location = params.get('location');
  	}
  	ngOnInit(): any {
        console.log("This is the location ===> " + this.location);
    }
}
