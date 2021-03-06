import { Component, OnInit } from '@angular/core';
import { NavController, ToastController, AlertController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { Membro } from 'src/app/modelo/Membro';
import { MembroService } from 'src/app/servicos/Membro';
import { DateUtil } from 'src/app/util/DateUtil';
import { MensagensUtil } from 'src/app/util/MensagensUtil';

@Component({
  selector: 'app-voluntario',
  templateUrl: './voluntario.page.html',
  styleUrls: ['./voluntario.page.scss'],
})
export class VoluntarioPage {
  totalVoluntarios: Number;
  membrosVoluntarios: Membro[];
  membrosVoluntariosFiltrados: Membro[];
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
      this.membrosVoluntarios = response;
      this.membrosVoluntariosFiltrados = response;
      this.membrosVoluntarios = this.membrosVoluntarios.filter(
        (m) => m.classificacao === 'Voluntario'
      );
      this.membrosVoluntariosFiltrados = this.membrosVoluntariosFiltrados.filter(
        (m) => m.classificacao === 'Voluntario'
      );
      this.totalVoluntarios = this.membrosVoluntarios.length;
      this.membrosVoluntariosFiltrados.sort((a, b) =>
        a.nomeCompleto > b.nomeCompleto
          ? 1
          : b.nomeCompleto > a.nomeCompleto
          ? -1
          : 0
      );
      this.membrosVoluntarios.map((m) => (m.escolaridade = Number(m.escolaridade)));
      this.membrosVoluntarios.map((m) => (m.estadoCivil = Number(m.estadoCivil)));
    });
  }

  public editarVoluntario(membro: Membro): void {
    this.navCtrl.navigateForward('/editar/membro', {
      state: { content: membro },
    });
  }

  public formatarDataDeNascimento(data: any): any {
    return data.includes('/') ? data : DateUtil.dateFormatterBrazil(data);
  }

  public pesquisarVoluntarios(ev: any) {
    this.membrosVoluntariosFiltrados = this.membrosVoluntarios;
    const val = ev.detail.value;

    if (val && val.trim() !== '') {
      this.membrosVoluntariosFiltrados = this.membrosVoluntariosFiltrados.filter(
        (term) => {
          return (
            term.nomeCompleto.toUpperCase().indexOf(val.trim().toUpperCase()) >
            -1
          );
        }
      );
      this.membrosVoluntariosFiltrados.sort((a, b) =>
        a.nomeCompleto > b.nomeCompleto
          ? 1
          : b.nomeCompleto > a.nomeCompleto
          ? -1
          : 0
      );
    }
  }

  public async confirmarExclusao(membro: Membro) {
    const alert = await this.alertController.create({
      header: 'Confirma????o de exclus??o',
      message: 'Tem certeza que deseja excluir o volunt??rio selecionado?',
      buttons: [
        {
          text: 'N??o',
          handler: () => {
            this.alertController.dismiss();
          },
        },
        {
          text: 'Sim',
          handler: () => {
            this.excluirMembro(membro);
          },
        },
      ],
    });
    await alert.present();
  }

  private excluirMembro(membro: Membro): void {
    this.membroService.deletar(membro.key);
    this.mensagens.mensagemSucesso('Volunt??rio exclu??do com sucesso!');
    this.inicializar();
  }
}