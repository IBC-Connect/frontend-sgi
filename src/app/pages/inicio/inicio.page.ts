import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { MembroDTO } from 'src/app/dto/membrosDTO';
import { Membro } from 'src/app/modelo/Membro';
import { Usuario } from 'src/app/modelo/Usuario';
import { AutenticacaoService } from 'src/app/servicos/Autenticacao';
import { MembroService } from 'src/app/servicos/Membro';
import { MensagensUtil } from 'src/app/util/MensagensUtil';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})

export class InicioPage implements OnInit {

  mensagens: MensagensUtil;
  usuario: Usuario;
  membro: Membro;
  membroLista: Membro[];
  totalMembros: number;
  listaMembrosObservable: Observable<any[]>;

  constructor(private autenticacao: AutenticacaoService, private aviso: ToastController, private membroService: MembroService) {
    this.membro = new Membro();
    this.membroLista = new Array<Membro>();
    this.mensagens = new MensagensUtil(this.aviso);
    this.usuario = autenticacao.pegarDadosLocalmente() ? autenticacao.pegarDadosLocalmente() : new Usuario();
  }

  async ngOnInit() {
    this.usuario.email = 'joaopedro.ts16@gmail.com'
    await this.inicializar();
    this.membro = this.verificaMembroPorEmail(this.usuario.email);
  }

  public deslogar() {
    this.autenticacao.sair();
    this.mensagens.mensagemSucesso("Você foi desconectado com sucesso!");
  }

  public mensagemDeConstrucao() :void {
    this.mensagens.mensagemAlerta("O menu selecionado está em fase de construção.");
  }

  public permissao(perfisPermitidos: string): boolean {

    let visibilidade: boolean = false;
    this.usuario.perfil = 'ADMIN';
    const perfis = perfisPermitidos.split(';');

    perfis.forEach(perfil => {
      if (perfil === this.usuario.perfil) {
        visibilidade = true;
      }
    });
    return visibilidade;
  }


  private async inicializar() : Promise<Membro[]> {
    return this.membroService.listar().subscribe(async (response: Membro[]) => {
    });
  }

  public verificaMembroPorEmail(email) : any {
    this.membroLista.find(membro => {
      if (email === membro.email.toLowerCase()) {
        return membro;
      }
    });
  }

}
