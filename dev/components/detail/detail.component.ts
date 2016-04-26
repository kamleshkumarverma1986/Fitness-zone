import { Component, OnInit, ViewChild } from 'angular2/core';
import { RouteParams } from 'angular2/router';
import { DetailService } from '../detail/detail.service';
import { CartService } from '../cart/cart.service';

@Component({
    templateUrl: '../prod/components/detail/detail.html',
    styleUrls: ['../prod/components/detail/detail.css'],
    providers: [ DetailService ]
})
export class DetailComponent implements OnInit {

	  id: string;
    type: string;
    item: any;

	  constructor(params: RouteParams, private _detailService: DetailService, private _cartService: CartService) {
    	this.id = params.get('id');
      this.type = params.get('type');
  	}

  	ngOnInit(): any {
        this._detailService.getItem(this.id,this.type).subscribe(result => this.item = result);
    }

    addToCart(item) {
      this._cartService.addItem(item);
    }

}
