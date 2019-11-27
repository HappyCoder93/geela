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
      { path: 'restaurant',
        loadChildren: () => import('./restaurant/restaurant.module').then(m => m.RestaurantPageModule)
      },
      {
        path: 'restaurant/:restaurant_id',
        loadChildren: () => import('./tab/tab.module').then(m => m.TabPageModule)
      },
      {
        path: 'pickup',
        loadChildren: () => import('./pickup/pickup.module').then(m => m.PickupPageModule)
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
