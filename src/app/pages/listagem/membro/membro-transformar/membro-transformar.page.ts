import { ChangeDetectorRef, Component, OnInit } from "@angular/core";
import {
  AlertController,
  NavController,
  ToastController,
} from "@ionic/angular";
import { Observable } from "rxjs";
import { Membro } from "src/app/modelo/Membro";
import { AutenticacaoService } from "src/app/servicos/Autenticacao";
import { MembroService } from "src/app/servicos/Membro";
import { DateUtil } from "src/app/util/DateUtil";
import { MensagensUtil } from "src/app/util/MensagensUtil";

@Component({
  selector: "app-membro-transformar",
  templateUrl: "./membro-transformar.page.html",
  styleUrls: ["./membro-transformar.page.scss"],
})
export class MembroTransformarPage implements OnInit {
  totalMembrosTransformar: Number;
  membrosTransformar: Membro[];
  membrosTransformarFiltrados: Membro[];
  mensagens: MensagensUtil;
  listaMembrosObservable: Observable<any[]>;

  constructor(
    private membroService: MembroService,
    public navCtrl: NavController,
    private aviso: ToastController,
    public alertController: AlertController,
    private autenticacaoService: AutenticacaoService,
    private changes : ChangeDetectorRef
  ) {
    this.mensagens = new MensagensUtil(this.aviso);
  }

  async ngOnInit(): Promise<void> {
    await this.inicializar();
  }

  private async inicializar(): Promise<void> {
    this.listaMembrosObservable = this.membroService.listar();
    this.listaMembrosObservable.subscribe((response : Membro[]) => {
      this.membrosTransformar = response
        .filter((m) => String(m.membroTransformar) === 'true')
        .sort((a, b) => a.nomeCompleto.localeCompare(b.nomeCompleto));
      this.membrosTransformarFiltrados = [...this.membrosTransformar];
      this.totalMembrosTransformar = this.membrosTransformar.length;
    });
  }

  public editarMembro(membro: Membro): void {
    this.navCtrl.navigateForward("/editar/membro", {
      state: { content: membro },
    });
  }

  public formatarDataDeNascimento(data: any): any {
    return data.includes("/") ? data : DateUtil.dateFormatterBrazil(data);
  }

  public pesquisarMembrosTransformar(ev: any) {
    const searchTerm = (ev.detail.value || "").trim().toUpperCase();

    this.membrosTransformarFiltrados = this.membrosTransformar
      .filter((membro) =>
        membro.nomeCompleto.toUpperCase().includes(searchTerm)
      )
      .sort((a, b) => a.nomeCompleto.localeCompare(b.nomeCompleto));
  }

  private excluirMembro(membro: Membro): void {
    this.membroService.deletar(membro.key);
    this.autenticacaoService.deletarMembro(membro);
    this.mensagens.mensagemSucesso("Congregado excluído com sucesso!");
    this.inicializar();
  }

  public async confirmarExclusao(membro: Membro) {
    const alert = await this.alertController.create({
      header: "Confirmação de exclusão",
      message:
        "Tem certeza que deseja excluir o membro do transformar selecionado?",
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
            this.excluirMembro(membro);
          },
        },
      ],
    });
    await alert.present();
  }
}
