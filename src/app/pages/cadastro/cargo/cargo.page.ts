import { Component } from '@angular/core';
import { CargoService } from '../../../servicos/Cargo';
import { Cargo } from '../../../modelo/Cargo';
import { MensagensUtil } from 'src/app/util/MensagensUtil';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-cargo',
  templateUrl: './cargo.page.html',
  styleUrls: ['./cargo.page.scss'],
})

export class CargoPage {

  cargo: Cargo;
  mensagens: MensagensUtil;

  constructor(
    private cargoService: CargoService,
    private aviso: ToastController) {

    this.cargo = new Cargo();
    this.mensagens = new MensagensUtil(this.aviso);
  }

  public disabledBotaoCadastrar(): boolean {
    return this.cargo.nome == null || this.cargo.descricao == null;
  }

  public cadastrar(): void {
    if (this.cargo) {
      this.cargo.nome = this.cargo.nome.toUpperCase();
      this.cargo.descricao = this.cargo.descricao.toUpperCase();
      this.cargoService.adicionarOuAtualizar(this.cargo);
      this.mensagens.mensagemSucesso("Cadastro realizado com sucesso!");
      this.cargo = new Cargo();
    }

  }

}
