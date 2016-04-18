import { Component, OnInit } from 'angular2/core';
import { RouteParams } from 'angular2/router';
import { FitnessService } from '../fitness/fitness.service';

@Component({
    templateUrl: '../prod/components/fitness/fitness.html',
    styleUrls: ['../prod/components/fitness/fitness.css'],
    providers: [ FitnessService ]
})
export class FitnessComponent implements OnInit {

	type: string;
	fitnessCenters: Array<any>;

  	constructor(params: RouteParams, private _fitnessService: FitnessService) {
    	this.type = params.get('type');
  	}

  	ngOnInit(): any {
        this._fitnessService.getFitnessCenters(this.type).subscribe(fitnessCenters => this.fitnessCenters = fitnessCenters);
    }
}
