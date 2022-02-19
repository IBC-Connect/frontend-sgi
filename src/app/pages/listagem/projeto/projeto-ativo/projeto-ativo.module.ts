import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProjetoAtivoPageRoutingModule } from './projeto-ativo-routing.module';

import { ProjetoAtivoPage } from './projeto-ativo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProjetoAtivoPageRoutingModule
  ],
  declarations: [ProjetoAtivoPage]
})
export class ProjetoAtivoPageModule {}
