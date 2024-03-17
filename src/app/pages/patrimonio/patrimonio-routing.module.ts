import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PatrimonioPage } from './patrimonio.page';

const routes: Routes = [
  {
    path: '',
    component: PatrimonioPage,
    children: [
      {
        path: "cadastro",
        loadChildren: () =>
          import("../cadastro/patrimonio/patrimonio.module").then(
            (m) => m.PatrimonioPageModule
          ),
      },
      {
        path: "listagem",
        loadChildren: () =>
          import("../listagem/patrimonio/patrimonio.module").then(
            (m) => m.PatrimonioPageModule
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
export class PatrimonioPageRoutingModule { }
