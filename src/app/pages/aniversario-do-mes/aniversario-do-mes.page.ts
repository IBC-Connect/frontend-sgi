import { DateUtil } from "src/app/util/DateUtil";
import { Component } from "@angular/core";
import { NavController } from "@ionic/angular";
import * as moment from "moment";
import { Observable } from "rxjs";
import { Membro } from "src/app/modelo/Membro";
import { MembroService } from "src/app/servicos/Membro";
import { MensagensUtil } from "src/app/util/MensagensUtil";

@Component({
  selector: "app-aniversario-do-mes",
  templateUrl: "./aniversario-do-mes.page.html",
  styleUrls: ["./aniversario-do-mes.page.scss"],
})
export class AniversarioDoMesPage {
  totalAniversariantes: Number;
  membros: Membro[];
  membrosFiltrados: Membro[];
  membrosEditaveis: Membro[];
  mensagens: MensagensUtil;
  listaMembrosObservable: Observable<any[]>;

  constructor(
    private membroService: MembroService,
    public navCtrl: NavController
  ) {
    this.inicializar();
    moment.locale("pt-br");
  }

  private inicializar(): void {
    this.listaMembrosObservable = this.membroService.listar();
    this.listaMembrosObservable.subscribe((response) => {
      this.membros = response;
      this.membros = this.filtrarMembrosAtivos(response);
      this.membros = this.exibirAniversariantes(this.membros);
      this.membrosFiltrados = this.membros;
      this.totalAniversariantes = this.membros.length;
    });
  }

  private filtrarMembrosAtivos(membrosFiltrados): Membro[] {
    return membrosFiltrados.filter(
      (m) =>
        m.situacao === "Ativo" &&
        (m.classificacao === undefined || m.classificacao === "Membro")
    );
  }

  public exibirAniversariantes(listaMembros) {
    return listaMembros.filter(
      (m) => new Date(m.dataNascimento).getDate() === new Date().getMonth() + 1
    );
  }

  public idadeAtual(membro) {
    let anoAtual = moment();
    let anoMembro = moment(membro.dataNascimento);
    return anoAtual.year() - anoMembro.year();
  }

  public aniversarioMes() {
    const monthNameLong = new Date(Date.now()).toLocaleString("pt-BR", {
      month: "long",
    });
    return monthNameLong.toUpperCase();
  }

  formatarDataNascimento(dataNascimento: string) {
    if (dataNascimento.includes("-")) {
      return DateUtil.dateFormatterBrazil(dataNascimento);
    } else {
      return dataNascimento;
    }
  }

  public formatarNumeroWhatsapp(whatsapp: any) {
    let numero = whatsapp.replace("(", "").replace(")", "").replace("-", "");
    return `https://api.whatsapp.com/send/?phone=55${numero}&text&app_absent=0`;
  }

  public pesquisarMembros(ev: any) {
    this.membrosFiltrados = this.membros;
    const val = ev.detail.value;

    if (val && val.trim() !== "") {
      this.membrosFiltrados = this.membrosFiltrados.filter((term) => {
        return (
          term.nomeCompleto.toUpperCase().indexOf(val.trim().toUpperCase()) > -1
        );
      });
    }
  }
}
