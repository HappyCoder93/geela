import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../../../../../shared/shared.module';
import { DrinksPage } from './drinks.page';

const routes: Routes = [
  {
    path: '',
    component: DrinksPage
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    SharedModule
  ],
  declarations: [
    DrinksPage
  ]
})

export class DrinksPageModule { }
