import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../../../shared/shared.module';
import { OrderPage } from './order.page';

/* The order.module.ts is used for child-routing */

const routes: Routes = [
  {
    path: '',
    component: OrderPage,
    children: [
      {
        path: 'venue',
        loadChildren: () => import('./venue/venue.module').then(m => m.VenuePageModule)
      },
      /*
      {
        path: 'location',
        loadChildren: () => import('./location/location.module').then(m => m.LocationPageModule)
      },
      { 
        path: 'location/:id',
        loadChildren: () => import('./venue/venue.module').then(m => m.VenuePageModule)
      },
      */
      { path: 'restaurant',
        loadChildren: () => import('./restaurant/restaurant.module').then(m => m.RestaurantPageModule)
      },
      {
        // change path to restaurant/:id when data is in firestore
        path: 'tab',
        loadChildren: () => import('./tab/tab.module').then(m => m.TabPageModule)
      },
      {
        // wildcard (invalid URL will forward user to page location)
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
