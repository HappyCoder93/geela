import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../../../../shared/shared.module';
import { PickupPage } from './pickup.page';

const routes: Routes = [
  {
    path: '',
    component: PickupPage
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    SharedModule
  ],
  declarations: [
    PickupPage
  ]
})

export class PickupPageModule { }
