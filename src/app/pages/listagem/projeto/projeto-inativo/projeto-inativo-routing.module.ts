import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProjetoInativoPage } from './projeto-inativo.page';

const routes: Routes = [
  {
    path: '',
    component: ProjetoInativoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjetoInativoPageRoutingModule {}
