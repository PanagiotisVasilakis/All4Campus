import{NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
{
path: '',
component: HomePage,
children: [
{
path: 'info',
loadChildren: () =>
import('../pages/info/info.module').then(m => m.InfoPageModule)
},
{
path: 'map',
loadChildren: () =>
import('../pages/map/map.module').then(
m => m.MapPageModule
)
},
{
path: 'contact',
loadChildren: () =>
import('../pages/contact/contact.module').then(
m => m.ContactPageModule
)
},
{
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }

]
}
];

@NgModule({
imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class HomeRouter {}