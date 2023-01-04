import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SistemaRelatorioModalPageRoutingModule } from './sistema-relatorio-modal-routing.module';

import { SistemaRelatorioModalPage } from './sistema-relatorio-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SistemaRelatorioModalPageRoutingModule
  ],
  declarations: [SistemaRelatorioModalPage]
})
export class SistemaRelatorioModalPageModule {}
