import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MembroPageRoutingModule } from './membro-routing.module';

import { MembroPage } from './membro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MembroPageRoutingModule
  ],
  declarations: [MembroPage]
})
export class MembroPageModule {}
