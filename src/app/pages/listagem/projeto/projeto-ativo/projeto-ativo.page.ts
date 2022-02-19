import { Component, OnInit } from '@angular/core';
import { AlertController, NavController, ToastController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { Projeto } from 'src/app/modelo/Projeto';
import { ProjetoService } from 'src/app/servicos/Projeto';
import { MensagensUtil } from 'src/app/util/MensagensUtil';
import { RedirecionadorUtil } from 'src/app/util/RedirecionadorUtil';

@Component({
  selector: 'app-projeto-ativo',
  templateUrl: './projeto-ativo.page.html',
  styleUrls: ['./projeto-ativo.page.scss'],
})
export class ProjetoAtivoPage implements OnInit {

  listaProjetos : Projeto[];
  mensagens : MensagensUtil;
  redirecionador : RedirecionadorUtil;
  listaProjetosFiltrados: Projeto[];
  numTotalProjetos: number;
  listaProjetosObservable: Observable<any[]>;
 
  constructor(
    private projetoService : ProjetoService,
    private aviso : ToastController,
    private navegador : NavController,
    public alertController: AlertController
  ) {}

  ngOnInit() {
    this.inicializar();
  }

  private inicializar () : void {
    this.mensagens = new MensagensUtil(this.aviso);
    this.redirecionador = new RedirecionadorUtil(this.navegador);
    this.listaProjetosObservable = this.projetoService.listar();
    this.listaProjetosObservable.subscribe((response) => {
    this.listaProjetos = response;
    this.listaProjetosFiltrados = response;
    this.listaProjetos = this.listaProjetos.filter((m) => m.situacao === 'Ativo');
    this.listaProjetosFiltrados = this.listaProjetosFiltrados.filter((m) => m.situacao === 'Ativo');
    this.numTotalProjetos = this.listaProjetos.length;
    this.listaProjetosFiltrados.sort((a, b) => a.nome > b.nome ? 1 : b.nome > a.nome ? -1 : 0 );
    });
  }

  public editarProjeto(projeto: Projeto): void {
    this.navegador.navigateForward('/editar/projeto', {
      state: { content: projeto },
    });
  }
  
  public pesquisarProjetos (ev: any) {
    this.listaProjetosFiltrados = this.listaProjetos;
    const val = ev.detail.value;
  
    if (val && val.trim() !== '') {
      this.listaProjetosFiltrados = this.listaProjetosFiltrados.filter((term) => {
        return term.responsavel.toUpperCase().indexOf(val.trim().toUpperCase()) > -1;
      });
    }
  }
  
  public async confirmarInativacao(projeto: Projeto) {
    const alert = await this.alertController.create({
      header: 'Confirmação de inativação',
      message: 'Tem certeza que deseja inativar o projeto selecionado?',
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
            this.inativarProjeto(projeto);
          },
        },
      ],
    });
    await alert.present();
  }
  
  private inativarProjeto(projeto : Projeto) : void {
    if (projeto.key) {
      projeto.situacao='Inativo';
      this.projetoService.adicionarOuAtualizar(projeto);
      this.mensagens.mensagemSucesso('Projeto inativado com sucesso!');
      this.inicializar();
    }
  
  }
   
  public associarProjeto(projeto: Projeto): void {
    this.navegador.navigateForward('/associar/projeto', {
      state: { content: projeto },
    });
  }

}
