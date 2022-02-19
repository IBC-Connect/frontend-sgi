import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AniversarioDoMesPage } from './aniversario-do-mes.page';

const routes: Routes = [
  {
    path: '',
    component: AniversarioDoMesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AniversarioDoMesPageRoutingModule {}
