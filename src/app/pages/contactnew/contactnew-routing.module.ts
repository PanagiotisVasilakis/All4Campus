import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactnewPage } from './contactnew.page';

const routes: Routes = [
  {
    path: '',
    component: ContactnewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContactnewPageRoutingModule {}
