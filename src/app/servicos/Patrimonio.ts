import { Injectable } from "@angular/core";
import { AngularFireDatabase, AngularFireList } from "@angular/fire/database";
import { Observable } from "rxjs";
import { map, shareReplay } from "rxjs/operators";
import { Patrimonio } from "../modelo/Patrimonio";

@Injectable({
  providedIn: "root",
})
export class PatrimonioService {
  patrimonios: Observable<Patrimonio[]>;
  patrimonioRef: AngularFireList<any>;

  private path = "patrimonios";

  constructor(private db: AngularFireDatabase) {
    this.patrimonioRef = this.db.list(this.path);
  }

  public listar(): Observable<Patrimonio[]> {
    let cacheDuration = 5 * 60 * 1000; // cache de 5 minutos em milissegundos

    return this.patrimonioRef.snapshotChanges().pipe(
      map((changes) =>
        changes.map((c) => ({ key: c.payload.key, ...c.payload.val() }))
      ),
      shareReplay({ refCount: true, bufferSize: 1, windowTime: cacheDuration })
    );
  }

  public adicionarOuAtualizar(patrimonio: Patrimonio): void {
    if (patrimonio.key) {
      this.patrimonioRef.update(patrimonio.key, patrimonio);
    } else {
      this.patrimonioRef.push(patrimonio);
    }
  }

  public deletar(key: string): void {
    this.patrimonioRef.remove(key);
  }

  public deletarTudo(): void {
    this.patrimonioRef.remove();
  }
}
