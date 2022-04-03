import { Component, OnInit } from '@angular/core';
import { NavController, ToastController, AlertController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { Membro } from 'src/app/modelo/Membro';
import { MembroService } from 'src/app/servicos/Membro';
import { DateUtil } from 'src/app/util/DateUtil';
import { MensagensUtil } from 'src/app/util/MensagensUtil';

@Component({
  selector: 'app-congregado',
  templateUrl: './congregado.page.html',
  styleUrls: ['./congregado.page.scss'],
})
export class CongregadoPage {
  totalCongregados: Number;
  membrosCongregados: Membro[];
  membrosCongregadosFiltrados: Membro[];
  mensagens: MensagensUtil;
  listaMembrosObservable: Observable<any[]>;

  constructor(
    private membroService: MembroService,
    public navCtrl: NavController,
    private aviso: ToastController,
    public alertController: AlertController
  ) {
    this.mensagens = new MensagensUtil(this.aviso);
    this.inicializar();
  }

  private inicializar(): void {
    this.listaMembrosObservable = this.membroService.listar();
    this.listaMembrosObservable.subscribe((response) => {
      this.membrosCongregados = response;
      this.membrosCongregadosFiltrados = response;
      this.membrosCongregados = this.membrosCongregados.filter(
        (m) => m.classificacao === 'Congregado'
      );
      this.membrosCongregadosFiltrados = this.membrosCongregadosFiltrados.filter(
        (m) => m.classificacao === 'Congregado'
      );
      this.totalCongregados = this.membrosCongregados.length;
      this.membrosCongregadosFiltrados.sort((a, b) =>
        a.nomeCompleto > b.nomeCompleto
          ? 1
          : b.nomeCompleto > a.nomeCompleto
          ? -1
          : 0
      );
      this.membrosCongregados.map((m) => (m.escolaridade = Number(m.escolaridade)));
      this.membrosCongregados.map((m) => (m.estadoCivil = Number(m.estadoCivil)));
    });
  }

  public editarCongregado(membro: Membro): void {
    this.navCtrl.navigateForward('/editar/membro', {
      state: { content: membro },
    });
  }

  public formatarDataDeNascimento(data: any): any {
    return data.includes('/') ? data : DateUtil.dateFormatterBrazil(data);
  }

  public pesquisarCongregados(ev: any) {
    this.membrosCongregadosFiltrados = this.membrosCongregados;
    const val = ev.detail.value;

    if (val && val.trim() !== '') {
      this.membrosCongregadosFiltrados = this.membrosCongregadosFiltrados.filter(
        (term) => {
          return (
            term.nomeCompleto.toUpperCase().indexOf(val.trim().toUpperCase()) >
            -1
          );
        }
      );
      this.membrosCongregadosFiltrados.sort((a, b) =>
        a.nomeCompleto > b.nomeCompleto
          ? 1
          : b.nomeCompleto > a.nomeCompleto
          ? -1
          : 0
      );
    }
  }
}
