import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Parceiro } from 'src/app/modelo/Parceiro';
import { ParceiroService } from 'src/app/servicos/Parceiro';
import { MensagensUtil } from 'src/app/util/MensagensUtil';

@Component({
  selector: 'app-parceiro',
  templateUrl: './parceiro.page.html',
  styleUrls: ['./parceiro.page.scss'],
})
export class ParceiroPage implements OnInit {

  parceiro: Parceiro;
  mensagens: MensagensUtil;

  constructor(
    private parceiroService: ParceiroService,
    private aviso: ToastController) {
    this.parceiro = new Parceiro();
    this.mensagens = new MensagensUtil(this.aviso);
  }

  ngOnInit(): void {
  }

  public disabledBotaoCadastrar(): boolean {
    return this.parceiro.nome == null || this.parceiro.representante == null;
  }

  public cadastrar(): void {
    if (this.parceiro) {
      this.parceiro.nome = this.parceiro.nome.toUpperCase();
      this.parceiro.representante = this.parceiro.representante.toUpperCase();

      this.parceiroService.adicionarOuAtualizar(this.parceiro);
      this.mensagens.mensagemSucesso("Cadastro realizado com sucesso!");
      this.parceiro = new Parceiro();
    }
  }

}
