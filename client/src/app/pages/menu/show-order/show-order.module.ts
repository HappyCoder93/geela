import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../../../shared/shared.module';
import { ShowOrderPage } from './show-order.page';

const routes: Routes = [
  {
    path: '',
    component: ShowOrderPage
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    SharedModule
  ],
  declarations: [
    ShowOrderPage
  ]
})

export class ShowOrderPageModule { }
