import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsComponent } from './components/products/products.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductsRoutingModule } from './product-routing.module';
import { ProductComponent } from './components/product/product.component';

import { MaterialModule } from '../material/material.module';

 

@NgModule({
  declarations: [ProductsComponent, ProductDetailComponent, ProductComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    MaterialModule,
  ],
  exports:[
  ],


})
export class ProductModule { }
