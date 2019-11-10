import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../../../../shared/shared.module';
import { LocationPage } from './location.page';

const routes: Routes = [
  {
    path: '',
    component: LocationPage
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    SharedModule
  ],
  declarations: [
    LocationPage
  ]
})

export class LocationPageModule { }
