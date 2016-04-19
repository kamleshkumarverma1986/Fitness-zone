import { Component, OnInit } from 'angular2/core';
import { ROUTER_DIRECTIVES } from 'angular2/router';
import { CONSTANT } from '../../utility/constant';
import { HeaderService } from '../header/header.service';

@Component({
    templateUrl: '../prod/components/home/home.html',
    styleUrls: ['../prod/components/home/home.css'],
    directives : [ ROUTER_DIRECTIVES ]
})
export class HomeComponent implements OnInit {
	appName: string;
	appTagLine: string;
	menus: Array<any>;
	
	constructor(private _headerService : HeaderService) {}

	ngOnInit(): any {
        this.appName = CONSTANT.APP_NAME;
		this.appTagLine = CONSTANT.APP_TAGLINE;
		this.menus = this._headerService.getMenus();
    }
}
