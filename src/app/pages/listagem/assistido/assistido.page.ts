import { Component } from '@angular/core';
import { AlertController, NavController, ToastController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { Assistido } from 'src/app/modelo/Assistido';
import { AssistidoService } from 'src/app/servicos/Assistido';
import { DateUtil } from 'src/app/util/DateUtil';
import { MensagensUtil } from 'src/app/util/MensagensUtil';
import { RedirecionadorUtil } from 'src/app/util/RedirecionadorUtil';
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
import { InformacoesPessoaisUtil } from 'src/app/util/InformacoesPessoaisUtil';
@Component({
  selector: "app-assistido",
  templateUrl: "./assistido.page.html",
  styleUrls: ["./assistido.page.scss"],
})
export class AssistidoPage {
  listaAssistidos: Assistido[];
  listaAssistidosFiltrados: Assistido[];
  numTotalAssistidos: number;
  listaAssistidosObservable: Observable<any[]>;
  mensagens: MensagensUtil;
  redirecionador: RedirecionadorUtil;

  constructor(
    private assistidoService: AssistidoService,
    private aviso: ToastController,
    private navCtrl: NavController,
    public alertController: AlertController
  ) {
    this.inicializar();
  }

  public inicializar(): void {
    this.mensagens = new MensagensUtil(this.aviso);
    this.listaAssistidosObservable = this.assistidoService.listar();
    this.listaAssistidosObservable.subscribe((response) => {
      this.listaAssistidos = response;
      this.listaAssistidosFiltrados = response;
      this.numTotalAssistidos = this.listaAssistidos.length;
      this.listaAssistidosFiltrados.sort((a, b) =>
        a.nomeCompleto > b.nomeCompleto
          ? 1
          : b.nomeCompleto > a.nomeCompleto
            ? -1
            : 0
      );
    });
  }

  public editarAssistido(assistido: Assistido): void {
    this.navCtrl.navigateForward("/editar/assistido", {
      state: { content: assistido },
    });
  }

  public formatarDataDeNascimento(data: any): any {
    return data.includes("/") ? data : DateUtil.dateFormatterBrazil(data);
  }

  exibirFamiliares(assistido: Assistido) {
    if (!assistido.familiares || assistido.familiares.length === 0) {
      return '';
    }
  
    return assistido.familiares
      .map(familiar => `${familiar.nome} - ${familiar.parentesco}`)
      .join(', ');
  }

  public onSearchTerm(ev: any) {
    this.listaAssistidosFiltrados = this.listaAssistidos;
    const val = ev.detail.value;

    if (val && val.trim() !== "") {
      this.listaAssistidosFiltrados = this.listaAssistidosFiltrados.filter(
        (term) => {
          return (
            term.nomeCompleto.toUpperCase().indexOf(val.trim().toUpperCase()) >
            -1
          );
        }
      );
    }
  }

  gerarRelatorio() {
    return this.gerarRelatorioDocx(this.listaAssistidosFiltrados);
  }

  public gerarRelatorioDocx(assistidos: Assistido[]): void {
    const totalFamiliares = assistidos.reduce((acc, assistido) => acc + (assistido.familiares ? assistido.familiares.length : 0), 0);
    const totalAssistidos = assistidos.length;
    const totalPessoas = totalAssistidos + totalFamiliares;

    const doc = new Document({
      sections: [
        {
          properties: {},
          children: [
            new Paragraph({
              children: [
                new TextRun({
                  text: `Total de Assistidos e Familiares: ${totalPessoas}`,
                  bold: true,
                  size: 28,
                }),
              ],
              alignment: AlignmentType.CENTER,
              spacing: { after: 400 },
            }),
            new Paragraph({
              children: [
                new TextRun({
                  text: "Dados do Assistido",
                  bold: true,
                  size: 28,
                }),
              ],
              alignment: AlignmentType.CENTER,
              spacing: { after: 400 },
            }),
            ...assistidos.reduce((acc, assistido) => {
              return acc.concat([
                new Paragraph({
                  children: [
                    new TextRun({
                      text: `Nome Completo: ${assistido.nomeCompleto}`,
                      size: 24,
                      bold: true,
                    }),
                  ],
                  spacing: { after: 200 },
                }),
                new Paragraph({
                  children: [
                    new TextRun({
                      text: `CPF: ${assistido.cpf ? assistido.cpf : 'Não informado'}`,
                      size: 24,
                    }),
                  ],
                  spacing: { after: 200 },
                }),
                new Paragraph({
                  children: [
                    new TextRun({
                      text: `RG: ${assistido.rg ? assistido.rg : 'Não informado'}`,
                      size: 24,
                    }),
                  ],
                  spacing: { after: 200 },
                }),
                new Paragraph({
                  children: [
                    new TextRun({
                      text: `Data de Nascimento: ${assistido.dataNascimento}`,
                      size: 24,
                    }),
                  ],
                  spacing: { after: 200 },
                }),
                new Paragraph({
                  children: [
                    new TextRun({
                      text: `Email: ${assistido.email ? assistido.email : 'Não informado'}`,
                      size: 24,
                    }),
                  ],
                  spacing: { after: 200 },
                }),
                new Paragraph({
                  children: [
                    new TextRun({
                      text: `Estado Civil: ${InformacoesPessoaisUtil.procuraEstadoCivil(assistido.estadoCivil)}`,
                      size: 24,
                    }),
                  ],
                  spacing: { after: 200 },
                }),
                new Paragraph({
                  children: [
                    new TextRun({
                      text: `Escolaridade: ${InformacoesPessoaisUtil.procuraEscolaridade(assistido.escolaridade)}`,
                      size: 24,
                    }),
                  ],
                  spacing: { after: 200 },
                }),
                new Paragraph({
                  children: [
                    new TextRun({
                      text: `Profissão: ${assistido.profissao ? assistido.profissao : 'Não informado'}`,
                      size: 24,
                    }),
                  ],
                  spacing: { after: 200 },
                }),
                new Paragraph({
                  children: [
                    new TextRun({
                      text: `Trabalhando Atualmente: ${assistido.trabalhandoAtualmente ? 'Sim' : 'Não'}`,
                      size: 24,
                    }),
                  ],
                  spacing: { after: 200 },
                }),
                new Paragraph({
                  children: [
                    new TextRun({
                      text: `Telefone: ${assistido.telefone ? assistido.telefone : 'Não informado'}`,
                      size: 24,
                    }),
                  ],
                  spacing: { after: 200 },
                }),
                new Paragraph({
                  children: [
                    new TextRun({
                      text: `WhatsApp: ${assistido.whatsapp ? assistido.whatsapp : 'Não informado'}`,
                      size: 24,
                    }),
                  ],
                  spacing: { after: 200 },
                }),
                new Paragraph({
                  children: [
                    new TextRun({
                      text: `Endereço: ${assistido.endereco ? `${assistido.endereco.logradouro}, ${assistido.endereco.numero}, ${assistido.endereco.bairro}, ${assistido.endereco.cidade} - ${assistido.endereco.estado}` : ''}`,
                      size: 24,
                    }),
                  ],
                  spacing: { after: 200 },
                }),
                new Paragraph({
                  children: [
                    new TextRun({
                      text: `Situação: ${assistido.situacao}`,
                      size: 24,
                    }),
                  ],
                  spacing: { after: 200 },
                }),
                new Paragraph({
                  children: [
                    new TextRun({
                      text: `Observações: ${assistido.observacoes}`,
                      size: 24,
                    }),
                  ],
                  spacing: { after: 200 },
                }),
                new Paragraph({
                  children: [
                    new TextRun({
                      text: `Projetos: ${assistido.projetos ? assistido.projetos.join(', ') : ''}`,
                      size: 24,
                    }),
                  ],
                  spacing: { after: 200 },
                }),
                new Paragraph({
                  children: [
                    new TextRun({
                      text: `Familiares: ${assistido.familiares ? assistido.familiares.map(f => `${f.nome} - ${f.parentesco}`).join(', ') : 'Não informado'}`,
                      size: 24,
                    }),
                  ],
                  spacing: { after: 200 },
                }),
                new Paragraph({
                  children: [
                    new TextRun({
                      text: '',
                    }),
                  ],
                  spacing: { after: 400 },
                }),
              ]);
            }, []),
          ],
        },
      ],
    });

    Packer.toBlob(doc).then((blob) => {
      saveAs(blob, "dados_assistidos.docx");
    });
  }
}
