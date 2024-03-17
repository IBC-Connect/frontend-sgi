import { Component, OnInit } from '@angular/core';
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
    private aviso: ToastController) {

    this.patrimonio = new Patrimonio();
    this.mensagens = new MensagensUtil(this.aviso);

  }

  ngOnInit(): void {
  }

  public disabledBotaoCadastrar(): boolean {
    return this.patrimonio.nome == null || this.patrimonio.descricao == null;
  }

  public cadastrar(): void {
    if (this.patrimonio) {
      this.patrimonio.nome = this.patrimonio.nome.toUpperCase();
      this.patrimonio.descricao = this.patrimonio.descricao.toUpperCase();
      this.patrimonioService.adicionarOuAtualizar(this.patrimonio);
      this.mensagens.mensagemSucesso("Cadastro realizado com sucesso!");
      this.patrimonio = new Patrimonio();
    }
  }

}
