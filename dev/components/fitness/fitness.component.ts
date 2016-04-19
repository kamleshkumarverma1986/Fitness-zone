import { Component, OnInit } from 'angular2/core';
import { RouteParams } from 'angular2/router';
import { FitnessService } from '../fitness/fitness.service';
import { HeaderService } from '../header/header.service';

@Component({
    templateUrl: '../prod/components/fitness/fitness.html',
    styleUrls: ['../prod/components/fitness/fitness.css'],
    providers: [ FitnessService, HeaderService ]
})
export class FitnessComponent implements OnInit {

  	type: string;
  	fitnessCenters: Array<any>;
    filterArray: Array<any>
    menus: Array<any>;

  	constructor(params: RouteParams, private _fitnessService: FitnessService, private _headerService : HeaderService) {
    	this.type = params.get('type');
  	}

  	ngOnInit(): any {
        this.menus = this._headerService.getMenus();
        this.filterArray = [
          { type: "radio", title: "Category", menus: this.menus[1].submenu },
          { type: "checkbox", title: "Price", menus: [
                                                { label:"Rs. 0 to Rs. 500", value:"0-500" },
                                                { label:"Rs. 501 to Rs. 1000", value:"501-1000" },
                                                { label:"Rs. 1001 to Rs. 2000", value:"1001-2000" },
                                                { label:"Rs. 2001 to Rs. 4000", value:"2001-4000" },
                                                { label:"Rs. 4000 Above", value:"4001" } ] 
          },
          { type: "checkbox", title: "Facility", menus: [
                                                { label:"AC", value:"ac" },
                                                { label:"Juice Bar", value:"juice_bar" },
                                                { label:"Personal Trainer", value:"personal_trainer" },
                                                { label:"Locker", value:"locker" },
                                                { label:"Shower", value:"shower" },
                                                { label:"Changing Room", value:"changing_room" },
                                                { label:"Parking", value:"parking" },
                                                { label:"Wifi", value:"wifi" } ] 
          }
        ];
        this._fitnessService.getFitnessCenters(this.type).subscribe(fitnessCenters => this.fitnessCenters = fitnessCenters);
    }
}
