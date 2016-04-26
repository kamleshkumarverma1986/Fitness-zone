import { Component, OnInit } from 'angular2/core';
import { RouteParams, ROUTER_DIRECTIVES } from 'angular2/router';
import { ShopService } from '../shop/shop.service';
import { HeaderService } from '../header/header.service';
import { CartService } from '../cart/cart.service';
import { Alert } from 'ng2-bootstrap/ng2-bootstrap';

@Component({
    templateUrl: '../prod/components/shop/shop.html',
    styleUrls: ['../prod/components/shop/shop.css'],
    directives: [ ROUTER_DIRECTIVES, Alert ],
    providers: [ ShopService ]
})
export class ShopComponent implements OnInit {

    alerts:Array<Object> = [];
    category: string;
	menus: Array<any>;
    products: Array<any>;

	constructor(params: RouteParams, private _headerService: HeaderService, private _shopService: ShopService, private _cartService: CartService) {
        this.category = params.get('category');
    }

	ngOnInit(): any {
		this.menus = this._headerService.getMenus();
		this._shopService.getProducts().subscribe(products => this.products = products);
    }

    setActiveForSubmenu(menuIndex: number, submenuId: string) {
    	this._headerService.setActiveForSubmenu(menuIndex,submenuId);
    }

    addToCart(product) {
        let result = this._cartService.addItem(product);
        this.alerts.push({msg: result.msg, type: result.status});
    }
	
}
