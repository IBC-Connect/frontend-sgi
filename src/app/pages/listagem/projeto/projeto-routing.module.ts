import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProjetoPage } from './projeto.page';

const routes: Routes = [
  {
    path: '',
    component: ProjetoPage,
    children: [
      {
        path: 'ativos',
        loadChildren: () =>
          import(
            './projeto-ativo/projeto-ativo.module'
          ).then((m) => m.ProjetoAtivoPageModule),
      },
      {
        path: 'inativos',
        loadChildren: () =>
          import(
            './projeto-inativo/projeto-inativo.module'
          ).then((m) => m.ProjetoInativoPageModule),
      },
      {
        path: '',
        redirectTo: '/lista/projeto/ativos',
        pathMatch: 'full',
      },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjetoPageRoutingModule {}
