import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { ModalController, NavParams } from '@ionic/angular';
import { Transacao } from 'src/app/modelo/Transacao';

@Component({
  selector: 'app-adicionar-registro-financeiro-modal',
  templateUrl: './adicionar-registro-financeiro-modal.page.html',
  styleUrls: ['./adicionar-registro-financeiro-modal.page.scss'],
})
export class AdicionarRegistroFinanceiroModalPage implements OnInit {

  transacao: Transacao;

  transactionsForm = this.fb.group({
    transactions: this.fb.array([])
  });

  selectedImageFiles!: FileList;
  imageURLs: string[] = [];

  uploadFiles(event: any) {
    this.selectedImageFiles = event.target.files;
  }

  get transactionsFormArray() {
    return this.transactionsForm.get('transactions') as FormArray;
  }

  get categorys() {
    return ["Pessoal",
      "Dízimo",
      "Oferta",
      "Gastos Fixos",
      "Gastos Variáveis",
      "Investimento",
      "Construção"]
  }

  constructor(private fb: FormBuilder, private modalController: ModalController, navParams: NavParams) {
    this.transacao = navParams.get('transacao');
  }

  ngOnInit() {
    this.addTransactionFormGroup(); // Adds an initial form group when the modal loads
  }

  addTransactionFormGroup() {
    this.transactionsFormArray.push(this.fb.group({
      key: [this.transacao?.key],
      date: [this.transacao?.date, Validators.required],
      description: [this.transacao?.description, Validators.required],
      type: [this.transacao?.type, Validators.required],
      category: [this.transacao?.category, Validators.required],
      amount: [this.transacao?.amount, [Validators.required, Validators.min(0), Validators.max(100000)]]
    }));
  }

  removeTransactionFormGroup(index: number) {
    this.transactionsFormArray.removeAt(index);
  }

  onSubmit() {
    if (this.transactionsForm.valid) {
      const transactions = this.transactionsForm.value.transactions;

      let modelTransactions: any

      if (this.selectedImageFiles) {
        modelTransactions = {
          transactions: transactions,
          invoices: this.selectedImageFiles
        }
      } else {
        modelTransactions = {
          transactions: transactions
        }
      }

      this.modalController.dismiss(modelTransactions);
    }
  }

  dismissModal() {
    this.modalController.dismiss();
  }
}
