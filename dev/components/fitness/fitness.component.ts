import { Component, OnInit } from 'angular2/core';
import { RouteParams, ROUTER_DIRECTIVES } from 'angular2/router';
import { FitnessService } from '../fitness/fitness.service';

@Component({
    templateUrl: '../prod/components/fitness/fitness.html',
    styleUrls: ['../prod/components/fitness/fitness.css'],
    directives: [ ROUTER_DIRECTIVES ],
    providers: [ FitnessService ]
})
export class FitnessComponent implements OnInit {

  	type: string;
  	fitnessCenters: Array<any>;
    filterMenus: Array<any>

  	constructor(params: RouteParams, private _fitnessService: FitnessService) {
    	this.type = params.get('type');
  	}

  	ngOnInit(): any {
        this.filterMenus = this._fitnessService.getFilterMenus();
        this._fitnessService.getFitnessCenters(this.type).subscribe(fitnessCenters => this.fitnessCenters = fitnessCenters);
    }
}
