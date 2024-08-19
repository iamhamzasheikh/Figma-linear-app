import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeSamplePage } from './home-sample.page';

const routes: Routes = [
  {
    path: '',
    component: HomeSamplePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeSamplePageRoutingModule {}
