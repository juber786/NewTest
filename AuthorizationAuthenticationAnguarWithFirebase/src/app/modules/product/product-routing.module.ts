import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContProjecionComponent } from './cont-projecion/cont-projecion.component';
import { CartComponent } from './product/cart.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  {
    path: 'product',
    component:ProductComponent

  },
  {
    path: 'cart',
    component:CartComponent
  },
  {
    path: 'contProjection',
    component:ContProjecionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
