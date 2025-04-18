import { Injectable } from "@angular/core";
import { AngularFireDatabase, AngularFireList } from "@angular/fire/database";
import { Observable } from "rxjs";
import { map, shareReplay } from "rxjs/operators";
import { Novidade } from "../modelo/Novidade";

@Injectable({
  providedIn: "root",
})
export class NovidadeService {
  novidades: Observable<Novidade[]>;
  novidadesRef: AngularFireList<any>;

  private path = "novidades";

  constructor(private db: AngularFireDatabase) {
    this.novidadesRef = this.db.list(this.path);
  }

  public listar(): Observable<Novidade[]> {
    let cacheDuration = 5 * 60 * 1000; // cache de 5 minutos em milissegundos

    return this.novidadesRef.snapshotChanges().pipe(
      map((changes) =>
        changes.map((c) => ({ key: c.payload.key, ...c.payload.val() }))
      ),
      shareReplay({ refCount: true, bufferSize: 1, windowTime: cacheDuration })
    );
  }

  public adicionarOuAtualizar(novidade: Novidade): void {
    if (novidade.key) {
      this.novidadesRef.update(novidade.key, novidade);
    } else {
      this.novidadesRef.push(novidade);
    }
  }

  public deletar(key: string): void {
    this.novidadesRef.remove(key);
  }

  public deletarTudo(): void {
    this.novidadesRef.remove();
  }
}
