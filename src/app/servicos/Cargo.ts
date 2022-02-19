import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Cargo } from '../modelo/Cargo';

@Injectable({
  providedIn: 'root',
})
export class CargoService {

  cargosLista: Cargo[];
  cargo: Observable<any>;
  cargos: Observable<any[]>;
  cargoRef: AngularFireList<any>;

  private path = 'cargos';

  constructor(private db: AngularFireDatabase) {
    this.cargosLista = new Array<Cargo>();
    this.cargoRef = this.db.list(this.path);
  }

  public listar() : any {
    return (this.cargos = this.cargoRef
      .snapshotChanges()
      .pipe(
        map((changes) =>
          changes.map((c) => ({ key: c.payload.key, ...c.payload.val() }))
        )
      ));
  }

  public adicionarOuAtualizar(cargo: Cargo) : void {
    if (cargo.key) {
      this.cargoRef.update(cargo.key, cargo);
    } else {
      this.cargoRef.push(cargo);
    }
  }
 
  public deletar(key: string) : void {
    this.cargoRef.remove(key);
  }
 
  public deletarTudo() : void {
    this.cargoRef.remove();
  }
  
}
