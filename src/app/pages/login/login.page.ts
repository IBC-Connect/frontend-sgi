import { MembroService } from "src/app/servicos/Membro";
import { Component, OnInit } from "@angular/core";
import {
  LoadingController,
  NavController,
  ToastController,
} from "@ionic/angular";
import { Usuario } from "../../modelo/Usuario";
import { AutenticacaoService } from "../../servicos/Autenticacao";
import { MensagensUtil } from "../../util/MensagensUtil";
import { RedirecionadorUtil } from "../../util/RedirecionadorUtil";
import { Membro } from "src/app/modelo/Membro";

@Component({
  selector: "app-Login",
  templateUrl: "Login.page.html",
  styleUrls: ["Login.page.scss"],
})
export class LoginPage implements OnInit {
  logarAcionado = false;
  listaMembros: Membro[];
  usuario: Usuario;
  exibirSenha: boolean = false;
  passwordType: string = "password";
  mensagens: MensagensUtil;
  redirecionadorUtil: RedirecionadorUtil;

  constructor(
    private autenticacao: AutenticacaoService,
    private membroService: MembroService,
    private toast: ToastController,
    private navCtrl: NavController,
    private loadingCtrl: LoadingController
  ) {
    this.usuario = new Usuario();
    this.mensagens = new MensagensUtil(this.toast);
    this.redirecionadorUtil = new RedirecionadorUtil(this.navCtrl);
  }

  async ngOnInit() {
    await this.prepararLogin();
  }

  public visualizarSenha() {
    this.exibirSenha = this.exibirSenha ? false : true;
    this.passwordType = this.exibirSenha ? "password" : "text";
  }

  public async logar(usuario: Usuario) {
    this.logarAcionado = true;
    let membro = this.filtrarUsuario(usuario, this.listaMembros);

    if (membro) {
      let localizacao = await this.getUserLocation();
      this.autenticacao.salvaUsuario(localizacao, membro);
      await this.autenticacao.login(this.preencherDadosLogin());
      this.redirecionadorUtil.redicionarPara("inicio");
      this.logarAcionado = false;
    } else {
      this.logarAcionado = false;
      this.mensagens.mensagemError("E-mail ou senha inválido(a)!");
    }
  }

  public async prepararLogin() {
    this.membroService.listar().subscribe((data: Membro[]) => {
      if (data) {
        this.listaMembros = data;
      } else {
        this.mensagens.mensagemError("E-mail ou senha inválido(a)!");
      }
    });
  }

  private filtrarUsuario(
    usuario: Usuario,
    listaMembros: Array<Membro>
  ): Membro {
    return Object.values(listaMembros).find(
      (membro) =>
        membro.email === usuario.email && membro.senha === usuario.senha
    );
  }

  private preencherDadosLogin(): Usuario {
    let usuario = new Usuario();

    usuario.email = "admin_sgi@sgi.com.br";
    usuario.senha = "ibc@2023";
    return usuario;
  }

  async showLoading() {
    const loading = await this.loadingCtrl.create({
      cssClass: "custom-loading",
    });

    loading.present();
  }

  private async getIpAddress() {
    const response = await fetch('https://api.ipify.org?format=json');
    const data = await response.json();
    return data.ip;
  }

  private async getLocation(ipAddress) {
    const response = await fetch(`http://ip-api.com/json/${ipAddress}`);
    const locationData = await response.json();
    return locationData;
  }

  private async getUserLocation() {
    try {
      const ipAddress = await this.getIpAddress();
      const location = await this.getLocation(ipAddress);
      return location
    } catch (error) {
      console.error("Erro ao obter a localização do usuário: ", error);
    }
  }
}
