import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { StartComponent } from './start/start.component';
import { LogoComponent } from './logo/logo.component';
import { SlidesComponent } from './slides/slides.component';

@NgModule({
  declarations: [
    SlidesComponent,
   StartComponent,
  LogoComponent
  ],
  exports: [
    SlidesComponent,
   StartComponent,
  LogoComponent
  ],
  imports: [CommonModule, FormsModule, IonicModule]
})
export class ComponentsModule {}