import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../../../../../shared/shared.module';
import { CartPage } from './cart.page';

const routes: Routes = [
  {
    path: '',
    component: CartPage
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    SharedModule
  ],
  declarations: [
    CartPage
  ]
})

export class CartPageModule { }
