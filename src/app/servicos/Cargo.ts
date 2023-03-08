import { Injectable } from "@angular/core";
import { AngularFireDatabase, AngularFireList } from "@angular/fire/database";
import { Observable } from "rxjs";
import { map, shareReplay } from "rxjs/operators";
import { Cargo } from "../modelo/Cargo";

@Injectable({
  providedIn: "root",
})
export class CargoService {
  cargos: Observable<Cargo[]>;
  cargoRef: AngularFireList<any>;

  private path = "cargos";

  constructor(private db: AngularFireDatabase) {
    this.cargoRef = this.db.list(this.path);
  }

  public listar(): Observable<Cargo[]> {
    let cacheDuration = 5 * 60 * 1000; // cache de 5 minutos em milissegundos

    return this.cargoRef.snapshotChanges().pipe(
      map((changes) =>
        changes.map((c) => ({ key: c.payload.key, ...c.payload.val() }))
      ),
      shareReplay({ refCount: true, bufferSize: 1, windowTime: cacheDuration })
    );
  }

  public adicionarOuAtualizar(cargo: Cargo): void {
    if (cargo.key) {
      this.cargoRef.update(cargo.key, cargo);
    } else {
      this.cargoRef.push(cargo);
    }
  }

  public deletar(key: string): void {
    this.cargoRef.remove(key);
  }

  public deletarTudo(): void {
    this.cargoRef.remove();
  }
}
