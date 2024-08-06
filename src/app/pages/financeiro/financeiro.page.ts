import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import * as moment from 'moment';
import { TransacaoTransformarService } from 'src/app/servicos/TransacaoTransformar';
import * as XLSX from 'xlsx';
import { Transacao } from '../../modelo/Transacao';
import { TransacaoService } from '../../servicos/Transacao';
import { AdicionarRegistroFinanceiroModalPage } from '../componentes/adicionar-registro-financeiro-modal/adicionar-registro-financeiro-modal.page';
import { Categoria } from 'src/app/servicos/Categoria';

@Component({
  selector: 'app-financeiro',
  templateUrl: './financeiro.page.html',
  styleUrls: ['./financeiro.page.scss'],
})
export class FinanceiroPage implements OnInit {
  totalEntradas: number = 0;
  totalSaidas: number = 0;
  saldoFinal: number = 0;
  saldoGeral: number = 0;
  saldoInvestimento: number = 0;
  saldoInvestimentoMesAtual: number = 0;

  view: any = "ibc";
  ambienteSelecionado: any;

  months = [];
  years = [];

  selectedMonth: number;
  selectedYear: number;
  transacoes: Transacao[] = [];
  filtredTransacoes: Transacao[] = [];

  constructor(private modalController: ModalController,
    private alertController: AlertController,
    private transacaoService: TransacaoService,
    private transacaoTransformarService: TransacaoTransformarService,
    private categoriaService: Categoria,
    private cdr: ChangeDetectorRef) {
    // Define o mês atual como selecionado por padrão
    let dataAtual = new Date();
    this.selectedMonth = dataAtual.getMonth() + 1;
    this.selectedYear = dataAtual.getFullYear();
    this.ambienteSelecionado = this.transacaoService;
    this.years = this.getYears();
    this.months = this.getMonths();
  }

  selecionarAmbiente(event: any) {
    this.ambienteSelecionado = event.detail.value === "ibc" ? this.transacaoService : this.transacaoTransformarService
    this.view = event.detail.value;
    this.categoriaService.visualizacao = event.detail.value;
    this.loadDataAndTotals();
  }

  ngOnInit() {
    this.loadDataAndTotals();
    this.cdr.detectChanges();
  }

  eraseTotals() {
    this.totalEntradas = 0;
    this.totalSaidas = 0;
    this.saldoFinal = 0;
    this.saldoInvestimento = 0;
  }

  loadDataAndTotals() {
    this.ambienteSelecionado.listar().subscribe((transacoes: Transacao[]) => {
      this.transacoes = this.sortTransacaosByDate(transacoes);
      this.filtredTransacoes = this.filterTransacoes();
      this.calculateTotals();
    });
  }

  sortTransacaosByDate(transacoes: Transacao[]): Transacao[] {
    return transacoes.sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);

