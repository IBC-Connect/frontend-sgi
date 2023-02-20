import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MembroTransformarPageRoutingModule } from './membro-transformar-routing.module';

import { MembroTransformarPage } from './membro-transformar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MembroTransformarPageRoutingModule
  ],
  declarations: [MembroTransformarPage]
})
export class MembroTransformarPageModule {}
