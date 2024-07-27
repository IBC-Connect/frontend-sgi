import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";
import { AutenticacaoGuard } from "../app/seguranca/autenticacao.guard";

const routes: Routes = [
  {
    path: "",
    redirectTo: "login",
    pathMatch: "full",
  },
  {
    path: "login",
    loadChildren: () =>
      import("./pages/login/login.module").then((m) => m.LoginPageModule),
  },
  {
    path: "resetar-senha",
    loadChildren: () =>
      import("./pages/resetar-senha/resetar-senha.module").then(
        (m) => m.ResetarSenhaPageModule
      ),
  },
  {
    path: "inicio",
    loadChildren: () =>
      import("./pages/inicio/inicio.module").then((m) => m.InicioPageModule),
    canActivateChild: [AutenticacaoGuard],
  },
  {
    path: "cadastro/projeto",
    loadChildren: () =>
      import("./pages/cadastro/projeto/projeto.module").then(
        (m) => m.ProjetoPageModule
      ),
    canActivateChild: [AutenticacaoGuard],
  },
  {
    path: "cadastro/membro",
    loadChildren: () =>
      import("./pages/cadastro/membro/membro.module").then(
        (m) => m.MembroPageModule
      ),
    canActivateChild: [AutenticacaoGuard],
  },
  {
    path: "cadastro/evento",
    loadChildren: () =>
      import("./pages/cadastro/evento/evento.module").then(
        (m) => m.EventoPageModule
      ),
    canActivateChild: [AutenticacaoGuard],
  },
  {
    path: "cadastro/cargo",
    loadChildren: () =>
      import("./pages/cadastro/cargo/cargo.module").then(
        (m) => m.CargoPageModule
      ),
    canActivateChild: [AutenticacaoGuard],
  },
  {
    path: "lista/cargo",
    loadChildren: () =>
      import("./pages/listagem/cargo/cargo.module").then(
        (m) => m.CargoPageModule
      ),
    canActivateChild: [AutenticacaoGuard],
  },
  {
    path: "lista/evento",
    loadChildren: () =>
      import("./pages/listagem/evento/evento.module").then(
        (m) => m.EventoPageModule
      ),
    canActivateChild: [AutenticacaoGuard],
  },
  {
    path: "lista/membro",
    loadChildren: () =>
      import("./pages/listagem/membro/membro.module").then(
        (m) => m.MembroPageModule
      ),
    canActivateChild: [AutenticacaoGuard],
  },
  {
    path: "lista/projeto",
    loadChildren: () =>
      import("./pages/listagem/projeto/projeto.module").then(
        (m) => m.ProjetoPageModule
      ),
    canActivateChild: [AutenticacaoGuard],
  },
  {
    path: "lista/assistido",
    loadChildren: () =>
      import("./pages/listagem/assistido/assistido.module").then(
        (m) => m.AssistidoPageModule
      ),
    canActivateChild: [AutenticacaoGuard]
  },
  {
    path: "lista/membro/congregados",
    loadChildren: () =>
      import("./pages/listagem/membro/congregado/congregado.module").then(
        (m) => m.CongregadoPageModule
      ),
    canActivateChild: [AutenticacaoGuard]
  },
  {
    path: "lista/membro/voluntarios",
    loadChildren: () =>
      import("./pages/listagem/membro/voluntario/voluntario.module").then(
        (m) => m.VoluntarioPageModule
      ),
    canActivateChild: [AutenticacaoGuard]
  },
  {
    path: "editar/membro",
    loadChildren: () =>
      import("./pages/edicao/membro/membro.module").then(
        (m) => m.MembroPageModule
      ),
    canActivateChild: [AutenticacaoGuard],
  },
  {
    path: "editar/cargo",
    loadChildren: () =>
      import("./pages/edicao/cargo/cargo.module").then(
        (m) => m.CargoPageModule
      ),
    canActivateChild: [AutenticacaoGuard],
  },
  {
    path: "associar/cargo",
    loadChildren: () =>
      import("./pages/associacao/cargo/cargo.module").then(
        (m) => m.CargoPageModule
      ),
    canActivateChild: [AutenticacaoGuard],
  },
  {
    path: "projeto-ativo",
    loadChildren: () =>
      import(
        "./pages/listagem/projeto/projeto-ativo/projeto-ativo.module"
      ).then((m) => m.ProjetoAtivoPageModule),
    canActivateChild: [AutenticacaoGuard],
  },
  {
    path: "projeto-inativo",
    loadChildren: () =>
      import(
        "./pages/listagem/projeto/projeto-inativo/projeto-inativo.module"
      ).then((m) => m.ProjetoInativoPageModule),
    canActivateChild: [AutenticacaoGuard],
  },
  {
    path: "editar/projeto",
    loadChildren: () =>
      import("./pages/edicao/projeto/projeto.module").then(
        (m) => m.ProjetoPageModule
      ),
    canActivateChild: [AutenticacaoGuard],
  },
  {
    path: "associar/projeto",
    loadChildren: () =>
      import("./pages/associacao/projeto/projeto.module").then(
        (m) => m.ProjetoPageModule
      ),
    canActivateChild: [AutenticacaoGuard],
  },
  {
    path: "editar/evento",
    loadChildren: () =>
      import("./pages/edicao/evento/evento.module").then(
        (m) => m.EventoPageModule
      ),
    canActivateChild: [AutenticacaoGuard],
  },
  {
    path: "editar/assistido",
    loadChildren: () =>
      import("./pages/edicao/assistido/assistido.module").then(
        (m) => m.AssistidoPageModule
      ),
  },
  {
    path: "aniversarios",
    loadChildren: () =>
      import("./pages/aniversario-do-mes/aniversario-do-mes.module").then(
        (m) => m.AniversarioDoMesPageModule
      ),
    canActivateChild: [AutenticacaoGuard],
  },
  {
    path: "direcao-atual",
    loadChildren: () =>
      import("./pages/direcao-atual/direcao-atual.module").then(
        (m) => m.DiracaoAtualPageModule
      ),
    canActivateChild: [AutenticacaoGuard],
  },
  {
    path: "meu-perfil",
    loadChildren: () =>
      import("./pages/meu-perfil/meu-perfil.module").then(
        (m) => m.MeuPerfilPageModule
      ),
    canActivateChild: [AutenticacaoGuard],
  },
  {
    path: "cadastro/assistido",
    loadChildren: () =>
      import("./pages/cadastro/assistido/assistido.module").then(
        (m) => m.AssistidoPageModule
      ),
    canActivateChild: [AutenticacaoGuard],
  },
  {
    path: "consultorio",
    loadChildren: () =>
      import("./pages/consultorio/consultorio.module").then(
        (m) => m.ConsultorioPageModule
      ),
  },
  {
    path: "registro-consultorio-modal",
    loadChildren: () =>
      import(
        "./pages/componentes/registro-consultorio-modal/registro-consultorio-modal.module"
      ).then((m) => m.RegistroConsultorioModalPageModule),
    canActivateChild: [AutenticacaoGuard]
  },
  {
    path: "sistema-relatorio-modal",
    loadChildren: () =>
      import(
        "./pages/componentes/sistema-relatorio-modal/sistema-relatorio-modal.module"
      ).then((m) => m.SistemaRelatorioModalPageModule),
    canActivateChild: [AutenticacaoGuard]
  },
  {
    path: 'financeiro',
    loadChildren: () => import('./pages/financeiro/financeiro.module').then(m => m.FinanceiroPageModule),
    canActivateChild: [AutenticacaoGuard]
  },
  {
    path: 'adicionar-registro-financeiro-modal',
    loadChildren: () => import('./pages/componentes/adicionar-registro-financeiro-modal/adicionar-registro-financeiro-modal.module').then(m => m.AdicionarRegistroFinanceiroModalModule),
    canActivateChild: [AutenticacaoGuard]
  },
  {
    path: 'lista/patrimonio',
    loadChildren: () => import('./pages/listagem/patrimonio/patrimonio.module').then(m => m.PatrimonioPageModule),
    canActivateChild: [AutenticacaoGuard]
  },
  {
    path: 'editar/patrimonio',
    loadChildren: () => import('./pages/edicao/patrimonio/patrimonio.module').then(m => m.PatrimonioPageModule),
    canActivateChild: [AutenticacaoGuard]
  },
  {
    path: 'cadastro/patrimonio',
    loadChildren: () => import('./pages/cadastro/patrimonio/patrimonio.module').then(m => m.PatrimonioPageModule),
    canActivateChild: [AutenticacaoGuard]
  },
  {
    path: 'patrimonio',
    loadChildren: () => import('./pages/patrimonio/patrimonio.module').then(m => m.PatrimonioPageModule),
    canActivateChild: [AutenticacaoGuard]
  },
  {
    path: 'cadastro/parceiro',
    loadChildren: () => import('./pages/cadastro/parceiro/parceiro.module').then( m => m.ParceiroPageModule)
  },
  {
    path: 'lista/parceiro',
    loadChildren: () => import('./pages/listagem/parceiro/parceiro.module').then( m => m.ParceiroPageModule)
  },
  {
    path: 'parceiro',
    loadChildren: () => import('./pages/parceiro/parceiro.module').then( m => m.ParceiroPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
