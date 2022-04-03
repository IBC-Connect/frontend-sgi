import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CongregadoPage } from './congregado.page';

const routes: Routes = [
  {
    path: '',
    component: CongregadoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CongregadoPageRoutingModule {}
