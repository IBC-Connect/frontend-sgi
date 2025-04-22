import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistroDownloadModalPageRoutingModule } from './registro-download-modal-routing.module';

import { RegistroDownloadModalPage } from './registro-download-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistroDownloadModalPageRoutingModule
  ],
  declarations: [RegistroDownloadModalPage]
})
export class RegistroDownloadModalPageModule {}
