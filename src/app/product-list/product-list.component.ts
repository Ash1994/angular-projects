import { ConfigService } from '../product-list/config.service';
import { Component, OnInit } from '@angular/core';

import { products } from '../products';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products = products;
  imageSource;

  constructor(private configService: ConfigService, private sanitizer:DomSanitizer) { }

  transform(){
    return this.imageSource ? this.sanitizer.bypassSecurityTrustResourceUrl(this.imageSource) : '';
  }

  ngOnInit() {
    this.configService.getGallery().subscribe((response) => {
      if (response) {
        console.log(response);
        console.log(response.image);
        this.imageSource = 'data:image/png;base64,' +response.image.data;
        // this.imageSource = this.sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' 
        //          + imageSource.base64string);
      }
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