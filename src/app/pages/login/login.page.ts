import { Component } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { Usuario } from '../../modelo/Usuario';
import { AutenticacaoService } from '../../servicos/Autenticacao';
import { MensagensUtil } from '../../util/MensagensUtil';
import { RedirecionadorUtil } from '../../util/RedirecionadorUtil';

@Component({
  selector: 'app-Login',
  templateUrl: 'Login.page.html',
  styleUrls: ['Login.page.scss'],
})
export class LoginPage {

  usuario: Usuario;
  exibirSenha: boolean = false;
  passwordType: string = 'password';
  mensagens: MensagensUtil;
  redirecionador: RedirecionadorUtil;

  constructor(private autenticacao: AutenticacaoService,
    private toast: ToastController,
    private navegador: NavController) {

    this.usuario = new Usuario();
    this.mensagens = new MensagensUtil(this.toast);
    this.redirecionador = new RedirecionadorUtil(this.navegador);
  }

  public visualizarSenha() {
    this.exibirSenha = this.exibirSenha ? false : true;
    this.passwordType = this.exibirSenha ? 'password' : 'text';
  }

  public logar(usuario: Usuario) {

    this.autenticacao.login(usuario).then(
      (sucesso) => {
        this.autenticacao.salvaUsuario(usuario, sucesso);
        this.redirecionador.redicionarPara("inicio");
      },
      (error) => {
        this.mensagens.mensagemError("E-mail ou senha inválido(a)!");
      }
    );
  }

}
