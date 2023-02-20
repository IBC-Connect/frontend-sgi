import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { MembroPage } from "./membro.page";

const routes: Routes = [
  {
    path: "",
    component: MembroPage,
    children: [
      {
        path: "ativos",
        loadChildren: () =>
          import("./membro-ativo/membro-ativo.module").then(
            (m) => m.MembroAtivoPageModule
          ),
      },
      {
        path: "inativos",
        loadChildren: () =>
          import("./membro-inativo/membro-inativo.module").then(
            (m) => m.MembroInativoPageModule
          ),
      },
      {
        path: "congregados",
        loadChildren: () =>
          import("./congregado/congregado.module").then(
            (m) => m.CongregadoPageModule
          ),
      },
      {
        path: "voluntarios",
        loadChildren: () =>
          import("./voluntario/voluntario.module").then(
            (m) => m.VoluntarioPageModule
          ),
      },
      {
        path: "transformar",
        loadChildren: () =>
          import("./membro-transformar/membro-transformar.module").then(
            (m) => m.MembroTransformarPageModule
          ),
      },
      {
        path: "",
        redirectTo: "/lista/membro/ativos",
        pathMatch: "full",
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MembroPageRoutingModule {}
