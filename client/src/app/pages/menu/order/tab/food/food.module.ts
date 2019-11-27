import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../../../../../shared/shared.module';
import { FoodPage } from './food.page';
import { TabPage } from '../tab.page';

const routes: Routes = [
  {
    path: '',
    component: FoodPage
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    SharedModule
  ],
  declarations: [
    FoodPage
  ],
  providers: [
    TabPage
  ]
})

export class FoodPageModule { }
