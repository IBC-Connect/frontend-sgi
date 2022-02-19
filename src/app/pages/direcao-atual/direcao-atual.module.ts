import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DirecaoAtualPageRoutingModule } from './direcao-atual-routing.module';

import { DirecaoAtualPage } from './direcao-atual.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DirecaoAtualPageRoutingModule
  ],
  declarations: [DirecaoAtualPage]
})
export class DiracaoAtualPageModule {}
