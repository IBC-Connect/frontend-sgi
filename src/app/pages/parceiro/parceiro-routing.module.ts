import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ParceiroPage } from './parceiro.page';

const routes: Routes = [
  {
    path: '',
    component: ParceiroPage,
    children: [
      {
        path: "cadastro",
        loadChildren: () =>
          import("../cadastro/parceiro/parceiro.module").then(
            (m) => m.ParceiroPageModule
          ),
      },
      {
        path: "listagem",
        loadChildren: () =>
          import("../listagem/parceiro/parceiro.module").then(
            (m) => m.ParceiroPageModule
          ),
      },
      {
        path: "",
        redirectTo: "cadastro",
        pathMatch: "full",
      },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ParceiroPageRoutingModule { }
