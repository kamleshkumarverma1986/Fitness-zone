import { Component, OnInit } from 'angular2/core';
import { ROUTER_DIRECTIVES, Router } from 'angular2/router';
import { HeaderService } from '../header/header.service';
import { CONSTANT } from '../../utility/constant';
import { CartComponent } from '../cart/cart.component';
import { LoginComponent } from '../login/login.component';
import { SignupComponent } from '../signup/signup.component';
import { AuthHelper } from '../authentication/auth.helper';

@Component({
    selector: 'header',
    styleUrls: ['../prod/components/header/header.css'],
    templateUrl: '../prod/components/header/header.html',
    directives : [ ROUTER_DIRECTIVES, CartComponent, LoginComponent, SignupComponent ]
})
export class HeaderComponent implements OnInit {

    appName: string;
	menus: Array<any>;
    loggedInUser: any;
    currentURL: string;

	constructor(private _headerService: HeaderService, private _authHelper: AuthHelper, router: Router) {
        router.subscribe((url) => this.currentURL = url );
    }

	ngOnInit(): any {
        this.appName = CONSTANT.APP_NAME;
		this.menus = this._headerService.getMenus();
        this.loggedInUser = this._authHelper.getAuthorisedUser();
    }

    setActive(menuId: string) {
    	this._headerService.setActive(menuId);
    }

    onUserLoggedIn(event) {
        this.loggedInUser = event.loggedInUser;
    }

    userLogout() {
        this._authHelper.removeAuthorisedUser();
        this.loggedInUser = null;
    }

}
