import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeSamplePageRoutingModule } from './home-sample-routing.module';

import { HomeSamplePage } from './home-sample.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeSamplePageRoutingModule
  ],
  declarations: [HomeSamplePage]
})
export class HomeSamplePageModule {}
