import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AssistidoPageRoutingModule } from './assistido-routing.module';

import { AssistidoPage } from './assistido.page';
import { BrMaskerModule } from 'br-mask';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AssistidoPageRoutingModule,
    BrMaskerModule,
    ReactiveFormsModule
  ],
  declarations: [AssistidoPage]
})
export class AssistidoPageModule {}
