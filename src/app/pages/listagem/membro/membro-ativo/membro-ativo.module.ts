import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MembroAtivoPageRoutingModule } from './membro-ativo-routing.module';

import { MembroAtivoPage } from './membro-ativo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MembroAtivoPageRoutingModule
  ],
  declarations: [MembroAtivoPage]
})
export class MembroAtivoPageModule {}
