import { Component } from "@angular/core";
import {
  AlertController,
  NavController,
  ToastController,
} from "@ionic/angular";
import { Observable } from "rxjs";
import { Membro } from "src/app/modelo/Membro";
import { MembroService } from "src/app/servicos/Membro";
import { DateUtil } from "src/app/util/DateUtil";
import { MensagensUtil } from "src/app/util/MensagensUtil";

import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";

pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: "app-membro-ativo",
  templateUrl: "./membro-ativo.page.html",
  styleUrls: ["./membro-ativo.page.scss"],
})
export class MembroAtivoPage {
  totalMembros: Number;
  membrosAtivos: Membro[];
  membrosAtivosFiltrados: Membro[];
  mensagens: MensagensUtil;
  listaMembrosObservable: Observable<any[]>;

  constructor(
    private membroService: MembroService,
    public navCtrl: NavController,
    private aviso: ToastController,
    public alertController: AlertController
  ) {
    this.mensagens = new MensagensUtil(this.aviso);
    this.inicializar();
  }

  private inicializar(): void {
    this.listaMembrosObservable = this.membroService.listar();
    this.listaMembrosObservable.subscribe((response) => {
      this.membrosAtivos = response;
      this.membrosAtivosFiltrados = response;
      this.membrosAtivos = this.membrosAtivos.filter((m) =>
        this.filtrarMembro(m)
      );
      this.membrosAtivosFiltrados = this.membrosAtivosFiltrados.filter((m) =>
        this.filtrarMembro(m)
      );
      this.totalMembros = this.membrosAtivos.length;
      this.membrosAtivosFiltrados.sort((a, b) =>
        a.nomeCompleto > b.nomeCompleto
          ? 1
          : b.nomeCompleto > a.nomeCompleto
          ? -1
          : 0
      );
      this.membrosAtivos.map((m) => (m.escolaridade = Number(m.escolaridade)));
      this.membrosAtivos.map((m) => (m.estadoCivil = Number(m.estadoCivil)));
    });
  }

  private filtrarMembro(membro): boolean {
    return (
      membro.situacao === "Ativo" &&
      (membro.classificacao === undefined || membro.classificacao === "Membro")
    );
  }

  public editarMembro(membro: Membro): void {
    this.navCtrl.navigateForward("/editar/membro", {
      state: { content: membro },
    });
  }

  public formatarDataDeNascimento(data: any): any {
    return data.includes("/") ? data : DateUtil.dateFormatterBrazil(data);
  }

  public async confirmarInativacao(membro: Membro) {
    const alert = await this.alertController.create({
      header: "Confirmação de inativação",
      message: "Tem certeza que deseja inativar o membro selecionado?",
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
            this.inativarUsuario(membro);
          },
        },
      ],
    });
    await alert.present();
  }

  private inativarUsuario(membro: Membro): void {
    if (membro.key) {
      membro.situacao = "Inativo";
      this.membroService.adicionarOuAtualizar(membro);
      this.inicializar();
      this.mensagens.mensagemSucesso("Usuário inativado com sucesso!");
    }
  }

  public pesquisarAtivos(ev: any) {
    this.membrosAtivosFiltrados = this.membrosAtivos;
    const val = ev.detail.value;

    if (val && val.trim() !== "") {
      this.membrosAtivosFiltrados = this.membrosAtivosFiltrados.filter(
        (term) => {
          return (
            term.nomeCompleto.toUpperCase().indexOf(val.trim().toUpperCase()) >
            -1
          );
        }
      );
      this.membrosAtivosFiltrados.sort((a, b) =>
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
      header: "Confirmação de exclusão",
      message: "Tem certeza que deseja excluir o membro selecionado?",
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

  private excluirMembro(membro: Membro): void {
    this.membroService.deletar(membro.key);
    this.mensagens.mensagemSucesso("Membro excluído com sucesso!");
    this.inicializar();
  }

  gerarAta(): void {
    const membrosAtivosOrdenados: Membro[] = this.membrosAtivos.sort((a, b) => a.nomeCompleto.localeCompare(b.nomeCompleto));
    const listaMembros: Array<[string, string, string]> = membrosAtivosOrdenados.map(membro => [membro.nomeCompleto, membro.cpf, ""]);
  
    const dataAtual = DateUtil.dateFormatterBrazil(new Date().toLocaleDateString());
  
    const docDefinition: pdfMake.TDocumentDefinitions = {
      content: [
        { text: "Ata de Presença", style: "header" },
        { text: "Assembleia Administrativa IBC", style: "subheader" },
        { text: dataAtual, style: "subheader" },
        {
          table: {
            headerRows: 1,
            widths: ["auto", "auto", 170],
            body: [
              ["Nome", "CPF", "Assinatura"],
              ...listaMembros,
            ],
          },
          layout: {
            hLineWidth: () => 0.5,
            vLineWidth: () => 0.5,
            hLineColor: "#bfbfbf",
            vLineColor: "#bfbfbf",
            paddingLeft: () => 8,
            paddingRight: () => 8,
            paddingTop: () => 8,
            paddingBottom: () => 8,
          },
          style: "table",
        },
        {
          text: "\n\n",
        },
        {
          text: "Assinatura do Pastor Presidente:",
          style: "signatureLabel",
          alignment: "center",
        },
        {
          canvas: [{ type: "line", x1: 72, y1: 0, x2: 300, y2: 0, lineWidth: 1 }],
          margin: [72, 0, 72, 8],
        },
      ],
      styles: {
        header: {
          fontSize: 22,
          bold: true,
          margin: [0, 0, 0, 5],
          alignment: "center",
        },
        subheader: {
          fontSize: 16,
          bold: true,
          margin: [0, 5, 0, 5],
        },
        table: {
          margin: [0, 10, 0, 10],
          fontSize: 10,
          alignment: "center",
        },
        signatureLabel: {
          margin: [0, 5, 0, 25],
        },
      },
    };
  
    pdfMake.createPdf(docDefinition).download("ata.pdf");
  }
  
}
