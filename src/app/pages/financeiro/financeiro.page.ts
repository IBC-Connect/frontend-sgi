import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import * as moment from 'moment';
import { TransacaoService } from '../../servicos/Transacao';
import * as XLSX from 'xlsx';
import { Transacao } from '../../modelo/Transacao';
import { AdicionarRegistroFinanceiroModalPage } from '../componentes/adicionar-registro-financeiro-modal/adicionar-registro-financeiro-modal.page';

@Component({
  selector: 'app-financeiro',
  templateUrl: './financeiro.page.html',
  styleUrls: ['./financeiro.page.scss'],
})
export class FinanceiroPage implements OnInit {
  totalEntradas: number = 0;
  totalSaidas: number = 0;
  saldoFinal: number = 0;

  months = [
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

  selectedMonth: number;
  transacoes: Transacao[] = [];
  filtredTransacoes: Transacao[] = [];

  constructor(private modalController: ModalController,
    private alertController: AlertController,
    private transacaoService: TransacaoService,
    private cdr: ChangeDetectorRef) {
    // Define o mês atual como selecionado por padrão
    this.selectedMonth = new Date().getMonth() + 1;
  }

  ngOnInit() {
    this.loadDataAndTotals();
    this.cdr.detectChanges();
  }

  eraseTotals() {
    this.totalEntradas = 0;
    this.totalSaidas = 0;
    this.saldoFinal = 0;
  }

  loadDataAndTotals() {
    this.transacaoService.listar().subscribe((transacoes: Transacao[]) => {
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

  filterTransacoes(){
    return this.transacoes.filter((Transacao: Transacao) => {
      const date = moment(Transacao.date);
      return date.month() + 1 === this.selectedMonth;
    });
  }

  calculateTotals() {
    this.eraseTotals();
    this.filtredTransacoes.forEach(this.updateTotals);
  }

  updateTotals = (transacao: Transacao) => {
    if (transacao.type === 'Entrada') {
      this.totalEntradas += Number(transacao.amount);
    } else if (transacao.type === 'Saida') {
      this.totalSaidas += Number(transacao.amount);
    }

    this.saldoFinal = this.totalEntradas - this.totalSaidas;

    this.cdr.detectChanges();
  }

  monthChanged() {
    const filtredTransacoes = this.transacoes.filter((Transacao: Transacao) => {
      const date = moment(Transacao.date);
      return date.month() + 1 === this.selectedMonth;
    });

    this.filtredTransacoes = filtredTransacoes;
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
            this.transacaoService.adicionarOuAtualizar(transacao, "Transação realizada com sucesso");
          });

          this.atualizarInformacoes();
        }
      }
    });

    return await modal.present();
  }

  atualizarInformacoes() {
    this.loadDataAndTotals();
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
    this.transacaoService.deletar(transacao, "Transação removida com sucesso");
    this.atualizarInformacoes();
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
}
