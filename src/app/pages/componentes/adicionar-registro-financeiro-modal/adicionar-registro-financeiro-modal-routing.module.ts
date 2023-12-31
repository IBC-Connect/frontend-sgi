import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdicionarRegistroFinanceiroModalPage } from './adicionar-registro-financeiro-modal.page';

const routes: Routes = [
  {
    path: '',
    component: AdicionarRegistroFinanceiroModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdicionarRegistroFinanceiroModalPageRoutingModule {}
