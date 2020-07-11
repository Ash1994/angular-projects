import { ConfigService } from '../product-list/config.service';
import { Component, OnInit } from '@angular/core';

import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products = products;

  constructor(private configService: ConfigService) { }

  ngOnInit() {
    this.configService.setUserID(1);
    this.configService.getUser().subscribe((response)=>{
      console.log(response);
    });
  }

  share() {
    window.alert('The product has been shared!');
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/