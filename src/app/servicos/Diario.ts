import { Injectable } from "@angular/core";
import { AngularFireDatabase, AngularFireList } from "@angular/fire/database";
import { Observable } from "rxjs";
import { map, shareReplay } from "rxjs/operators";

import { Diario } from "../modelo/Diario";

@Injectable({
  providedIn: "root",
})
export class DiarioService {
  diarioLista: Diario[];
  diario: Observable<any>;
  diarios: Observable<any[]>;
  diarioRef: AngularFireList<any>;

  private path = "diarios";

  constructor(private db: AngularFireDatabase) {
    this.diarioLista = new Array<Diario>();
    this.diarioRef = this.db.list(this.path);
  }

  public listar(): any {
    let cacheTime: number = 10000; // cache de 5 minuto

    return (this.diarios = this.diarioRef.snapshotChanges().pipe(
      map((changes) =>
        changes.map((c) => ({ key: c.payload.key, ...c.payload.val() }))
      ),
      shareReplay({ refCount: true, bufferSize: 1, windowTime: cacheTime })
    ));
  }

  public adicionarOuAtualizar(diario: Diario): void {
    if (diario.key) {
      this.diarioRef.update(diario.key, diario);
    } else {
      this.diarioRef.push(diario);
    }
  }

  public deletar(key: string): void {
    this.diarioRef.remove(key);
  }

  public deletarTudo(): void {
    this.diarioRef.remove();
  }
}
