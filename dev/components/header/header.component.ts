import { Component, OnInit } from 'angular2/core';
import { ROUTER_DIRECTIVES } from 'angular2/router';
import { HeaderService } from '../header/header.service';
import { CONSTANT } from '../../utility/constant';
import { LoginComponent } from '../login/login.component';
import { SignupComponent } from '../signup/signup.component';


@Component({
    selector: 'header',
    styleUrls: ['../prod/components/header/header.css'],
    templateUrl: '../prod/components/header/header.html',
    directives : [ ROUTER_DIRECTIVES, LoginComponent, SignupComponent ],
    providers: [ HeaderService ]
})
export class HeaderComponent implements OnInit {
    appName: string;
	menus: Array<any>;
	constructor(private _headerService : HeaderService) {}

	ngOnInit(): any {
        this.appName = CONSTANT.APP_NAME;
		this.menus = this._headerService.getMenus();
    }

    setActive(menuId: string) {
    	this._headerService.setActive(menuId);
    }
}
