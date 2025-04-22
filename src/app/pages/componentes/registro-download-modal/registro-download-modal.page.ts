import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
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
import { Diario } from 'src/app/modelo/Diario';
import { DiarioService } from 'src/app/servicos/Diario';

@Component({
  selector: 'app-registro-download-modal',
  templateUrl: './registro-download-modal.page.html',
  styleUrls: ['./registro-download-modal.page.scss'],
})
export class RegistroDownloadModalPage implements OnInit {

  termoPesquisa: string;
  medicoResponsavel: string;

  listaPesquisa: Diario[];
  listaRegistros: Diario[];
  listaDiarios: Diario[];
  listaDiariosFiltrados: Diario[];

  constructor(
    private diarioService: DiarioService,
    private modalController: ModalController
  ) {
    this.inicializar();
  }

  private inicializar(): void {
    this.diarioService.listar().subscribe((data: Diario[]) => {
      if (data) {
        this.listaDiarios = data;
        this.listaDiariosFiltrados = this.ordenarDiariosRemovendoIguais(data);
        this.listaPesquisa = this.listaDiariosFiltrados;
      } else {
        this.listaDiarios = new Array();
        this.listaDiariosFiltrados = new Array();
      }
    });
  }

  ordenarDiariosRemovendoIguais(listaDiarios: Diario[]) {
    const listaDiariosOrdenados = listaDiarios.sort((a, b) => {
      return a.nomePaciente.localeCompare(b.nomePaciente);
    });

    const listaDiariosRemovendoIguais = listaDiariosOrdenados.filter((diario, index, self) =>
      index === self.findIndex((d) => (
        d.nomePaciente === diario.nomePaciente
      ))
    );

    return listaDiariosRemovendoIguais;
  }

  public diarioSelecionado(item: Diario) {
    this.termoPesquisa = item.nomePaciente;
    this.medicoResponsavel = item.nomePsicologo;
  }

  ngOnInit() { }

  async fecharModal() {
    this.modalController.dismiss();
  }

  gerarRegistros() {
    //lista registro ordenado por dataRegistro no formato dd/mm/yyyy e nome paciente
    this.listaRegistros = this.listaDiarios.filter((diario) => {
      return diario.nomePaciente === this.termoPesquisa && diario.nomePsicologo === this.medicoResponsavel;
    });
    this.listaRegistros = this.listaRegistros.sort((a, b) => {
      const dataA = moment(a.dataRegistro, "DD/MM/YYYY");
      const dataB = moment(b.dataRegistro, "DD/MM/YYYY");
      return dataA.isBefore(dataB) ? -1 : 1;
    }
    );

  }

  public onSearchTerm(ev: any) {
    this.listaDiariosFiltrados = this.listaPesquisa;
    const val = ev.detail.value;

    if (val && val.trim() !== "") {
      this.listaDiariosFiltrados = this.listaDiariosFiltrados.filter((term) => {
        return (term.nomePaciente.toUpperCase().indexOf(val.trim().toUpperCase()) > -1);
      });
    }
  }

  get dataAtual(): string {
    const data = new Date();
    const dia = String(data.getDate()).padStart(2, "0");
    const mes = String(data.getMonth() + 1).padStart(2, "0");
    const ano = data.getFullYear();
    return `${dia}/${mes}/${ano}`;
  }

  diarioRows(): TableRow[] {

    const diariosOrdenadosArray: Array<[string, string, string, string]> =
      this.listaRegistros.map((paciente) => [
        paciente.nomePaciente,
        paciente.nomePsicologo,
        paciente.dataRegistro,
        paciente.registro
      ]);

    const membersTableRows = diariosOrdenadosArray.map((registros) => {
      return new TableRow({
        children: [
          new TableCell({
            children: [new Paragraph(registros[0])],
            width: {
              size: 25,
              type: WidthType.PERCENTAGE,
            },
            margins: { top: 100, bottom: 100, left: 100, right: 100 },
            borders: { top: { style: BorderStyle.SINGLE }, bottom: { style: BorderStyle.SINGLE } },
          }),
          new TableCell({
            children: [new Paragraph(registros[1])],
            width: {
              size: 25,
              type: WidthType.PERCENTAGE,
            },
            margins: { top: 100, bottom: 100, left: 100, right: 100 },
            borders: { top: { style: BorderStyle.SINGLE }, bottom: { style: BorderStyle.SINGLE } },
          }),
          new TableCell({
            children: [new Paragraph(registros[2])],
            width: {
              size: 25,
              type: WidthType.PERCENTAGE,
            },
            margins: { top: 100, bottom: 100, left: 100, right: 100 },
            borders: { top: { style: BorderStyle.SINGLE }, bottom: { style: BorderStyle.SINGLE } },
          }),
          new TableCell({
            children: [new Paragraph(registros[3])],
            width: {
              size: 25,
              type: WidthType.PERCENTAGE,
            },
            margins: { top: 100, bottom: 100, left: 100, right: 100 },
            borders: { top: { style: BorderStyle.SINGLE }, bottom: { style: BorderStyle.SINGLE } },
          })
        ],
      });
    });

    return membersTableRows
  }

  async gerarAtaDocx() {

    this.gerarRegistros();

    const doc = new Document({
      creator: "JP",
      title: "Registro do Paciente",
      description: "Download de registro no dia: " + this.dataAtual,
      sections: [
        {
          children: [
            new Paragraph({
              children: [new TextRun('RELATORIO DE REGISTRO DO PACIENTE')],
              heading: HeadingLevel.HEADING_1,
              alignment: AlignmentType.CENTER,
            }),
            new Paragraph({
              children: [new TextRun('Data: ' + this.dataAtual)],
              alignment: AlignmentType.CENTER,
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
                      children: [new Paragraph("Nome Paciente")],
                      width: {
                        size: 25,
                        type: WidthType.PERCENTAGE,
                      },
                    }),
                    new TableCell({
                      children: [new Paragraph("Nome do Medico")],
                      width: {
                        size: 25,
                        type: WidthType.PERCENTAGE,
                      },
                    }),
                    new TableCell({
                      children: [new Paragraph("Data Registro")],
                      width: {
                        size: 25,
                        type: WidthType.PERCENTAGE,
                      },
                    }),
                    new TableCell({
                      children: [new Paragraph("Registro")],
                      width: {
                        size: 25,
                        type: WidthType.PERCENTAGE,
                      },
                    })
                  ],
                }),
                // Member rows
                ...this.diarioRows(),
              ],
            }),
            new Paragraph({
              spacing: {
                after: 300, // 100 twips (1/20 of a point) ~= 5 points ~= 100/72*5 pixels
              },
            })
          ],
        },
      ],
    });


    Packer.toBlob(doc).then((blob) => {
      saveAs(blob, "relatorio-de-registros.docx");
    });
  }
}

