import { Component } from '@angular/core';
import { ToastController, NavController, AlertController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { Assistido } from 'src/app/modelo/Assistido';
import { AssistidoService } from 'src/app/servicos/Assistido';
import { DateUtil } from 'src/app/util/DateUtil';
import { MensagensUtil } from 'src/app/util/MensagensUtil';
import { RedirecionadorUtil } from 'src/app/util/RedirecionadorUtil';

@Component({
  selector: 'app-assistido',
  templateUrl: './assistido.page.html',
  styleUrls: ['./assistido.page.scss'],
})
export class AssistidoPage {
  listaAssistidos: Assistido[];
  listaAssistidosFiltrados: Assistido[];
  numTotalAssistidos: number;
  listaAssistidosObservable: Observable<any[]>;
  mensagens: MensagensUtil;
  redirecionador: RedirecionadorUtil;

  constructor(
    private assistidoService: AssistidoService,
    private aviso: ToastController,
    private navCtrl: NavController,
    public alertController: AlertController
  ) {
    this.inicializar();
  }

  public inicializar(): void {
    this.mensagens = new MensagensUtil(this.aviso);
    this.redirecionador = new RedirecionadorUtil(this.navCtrl);
    this.listaAssistidosObservable = this.assistidoService.listar();
    this.listaAssistidosObservable.subscribe((response) => {
      this.listaAssistidos = response;
      this.listaAssistidosFiltrados = response;
      this.numTotalAssistidos = this.listaAssistidos.length;
      this.listaAssistidosFiltrados.sort((a, b) =>
        a.nomeCompleto > b.nomeCompleto
          ? 1
          : b.nomeCompleto > a.nomeCompleto
          ? -1
          : 0
      );
    });
  }

  public editarAssistido(assistido: Assistido): void {
    this.navCtrl.navigateForward('/editar/assistido', {
      state: { content: assistido },
    });
  }

  public formatarDataDeNascimento(data: any): any {
    return data.includes('/') ? data : DateUtil.dateFormatterBrazil(data);
  }

  public onSearchTerm(ev: any) {
    this.listaAssistidosFiltrados = this.listaAssistidos;
    const val = ev.detail.value;

    if (val && val.trim() !== '') {
      this.listaAssistidosFiltrados = this.listaAssistidosFiltrados.filter((term) => {
        return term.nomeCompleto.toUpperCase().indexOf(val.trim().toUpperCase()) > -1;
      });
    }
  }

}
