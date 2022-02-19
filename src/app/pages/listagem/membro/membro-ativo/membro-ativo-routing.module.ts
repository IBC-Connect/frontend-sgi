import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MembroAtivoPage } from './membro-ativo.page';

const routes: Routes = [
  {
    path: '',
    component: MembroAtivoPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MembroAtivoPageRoutingModule {}
