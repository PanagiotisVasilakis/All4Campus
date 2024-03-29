import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComponentsModule } from './.././components/components.module';
import { IndexPage } from './index.page';
import { IndexRouter } from './index.router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IndexRouter,
    ComponentsModule
  ],
  declarations: [IndexPage]
})
export class IndexPageModule {}
