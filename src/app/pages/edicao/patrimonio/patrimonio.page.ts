import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Patrimonio } from 'src/app/modelo/Patrimonio';
import { PatrimonioService } from 'src/app/servicos/Patrimonio';
import { MensagensUtil } from 'src/app/util/MensagensUtil';

@Component({
  selector: 'app-patrimonio',
  templateUrl: './patrimonio.page.html',
  styleUrls: ['./patrimonio.page.scss'],
})
export class PatrimonioPage implements OnInit {

  patrimonio: Patrimonio;
  mensagens: MensagensUtil;

  constructor(
    private patrimonioService: PatrimonioService,
    private aviso: ToastController,
    private router: Router
  ) {
    const nav = this.router.getCurrentNavigation();
    this.patrimonio = nav.extras.state.content;
    this.inicializar();
  }

  ngOnInit(): void {
  }

  private inicializar(): void {
    this.mensagens = new MensagensUtil(this.aviso);
  }

  public disabledBotaoAtualizar(): boolean {
    return this.patrimonio.nome == null || this.patrimonio.descricao == null;
  }

  public editar(): void {
    if (this.patrimonio) {
      this.patrimonio.nome = this.patrimonio.nome.toUpperCase();
      this.patrimonio.descricao = this.patrimonio.descricao.toUpperCase();
      this.patrimonioService.adicionarOuAtualizar(this.patrimonio);
      this.mensagens.mensagemSucesso("patrimonio atualizado com sucesso!");
      this.inicializar();
    }
  }
}

