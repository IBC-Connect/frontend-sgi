import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MembroPage } from './membro.page';

const routes: Routes = [
  {
    path: '',
    component: MembroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MembroPageRoutingModule {}
