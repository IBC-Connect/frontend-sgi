import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Projeto } from '../modelo/Projeto';

@Injectable({
  providedIn: 'root',
})
export class ProjetoService {
  projeto: Observable<any>;
  projetosLista: Projeto[];
  projetos: Observable<any[]>;
  projetoRef: AngularFireList<any>;

  private path = 'projetos';

  constructor(private db: AngularFireDatabase) {
    this.projetosLista = new Array<Projeto>();
    this.projetoRef = this.db.list(this.path);
  }

  public listar() {
    return (this.projetos = this.projetoRef
      .snapshotChanges()
      .pipe(
        map((changes) =>
          changes.map((c) => ({ key: c.payload.key, ...c.payload.val() }))
        )
      ));
  }

  public adicionarOuAtualizar(projeto: Projeto) {
    if (projeto.key) {
      this.projetoRef.update(projeto.key, projeto);
    } else {
      this.projetoRef.push(projeto);
    }
  }

  public deletar(key: string) {
    this.projetoRef.remove(key);
  }

  public deletarTudo() {
    this.projetoRef.remove();
  }

  public carregaListaProjetos(): Projeto[] {
    this.listar()
      .toPromise()
      .then(
        (sucess) => {
          this.projetosLista = sucess;
        },
        (error) => {
          console.log(error);
        }
      );

    return this.projetosLista;
  }
}
