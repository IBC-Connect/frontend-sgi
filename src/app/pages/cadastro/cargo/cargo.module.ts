import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CargoPageRoutingModule } from './cargo-routing.module';

import { CargoPage } from './cargo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CargoPageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [CargoPage]
})
export class CargoPageModule {}
