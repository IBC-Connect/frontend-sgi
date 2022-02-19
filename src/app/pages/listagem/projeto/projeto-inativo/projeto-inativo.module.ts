import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProjetoInativoPageRoutingModule } from './projeto-inativo-routing.module';

import { ProjetoInativoPage } from './projeto-inativo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProjetoInativoPageRoutingModule
  ],
  declarations: [ProjetoInativoPage]
})
export class ProjetoInativoPageModule {}
