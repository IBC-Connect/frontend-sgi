import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { Observable } from "rxjs/internal/Observable";
import { Membro } from "src/app/modelo/Membro";
import { AutenticacaoService } from "src/app/servicos/Autenticacao";
import { MembroService } from "src/app/servicos/Membro";
import { DateUtil } from "src/app/util/DateUtil";

import { Diario } from "./../../../modelo/Diario";
import { Usuario } from "./../../../modelo/Usuario";
import { DiarioService } from "./../../../servicos/Diario";

@Component({
  selector: "app-registro-consultorio-modal",
  templateUrl: "./registro-consultorio-modal.page.html",
  styleUrls: ["./registro-consultorio-modal.page.scss"],
})
export class RegistroConsultorioModalPage implements OnInit {
  totalMembros: Number;
  membro: Membro;
  listaMembros: Membro[];
  listaMembrosFiltrados: Membro[];
  listaMembrosObservable: Observable<any[]>;
  diario: Diario;
  usuario: Usuario;
  termoPesquisa: string;
  apareceListaMembros: boolean = true;

  constructor(
    private membroService: MembroService,
    private modalController: ModalController,
    private diarioService: DiarioService,
    private autenticacaoService: AutenticacaoService
  ) {
    this.diario = new Diario();
    this.membro = new Membro();
    this.inicializar();
  }

  private inicializar(): void {
    this.listaMembrosObservable = this.membroService.listar();
    this.listaMembrosObservable.subscribe((response) => {
      this.listaMembros = response;
      this.listaMembrosFiltrados = response;
      this.listaMembros = this.listaMembros.filter((m) =>
        this.filtrarMembro(m)
      );
      this.listaMembrosFiltrados = this.listaMembrosFiltrados.filter((m) =>
        this.filtrarMembro(m)
      );
      this.totalMembros = this.listaMembros.length;
      this.listaMembrosFiltrados.sort((a, b) =>
        a.nomeCompleto > b.nomeCompleto
          ? 1
          : b.nomeCompleto > a.nomeCompleto
          ? -1
          : 0
      );
    });
  }

  public membroSelecionado(item) {
    this.termoPesquisa = item.nomeCompleto;
  }

  private filtrarMembro(membro): boolean {
    return (
      membro.situacao === "Ativo" &&
      (membro.classificacao === undefined || membro.classificacao === "Membro")
    );
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
        : "Psicologo Não Cadastrado";
    this.diario.uIdPsicologo = this.usuario.uid;
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

    this.listaMembrosFiltrados = this.listaMembros;
    const val = ev.detail.value;

    if (val && val.trim() !== "") {
      this.listaMembrosFiltrados = this.listaMembrosFiltrados.filter(
        (term) => {
          return (
            term.nomeCompleto.toUpperCase().indexOf(val.trim().toUpperCase()) >
            -1
          );
        }
      );
    }
  }
}
