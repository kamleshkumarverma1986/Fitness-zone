import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES,RouteConfig} from 'angular2/router';
import {HeaderComponent} from '../header/header.component';
import {FooterComponent} from '../footer/footer.component';
import {HomeComponent} from '../home/home.component';
import {ShopComponent} from '../shop/shop.component';
import {FitnessComponent} from '../fitness/fitness.component';
import {EventComponent} from '../event/event.component';
import {ProductComponent} from '../product/product.component';
import {PaymentComponent} from '../payment/payment.component';

@Component({
    selector: 'my-app',
    templateUrl: '../prod/components/app/app.html',
    styleUrls: ['../prod/components/app/app.css'],
    directives: [ROUTER_DIRECTIVES,HeaderComponent,FooterComponent]
})
@RouteConfig([
	{ path:'/' ,name: 'Home' ,component: HomeComponent ,useAsDefault: true },
	{ path:'/shop/:category' ,name: 'Shop' ,component: ShopComponent },
	{ path:'/fitness/:type' ,name: 'Fitness' ,component: FitnessComponent },
	{ path:'/event/:location' ,name: 'Event' ,component: EventComponent },
	{ path:'/product/:id' ,name: 'Product' ,component: ProductComponent },
	{ path:'/payment' ,name: 'Payment' ,component: PaymentComponent }
])
export class AppComponent {


}
