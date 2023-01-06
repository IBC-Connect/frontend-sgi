import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { Observable } from "rxjs";

import { Membro } from "../modelo/Membro";
import { Usuario } from "../modelo/Usuario";
import { CriptografiaUtil } from "../util/CriptografiaUtil";

//Firebase
@Injectable({
  providedIn: "root",
})
export class AutenticacaoService {
  public userData$: Observable<any>;
  public listaMembros: Membro[];

  constructor(public afAuth: AngularFireAuth) {
    //Dados Firebase
    this.afAuth.setPersistence("none");
    this.afAuth.updateCurrentUser;
    this.userData$ = this.afAuth.authState;
  }

  public async login(usuario: Usuario) {
    return await this.afAuth.signInWithEmailAndPassword(
      usuario.email.trim(),
      usuario.senha.trim()
    );
  }

  public async criarUsuario(membro: Membro) {
    let novoUsuario: any;
    await this.afAuth
      .createUserWithEmailAndPassword(membro.email.trim(), membro.senha.trim())
      .then(
        (sucesso) => {
          novoUsuario = sucesso;
        },
        (erro) => {
          novoUsuario = erro;
        }
      );
    return novoUsuario;
  }

  public async deletarMembro(membro: Membro) {
    return this.afAuth
      .signInWithEmailAndPassword(membro.email.trim(), membro.senha.trim())
      .then((sucess) => {
        sucess.user.delete();
      });
  }

  public async resetarSenha(email: string) {
    return await this.afAuth.sendPasswordResetEmail(email);
  }

  public async sair() {
    localStorage.clear();

    await this.afAuth.signOut().then(
      function () {},
      function (erro) {
        console.log(erro.message);
      }
    );
  }

  public dadosMembro(email): Membro {
    let membroRetorno: Membro;

    this.listaMembros.find((membro) => {
      if (membro.email === email) {
        membroRetorno = membro;
      }
    });

    return membroRetorno;
  }

  public salvaUsuario(usuario, login: any): void {
    let membro = new Membro();

    membro.email = usuario.email;
    membro.uId = login.user.uid;

    this.salvarDadosLocalmente(membro);
  }

  public verificaUsuarioExistente(membroCadastrar: Membro): boolean {
    let resultado: boolean = false;

    this.listaMembros.find((membro) => {
      if (membro.cpf === membroCadastrar.cpf) {
        resultado = true;
      }
    });

    return resultado;
  }

  private salvarDadosLocalmente(membro: Membro): void {
    let membroData = {
      email: membro.email,
      nome: membro.nomeCompleto,
      perfil: membro.perfil,
      uid: membro.uId,
    };

    let membroCriptografado =
      CriptografiaUtil.criptografarDadosComObjeto(membroData);
    localStorage.setItem("usuario", membroCriptografado);
  }
}
