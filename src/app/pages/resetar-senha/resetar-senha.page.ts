import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Membro } from 'src/app/modelo/Membro';
import { Usuario } from 'src/app/modelo/Usuario';
import { AutenticacaoService } from 'src/app/servicos/Autenticacao';
import { MembroService } from 'src/app/servicos/Membro';
import { MensagensUtil } from 'src/app/util/MensagensUtil';

@Component({
  selector: 'app-resetar-senha',
  templateUrl: './resetar-senha.page.html',
  styleUrls: ['./resetar-senha.page.scss'],
})
export class ResetarSenhaPage {

  usuario: Usuario;
  mensagens: MensagensUtil;
  membro: Membro;

  constructor(private membroService: MembroService, private autenticacao: AutenticacaoService, private aviso: ToastController) {
    this.usuario = this.autenticacao.pegarDadosLocalmente() ? this.autenticacao.pegarDadosLocalmente() : new Usuario();
    this.mensagens = new MensagensUtil(this.aviso);
    this.membro = this.autenticacao.dadosMembro(this.usuario.email);;
  }

  private resertarSenha(membroAlterado: Membro): void {

    if (this.usuario) {
      if (this.validaSenha(membroAlterado.senha)) {
        this.membroService.adicionarOuAtualizar(this.trocaSenha(membroAlterado.senha));
        this.mensagens.mensagemSucesso("Senha atualizada com sucesso!");
      } else {
        this.mensagens.mensagemAlerta("A Senha não pode ser alterada, você está utilizando a mesma senha anterior!");
      }
    } else {
      this.mensagens.mensagemError("A senha não pode ser alterada, verifique se há algum dado necessário faltando!");
    }

  }

  private validaSenha(senha: string): boolean {
    return (this.membro.senha != senha) ? true : false;
  }

  private trocaSenha(novaSenha: string): Membro {
    this.membro.senha = novaSenha;
    return this.membro;
  }

}
