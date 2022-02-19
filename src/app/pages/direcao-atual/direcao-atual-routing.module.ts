import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DirecaoAtualPage } from './direcao-atual.page';

const routes: Routes = [
  {
    path: '',
    component: DirecaoAtualPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DirecaoAtualPageRoutingModule {}
