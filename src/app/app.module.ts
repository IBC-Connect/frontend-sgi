import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { FirebaseConfig } from './configuracao/firebase';
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireStorageModule } from '@angular/fire/storage';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AutenticacaoService } from '../app/servicos/Autenticacao';
import { MembroService } from '../app/servicos/Membro';
import { CargoService } from '../app/servicos/Cargo';
import { EventoService } from '../app/servicos/Evento';
import { ProjetoService } from '../app/servicos/Projeto';
import { ConsultaCEPService } from '../app/servicos/ConsultaCEP';
import { HttpClientModule } from '@angular/common/http';
import { AdicionarRegistroFinanceiroModalModule } from './pages/componentes/adicionar-registro-financeiro-modal/adicionar-registro-financeiro-modal.module';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(FirebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    ReactiveFormsModule,
    HttpClientModule,
    AdicionarRegistroFinanceiroModalModule,
    FormsModule],
  providers: [
    AutenticacaoService,
    MembroService,
    CargoService,
    EventoService,
    ProjetoService,
    ConsultaCEPService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})

export class AppModule {}
