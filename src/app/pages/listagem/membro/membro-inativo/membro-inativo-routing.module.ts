import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MembroInativoPage } from './membro-inativo.page';

const routes: Routes = [
  {
    path: '',
    component: MembroInativoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MembroInativoPageRoutingModule {}
