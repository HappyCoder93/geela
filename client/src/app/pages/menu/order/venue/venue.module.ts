import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../../../../shared/shared.module';
import { VenuePage } from './venue.page';

const routes: Routes = [
  {
    path: '',
    component: VenuePage
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    SharedModule
  ],
  declarations: [
    VenuePage
  ]
})

export class VenuePageModule { }
