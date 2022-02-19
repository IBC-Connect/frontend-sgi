import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { Membro } from 'src/app/modelo/Membro';
import { MembroService } from 'src/app/servicos/Membro';
import * as moment from 'moment';
import { DateUtil } from 'src/app/util/DateUtil';

@Component({
  selector: 'app-aniversario-do-mes',
  templateUrl: './aniversario-do-mes.page.html',
  styleUrls: ['./aniversario-do-mes.page.scss'],
})
export class AniversarioDoMesPage {

  totalMembros: number;
  membrosAtivos: Membro[];
  listaMembrosObservable: Observable<any[]>;

  constructor(
    private membroService: MembroService,
    public navCtrl: NavController
  ) {
    this.inicializar();
    moment.locale('pt-br');
  }

  private inicializar(): void {
 
    this.listaMembrosObservable = this.membroService.listar();
    this.listaMembrosObservable.subscribe(async (response) => {
      this.membrosAtivos = await this.exibirAniversariantes(response);
      this.totalMembros = this.membrosAtivos ? this.membrosAtivos.length : 0;
      this.membrosAtivos.sort((a, b) =>  a.nomeCompleto > b.nomeCompleto ? 1 : b.nomeCompleto > a.nomeCompleto ? -1 : 0);
    });
  }

  public async exibirAniversariantes(response){
    let listaAniversariantes = new Array<Membro>();

    await response.forEach(membro => {
      if(moment(membro.dataNascimento).month() === moment(new Date()).month()){  
        listaAniversariantes.push(membro);
      }
    });

    return listaAniversariantes;
  }

  public formatarDataDeNascimento(data: any): any {
    return DateUtil.dateFormatterBrazil(data);
  }

public formatarNumeroWhatsapp(whatsapp: any){
  let numero = whatsapp.replace("(","").replace(")", "").replace("-",""); 
  return `https://api.whatsapp.com/send/?phone=55${numero}&text&app_absent=0`;
}
}
