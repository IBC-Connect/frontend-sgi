import { Component, OnInit } from "@angular/core";
import {
  AlertController,
  ModalController,
  ToastController,
} from "@ionic/angular";
import { Diario } from "src/app/modelo/Diario";
import { Membro } from "src/app/modelo/Membro";
import { Usuario } from "src/app/modelo/Usuario";
import { AutenticacaoService } from "src/app/servicos/Autenticacao";
import { DiarioService } from "src/app/servicos/Diario";
import { MembroService } from "src/app/servicos/Membro";
import { MensagensUtil } from "src/app/util/MensagensUtil";
import { RegistroConsultorioModalPage } from "./../componentes/registro-consultorio-modal/registro-consultorio-modal.page";
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

@Component({
  selector: "app-consultorio",
  templateUrl: "./consultorio.page.html",
  styleUrls: ["./consultorio.page.scss"],
})
export class ConsultorioPage implements OnInit {
  listaDiarios: Diario[];
  listaDiariosFiltrados: Diario[];

  numTotalRegistros: number;

  listaMembros: Membro[];

  mensagens: MensagensUtil;

  usuarioLogado: Usuario;
  perfilUsuario: Membro;

  constructor(
    private autenticacaoService: AutenticacaoService,
    private modalController: ModalController,
    private diarioService: DiarioService,
    private membroService: MembroService,
    private alertController: AlertController,
    private aviso: ToastController
  ) {
    this.mensagens = new MensagensUtil(this.aviso);
    this.usuarioLogado = this.autenticacaoService.pegarDadosLocalmente();
  }

  ngOnInit() {
    this.inicializar();
  }

  public inicializar(): void {
    let membro: Membro | null = null;

    this.membroService.listar().subscribe((response) => {
      this.listaMembros = response;
      const listaMembrosEncontrados: Membro[] = response.filter(
        (membro) => membro.email === this.usuarioLogado.email
      );
      membro = listaMembrosEncontrados.length > 0 ? listaMembrosEncontrados[0] : null;
    });

    this.diarioService.listar().subscribe((response) => {
      this.listaDiariosFiltrados = response.filter(
        (saude) => saude.email === this.usuarioLogado.email || (membro && membro.perfil === "ADMIN")
      );
      this.listaDiarios = this.listaDiariosFiltrados;

      this.numTotalRegistros = this.listaDiariosFiltrados.length;
    });
  }

  async abriModal() {
    const modal = await this.modalController.create({
      component: RegistroConsultorioModalPage,
      cssClass: "my-custom-class",
    });
    return await modal.present();
  }

  public async confirmarExclusao(diario: Diario) {
    const alert = await this.alertController.create({
      header: "Confirmação de exclusão",
      message: "Tem certeza que deseja excluir o diario selecionado?",
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
            this.excluirDiario(diario);
          },
        },
      ],
    });
    await alert.present();
  }

  private excluirDiario(diario: Diario): void {
    this.diarioService.deletar(diario.key);
    this.mensagens.mensagemSucesso("Diario excluido com sucesso!");
  }

  pesquisarPacientes(ev: any) {
    this.listaDiariosFiltrados = this.listaDiarios;
    const val = ev.detail.value;

    if (val && val.trim() !== "") {
      this.listaDiariosFiltrados = this.listaDiariosFiltrados.filter((term) => {
        return (
          term.nomePaciente.toUpperCase().indexOf(val.trim().toUpperCase()) > -1
        );
      });
    }
  }

  get isAdmin(): boolean {
    return this.usuarioLogado.perfil === "ADMIN";
  }

  get dataAtual(): string {
    const data = new Date();
    const dia = String(data.getDate()).padStart(2, "0");
    const mes = String(data.getMonth() + 1).padStart(2, "0");
    const ano = data.getFullYear();
    return `${dia}/${mes}/${ano}`;
  }

  membersRows(): TableRow[] {

    const diariosOrdenados: Diario[] = this.listaDiariosFiltrados.sort((a, b) =>
      a.nomePaciente.localeCompare(b.nomePaciente)
    );

    const diariosOrdenadosArray: Array<[string, string, string]> =
      diariosOrdenados.map((paciente) => [
        paciente.nomePaciente,
        paciente.dataRegistro,
        paciente.registro
      ]);

    const membersTableRows = diariosOrdenadosArray.map((membros) => {
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
