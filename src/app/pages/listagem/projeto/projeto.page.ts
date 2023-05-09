import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/modelo/Usuario';
import { AutenticacaoService } from 'src/app/servicos/Autenticacao';

@Component({
  selector: 'app-projeto',
  templateUrl: './projeto.page.html',
  styleUrls: ['./projeto.page.scss'],
})
export class ProjetoPage implements OnInit {
  usuarioLogado: Usuario;

  constructor(private autenticacaoService: AutenticacaoService) { }

  ngOnInit(): void {
    this.usuarioLogado = this.autenticacaoService.pegarDadosLocalmente();
  }

  private desabilitaAcessoBotoes(): boolean {
    return this.usuarioLogado.perfil === 'MEM' ? false : true;
  }
}
