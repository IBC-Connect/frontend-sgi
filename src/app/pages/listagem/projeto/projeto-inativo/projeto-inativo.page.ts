import { Component, OnInit } from "@angular/core";
import { AlertController, ToastController } from "@ionic/angular";
import { Observable } from "rxjs";
import { Projeto } from "src/app/modelo/Projeto";
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

  constructor(
    private aviso: ToastController,
    public alertController: AlertController,
    private projetoService: ProjetoService
  ) {}

  ngOnInit() {
    this.inicializar();
  }

  private inicializar(): void {
    this.mensagens = new MensagensUtil(this.aviso);
    this.listaProjetosObservable = this.projetoService.listar();
    this.listaProjetosObservable.subscribe((response) => {
      this.projetosInativos = response;
      this.projetosInativosFiltrados = response;
      this.projetosInativos = this.projetosInativos.filter(
        (m) => m.situacao === "Inativo"
      );
      this.projetosInativosFiltrados = this.projetosInativosFiltrados.filter(
        (m) => m.situacao === "Inativo"
      );
      this.numTotalProjetos =
        this.projetosInativos.length > 0 ? this.projetosInativos.length : 0;
      this.projetosInativosFiltrados.sort((a, b) =>
        a.responsavel > b.responsavel
          ? 1
          : b.responsavel > a.responsavel
          ? -1
          : 0
      );
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
