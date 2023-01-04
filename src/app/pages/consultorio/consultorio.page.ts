import { DadosUsuarioUtil } from "./../../util/DadosUsuarioUtil";
import { RegistroConsultorioModalPage } from "./../componentes/registro-consultorio-modal/registro-consultorio-modal.page";
import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { Observable } from "rxjs";
import { Diario } from "src/app/modelo/Diario";
import { DiarioService } from "src/app/servicos/Diario";
import { DateUtil } from "src/app/util/DateUtil";

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

  constructor(
    public modalController: ModalController,
    private diarioService: DiarioService
  ) {
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
    let usuarioLogado = DadosUsuarioUtil.dadosUsuarioLogado();

    return listaDiarios.filter((d) => {
      d.uIdPsicologo === usuarioLogado.uid;
    });
  }

  async abriModal() {
    const modal = await this.modalController.create({
      component: RegistroConsultorioModalPage,
      cssClass: "my-custom-class",
    });
    return await modal.present();
  }

  formatarData(data) {
    return DateUtil.dateFormatterBrazil(data);
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
