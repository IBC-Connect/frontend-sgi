import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AniversarioDoMesPageRoutingModule } from './aniversario-do-mes-routing.module';

import { AniversarioDoMesPage } from './aniversario-do-mes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AniversarioDoMesPageRoutingModule
  ],
  declarations: [AniversarioDoMesPage]
})
export class AniversarioDoMesPageModule {}
