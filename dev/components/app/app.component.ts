import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES,RouteConfig} from 'angular2/router';
import {MenuComponent} from '../menu/menu.component';
import {HomeComponent} from '../home/home.component';
import {AboutComponent} from '../about/about.component';
import {ContactComponent} from '../contact/contact.component';

@Component({
    selector: 'my-app',
    templateUrl: '../prod/components/app/app.html',
    styleUrls: ['../prod/components/app/app.css'], 
    directives: [ROUTER_DIRECTIVES,MenuComponent]
})
@RouteConfig([
	{ path:'/' ,name: 'Home' ,component: HomeComponent ,useAsDefault: true },
	{ path:'/about' ,name: 'About' ,component: AboutComponent },
	{ path:'/contact' ,name: 'Contact' ,component: ContactComponent }
])
export class AppComponent {


}
