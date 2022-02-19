import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Membro } from '../modelo/Membro';

@Injectable({
  providedIn: 'root',
})
export class MembroService {
  membrosLista: Membro[];
  membro: Observable<any>;
  membros: Observable<any[]>;
  membroRef: AngularFireList<any>;
  private path = 'membros';

  constructor(private db: AngularFireDatabase) {
    this.membrosLista = new Array<Membro>();
    this.membroRef = this.db.list(this.path);
  }

  public listar() : any {
    return (this.membros = this.membroRef
      .snapshotChanges()
      .pipe(
        map((changes) =>
          changes.map((c) => ({ key: c.payload.key, ...c.payload.val() }))
        )
      ));
  }
  
 public adicionarOuAtualizar(membro: Membro) : void {
    if (membro.key) {
      this.membroRef.update(membro.key, membro);
    } else {
      this.membroRef.push(membro);
    }
  }
   
  public deletar(key: string) : void {
    this.membroRef.remove(key);
  }
 
  public deletarTudo() : void {
    this.membroRef.remove();
  }

  public carregaListaMembros(): Membro[] {
    this.listar()
      .toPromise()
      .then(
        (sucess) => {
          console.log(sucess);
          this.membrosLista = sucess;
        },
        (error) => {
          console.log(error);
        }
      );

    return this.membrosLista;
  }
}
