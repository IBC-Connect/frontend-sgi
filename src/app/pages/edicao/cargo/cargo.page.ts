import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Cargo } from 'src/app/modelo/Cargo';
import { CargoService } from 'src/app/servicos/Cargo';
import { MensagensUtil } from 'src/app/util/MensagensUtil';

@Component({
  selector: 'app-cargo',
  templateUrl: './cargo.page.html',
  styleUrls: ['./cargo.page.scss'],
})
export class CargoPage  {

  cargo : Cargo;
  mensagens : MensagensUtil;

  constructor(
    private cargoService : CargoService,
    private aviso : ToastController,
    private router : Router
  ) { 
    const nav = this.router.getCurrentNavigation();
    this.cargo = nav.extras.state.content;
    this.inicializar();
  }

  private inicializar(): void {
    this.mensagens = new MensagensUtil(this.aviso);
  }

  public disabledBotaoAtualizar(): boolean{
    return this.cargo.nome ==null || this.cargo.descricao==null;
  }
 
  public editar():void {
    if (this.cargo) {
      this.cargo.nome = this.cargo.nome.toUpperCase();
      this.cargo.descricao = this.cargo.descricao.toUpperCase();
      this.cargoService.adicionarOuAtualizar(this.cargo);
      this.mensagens.mensagemSucesso("Cargo atualizado com sucesso!");
      this.inicializar();
    }
  }
}
