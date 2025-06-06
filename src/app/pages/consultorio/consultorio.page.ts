import { Component, OnInit } from "@angular/core";
import {
  AlertController,
  ModalController,
  ToastController,
} from "@ionic/angular";
import { Diario } from "src/app/modelo/Diario";
import { Membro } from "src/app/modelo/Membro";
import { Usuario } from "src/app/modelo/Usuario";
import { AutenticacaoService } from "src/app/servicos/Autenticacao";
import { DiarioService } from "src/app/servicos/Diario";
import { MembroService } from "src/app/servicos/Membro";
import { MensagensUtil } from "src/app/util/MensagensUtil";
import { RegistroConsultorioModalPage } from "./../componentes/registro-consultorio-modal/registro-consultorio-modal.page";
import { RegistroDownloadModalPage } from "../componentes/registro-download-modal/registro-download-modal.page";

@Component({
  selector: "app-consultorio",
  templateUrl: "./consultorio.page.html",
  styleUrls: ["./consultorio.page.scss"],
})
export class ConsultorioPage implements OnInit {
  listaDiarios: Diario[];
  listaDiariosFiltrados: Diario[];

  numTotalRegistros: number;

  listaMembros: Membro[];

  mensagens: MensagensUtil;

  usuarioLogado: Usuario;
  perfilUsuario: Membro;

  constructor(
    private autenticacaoService: AutenticacaoService,
    private modalController: ModalController,
    private diarioService: DiarioService,
    private membroService: MembroService,
    private alertController: AlertController,
    private aviso: ToastController
  ) {
    this.mensagens = new MensagensUtil(this.aviso);
    this.usuarioLogado = this.autenticacaoService.pegarDadosLocalmente();
  }

  ngOnInit() {
    this.inicializar();
  }

  public inicializar(): void {
    let membro: Membro | null = null;

    this.membroService.listar().subscribe((response) => {
      this.listaMembros = response;
      const listaMembrosEncontrados: Membro[] = response.filter(
        (membro) => membro.email === this.usuarioLogado.email
      );
      membro = listaMembrosEncontrados.length > 0 ? listaMembrosEncontrados[0] : null;
    });

    this.diarioService.listar().subscribe((response) => {
      this.listaDiariosFiltrados = response.filter(
        (saude) => saude.email === this.usuarioLogado.email || (membro && membro.perfil === "ADMIN")
      );
      this.listaDiarios = this.listaDiariosFiltrados;

      this.numTotalRegistros = this.listaDiariosFiltrados.length;
    });
  }

  async abriModalRegistro() {
    const modal = await this.modalController.create({
      component: RegistroConsultorioModalPage,
      cssClass: "my-custom-class",
    });
    return await modal.present();
  }

  async abriModalDownload() {
    const modal = await this.modalController.create({
      component: RegistroDownloadModalPage,
      cssClass: "my-custom-class",
    });
    return await modal.present();
  }

  public async confirmarExclusao(diario: Diario) {
    const alert = await this.alertController.create({
      header: "Confirmação de exclusão",
      message: "Tem certeza que deseja excluir o diario selecionado?",
      buttons: [
        {
          text: "Não",
          handler: () => {
            this.alertController.dismiss();
          },
        },
        {
          text: "Sim",
          handler: () => {
            this.excluirDiario(diario);
          },
        },
      ],
    });
    await alert.present();
  }

  private excluirDiario(diario: Diario): void {
    this.diarioService.deletar(diario.key);
    this.mensagens.mensagemSucesso("Diario excluido com sucesso!");
  }

  pesquisarPacientes(ev: any) {
    this.listaDiariosFiltrados = this.listaDiarios;
    const val = ev.detail.value;

    if (val && val.trim() !== "") {
      this.listaDiariosFiltrados = this.listaDiariosFiltrados.filter((term) => {
        return (
          term.nomePaciente.toUpperCase().indexOf(val.trim().toUpperCase()) > -1
        );
      });
    }
  }

  get isAdmin(): boolean {
    return this.usuarioLogado.perfil === "ADMIN";
  }

}
