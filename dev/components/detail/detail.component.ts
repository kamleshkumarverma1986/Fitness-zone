import { Component, OnInit } from 'angular2/core';
import { RouteParams } from 'angular2/router';
import { DetailService } from '../detail/detail.service';

@Component({
    templateUrl: '../prod/components/detail/detail.html',
    styleUrls: ['../prod/components/detail/detail.css'],
    providers: [ DetailService ]
})
export class DetailComponent implements OnInit {
	
	  id: string;
    type: string;
    relevantData: any;

	  constructor(params: RouteParams, private _detailService: DetailService) {
    	this.id = params.get('id');
      this.type = params.get('type');
  	}

  	ngOnInit(): any {
        this._detailService.getRelevantData(this.id,this.type).subscribe(result => this.relevantData = result);
    }

}
