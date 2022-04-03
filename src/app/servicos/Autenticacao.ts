import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Injectable } from '@angular/core';
import * as express from "express";
//Firebase
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { Membro } from '../modelo/Membro';
import { Usuario } from '../modelo/Usuario';
import { MembroService } from './Membro';

@Injectable({
  providedIn: 'root',
})

export class AutenticacaoService {
  public userData$: Observable<any>;
  public listaMembros: Membro[];
  

  constructor(
    public afAuth: AngularFireAuth
  ) {
    //Dados Firebase
    this.afAuth.setPersistence('none');
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
          console.log(sucesso)
          novoUsuario = sucesso;
        },
        (erro) => {
          novoUsuario = null;
        }
      );
    return novoUsuario;
  }

  public async resetarSenha(email: string) {
    return await this.afAuth.sendPasswordResetEmail(email);
  }

  public async sair() {
    await this.afAuth.signOut().then(
      function () {
        localStorage.clear();
      },
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

  public salvaUsuario(usuario, login : any): void {
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
    localStorage.setItem(
      'usuario',
      JSON.stringify({
        email: membro.email,
        nome: membro.nomeCompleto,
        perfil: membro.perfil,
        uid:membro.uId
      })
    );
  }

  public pegarDadosLocalmente(): Usuario {
    return JSON.parse(localStorage.getItem('usuario'));
  }

}
