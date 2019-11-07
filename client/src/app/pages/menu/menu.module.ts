import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { MenuPage } from './menu.page';

/* The menu.module.ts is used for child-routing between the pages within the array routes */

const routes: Routes = [
  {
    path: '',
    component: MenuPage,
    children: [
      // child routing
      {
        path: 'home',
        loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
      },
      {
        path: 'account',
        loadChildren: () => import('./account/account.module').then(m => m.AccountPageModule)
      },
      {
        path: 'tab',
        loadChildren: () => import('./tab/tab.module').then(m => m.TabPageModule)
      },
      {
        // wildcard
        path: '**',
        redirectTo: 'home',
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
    MenuPage
  ]
})

export class MenuPageModule { }
