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
      {
        path: 'venue/:venue_id',
        loadChildren: () => import('./restaurant/restaurant.module').then(m => m.RestaurantPageModule)
      },
      {
        path: 'restaurant/:restaurant_id',
        loadChildren: () => import('./tab/tab.module').then(m => m.TabPageModule)
      },
      {
        // wildcard (invalid URL will forward user to page venue)
        path: '**',
        redirectTo: 'venue',
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
