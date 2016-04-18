import { Component, OnInit } from 'angular2/core';
import { RouteParams } from 'angular2/router';
import { ProductService } from '../product/product.service';

@Component({
    templateUrl: '../prod/components/product/product.html',
    styleUrls: ['../prod/components/product/product.css'],
    providers: [ ProductService ]
})
export class ProductComponent implements OnInit {
	
	  productId: string;
    product: any;

	  constructor(params: RouteParams, private _productService: ProductService) {
    	this.productId = params.get('id');
  	}

  	ngOnInit(): any {
        this._productService.getProduct(this.productId).subscribe(product => this.product = product);
    }
}
