import { DadosUsuarioUtil } from "./../../util/DadosUsuarioUtil";
import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Membro } from "src/app/modelo/Membro";
import { Usuario } from "src/app/modelo/Usuario";
import { AutenticacaoService } from "src/app/servicos/Autenticacao";
import { MembroService } from "src/app/servicos/Membro";

@Component({
  selector: "app-meu-perfil",
  templateUrl: "./meu-perfil.page.html",
  styleUrls: ["./meu-perfil.page.scss"],
})
export class MeuPerfilPage implements OnInit {
  membrosAtivos: Membro[];
  listaMembrosObservable: Observable<any[]>;
  usuario: Usuario;
  membro: Membro;

  constructor(
    private autenticacaoService: AutenticacaoService,
    private membroService: MembroService
  ) {
    //this.usuario = DadosUsuarioUtil.dadosUsuarioLogado();
    this.usuario = this.autenticacaoService.pegarDadosLocalmente();
    this.membro = new Membro();
  }

  async ngOnInit() {
    await this.inicializar();
  }

  private async inicializar() {
    this.listaMembrosObservable = this.membroService.listar();
    this.listaMembrosObservable.subscribe(async (response) => {
      await this.verificaDadosUsuario(response);
    });
  }

  public async verificaDadosUsuario(response) {
    await response.find((membro) => {
      if (this.usuario.email === membro.email.toLowerCase()) {
        this.membro = membro;
      }
    });
  }
}
