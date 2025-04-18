import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NovidadeModalPageRoutingModule } from './novidade-modal-routing.module';

import { NovidadeModalPage } from './novidade-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NovidadeModalPageRoutingModule
  ],
  declarations: [NovidadeModalPage]
})
export class NovidadeModalPageModule {}
