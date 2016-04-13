import {Component,OnInit} from 'angular2/core';
import {CONSTANT} from '../../utility/constant';

@Component({
    selector: 'footer',
    styleUrls: ['../prod/components/footer/footer.css'],
    templateUrl: '../prod/components/footer/footer.html'
})
export class FooterComponent implements OnInit {
    public appName: string;
	constructor() {}
	ngOnInit(): any {
        this.appName = CONSTANT.APP_NAME;
    }
}
