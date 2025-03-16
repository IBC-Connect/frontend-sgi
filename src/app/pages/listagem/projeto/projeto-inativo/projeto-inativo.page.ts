import { Component, OnInit } from "@angular/core";
import { AlertController, ToastController } from "@ionic/angular";
import { Observable } from "rxjs";
import { Projeto } from "src/app/modelo/Projeto";
import { Usuario } from "src/app/modelo/Usuario";
import { AutenticacaoService } from "src/app/servicos/Autenticacao";
import { ProjetoService } from "src/app/servicos/Projeto";
import { MensagensUtil } from "src/app/util/MensagensUtil";

@Component({
  selector: "app-projeto-inativo",
  templateUrl: "./projeto-inativo.page.html",
  styleUrls: ["./projeto-inativo.page.scss"],
})
export class ProjetoInativoPage implements OnInit {
  projetosInativos: Projeto[];
  projetosInativosFiltrados: Projeto[];
  mensagens: MensagensUtil;
  listaProjetosObservable: Observable<any[]>;
  numTotalProjetos: Number = 0;

  usuarioLogado: Usuario;

  constructor(
    private aviso: ToastController,
    public alertController: AlertController,
    private projetoService: ProjetoService,
    private autenticacaoService: AutenticacaoService
  ) { }

  ngOnInit() {
    this.inicializar();
    this.usuarioLogado = this.autenticacaoService.pegarDadosLocalmente();
  }

  private inicializar(): void {
    this.mensagens = new MensagensUtil(this.aviso);
    this.projetoService.listar().subscribe((response) => {

      if (response) {
        this.projetosInativos = response;
        this.projetosInativosFiltrados = response.filter(
          (m) => m.situacao === "Inativo"
        );
        this.numTotalProjetos = this.projetosInativosFiltrados.length;
        this.projetosInativosFiltrados.sort((a, b) =>
          a.nome > b.nome ? 1 : b.nome > a.nome ? -1 : 0
        );
      } else {
        this.projetosInativos = [];
        this.projetosInativosFiltrados = []
        this.numTotalProjetos = 0;
      }
    });
  }

  public async confirmarAtivacao(projeto: Projeto) {
    const alert = await this.alertController.create({
      header: "Confirmação de ativação",
      message: "Tem certeza que deseja ativar o projeto selecionado?",
      buttons: [
        {
          text: "Não",
          handler: () => {
            this.alertController.dismiss();
          },
        },
        {
          text: "Sim",
          handler: () => {
            this.ativarProjeto(projeto);
          },
        },
      ],
    });
    await alert.present();
  }

  private ativarProjeto(projeto: Projeto): void {
    if (projeto.key) {
      projeto.situacao = "Ativo";
      this.projetoService.adicionarOuAtualizar(
        projeto,
        "Projeto ativado com sucesso!"
      );
      this.inicializar();
    }
  }

  public async confirmarExclusao(projeto: Projeto) {
    const alert = await this.alertController.create({
      header: "Confirmação de inativação",
      message: "Tem certeza que deseja excluir o projeto selecionado?",
      buttons: [
        {
          text: "Não",
          handler: () => {
            this.alertController.dismiss();
          },
        },
        {
          text: "Sim",
          handler: () => {
            this.excluirProjeto(projeto);
          },
        },
      ],
    });
    await alert.present();
  }


  private excluirProjeto(projeto: Projeto): void {
    if (projeto.key) {
      this.projetoService.deletar(projeto.key, "Projeto excluido com sucesso!");
      this.inicializar();
    }
  }

  desabilitaAcessoBotoes(): boolean {
    return this.usuarioLogado.perfil === 'MEM' ? true : false;
  }

  public pesquisarProjetos(ev: any) {
    this.projetosInativosFiltrados = this.projetosInativos;
    const val = ev.detail.value;
    if (val && val.trim() !== "") {
      this.projetosInativosFiltrados = this.projetosInativosFiltrados.filter(
        (term) => {
          return (
            term.responsavel.toUpperCase().indexOf(val.trim().toUpperCase()) >
            -1
          );
        }
      );
    }
  }
}
