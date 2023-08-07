import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AlertController, NavController, ToastController } from '@ionic/angular';
import {
  AlignmentType,
  BorderStyle, Document,
  HeadingLevel, Packer,
  Paragraph,
  Table,
  TableCell,
  TableRow,
  TextRun, WidthType
} from 'docx';
import { saveAs } from 'file-saver';
import * as moment from 'moment';
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
import { TDocumentDefinitions } from 'pdfmake/interfaces';

import { Observable } from 'rxjs';
import { Membro } from 'src/app/modelo/Membro';
import { MembroService } from 'src/app/servicos/Membro';
import { DateUtil } from 'src/app/util/DateUtil';
import { MensagensUtil } from 'src/app/util/MensagensUtil';

(<any>pdfMake).vfs = pdfFonts.pdfMake.vfs;

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
  
  dataAtual : any;
  pdf: any;

  constructor(
    private membroService: MembroService,
    public navCtrl: NavController,
    private aviso: ToastController,
    public alertController: AlertController
  ) {
    this.mensagens = new MensagensUtil(this.aviso);
    this.dataAtual = moment().format("DD/MM/YYYY");
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

      this.gerarAta();
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
      this.membroService.adicionarOuAtualizar(membro, "Usuário inativado com sucesso!");
      this.inicializar();
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
    const membrosAtivosOrdenados: Membro[] = this.membrosAtivos.sort((a, b) =>
      a.nomeCompleto.localeCompare(b.nomeCompleto)
    );
    const listaMembros: Array<[string, string, string, string]> =
      membrosAtivosOrdenados.map((membro) => [
        membro.nomeCompleto,
        membro.cpf ? membro.cpf : "",
        membro.rg ? membro.rg : "",
        "",
      ]);

    const docDefinition: TDocumentDefinitions = {
      content: [
        {
          stack: [
            {
              text: "Ata de Presença",
              style: "header",
              alignment: "center",
              margin: [0, 20, 0, 20],
            },
            {
              text: "Assembleia Administrativa IBC",
              style: "subheader",
              alignment: "center",
              margin: [0, 0, 0, 10],
            },
            {
              text: this.dataAtual,
              style: "subheader",
              alignment: "center",
              margin: [0, 0, 0, 20],
            },
            {
              table: {
                headerRows: 1,
                widths: ["auto", "auto", "auto", 180],
                body: [
                  [
                    {
                      text: "Nome",
                      style: "tableHeader",
                      fillColor: "#dddddd",
                    },
                    {
                      text: "CPF",
                      style: "tableHeader",
                      fillColor: "#dddddd",
                    },
                    {
                      text: "RG",
                      style: "tableHeader",
                      fillColor: "#dddddd",
                    },
                    {
                      text: "Assinatura",
                      style: "tableHeader",
                      fillColor: "#dddddd",
                    },
                  ],
                  ...listaMembros,
                ],
              },
              style: "table",
              layout: {
                fillColor: function (rowIndex, node, columnIndex) {
                  return rowIndex % 2 === 0 ? "#F0F0F0" : null;
                },
              },
            },
            {
              canvas: [
                {
                  type: "line",
                  x1: 30,
                  y1: 0,
                  x2: 390,
                  y2: 0,
                  lineWidth: 1,
                  lineColor: "#333333",
                },
              ],
              margin: [30, 40, 30, 0],
            },
            {
              text: "Assinatura do Pastor Presidente",
              style: "signatureLabel",
              alignment: "center",
              margin: [0, 10, 0, 0],
            },
          ],
          margin: [20, 20, 20, 20],
        },
      ],
      styles: {
        header: {
          fontSize: 28,
          bold: true,
          color: "#2d2d2d",
        },
        subheader: {
          fontSize: 16,
          bold: true,
          color: "#666666",
        },
        table: {
          margin: [0, 10, 0, 10],
          fontSize: 12,
          color: "#333333",
        },
        tableHeader: {
          fontSize: 12,
          bold: true,
          color: "#333333",
        },
        signatureLabel: {
          fontSize: 12,
          bold: true,
          color: "#666666",
        },
      },
    };

    this.pdf = pdfMake.createPdf(docDefinition);
  }

  gerarAtaPDF() {
    this.pdf.download("ata.pdf");
  }

  membersRows(): TableRow[] {

    const membrosAtivosOrdenados: Membro[] = this.membrosAtivos.sort((a, b) =>
      a.nomeCompleto.localeCompare(b.nomeCompleto)
    );

    const listaMembros: Array<[string, string, string, string]> =
      membrosAtivosOrdenados.map((membro) => [
        membro.nomeCompleto,
        membro.cpf ? membro.cpf : "",
        membro.rg ? membro.rg : "",
        "",
      ]);

    const membersTableRows = listaMembros.map((membros) => {
      return new TableRow({
        children: [
          new TableCell({
            children: [new Paragraph(membros[0])],
            width: {
              size: 25,
              type: WidthType.PERCENTAGE,
            },
            margins: { top: 100, bottom: 100, left: 100, right: 100 },
            borders: { top: { style: BorderStyle.SINGLE }, bottom: { style: BorderStyle.SINGLE } },
          }),
          new TableCell({
            children: [new Paragraph(membros[1])],
            width: {
              size: 25,
              type: WidthType.PERCENTAGE,
            },
            margins: { top: 100, bottom: 100, left: 100, right: 100 },
            borders: { top: { style: BorderStyle.SINGLE }, bottom: { style: BorderStyle.SINGLE } },
          }),
          new TableCell({
            children: [new Paragraph(membros[2])],
            width: {
              size: 25,
              type: WidthType.PERCENTAGE,
            },
            margins: { top: 100, bottom: 100, left: 100, right: 100 },
            borders: { top: { style: BorderStyle.SINGLE }, bottom: { style: BorderStyle.SINGLE } },
          }),
          new TableCell({
            children: [new Paragraph('')],
            width: {
              size: 25,
              type: WidthType.PERCENTAGE,
            },
            margins: { top: 100, bottom: 100, left: 100, right: 100 },
            borders: { top: { style: BorderStyle.SINGLE }, bottom: { style: BorderStyle.SINGLE } },
          }),
        ],
      });
    });

    return membersTableRows
  }

  async gerarAtaDocx() {

    const doc = new Document({
      creator: "JP",
      title: "Ata de Presença",
      description: "Ata da reunião de " + this.dataAtual,
      sections: [
        {
          children: [
            new Paragraph({
              children: [new TextRun('ATA DE PRESENÇA')],
              heading: HeadingLevel.HEADING_1,
              alignment: AlignmentType.CENTER,
            }),
            new Paragraph({
              children: [new TextRun('Assembléia IBC')],
              heading: HeadingLevel.HEADING_2,
              alignment: AlignmentType.CENTER,
            }),
            new Paragraph({
              children: [new TextRun('Data: ' + this.dataAtual)],
              alignment: AlignmentType.LEFT,
            }),
            new Paragraph({
              children: [new TextRun('Membros presentes')],
              heading: HeadingLevel.HEADING_2,
              alignment: AlignmentType.LEFT,
            }),
            new Paragraph({
              spacing: {
                after: 100, // 100 twips (1/20 of a point) ~= 5 points ~= 100/72*5 pixels
              },
            }),
            new Table({
              rows: [
                // Header row
                new TableRow({
                  children: [
                    new TableCell({
                      children: [new Paragraph("Nome")],
                      width: {
                        size: 25,
                        type: WidthType.PERCENTAGE,
                      },
                    }),
                    new TableCell({
                      children: [new Paragraph("CPF")],
                      width: {
                        size: 25,
                        type: WidthType.PERCENTAGE,
                      },
                    }),
                    new TableCell({
                      children: [new Paragraph("RG")],
                      width: {
                        size: 25,
                        type: WidthType.PERCENTAGE,
                      },
                    }),
                    new TableCell({
                      children: [new Paragraph("Assinatura")],
                      width: {
                        size: 25,
                        type: WidthType.PERCENTAGE,
                      },
                    }),
                  ],
                }),
                // Member rows
                ...this.membersRows(),
              ],
            }),
            new Paragraph({
              spacing: {
                after: 300, // 100 twips (1/20 of a point) ~= 5 points ~= 100/72*5 pixels
              },
            }),
            // Line for the signature
            new Paragraph({
              children: [new TextRun("_____________________________")],
              alignment: AlignmentType.CENTER,
              
            }),
            // Text for the signature
            new Paragraph({
              children: [new TextRun("Assinatura do Pastor Presidente")],
              alignment: AlignmentType.CENTER,
            }),
          ],
        },
      ],
    });


    Packer.toBlob(doc).then((blob) => {
      saveAs(blob, "ata-de-presenca.docx");
    });
  }
}
