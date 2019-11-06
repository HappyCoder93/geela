import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../../../shared/shared.module';
import { MailPage } from './mail.page';

const routes: Routes = [
  {
    path: '',
    component: MailPage
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    SharedModule
  ],
  declarations: [
    MailPage
  ]
})

export class MailPageModule { }
