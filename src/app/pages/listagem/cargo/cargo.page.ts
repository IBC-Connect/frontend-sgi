import { Component } from '@angular/core';
import { AlertController, NavController, ToastController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { Cargo } from 'src/app/modelo/Cargo';
import { Usuario } from 'src/app/modelo/Usuario';
import { AutenticacaoService } from 'src/app/servicos/Autenticacao';
import { CargoService } from 'src/app/servicos/Cargo';
import { MensagensUtil } from 'src/app/util/MensagensUtil';
import { RedirecionadorUtil } from 'src/app/util/RedirecionadorUtil';

@Component({
  selector: 'app-cargo',
  templateUrl: './cargo.page.html',
  styleUrls: ['./cargo.page.scss'],
})
export class CargoPage {
  listaCargos: Cargo[];
  listaCargosFiltrados: Cargo[];
  numTotalCargos: number;
  listaCargosObservable: Observable<any[]>;
  mensagens: MensagensUtil;
  redirecionador: RedirecionadorUtil;

  usuarioLogado: Usuario;

  constructor(
    private cargoService: CargoService,
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
    this.cargoService.listar().subscribe((response) => {

      if (response) {
        this.listaCargos = response;
        this.listaCargosFiltrados = response;
        this.numTotalCargos = this.listaCargos.length;
        this.listaCargosFiltrados.sort((a, b) =>
          a.nome > b.nome
            ? 1
            : b.nome > a.nome
              ? -1
              : 0
        );
      } else {
        this.listaCargos = [];
        this.listaCargosFiltrados = [];
        this.numTotalCargos = 0;
      }

    });
  }

  public async confirmarExclusao(cargo: Cargo) {
    const alert = await this.alertController.create({
      header: 'Confirmação de exclusão',
      message: 'Tem certeza que deseja excluir o cargo selecionado?',
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
            this.excluirCargo(cargo);
          },
        },
      ],
    });
    await alert.present();
  }

  desabilitaAcessoBotoes(): boolean {
    return this.usuarioLogado.perfil === 'MEM' ? false : true;
  }

  private excluirCargo(cargo: Cargo): void {
    this.cargoService.deletar(cargo.key);
    this.mensagens.mensagemSucesso('Cargo excluído com sucesso!');
    this.inicializar();
  }

  public editarCargo(cargo: Cargo): void {
    this.navCtrl.navigateForward('/editar/cargo', {
      state: { content: cargo },
    });
  }

  public associarCargo(cargo: Cargo): void {
    this.navCtrl.navigateForward('/associar/cargo', {
      state: { content: cargo },
    });
  }

  public onSearchTerm(ev: any) {
    this.listaCargosFiltrados = this.listaCargos;
    const val = ev.detail.value;

    if (val && val.trim() !== '') {
      this.listaCargosFiltrados = this.listaCargosFiltrados.filter((term) => {
        return term.nome.toUpperCase().indexOf(val.trim().toUpperCase()) > -1;
      });
    }
  }

}
