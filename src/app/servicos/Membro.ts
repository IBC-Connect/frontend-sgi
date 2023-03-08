import { Injectable } from "@angular/core";
import { AngularFireDatabase, AngularFireList } from "@angular/fire/database";
import { Observable } from "rxjs";
import { map, shareReplay } from "rxjs/operators";
import { Membro } from "../modelo/Membro";

@Injectable({
  providedIn: "root",
})
export class MembroService {
  membrosLista: Membro[];
  membro: Observable<any>;
  membros: Observable<any[]>;
  membroRef: AngularFireList<any>;
  private path = "membros";

  constructor(private db: AngularFireDatabase) {
    this.membrosLista = new Array<Membro>();
    this.membroRef = this.db.list(this.path);
  }

  public listar(): Observable<any> {
    let cacheTime: number = 10000; // cache de 5 minuto

    return (this.membros = this.membroRef.snapshotChanges().pipe(
      map((changes) =>
        changes.map((c) => ({ key: c.payload.key, ...c.payload.val() }))
      ),
      shareReplay({ refCount: true, bufferSize: 1, windowTime: cacheTime })
    ));
  }

  public listar2() : Observable<any> {
    return this.db.object(`${this.path}`).valueChanges();
  }

  public adicionarOuAtualizar(membro: Membro): void {
    if (membro.key) {
      this.membroRef.update(membro.key, membro);
    } else {
      this.membroRef.push(membro);
    }
  }

  public deletar(key: string): void {
    this.membroRef.remove(key);
  }

  public deletarTudo(): void {
    this.membroRef.remove();
  }
}
