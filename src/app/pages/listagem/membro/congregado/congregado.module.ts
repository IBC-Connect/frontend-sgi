import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CongregadoPageRoutingModule } from './congregado-routing.module';

import { CongregadoPage } from './congregado.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CongregadoPageRoutingModule
  ],
  declarations: [CongregadoPage]
})
export class CongregadoPageModule {}
