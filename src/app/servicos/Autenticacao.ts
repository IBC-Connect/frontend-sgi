import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { Observable } from "rxjs";

import { CookieService } from "ngx-cookie-service";
import { Membro } from "../modelo/Membro";
import { Usuario } from "../modelo/Usuario";
import { CriptografiaUtil } from "../util/CriptografiaUtil";

//Firebase
@Injectable({
  providedIn: "root",
})
export class AutenticacaoService {
  public listaMembrosObservable: Observable<any[]>;
  public userData$: Observable<any>;
  public listaMembros: Membro[];

  constructor(
    public afAuth: AngularFireAuth,
    private cookieService: CookieService
  ) {
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

  public async resetarSenha(email: string) {
    return await this.afAuth.sendPasswordResetEmail(email);
  }

  public async sair() {
    this.cookieService.deleteAll();
  }

  public salvaUsuario(usuario: any): void {
    let membro = new Membro();

    membro.email = usuario.email;
    membro.uId = usuario.uid;

    this.salvarDadosLocalmente(membro);
  }

  private salvarDadosLocalmente(membro: Membro): void {
    let membroData = {
      email: membro.email,
      nome: membro.nomeCompleto,
      perfil: membro.perfil,
      uId: membro.key,
    };

    let membroCriptografado =
      CriptografiaUtil.criptografarDadosComObjeto(membroData);
    this.cookieService.set("usuario", membroCriptografado);
  }

  public pegarDadosLocalmente(): Usuario {
    let usuario: any = this.cookieService.get("usuario");

    if (usuario != null) {
      usuario = CriptografiaUtil.descriptografiaDadosComObjeto(usuario);
    }

    return usuario;
  }
}
