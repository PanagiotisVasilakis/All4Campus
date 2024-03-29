import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
    // ,canActivate: [AuthGuard]
  },
  {
    path: 'index',
    loadChildren: () => import('./index/index.module').then( m => m.IndexPageModule)
  },
  {
    path: '',
    redirectTo: 'index',
    pathMatch: 'full'
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/signup/signup.module').then( m => m.SignupPageModule)
    // ,canActivate: [AuthGuard]
  },
  // {
  //   path: 'special',
  //   component: SpecialEventsComponent,
  //   canActivate: [AuthGuard]
  // },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'contactnew',
    loadChildren: () => import('./pages/contactnew/contactnew.module').then( m => m.ContactnewPageModule)
  }
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }