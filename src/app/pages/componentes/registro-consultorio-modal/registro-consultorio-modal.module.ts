import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { RegistroConsultorioModalPageRoutingModule } from "./registro-consultorio-modal-routing.module";

import { RegistroConsultorioModalPage } from "./registro-consultorio-modal.page";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistroConsultorioModalPageRoutingModule,
  ],
  declarations: [RegistroConsultorioModalPage],
})
export class RegistroConsultorioModalPageModule {}
