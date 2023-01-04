import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SistemaRelatorioModalPage } from './sistema-relatorio-modal.page';

const routes: Routes = [
  {
    path: '',
    component: SistemaRelatorioModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SistemaRelatorioModalPageRoutingModule {}
