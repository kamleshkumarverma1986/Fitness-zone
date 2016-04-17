import { Component, OnInit } from 'angular2/core';
import { RouteParams } from 'angular2/router';

@Component({
    templateUrl: '../prod/components/fitness/fitness.html',
    styleUrls: ['../prod/components/fitness/fitness.css']
})
export class FitnessComponent implements OnInit {
	type: string;
  	constructor(params: RouteParams) {
    	this.type = params.get('type');
  	}
  	ngOnInit(): any {
        console.log("This is the type ===> " + this.type);
    }
}
