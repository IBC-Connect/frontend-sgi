import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Assistido } from '../modelo/Assistido';

@Injectable({
  providedIn: 'root',
})
export class AssistidoService {
  assistidoLista: Assistido[];
  assistido: Observable<any>;
  assistidos: Observable<any[]>;
  assistidoRef: AngularFireList<any>;
  private path = 'assistidos';

  constructor(private db: AngularFireDatabase) {
    this.assistidoLista = new Array<Assistido>();
    this.assistidoRef = this.db.list(this.path);
  }

  public listar() : any {
    return (this.assistidos = this.assistidoRef
      .snapshotChanges()
      .pipe(
        map((changes) =>
          changes.map((c) => ({ key: c.payload.key, ...c.payload.val() }))
        )
      ));
  }
  
 public adicionarOuAtualizar(assistido: Assistido) : void {
    if (assistido.key) {
      this.assistidoRef.update(assistido.key, assistido);
    } else {
      this.assistidoRef.push(assistido);
    }
  }
   
  public deletar(key: string) : void {
    this.assistidoRef.remove(key);
  }
 
  public deletarTudo() : void {
    this.assistidoRef.remove();
  }

  public carregaListaMembros(): Assistido[] {
    this.listar()
      .toPromise()
      .then(
        (sucess) => {
          this.assistidoLista = sucess;
        },
        (error) => {
          console.log(error);
        }
      );

    return this.assistidoLista;
  }
}
