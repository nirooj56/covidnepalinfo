import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GeneralFAQPage } from './general-faq.page';

const routes: Routes = [
  {
    path: '',
    component: GeneralFAQPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GeneralFAQPageRoutingModule {}
