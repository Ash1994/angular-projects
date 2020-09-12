import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page.component';
import { TopBarModule } from '../top-bar/top-bar.module';
import { ProductListModule } from '../product-list/product-list.module';



@NgModule({
  declarations: [LandingPageComponent],
  imports: [
    CommonModule, TopBarModule, ProductListModule
  ]
})
export class LandingPageModule { }
