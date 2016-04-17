import { Component, OnInit } from 'angular2/core';
import { RouteParams } from 'angular2/router';

@Component({
    templateUrl: '../prod/components/product-list/product.list.html',
    styleUrls: ['../prod/components/product-list/product.list.css']
})
export class ProductListComponent implements OnInit {
	category: string;
  	constructor(params: RouteParams) {
    	this.category = params.get('category');
  	}
  	ngOnInit(): any {
        console.log("This is the category ===> " + this.category);
    }
}
