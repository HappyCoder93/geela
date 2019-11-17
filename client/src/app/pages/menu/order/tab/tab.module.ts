import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../../../../shared/shared.module';
import { TabPage } from './tab.page';

/* The tab.module.ts is used for child-routing */

const routes: Routes = [
  {
    path: '',
    component: TabPage,
    children: [
      {
        path: 'food',
        loadChildren: () => import('./food/food.module').then(m => m.FoodPageModule)
      },
      {
        path: 'drinks',
        loadChildren: () => import('./drinks/drinks.module').then(m => m.DrinksPageModule)
      },
      {
        // wildcard (invalid URL will forward user to page food)
        path: '**',
        redirectTo: 'food',
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
    TabPage
  ]
})

export class TabPageModule { }
