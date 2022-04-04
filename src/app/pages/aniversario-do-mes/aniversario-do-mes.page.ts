import { Component } from "@angular/core";
import { NavController } from "@ionic/angular";
import { Observable } from "rxjs";
import { Membro } from "src/app/modelo/Membro";
import { MembroService } from "src/app/servicos/Membro";
import * as moment from "moment";
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
      this.membrosFiltrados = response;
      this.membros = this.exibirAniversariantes(response);
      this.membrosFiltrados = this.exibirAniversariantes(response);
      this.totalAniversariantes = this.membros.length;

      this.membrosFiltrados.sort((a, b) => {
        let newA = moment(a.dataNascimento).format('DDMM');
        let newB = moment(b.dataNascimento).format('DDMM');
        return moment(newA).diff(newB);
      });
    });
  }

  public exibirAniversariantes(listaMembros) {
    return listaMembros.filter(
      (m) => moment(m.dataNascimento).month() === moment(new Date()).month()
    );
  }

  public idadeAtual(membro){
    let anoAtual = moment().toDate();
    let anoMembro = moment(membro.dataNascimento).toDate();
    return anoAtual.getFullYear() - anoMembro.getFullYear();
  }

  public formatarDataDeNascimento(data: any): any {
    return DateUtil.dateFormatterBrazil(data);
  }

  public formatarNumeroWhatsapp(whatsapp: any) {
    let numero = whatsapp.replace("(", "").replace(")", "").replace("-", "");
    return `https://api.whatsapp.com/send/?phone=55${numero}&text&app_absent=0`;
  }

  public pesquisarMembros(ev: any) {
    this.membrosFiltrados = this.membros;
    const val = ev.detail.value;

    if (val && val.trim() !== "") {
      this.membrosFiltrados =
        this.membrosFiltrados.filter((term) => {
          return (
            term.nomeCompleto.toUpperCase().indexOf(val.trim().toUpperCase()) >
            -1
          );
        });
    }
  }
}
