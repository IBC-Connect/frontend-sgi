import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProjetoAtivoPage } from './projeto-ativo.page';

const routes: Routes = [
  {
    path: '',
    component: ProjetoAtivoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjetoAtivoPageRoutingModule {}
