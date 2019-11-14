import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../../../shared/shared.module';
import { OrderPage } from './order.page';

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
        path: 'location/:id',
        loadChildren: () => import('./venue/venue.module').then(m => m.VenuePageModule)
      },
      { path: 'restaurant',
        loadChildren: () => import('./restaurant/restaurant.module').then(m => m.RestaurantPageModule)
      },
      {
        // wildcard (invalid URL will trigger a redirect to page location)
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
