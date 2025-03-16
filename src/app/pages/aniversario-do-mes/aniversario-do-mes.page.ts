import { Component } from "@angular/core";
import { NavController } from "@ionic/angular";
import * as moment from "moment";
import { Observable } from "rxjs";
import { Membro } from "src/app/modelo/Membro";
import { MembroService } from "src/app/servicos/Membro";
import { DateUtil } from "src/app/util/DateUtil";
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
    this.membroService.listar().subscribe((response) => {
      if (response) {
        this.membros = response;
        this.membrosFiltrados = this.exibirAniversariantes(response);
        this.membrosFiltrados = this.ordernarDataAniversario(this.membrosFiltrados);
        this.totalAniversariantes = this.membros.length;
      } else {
        this.membros = [];
        this.membrosFiltrados = [];
        this.totalAniversariantes = 0;
      }
    });
  }

  private filtrarMembrosAtivos(membrosFiltrados): Membro[] {
    return membrosFiltrados.filter(
      (m) =>
        m.situacao === "Ativo" && m.classificacao != undefined
    );
  }

  private ordernarDataAniversario(membrosFiltrados) {
    return membrosFiltrados.sort((a, b) => {
      const dataNascimentoA = moment(a.dataNascimento, "DD/MM/YYYY");
      const dataNascimentoB = moment(b.dataNascimento, "DD/MM/YYYY");

      // Comparando o mês do aniversário
      const diffMonth = dataNascimentoA.month() - dataNascimentoB.month();
      if (diffMonth !== 0) {
        return diffMonth;
      }

      // Comparando o dia do aniversário
      return dataNascimentoA.date() - dataNascimentoB.date();
    });
  }

  public exibirAniversariantes(listaMembros) {
    return listaMembros.filter(
      (m) => moment(m.dataNascimento, "DD/MM/YYYY").month() === moment().month()
    );
  }

  public idadeAtual(membro) {
    let anoAtual = moment();
    let anoMembro = moment(membro.dataNascimento, "DD/MM/YYYY")
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
