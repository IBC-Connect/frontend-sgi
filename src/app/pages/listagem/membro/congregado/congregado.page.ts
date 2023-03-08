import { Component, OnInit } from "@angular/core";
import {
  NavController,
  ToastController,
  AlertController,
} from "@ionic/angular";
import { Observable } from "rxjs";
import { Membro } from "src/app/modelo/Membro";
import { AutenticacaoService } from "src/app/servicos/Autenticacao";
import { MembroService } from "src/app/servicos/Membro";
import { DateUtil } from "src/app/util/DateUtil";
import { MensagensUtil } from "src/app/util/MensagensUtil";

@Component({
  selector: "app-congregado",
  templateUrl: "./congregado.page.html",
  styleUrls: ["./congregado.page.scss"],
})
export class CongregadoPage {
  totalCongregados: Number;
  membrosCongregados: Membro[];
  membrosCongregadosFiltrados: Membro[];
  mensagens: MensagensUtil;
  listaMembrosObservable: Observable<any[]>;

  constructor(
    private membroService: MembroService,
    public navCtrl: NavController,
    private aviso: ToastController,
    public alertController: AlertController,
    private autenticacaoService : AutenticacaoService
  ) {
    this.mensagens = new MensagensUtil(this.aviso);
    this.inicializar();
  }

  private inicializar(): void {
    this.listaMembrosObservable = this.membroService.listar();
    this.listaMembrosObservable.subscribe((response) => {
      this.membrosCongregados = response;
      this.membrosCongregadosFiltrados = response;
      this.membrosCongregados = this.membrosCongregados.filter(
        (m) => m.classificacao === "Congregado"
      );
      this.membrosCongregadosFiltrados =
        this.membrosCongregadosFiltrados.filter(
          (m) => m.classificacao === "Congregado"
        );
      this.totalCongregados = this.membrosCongregados.length;
      this.membrosCongregadosFiltrados.sort((a, b) =>
        a.nomeCompleto > b.nomeCompleto
          ? 1
          : b.nomeCompleto > a.nomeCompleto
          ? -1
          : 0
      );
      this.membrosCongregados.map(
        (m) => (m.escolaridade = Number(m.escolaridade))
      );
      this.membrosCongregados.map(
        (m) => (m.estadoCivil = Number(m.estadoCivil))
      );
    });
  }

  public editarCongregado(membro: Membro): void {
    this.navCtrl.navigateForward("/editar/membro", {
      state: { content: membro },
    });
  }

  public formatarDataDeNascimento(data: any): any {
    return data.includes("/") ? data : DateUtil.dateFormatterBrazil(data);
  }

  public pesquisarCongregados(ev: any) {
    this.membrosCongregadosFiltrados = this.membrosCongregados;
    const val = ev.detail.value;

    if (val && val.trim() !== "") {
      this.membrosCongregadosFiltrados =
        this.membrosCongregadosFiltrados.filter((term) => {
          return (
            term.nomeCompleto.toUpperCase().indexOf(val.trim().toUpperCase()) >
            -1
          );
        });
      this.membrosCongregadosFiltrados.sort((a, b) =>
        a.nomeCompleto > b.nomeCompleto
          ? 1
          : b.nomeCompleto > a.nomeCompleto
          ? -1
          : 0
      );
    }
  }

  public async confirmarExclusao(membro: Membro) {
    const alert = await this.alertController.create({
      header: 'Confirmação de exclusão',
      message: 'Tem certeza que deseja excluir o congregado selecionado?',
      buttons: [
        {
          text: 'Não',
          handler: () => {
            this.alertController.dismiss();
          },
        },
        {
          text: 'Sim',
          handler: () => {
            this.excluirMembro(membro);
          },
        },
      ],
    });
    await alert.present();
  }

  private excluirMembro(membro: Membro): void {
    this.membroService.deletar(membro.key);
    this.mensagens.mensagemSucesso('Congregado excluído com sucesso!');
    this.inicializar();
  }
}
