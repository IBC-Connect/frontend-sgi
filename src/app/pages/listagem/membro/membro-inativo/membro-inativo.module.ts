import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MembroInativoPageRoutingModule } from './membro-inativo-routing.module';

import { MembroInativoPage } from './membro-inativo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MembroInativoPageRoutingModule
  ],
  declarations: [MembroInativoPage]
})
export class MembroInativoPageModule {}
