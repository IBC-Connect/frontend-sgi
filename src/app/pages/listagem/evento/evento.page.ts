import { ChangeDetectorRef, Component, OnInit } from "@angular/core";
import {
  AlertController,
  NavController,
  ToastController,
} from "@ionic/angular";
import * as moment from "moment";
import "moment/locale/pt-br";
import { Observable } from "rxjs";
import { Evento } from "src/app/modelo/Evento";
import { Usuario } from "src/app/modelo/Usuario";
import { AutenticacaoService } from "src/app/servicos/Autenticacao";
import { EventoService } from "src/app/servicos/Evento";
import { MensagensUtil } from "src/app/util/MensagensUtil";
import { RedirecionadorUtil } from "src/app/util/RedirecionadorUtil";

@Component({
  selector: "app-evento",
  templateUrl: "./evento.page.html",
  styleUrls: ["./evento.page.scss"],
})
export class EventoPage implements OnInit {
  listaEventos: Evento[];
  listaEventosFiltrados: Evento[];
  numTotalEventos: number;
  listaEventosObservable: Observable<any[]>;
  mensagens: MensagensUtil;
  redirecionador: RedirecionadorUtil;

  dataSelecionada: any = moment().format("YYYY-MM-DD");
  usuarioLogado: Usuario;

  constructor(
    private eventoService: EventoService,
    private aviso: ToastController,
    private navCtrl: NavController,
    public alertController: AlertController,
    private mudancas: ChangeDetectorRef,
    private autenticacaoService: AutenticacaoService
  ) {
    moment.locale("pt-br");
    this.inicializar();
  }

  ngOnInit(): void {
    this.usuarioLogado = this.autenticacaoService.pegarDadosLocalmente();
  }

  public inicializar(): void {
    this.mensagens = new MensagensUtil(this.aviso);
    this.eventoService.listar().subscribe((response) => {

      if (response) {
        this.listaEventos = response;

        this.listaEventosFiltrados = response.filter((evento) => {
          let dataEvento = moment(evento.data, "DD/MM/YYYY").format("MM/YYYY");
          let dataAtual = moment().format("MM/YYYY");

          return dataEvento === dataAtual ? true : false;
        });

        this.listaEventosFiltrados = this.listaEventosFiltrados.sort((a, b) =>
          moment(b.data, "DD/MM/YYYY").diff(moment(a.data, "DD/MM/YYYY"))
        )
        this.numTotalEventos = this.listaEventosFiltrados.length;
      } else {
        this.listaEventos = [];
        this.listaEventosFiltrados = [];
        this.numTotalEventos = 0;
      }
    });
  }

  public async confirmarExclusao(evento: Evento) {
    const alert = await this.alertController.create({
      header: "Confirmação de exclusão",
      message: "Tem certeza que deseja excluir o evento selecionado?",
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
            this.excluirEvento(evento);
          },
        },
      ],
    });
    await alert.present();
  }

  private desabilitaAcessoBotoes(): boolean {
    return this.usuarioLogado.perfil === 'MEM' ? false : true;
  }

  private excluirEvento(evento: Evento): void {
    this.eventoService.deletar(evento.key);
    this.mensagens.mensagemSucesso("Evento excluído com sucesso!");
    this.inicializar();
  }

  public editarEvento(evento: Evento): void {
    this.navCtrl.navigateForward("/editar/evento", {
      state: { content: evento },
    });
  }

  public pesquisarEvento(ev: any) {
    this.listaEventosFiltrados = this.listaEventos;
    const val = ev.detail.value;

    if (val && val.trim() !== "") {
      this.listaEventosFiltrados = this.listaEventosFiltrados.filter((term) => {
        return term.nome.toUpperCase().indexOf(val.trim().toUpperCase()) > -1;
      });
    }
  }

  get mesesDoAno() {
    return [
      { mes: "Janeiro", valor: 1 },
      { mes: "Fevereiro", valor: 2 },
      { mes: "Março", valor: 3 },
      { mes: "Abril", valor: 4 },
      { mes: "Maio", valor: 5 },
      { mes: "Junho", valor: 6 },
      { mes: "Julho", valor: 7 },
      { mes: "Agosto", valor: 8 },
      { mes: "Setembro", valor: 9 },
      { mes: "Outubro", valor: 10 },
      { mes: "Novembro", valor: 11 },
      { mes: "Dezembro", valor: 12 },
    ];
  }

  dataMudando(event: any) {
    this.listaEventosFiltrados = this.listaEventos.filter((evento) => {
      let novaDataEvento = moment(evento.data, "DD/MM/YYYY").format("MM/YYYY");
      let novaDataSelecionada = moment(this.dataSelecionada).format("MM/YYYY");

      return novaDataEvento === novaDataSelecionada ? true : false;
    });

    this.numTotalEventos = this.listaEventosFiltrados.length;

    this.mudancas.detectChanges();
  }
}
