import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContactnewPageRoutingModule } from './contactnew-routing.module';

import { ContactnewPage } from './contactnew.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContactnewPageRoutingModule
  ],
  declarations: [ContactnewPage]
})
export class ContactnewPageModule {}
