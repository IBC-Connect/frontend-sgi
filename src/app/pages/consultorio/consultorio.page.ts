import { AutenticacaoService } from "src/app/servicos/Autenticacao";
import { AutenticacaoGuard } from "./../../seguranca/autenticacao.guard";
import { Component, OnInit } from "@angular/core";
import {
  AlertController,
  ModalController,
  ToastController,
} from "@ionic/angular";
import { Observable } from "rxjs";
import { Diario } from "src/app/modelo/Diario";
import { DiarioService } from "src/app/servicos/Diario";
import { MensagensUtil } from "src/app/util/MensagensUtil";
import { DadosUsuarioUtil } from "./../../util/DadosUsuarioUtil";
import { RegistroConsultorioModalPage } from "./../componentes/registro-consultorio-modal/registro-consultorio-modal.page";

@Component({
  selector: "app-consultorio",
  templateUrl: "./consultorio.page.html",
  styleUrls: ["./consultorio.page.scss"],
})
export class ConsultorioPage implements OnInit {
  listaDiarios: Diario[];
  listaDiariosFiltrados: Diario[];
  numTotalRegistros: number;
  listaDiariosObservable: Observable<any[]>;
  mensagens: MensagensUtil;

  constructor(
    private autenticacaoService: AutenticacaoService,
    private modalController: ModalController,
    private diarioService: DiarioService,
    private alertController: AlertController,
    private aviso: ToastController
  ) {
    this.mensagens = new MensagensUtil(this.aviso);
    this.inicializar();
  }

  ngOnInit() {}

  public inicializar() {
    this.listaDiariosObservable = this.diarioService.listar();
    this.listaDiariosObservable.subscribe((response) => {
      this.listaDiarios = response;
      this.listaDiariosFiltrados = response;
      this.numTotalRegistros = this.listaDiarios.length;
    });
  }

  filtrarPorPsicologo(listaDiarios: Diario[]) {
    let usuarioLogado = this.autenticacaoService.pegarDadosLocalmente();

    return listaDiarios.filter((d) => {
      d.email === usuarioLogado.email;
    });
  }

  async abriModal() {
    const modal = await this.modalController.create({
      component: RegistroConsultorioModalPage,
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
}