      return dateA.getTime() - dateB.getTime();
    });
  }

  filterTransacoes() {
    return this.transacoes.filter((Transacao: Transacao) => {
      const date = moment(Transacao.date);
      return date.year() === this.selectedYear && date.month() + 1 === this.selectedMonth;
    });
  }

  calculateTotals() {
    this.eraseTotals();
    this.calcularTransacoesInvestimento(this.transacoes);
    this.calcularTransacoesInvestimentoMesAtual(this.filtredTransacoes);
    this.calcularSaldoTotal(this.filtredTransacoes);
    this.cdr.detectChanges();
  }

  calcularSaldoTotal(transacoes: Transacao[]) {
    transacoes.forEach((transacao) => {
      if (transacao.type === 'Entrada' && transacao.category != 'Investimento') {
        this.totalEntradas += Number(transacao.amount);
      } else if (transacao.type === 'Saida' && transacao.category != 'Investimento') {
        this.totalSaidas += Number(transacao.amount);
      }
    });

    this.saldoFinal = this.totalEntradas - this.totalSaidas;
    this.saldoGeral = this.saldoFinal + this.saldoInvestimentoMesAtual;
  }

  calcularTransacoesInvestimento(transacoes: Transacao[]) {
    let totalEntradasInvestimentos: number = 0;
    let totalSaidasInvestimentos: number = 0;

    transacoes.forEach((transacao) => {
      if (transacao.type === 'Entrada' && transacao.category === 'Investimento') {
        totalEntradasInvestimentos += Number(transacao.amount);
      } else if (transacao.type === 'Saida' && transacao.category === 'Investimento') {
        totalSaidasInvestimentos += Number(transacao.amount);
      }
    });

    this.saldoInvestimento = totalEntradasInvestimentos - totalSaidasInvestimentos;
  }

  calcularTransacoesInvestimentoMesAtual(transacoes: Transacao[]) {
    let totalEntradasInvestimentos: number = 0;
    let totalSaidasInvestimentos: number = 0;

    transacoes.forEach((transacao) => {
      if (transacao.type === 'Entrada' && transacao.category === 'Investimento') {
        totalEntradasInvestimentos += Number(transacao.amount);
      } else if (transacao.type === 'Saida' && transacao.category === 'Investimento') {
        totalSaidasInvestimentos += Number(transacao.amount);
      }
    });

    this.saldoInvestimentoMesAtual = totalEntradasInvestimentos - totalSaidasInvestimentos;
  }

  dateChanged() {
    this.filtredTransacoes = this.filterTransacoes();
    this.eraseTotals();
    this.calculateTotals();
  }

  async addTransacao() {
    const modal = await this.modalController.create({
      component: AdicionarRegistroFinanceiroModalPage
    });

    modal.onDidDismiss().then((result) => {
      if (result.data) {
        const newTransacaos: Transacao[] = result.data.transactions;

        if (newTransacaos.length > 0) {
          newTransacaos.forEach(transacao => {
            this.ambienteSelecionado.adicionarOuAtualizar(transacao, "Transação realizada com sucesso");
          });

          this.loadDataAndTotals();
        }
      }
    });

    return await modal.present();
  }

  async editarTransacao(transacao: Transacao) {
    const modal = await this.modalController.create({
      component: AdicionarRegistroFinanceiroModalPage,
      componentProps: {
        'transacao': transacao
      }
    });

    modal.onDidDismiss().then((result) => {
      if (result.data) {
        const newTransacaos: Transacao[] = result.data.transactions;

        if (newTransacaos.length > 0) {
          newTransacaos.forEach(transacao => {
            this.ambienteSelecionado.adicionarOuAtualizar(transacao, "Transação realizada com sucesso");
          });

          this.loadDataAndTotals();
        }
      }
    });

    return await modal.present();
  }

  async removerTransacaoDialog(transacao: Transacao) {
    const alert = await this.alertController.create({
      header: 'Escolha uma alternativa',
      message: 'Deseja realmente <strong>excluir</strong> essa transação?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
          },
        },
        {
          text: 'Excluir',
          handler: () => {
            this.removeTransacao(transacao)
          },
        },
      ],
    });

    await alert.present();
  }

  removeTransacao(transacao: Transacao) {
    this.ambienteSelecionado.deletar(transacao, "Transação removida com sucesso");
    this.loadDataAndTotals();
  }

  exportToExcel() {
    const data = [
      ['Data', 'Descrição', 'Tipo', 'Valor'],
      ...this.filtredTransacoes.map((transacao: Transacao) => [
        transacao.date,
        transacao.description,
        transacao.type,
        transacao.amount
      ])
    ];

    const worksheet = XLSX.utils.aoa_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Entradas e Saídas');

    const wbout = XLSX.write(workbook, { bookType: 'xlsx', type: 'binary' });
    function s2ab(s: string) {
      const buf = new ArrayBuffer(s.length);
      const view = new Uint8Array(buf);
      for (let i = 0; i < s.length; i++) {
        view[i] = s.charCodeAt(i) & 0xff;
      }
      return buf;
    }

    const blob = new Blob([s2ab(wbout)], { type: 'application/octet-stream' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = 'entradas_e_saidas.xlsx';
    link.click();
  }

  saldoEnviromentSelected() {
    return this.saldoInvestimento;
  }

  getMonths() {
    return [
      { label: 'Janeiro', value: 1 },
      { label: 'Fevereiro', value: 2 },
      { label: 'Março', value: 3 },
      { label: 'Abril', value: 4 },
      { label: 'Maio', value: 5 },
      { label: 'Junho', value: 6 },
      { label: 'Julho', value: 7 },
      { label: 'Agosto', value: 8 },
      { label: 'Setembro', value: 9 },
      { label: 'Outubro', value: 10 },
      { label: 'Novembro', value: 11 },
      { label: 'Dezembro', value: 12 },
    ];
  }

  getYears() {
    return [
      { label: '2000', value: 2000 },
      { label: '2001', value: 2001 },
      { label: '2002', value: 2002 },
      { label: '2003', value: 2003 },
      { label: '2004', value: 2004 },
      { label: '2005', value: 2005 },
      { label: '2006', value: 2006 },
      { label: '2007', value: 2007 },
      { label: '2008', value: 2008 },
      { label: '2009', value: 2009 },
      { label: '2010', value: 2010 },
      { label: '2011', value: 2011 },
      { label: '2012', value: 2012 },
      { label: '2013', value: 2013 },
      { label: '2014', value: 2014 },
      { label: '2015', value: 2015 },
      { label: '2016', value: 2016 },
      { label: '2017', value: 2017 },
      { label: '2018', value: 2018 },
      { label: '2019', value: 2019 },
      { label: '2020', value: 2020 },
      { label: '2021', value: 2021 },
      { label: '2022', value: 2022 },
      { label: '2023', value: 2023 },
      { label: '2024', value: 2024 },
      { label: '2025', value: 2025 },
      { label: '2026', value: 2026 },
      { label: '2027', value: 2027 },
      { label: '2028', value: 2028 },
      { label: '2029', value: 2029 },
      { label: '2030', value: 2030 },
    ];
  }
}
