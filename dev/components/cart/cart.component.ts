import { Component, OnInit } from 'angular2/core';
import { CartService } from '../cart/cart.service';

@Component({
	selector: 'cart',
    templateUrl: '../prod/components/cart/cart.html',
    styleUrls: ['../prod/components/cart/cart.css']
})
export class CartComponent implements OnInit {
	
	items: Array<any> = [];
    subTotal: number = 0;

    constructor(private _cartService: CartService) {
        this.subTotal = this._cartService.subTotalChange.subscribe(subTotal => this.subTotal = subTotal);
  	}

  	ngOnInit(): any {
        this.items = this._cartService.getItems();
    }

    addItem(item: any): any {
    	return this._cartService.addItem(item);
    }

    deleteItem(id) {
    	this._cartService.deleteItem(id);
    }

    goForCheckout() {

    }
}
