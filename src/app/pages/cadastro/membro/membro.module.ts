import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MembroPageRoutingModule } from './membro-routing.module';

import { MembroPage } from './membro.page';
import { BrMaskerModule } from 'br-mask';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BrMaskerModule,
    ReactiveFormsModule,
    MembroPageRoutingModule
  ],
  declarations: [MembroPage]
})
export class MembroPageModule {}
