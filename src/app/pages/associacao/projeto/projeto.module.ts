import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProjetoPageRoutingModule } from './projeto-routing.module';

import { ProjetoPage } from './projeto.page';
import { BrMaskerModule } from 'br-mask';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProjetoPageRoutingModule,
    ReactiveFormsModule,
    BrMaskerModule,
  ],
  declarations: [ProjetoPage]
})
export class ProjetoPageModule {}
