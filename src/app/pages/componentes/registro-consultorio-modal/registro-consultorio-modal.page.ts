import { AutenticacaoService } from "src/app/servicos/Autenticacao";
import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { Observable } from "rxjs/internal/Observable";
import { Membro } from "src/app/modelo/Membro";
import { MembroService } from "src/app/servicos/Membro";
import { DateUtil } from "src/app/util/DateUtil";
import { DadosUsuarioUtil } from "./../../../util/DadosUsuarioUtil";

import { Diario } from "./../../../modelo/Diario";
import { Usuario } from "./../../../modelo/Usuario";
import { DiarioService } from "./../../../servicos/Diario";
import { AssistidoService } from "src/app/servicos/Assistido";
import { Assistido } from "src/app/modelo/Assistido";

@Component({
  selector: "app-registro-consultorio-modal",
  templateUrl: "./registro-consultorio-modal.page.html",
  styleUrls: ["./registro-consultorio-modal.page.scss"],
})
export class RegistroConsultorioModalPage implements OnInit {
  
  diario: Diario;
  usuario: Usuario;

  totalAssistidos: Number;  
  termoPesquisa: string;
  apareceListaAssistidos: boolean = true;

  listaMembros: Membro[];
  listaAssistidos: Assistido[];
  listaAssistidoFiltrados: Assistido[];

  constructor(
    private membroService: MembroService,
    private assistidoService: AssistidoService,
    private modalController: ModalController,
    private diarioService: DiarioService,
    private autenticacaoService: AutenticacaoService
  ) {
    this.diario = new Diario();
    this.inicializar();
  }

  private inicializar(): void {
    
    this.membroService.listar().subscribe((data: Membro[]) => {
      this.listaMembros = data;
    })

    this.assistidoService.listar().subscribe((data: Assistido[]) => {
      if(data){
        this.listaAssistidos = this.ordenarAssitidos(data);
        this.listaAssistidoFiltrados = this.listaAssistidos;
        this.totalAssistidos = this.listaAssistidos.length;
      } else {
        this.listaAssistidos = new Array();
        this.totalAssistidos = 0;
      }
    });
  }

  ordenarAssitidos(listaAssistidos : Assistido[]){
    return listaAssistidos.sort((a, b) =>
        a.nomeCompleto > b.nomeCompleto
          ? 1
          : b.nomeCompleto > a.nomeCompleto
          ? -1
          : 0
      );
  }

  public assitidoSelecionado(item) {
    this.termoPesquisa = item.nomeCompleto;
  }

  private informacoesPsicologo() {
    this.usuario = this.autenticacaoService.pegarDadosLocalmente();

    const usuarioEncontrado = this.listaMembros.filter(
      (membros) => membros.email === this.usuario.email
    );

    //Preencher infos diario
    this.diario.nomePsicologo =
      usuarioEncontrado.length > 0
        ? usuarioEncontrado[0].nomeCompleto
        : "Usuário Não Cadastrado";
    this.diario.email = this.usuario.email;
  }

  ngOnInit() {}

  async fecharModal() {
    this.modalController.dismiss();
  }

  enviarRegistro() {
    this.informacoesPsicologo();
    this.diario.nomePaciente = this.termoPesquisa;
    this.diario.dataRegistro = DateUtil.dateFormatterBrazil(
      new Date().toISOString()
    );

    this.diarioService.adicionarOuAtualizar(this.diario);
    this.fecharModal();
  }

  public onSearchTerm(ev: any) {
    this.listaAssistidoFiltrados = this.listaAssistidos;
    const val = ev.detail.value;

    if (val && val.trim() !== "") {
      this.listaAssistidoFiltrados = this.listaAssistidoFiltrados.filter((term) => {
        return (
          term.nomeCompleto.toUpperCase().indexOf(val.trim().toUpperCase()) > -1
        );
      });
    }
  }
}
