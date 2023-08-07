import { Component, OnInit } from "@angular/core";
import {
  LoadingController,
  ModalController,
  NavController,
  ToastController
} from "@ionic/angular";
import { Observable } from "rxjs";
import { Membro } from "src/app/modelo/Membro";
import { Usuario } from "src/app/modelo/Usuario";
import { AutenticacaoService } from "src/app/servicos/Autenticacao";
import { MembroService } from "src/app/servicos/Membro";
import { MensagensUtil } from "src/app/util/MensagensUtil";

import { SistemaRelatorioModalPage } from "../componentes/sistema-relatorio-modal/sistema-relatorio-modal.page";
import { RedirecionadorUtil } from "./../../util/RedirecionadorUtil";

@Component({
  selector: "app-inicio",
  templateUrl: "./inicio.page.html",
  styleUrls: ["./inicio.page.scss"],
})
export class InicioPage implements OnInit {
  //Utils
  mensagens: MensagensUtil;
  redirecionadorUtil: RedirecionadorUtil;

  usuario: Usuario;
  membro: Membro;
  totalMembros: number;
  listaMembros: Membro[];
  listaMembrosFiltrados: Membro[];
  listaMembrosObservable: Observable<any[]>;

  //Permissoes
  permissaoAdmin: boolean = false;
  permissaoGeral: boolean = true;
  permissaoSaude: boolean = false;
  permissaoFinancas: boolean = false;
  permissaoSecretaria: boolean = false;

  boasVindas = "Bem-vindo(a) ";

  constructor(
    private autenticacao: AutenticacaoService,
    private aviso: ToastController,
    private membroService: MembroService,
    private modalController: ModalController,
    private navCtrl: NavController,
    private loadingCtrl: LoadingController
  ) {
    this.mensagens = new MensagensUtil(this.aviso);
    this.redirecionadorUtil = new RedirecionadorUtil(this.navCtrl);
    this.usuario = this.autenticacao.pegarDadosLocalmente();
  }

  async ngOnInit() {
    await this.inicializar();
    await this.showLoading();
  }

  public deslogar() {
    this.autenticacao.sair();
    this.mensagens.mensagemSucesso("Você foi desconectado com sucesso!");
  }

  public mensagemDeConstrucao(): void {
    this.mensagens.mensagemAlerta(
      "O menu selecionado está em fase de construção."
    );
  }

  private async inicializar() {
    this.listaMembrosObservable = this.membroService.listar();
    this.listaMembrosObservable.subscribe((response) => {
      this.listaMembros = response;
      this.totalMembros = this.listaMembros.length;
      this.listaMembrosFiltrados = this.listaMembros.sort((a, b) =>
        a.nomeCompleto > b.nomeCompleto
          ? 1
          : b.nomeCompleto > a.nomeCompleto
          ? -1
          : 0
      );
      this.verificarTelasUsuario(response);
    });
  }

  verificarTelasUsuario(membros) {
    const membroEncontrado: Membro = membros.find(
      (m) => m.email === this.usuario.email
    );

    if (membroEncontrado) {
      switch (membroEncontrado.perfil) {
        case "ADMIN":
          this.permissaoAdmin = true;
          break;
        case "SEC":
          this.permissaoSecretaria = true;
          break;
        case "FIN":
          this.permissaoFinancas = true;
          break;
        case "SAU":
          this.permissaoSaude = true;
          break;
        default:
          this.permissaoGeral = true;
      }
    }

    this.boasVindas = this.boasVindas.includes(membroEncontrado.nomeCompleto)
      ? this.boasVindas
      : this.boasVindas
          .concat(membroEncontrado.nomeCompleto)
          .concat(" | ")
          .concat(membroEncontrado.perfil);
  }

  async abriModalSistema() {
    const modal = await this.modalController.create({
      component: SistemaRelatorioModalPage,
      cssClass: "my-custom-class",
    });
    return await modal.present();
  }

  async showLoading() {
    const loading = await this.loadingCtrl.create({
      duration: 3000,
      cssClass: "custom-loading",
    });

    loading.present();
  }
}
