import { Component, OnInit } from 'angular2/core';
import { RouteParams, ROUTER_DIRECTIVES } from 'angular2/router';
import { FitnessService } from '../fitness/fitness.service';
import { CartService } from '../cart/cart.service';
import { Alert } from 'ng2-bootstrap/ng2-bootstrap';

@Component({
    templateUrl: '../prod/components/fitness/fitness.html',
    styleUrls: ['../prod/components/fitness/fitness.css'],
    directives: [ ROUTER_DIRECTIVES, Alert ],
    providers: [ FitnessService ]
})
export class FitnessComponent implements OnInit {

    alerts:Array<Object> = [];
  	type: string;
  	fitnessCenters: Array<any>;
    filterMenus: Array<any>

  	constructor(params: RouteParams, private _fitnessService: FitnessService, private _cartService: CartService) {
    	this.type = params.get('type');
  	}

  	ngOnInit(): any {
        this.filterMenus = this._fitnessService.getFilterMenus();
        this._fitnessService.getFitnessCenters(this.type).subscribe(fitnessCenters => this.fitnessCenters = fitnessCenters);
    }

    centerBooking(center) {
        let result = this._cartService.addItem(center);
        this.alerts.push({msg: result.msg, type: result.status});
    }
}
