import { Component, OnInit } from '@angular/core';
import { ToastController, NavController, AlertController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { Parceiro } from 'src/app/modelo/Parceiro';
import { Usuario } from 'src/app/modelo/Usuario';
import { AutenticacaoService } from 'src/app/servicos/Autenticacao';
import { ParceiroService } from 'src/app/servicos/Parceiro';
import { MensagensUtil } from 'src/app/util/MensagensUtil';
import { RedirecionadorUtil } from 'src/app/util/RedirecionadorUtil';

@Component({
  selector: 'app-parceiro',
  templateUrl: './parceiro.page.html',
  styleUrls: ['./parceiro.page.scss'],
})
export class ParceiroPage implements OnInit {

  listaParceiros: Parceiro[];
  listaParceirosFiltrados: Parceiro[];
  numTotalParceiros: number;
  listaParceirosObservable: Observable<any[]>;
  mensagens: MensagensUtil;
  redirecionador: RedirecionadorUtil;

  usuarioLogado: Usuario;

  constructor(
    private parceiroService: ParceiroService,
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
    this.parceiroService.listar().subscribe((response) => {

      if (response) {
        this.listaParceiros = response;
        this.listaParceirosFiltrados = response;
        this.numTotalParceiros = this.listaParceiros.length;
        this.listaParceirosFiltrados.sort((a, b) =>
          a.nome > b.nome
            ? 1
            : b.nome > a.nome
              ? -1
              : 0
        );
      } else {
        this.listaParceiros = [];
        this.listaParceirosFiltrados = [];
        this.numTotalParceiros = 0;
      }

    });
  }

  public async confirmarExclusao(Parceiro: Parceiro) {
    const alert = await this.alertController.create({
      header: 'Confirmação de exclusão',
      message: 'Tem certeza que deseja excluir o Parceiro selecionado?',
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
            this.excluirParceiro(Parceiro);
          },
        },
      ],
    });
    await alert.present();
  }

  desabilitaAcessoBotoes(): boolean {
    return this.usuarioLogado.perfil === 'MEM' ? false : true;
  }

  private excluirParceiro(Parceiro: Parceiro): void {
    this.parceiroService.deletar(Parceiro.key);
    this.mensagens.mensagemSucesso('Parceiro excluído com sucesso!');
    this.inicializar();
  }

  public editarParceiro(Parceiro: Parceiro): void {
    this.navCtrl.navigateForward('/editar/Parceiro', {
      state: { content: Parceiro },
    });
  }

  public onSearchTerm(ev: any) {
    this.listaParceirosFiltrados = this.listaParceiros;
    const val = ev.detail.value;

    if (val && val.trim() !== '') {
      this.listaParceirosFiltrados = this.listaParceirosFiltrados.filter((term) => {
        return term.nome.toUpperCase().indexOf(val.trim().toUpperCase()) > -1;
      });
    }
  }


}
