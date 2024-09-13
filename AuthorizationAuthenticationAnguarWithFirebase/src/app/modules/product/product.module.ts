import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedValidationModule } from 'src/app/sharedModules/shared-validation.module';

import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product/product.component';
import { CartComponent } from './product/cart.component';
import { ContProjecionComponent } from './cont-projecion/cont-projecion.component';
import { ContProjectionChildComponent } from './cont-projecion/cont-projection-child.component';


@NgModule({
  declarations: [ProductComponent, CartComponent, ContProjecionComponent, ContProjectionChildComponent],
  imports: [
    CommonModule,
    ProductRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedValidationModule
  ]

})
export class ProductModule {
  constructor(){
    console.log('Product Module Loaded')
  }
 }
