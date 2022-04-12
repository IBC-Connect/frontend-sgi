import { Component} from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { Membro } from 'src/app/modelo/Membro';
import { MembroService } from 'src/app/servicos/Membro';
import { DateUtil } from 'src/app/util/DateUtil';
import { MensagensUtil } from 'src/app/util/MensagensUtil';

@Component({
  selector: 'app-membro-inativo',
  templateUrl: './membro-inativo.page.html',
  styleUrls: ['./membro-inativo.page.scss'],
})
export class MembroInativoPage   {

  membrosInativos: Membro[];
  membrosInativosFiltrados: Membro[];
  mensagens: MensagensUtil;
  listaMembrosObservable: Observable<any[]>;
  totalMembros: Number;

  constructor(
    private membroService: MembroService,
    private aviso: ToastController,
    public alertController: AlertController
  ) {
    this.mensagens = new MensagensUtil(this.aviso);
    this.inicializar();
  }

  private inicializar(): void {
    this.listaMembrosObservable = this.membroService.listar();
    this.listaMembrosObservable.subscribe((response) => {
    
      this.membrosInativos = response;
      this.membrosInativosFiltrados = response;
      this.membrosInativos = this.membrosInativos.filter((m) => this.filtrarMembro(m));
      this.membrosInativosFiltrados = this.membrosInativosFiltrados.filter((m) => this.filtrarMembro(m));
      this.totalMembros= this.membrosInativos.length;
      this.membrosInativosFiltrados.sort((a, b) =>  a.nomeCompleto > b.nomeCompleto ? 1 : b.nomeCompleto > a.nomeCompleto ? -1 : 0);
      this.membrosInativos.map((m) => (m.escolaridade = Number(m.escolaridade)));
      this.membrosInativos.map((m) => (m.estadoCivil = Number(m.estadoCivil)));
    });
  }

  private filtrarMembro(membro) : boolean {
    return membro.situacao === 'Inativo' && (membro.classificacao === undefined || membro.classificacao === "Membro");
  }

  public formatarDataDeNascimento(data: any): any {
    return data.includes('/')? data : DateUtil.dateFormatterBrazil(data);
  }
 
  public async confirmarAtivacao(membro: Membro) {
    const alert = await this.alertController.create({
      header: 'Confirmação de ativação',
      message: 'Tem certeza que deseja ativar o membro selecionado?',
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
            this.ativarUsuario(membro);
          },
        },
      ],
    });
    await alert.present();
  }

  private ativarUsuario(membro: Membro): void {
    if (membro.key) {
      membro.situacao='Ativo';
      this.membroService.adicionarOuAtualizar(membro);
      this.mensagens.mensagemSucesso('Usuário ativado com sucesso!');
      this.inicializar();
    }
  }

  public pesquisarInativos(ev: any) {
    this.membrosInativosFiltrados = this.membrosInativos;
    const val = ev.detail.value;

    if (val && val.trim() !== '') {
      this.membrosInativosFiltrados = this.membrosInativosFiltrados.filter(term => {
        return term.nomeCompleto.toUpperCase().indexOf(val.trim().toUpperCase()) > -1;
      });
      this.membrosInativosFiltrados.sort((a, b) =>
        a.nomeCompleto > b.nomeCompleto ? 1 : b.nomeCompleto > a.nomeCompleto ? -1 : 0);
      
    }
  }

  public async confirmarExclusao(membro: Membro) {
    const alert = await this.alertController.create({
      header: 'Confirmação de exclusão',
      message: 'Tem certeza que deseja excluir o membro selecionado?',
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
            this.excluirMembro(membro);
          },
        },
      ],
    });
    await alert.present();
  }

  private excluirMembro(membro: Membro): void {
    this.membroService.deletar(membro.key);
    this.mensagens.mensagemSucesso('Membro excluído com sucesso!');
    this.inicializar();
  }
}
