import { Component } from '@angular/core';
import { AlertController, NavController, ToastController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { Evento } from 'src/app/modelo/Evento';
import { EventoService } from 'src/app/servicos/Evento';
import { MensagensUtil } from 'src/app/util/MensagensUtil';
import { RedirecionadorUtil } from 'src/app/util/RedirecionadorUtil';
import * as moment from 'moment';

@Component({
  selector: 'app-evento',
  templateUrl: './evento.page.html',
  styleUrls: ['./evento.page.scss'],
})
export class EventoPage {

  listaEventos: Evento[];
  listaEventosFiltrados: Evento[];
  numTotalEventos: number;
  listaEventosObservable: Observable<any[]>;
  mensagens: MensagensUtil;
  redirecionador: RedirecionadorUtil;

  constructor(
    private eventoService: EventoService,
    private aviso: ToastController,
    private navCtrl: NavController,
    public alertController: AlertController
  ) {
    moment.locale('pt-br');
    this.inicializar();

  }

  public inicializar(): void {
    this.mensagens = new MensagensUtil(this.aviso);
    this.redirecionador = new RedirecionadorUtil(this.navCtrl);
    this.listaEventosObservable = this.eventoService.listar();
    this.listaEventosObservable.subscribe(async (response) => {
      this.listaEventos = await this.verificarEventosExpirados(response);
      this.listaEventosFiltrados = this.listaEventos;
      this.numTotalEventos = this.listaEventos ? this.listaEventos.length : 0;
      this.listaEventosFiltrados = this.listaEventosFiltrados ? (this.listaEventosFiltrados.sort((a, b) => moment.utc(b.data).diff(moment.utc(a.data)))) : new Array<Evento>();
    });

  }


  public async confirmarExclusao(evento: Evento) {
    const alert = await this.alertController.create({
      header: 'Confirmação de exclusão',
      message: 'Tem certeza que deseja excluir o evento selecionado?',
      buttons: [
        {
          text: 'Não',
          handler: () => {
            this.alertController.dismiss();
          },
        },
        {
          text: 'Sim',
          handler: () => {
            this.excluirEvento(evento);
          },
        },
      ],
    });
    await alert.present();
  }

  private excluirEvento(evento: Evento): void {
    this.eventoService.deletar(evento.key);
    this.mensagens.mensagemSucesso('Evento excluído com sucesso!');
    this.inicializar();
  }

  public editarEvento(evento: Evento): void {
    this.navCtrl.navigateForward('/editar/evento', {
      state: { content: evento },
    });
  }

  public pesquisarEvento(ev: any) {
    this.listaEventosFiltrados = this.listaEventos;
    const val = ev.detail.value;

    if (val && val.trim() !== '') {
      this.listaEventosFiltrados = this.listaEventosFiltrados.filter((term) => {
        return term.nome.toUpperCase().indexOf(val.trim().toUpperCase()) > -1;
      });
    }
  }

  public async verificarEventosExpirados(response) {

    var listaEvento = new Array<Evento>();
    
    await response.forEach(evento => {
      if (!moment(evento.data).isBefore(moment(new Date()))) {
        listaEvento.push(evento);
      }
    })

    return listaEvento;

  }

}
