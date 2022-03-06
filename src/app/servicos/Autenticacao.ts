import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
//Firebase
import { Membro } from '../modelo/Membro';
import { Usuario } from '../modelo/Usuario';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})

export class AutenticacaoService {
  constructor(
    private httpClient: HttpClient,
    private router: Router
  ) { }

  public async login(usuario: Usuario) {
    return this.httpClient.post(environment.apiUrl.concat("login"), usuario).toPromise();
  }

  public async dadosLogin(email : string) {
    return this.httpClient.get(environment.apiUrl.concat(`login/${email}/dados`)).toPromise();
  }

  public async criarUsuario(membro: Membro) {
  }

  public async resetarSenha(email: string) {
  }

  public async sair() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }

  public salvaUsuario(email): void {
    let membro = new Membro();
    membro.email = email;

    this.salvarDadosLocalmente(membro);
  }

  private salvarDadosLocalmente(membro: Membro): void {
    localStorage.setItem(
      'usuario',
      JSON.stringify({
        email: membro.email,
        nome: membro.nomeCompleto,
        perfil: membro.perfil,
      })
    );
  }

  public pegarDadosLocalmente(): Usuario {
    return JSON.parse(localStorage.getItem('usuario'));
  }

}
