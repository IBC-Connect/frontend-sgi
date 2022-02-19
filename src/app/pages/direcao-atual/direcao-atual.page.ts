import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Cargo } from 'src/app/modelo/Cargo';
import { CargoService } from 'src/app/servicos/Cargo';

@Component({
  selector: 'app-direcao-atual',
  templateUrl: './direcao-atual.page.html',
  styleUrls: ['./direcao-atual.page.scss'],
})
export class DirecaoAtualPage {

  pastor : Cargo;
  viceModerador : Cargo;
  financas : Cargo;

  listaCargos: Cargo[];
  listaCargosObservable: Observable<any[]>;

  constructor(
    private cargoService: CargoService
  ) {
    this.pastor = new Cargo();
    this.viceModerador = new Cargo();
    this.financas = new Cargo();
    this.inicializar();
  }

  public inicializar(): void {
    this.listaCargosObservable = this.cargoService.listar();
    this.listaCargosObservable.subscribe(async (response) => {
      await this.associarCargo(response)
    });
  }

  public async associarCargo(response){
    await response.forEach(cargo => {
      if(cargo.nome === "PASTOR"){
        this.pastor = cargo;
      } else if(cargo.nome === "VICE MODERADOR"){
        this.viceModerador = cargo;
      } else if(cargo.nome === "FINANÇAS"){
        this.financas = cargo;
      }
    });

  }
}
