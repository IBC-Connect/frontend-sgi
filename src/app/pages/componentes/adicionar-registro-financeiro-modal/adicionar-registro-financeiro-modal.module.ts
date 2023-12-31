import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AdicionarRegistroFinanceiroModalPage } from './adicionar-registro-financeiro-modal.page';
import { CurrencyMaskInputMode, NgxCurrencyModule } from 'ngx-currency';

export const customCurrencyMaskConfig = {
  align: "right",
  allowNegative: false,
  allowZero: true,
  decimal: ",",
  precision: 2,
  prefix: "R$ ",
  suffix: "",
  thousands: ".",
  nullable: true,
  min: 0,
  inputMode: CurrencyMaskInputMode.FINANCIAL
};

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
    NgxCurrencyModule.forRoot(customCurrencyMaskConfig)
  ],
  declarations: [AdicionarRegistroFinanceiroModalPage],
  exports: [AdicionarRegistroFinanceiroModalPage],
})
export class AdicionarRegistroFinanceiroModalModule { }