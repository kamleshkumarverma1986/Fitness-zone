import { Component, OnInit } from 'angular2/core';
import { RouteParams } from 'angular2/router';
import { ProductService } from '../product/product.service';
import { ControlGroup, FormBuilder, Validators } from 'angular2/common';

@Component({
    templateUrl: '../prod/components/product/product.html',
    styleUrls: ['../prod/components/product/product.css'],
    providers: [ ProductService ]
})
export class ProductComponent implements OnInit {
	
	  productId: string;
    product: any;
    reviewForm: ControlGroup;
    productReviews: Array<any>;

	  constructor(params: RouteParams, private _productService: ProductService, fb: FormBuilder) {
    	this.productId = params.get('id');
      this.reviewForm = fb.group({
          "comment":["", Validators.required]
      });
  	}

  	ngOnInit(): any {
        this._productService.getProduct(this.productId).subscribe(product => this.product = product);
    }

    postReview(reviewObject) {
        reviewObject.user_name = "Anonymous";
        var today = new Date();
        reviewObject.date = today.getDate()+"/"+(today.getMonth()+1)+"/"+today.getFullYear();
        reviewObject.star = 3;
        reviewObject.product = this.productId;
        console.log(reviewObject);
        this._productService.postReview(reviewObject).subscribe(review => console.log("This is review id ==>" + review.id));
    }
}
