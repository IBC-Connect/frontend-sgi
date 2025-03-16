import { Component, OnInit } from '@angular/core';
import { AlertController, NavController, ToastController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { Patrimonio } from 'src/app/modelo/Patrimonio';
import { Usuario } from 'src/app/modelo/Usuario';
import { AutenticacaoService } from 'src/app/servicos/Autenticacao';
import { PatrimonioService } from 'src/app/servicos/Patrimonio';
import { MensagensUtil } from 'src/app/util/MensagensUtil';
import { RedirecionadorUtil } from 'src/app/util/RedirecionadorUtil';

@Component({
  selector: 'app-patrimonio',
  templateUrl: './patrimonio.page.html',
  styleUrls: ['./patrimonio.page.scss'],
})
export class PatrimonioPage implements OnInit {
  listaPatrimonios: Patrimonio[];
  listaPatrimoniosFiltrados: Patrimonio[];
  numTotalPatrimonios: number;
  listaPatrimoniosObservable: Observable<any[]>;
  mensagens: MensagensUtil;
  redirecionador: RedirecionadorUtil;

  usuarioLogado: Usuario;

  constructor(
    private patrimonioService: PatrimonioService,
    private aviso: ToastController,
    private navCtrl: NavController,
    public alertController: AlertController,
    private autenticacaoService: AutenticacaoService
  ) {
    this.inicializar();
  }

  ngOnInit(): void {
    this.usuarioLogado = this.autenticacaoService.pegarDadosLocalmente();
  }

  public inicializar(): void {
    this.mensagens = new MensagensUtil(this.aviso);
    this.patrimonioService.listar().subscribe((response) => {

      if (response) {
        this.listaPatrimonios = response;
        this.listaPatrimoniosFiltrados = response;
        this.numTotalPatrimonios = this.listaPatrimonios.length;
        this.listaPatrimoniosFiltrados.sort((a, b) =>
          a.nome > b.nome
            ? 1
            : b.nome > a.nome
              ? -1
              : 0
        );
      } else {
        this.listaPatrimonios = [];
        this.listaPatrimoniosFiltrados = [];
        this.numTotalPatrimonios = 0;
      }

    });
  }

  public async confirmarExclusao(patrimonio: Patrimonio) {
    const alert = await this.alertController.create({
      header: 'Confirmação de exclusão',
      message: 'Tem certeza que deseja excluir o Patrimonio selecionado?',
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
            this.excluirPatrimonio(patrimonio);
          },
        },
      ],
    });
    await alert.present();
  }

  desabilitaAcessoBotoes(): boolean {
    return this.usuarioLogado.perfil === 'MEM' ? false : true;
  }

  private excluirPatrimonio(patrimonio: Patrimonio): void {
    this.patrimonioService.deletar(patrimonio.key);
    this.mensagens.mensagemSucesso('Patrimonio excluído com sucesso!');
    this.inicializar();
  }

  public editarPatrimonio(patrimonio: Patrimonio): void {
    this.navCtrl.navigateForward('/editar/patrimonio', {
      state: { content: patrimonio },
    });
  }

  public onSearchTerm(ev: any) {
    this.listaPatrimoniosFiltrados = this.listaPatrimonios;
    const val = ev.detail.value;

    if (val && val.trim() !== '') {
      this.listaPatrimoniosFiltrados = this.listaPatrimoniosFiltrados.filter((term) => {
        return term.nome.toUpperCase().indexOf(val.trim().toUpperCase()) > -1;
      });
    }
  }

}