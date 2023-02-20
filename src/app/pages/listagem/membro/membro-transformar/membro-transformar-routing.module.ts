import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MembroTransformarPage } from './membro-transformar.page';

const routes: Routes = [
  {
    path: '',
    component: MembroTransformarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MembroTransformarPageRoutingModule {}
