import { Injectable } from "@angular/core";
import { AngularFireDatabase, AngularFireList } from "@angular/fire/database";
import { Observable } from "rxjs";
import { map, shareReplay } from "rxjs/operators";
import { Parceiro } from "../modelo/Parceiro";

@Injectable({
  providedIn: "root",
})
export class ParceiroService {
  parceiros: Observable<Parceiro[]>;
  parceiroRef: AngularFireList<any>;

  private path = "parceiros";

  constructor(private db: AngularFireDatabase) {
    this.parceiroRef = this.db.list(this.path);
  }

  public listar(): Observable<Parceiro[]> {
    let cacheDuration = 5 * 60 * 1000; // cache de 5 minutos em milissegundos

    return this.parceiroRef.snapshotChanges().pipe(
      map((changes) =>
        changes.map((c) => ({ key: c.payload.key, ...c.payload.val() }))
      ),
      shareReplay({ refCount: true, bufferSize: 1, windowTime: cacheDuration })
    );
  }

  public adicionarOuAtualizar(parceiro: Parceiro): void {
    if (parceiro.key) {
      this.parceiroRef.update(parceiro.key, parceiro);
    } else {
      this.parceiroRef.push(parceiro);
    }
  }

  public deletar(key: string): void {
    this.parceiroRef.remove(key);
  }

  public deletarTudo(): void {
    this.parceiroRef.remove();
  }
}
