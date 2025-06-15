import { Component, OnInit } from "@angular/core";
import {
  AlertController,
  NavController,
  ToastController,
} from "@ionic/angular";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
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
  listaEventos: Array<Evento>;
  listaEventosFiltrados: Evento[];
  listaEventosAmbientes: Evento[];
  numTotalEventos: number;
  listaEventosObservable: Observable<any[]>;
  mensagens: MensagensUtil;
  redirecionador: RedirecionadorUtil;

  ambienteSelecionado: string = "IBC";
  dataSelecionada: any = moment().format("YYYY-MM-DD");
  usuarioLogado: Usuario;

  constructor(
    private eventoService: EventoService,
    private aviso: ToastController,
    private navCtrl: NavController,
    public alertController: AlertController,
    private autenticacaoService: AutenticacaoService
  ) {
    moment.locale('pt-br');
    this.inicializar();
  }

  ngOnInit(): void {
    this.usuarioLogado = this.autenticacaoService.pegarDadosLocalmente();
  }

  public inicializar(): void {
    this.mensagens = new MensagensUtil(this.aviso);
    this.eventoService.listar().subscribe((response) => {
      // Definindo valores padrões para evitar verificação redundante
      this.listaEventos = response || [];
      this.listarEventosOrdenados();
    });
  }

  /**
   * Retorna true se a data do evento (formato DD/MM/YYYY) pertence ao mês/ano selecionado (formato MM/YYYY)
   * @param dataEvento string no formato DD/MM/YYYY
   * @param mesAnoSelecionado string no formato MM/YYYY
   */
  pertenceAoMesAno(dataEvento: string, mesAnoSelecionado: string): boolean {
    if (!dataEvento) return false;
    const partes = dataEvento.split('/');
    if (partes.length !== 3) return false;
    const mesAnoEvento = partes[1] + '/' + partes[2];
    return mesAnoEvento === mesAnoSelecionado;
  }

  listarEventosOrdenados(dataSelecionada?: any, ambienteSelecionado?: any) {
    // Usa sempre o valor mais atualizado de dataSelecionada
    const dataAtual = dataSelecionada
      ? moment(dataSelecionada).format("MM/YYYY")
      : moment(this.dataSelecionada).format("MM/YYYY");
    const ambienteAtual = ambienteSelecionado !== undefined ? ambienteSelecionado : "IBC";

    this.listaEventosFiltrados = (this.listaEventos || []).filter(
      (evento) => this.pertenceAoMesAno(evento.data, dataAtual)
    );

    this.listaEventosFiltrados = (this.listaEventosFiltrados || []).sort((a, b) => {
      const dataA = moment(a.data, "DD/MM/YYYY");
      const dataB = moment(b.data, "DD/MM/YYYY");
      return dataB.diff(dataA);
    });

    this.listaEventosFiltrados = (this.listaEventosFiltrados || []).filter(
      (evento) => evento.nome.includes(ambienteAtual)
    );

    this.numTotalEventos = (this.listaEventosFiltrados || []).length;
  }

  transformaData(data: string) {
    const partesData = data.split('/')
    let mesAnoData = partesData[1] + "/" + partesData[2]
    return mesAnoData
  }

  ordenaInformacoes() {
    this.listaEventosFiltrados?.sort((a, b) => {
      // Converte as datas para um formato comparável antes da ordenação
      const dataA = moment(this.transformaDataBRToEn(a.data));
      const dataB = moment(this.transformaDataBRToEn(b.data));
      return dataB.diff(dataA);
    });
  }

  async confirmarExclusao(evento: Evento) {
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

  desabilitaAcessoBotoes(): boolean {
    return this.usuarioLogado.perfil === 'MEM' ? false : true;
  }

  imprimirEventos() {
    //impressao em word de uma lista de eventos em uma tabela
    const doc = new jsPDF("p", "pt", "a4");
    autoTable(doc, {
      head: [["Nome", "Data", "Início", "Fim", "Origem", "Local", "Observações", "Responsável"]],
      body: this.listaEventosFiltrados.map((evento) => [
        evento.nome,
        evento.data,
        evento.horarioInicio,
        evento.horarioFim,
        evento.origem,
        evento.local.logradouro + ", " + evento.local.numero + ", " + evento.local.bairro + ", " + evento.local.cidade + ", " + evento.local.estado,
        evento.observacoes,
        evento.responsavel,
      ]),
    });
    doc.save("eventos.pdf");
  }

  selecionarAmbiente(event: any) {
    this.listarEventosOrdenados(this.dataSelecionada, event.target.value);
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
    this.dataSelecionada = event.detail.value;
    this.listarEventosOrdenados(this.dataSelecionada, this.ambienteSelecionado);
  }

  transformaDataBRToEn(data: string) {
    const partesData = data.split('/')
    return partesData[2] + '-' + partesData[1] + '-' + partesData[0]
  }

  filtarPeloMesEAno() {
    this.listaEventosFiltrados = this.listaEventosAmbientes.filter((evento) => {
      let novaDataEvento = this.transformaData(evento.data);
      let novaDataSelecionada = moment(this.dataSelecionada).format("MM/YYYY");

      return novaDataEvento === novaDataSelecionada ? true : false;
    });
    this.ordenaInformacoes();
    this.numTotalEventos = this.listaEventosFiltrados.length;
  }
}
