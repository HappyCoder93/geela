import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

/* The app-routing.module.ts is the overall routing module, to set the entry point (root) of the application. */

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./pages/signup/signup.module').then(m => m.SignupPageModule)
  },
  {
    path: 'login/email',
    loadChildren: () => import('./pages/login/mail/mail.module').then(m => m.MailPageModule)
  },
  {
    path: 'menu',
    loadChildren: () => import('./pages/menu/menu.module').then(m => m.MenuPageModule)
  },
  {
   // wildcard (invalid URL redirects to login)
    path: '**',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  { path: 'order', loadChildren: './pages/menu/order/order.module#OrderPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule { }
