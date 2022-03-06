import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Usuario } from 'src/app/modelo/Usuario';
import { AutenticacaoService } from 'src/app/servicos/Autenticacao';
import { MensagensUtil } from 'src/app/util/MensagensUtil';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})

export class InicioPage implements OnInit {

  mensagens: MensagensUtil;
  usuario: Usuario;

  constructor(private autenticacao: AutenticacaoService, private aviso: ToastController) {
    this.mensagens = new MensagensUtil(this.aviso);
    this.usuario = new Usuario();
  }

  async ngOnInit() {
    await this.inicializar();
  }

  public deslogar() {
    this.autenticacao.sair();
    this.mensagens.mensagemSucesso("Você foi desconectado com sucesso!");
  }

  public mensagemDeConstrucao(): void {
    this.mensagens.mensagemAlerta("O menu selecionado está em fase de construção.");
  }

  public permissao(perfisPermitidos: string): boolean {

    let visibilidade: boolean = false;
    const perfis = perfisPermitidos.split(';');

    perfis.forEach(perfil => {
      if (perfil === this.usuario.perfil) {
        visibilidade = true;
      }
    });
    return visibilidade;
  }

  private async inicializar() {
    let email = this.autenticacao.pegarDadosLocalmente().email;
    this.usuario = await this.buscarDadosUsuario(email);
  }

  private async buscarDadosUsuario(email) {
    let dadosUsuario: any;
    await this.autenticacao.dadosLogin(email).then((sucess) => dadosUsuario = sucess).catch((error) => console.log(error));
    return dadosUsuario;
  }

}
