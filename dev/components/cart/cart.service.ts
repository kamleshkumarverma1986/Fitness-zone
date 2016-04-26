import { Injectable, EventEmitter } from 'angular2/core';

@Injectable()
export class CartService {
	
	public items: Array<any> = [];
	public subTotal: number = 0;
	public subTotalChange: EventEmitter<number> = new EventEmitter();

	getItems() {
		return this.items;
	}

	addItem(addedItem): any {
		let isItemExistInCart: boolean = false;
		this.items.forEach((item: any) => {
	        if(item.id === addedItem.id) {
	        	isItemExistInCart = true;
	        }
	    });
	    if(isItemExistInCart) {
	    	return { "status": "danger", "msg": "Item is already added into Cart!" };
	    }else {
	    	this.items.push(addedItem);
	    	this.updateSubTotal();
			return { "status": "success", "msg": "Item is added into Cart!" };
	    }
	}

	updateSubTotal() {
	  	this.subTotal = 0;
	  	this.items.forEach((item: any) => {
			if(item.quantity) {
				this.subTotal = this.subTotal + item.price * item.quantity;
			}else {
				this.subTotal = this.subTotal + item.price;
			}
	    });
	   	this.subTotalChange.emit(this.subTotal);
	}

	deleteItem(id) {
		this.items.forEach(function(item, index, object) {
		  if (item.id === id) {
		    object.splice(index, 1);
		  }
		});
		this.updateSubTotal();
	}


}
