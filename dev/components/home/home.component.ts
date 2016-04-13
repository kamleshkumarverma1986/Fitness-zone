import { Component, OnInit } from 'angular2/core';
import { CONSTANT } from '../../utility/constant';

@Component({
    templateUrl: '../prod/components/home/home.html',
    styleUrls: ['../prod/components/home/home.css']
})
export class HomeComponent implements OnInit {
	public appName: string;
	public appTagLine: string;
	
	constructor() {}

	ngOnInit(): any {
        this.appName = CONSTANT.APP_NAME;
		this.appTagLine = CONSTANT.APP_TAGLINE;
    }
}
