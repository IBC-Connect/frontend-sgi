import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NovidadeModalPage } from './novidade-modal.page';

const routes: Routes = [
  {
    path: '',
    component: NovidadeModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NovidadeModalPageRoutingModule {}
