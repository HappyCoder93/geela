import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../../../shared/shared.module';
import { OrderPage } from './order.page';

/* The order.module.ts is used for child-routing between the pages within the array routes */

const routes: Routes = [
  {
    path: '',
    component: OrderPage,
    children: [
      {
        path: 'location',
        loadChildren: () => import('./location/location.module').then(m => m.LocationPageModule)
      },
      {
        path: 'venue',
        loadChildren: () => import('./venue/venue.module').then(m => m.VenuePageModule)
      },
      {
        // wildcard
        path: '**',
        redirectTo: 'location',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    SharedModule
  ],
  declarations: [
    OrderPage
  ]
})

export class OrderPageModule { }
