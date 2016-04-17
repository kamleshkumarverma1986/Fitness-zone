import { Component } from 'angular2/core';
import { ROUTER_DIRECTIVES, RouteConfig } from 'angular2/router';
import { ProductListComponent } from '../product-list/product.list.component';
import { ProductComponent } from '../product/product.component';
import { PaymentComponent } from '../payment/payment.component';

@Component({
    templateUrl: '../prod/components/shop/shop.html',
    styleUrls: ['../prod/components/shop/shop.css'],
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
	{ path:'/product-list/:category' ,name: 'ProductList' ,component: ProductListComponent ,useAsDefault: true },
	{ path:'/product' ,name: 'Product' ,component: ProductComponent },
	{ path:'/payment' ,name: 'Payment' ,component: PaymentComponent }
])
export class ShopComponent {
	
}
