import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../../../../shared/shared.module';
import { RestaurantPage } from './restaurant.page';

const routes: Routes = [
  {
    path: '',
    component: RestaurantPage
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    SharedModule
  ],
  declarations: [
    RestaurantPage
  ]
})

export class RestaurantPageModule { }
