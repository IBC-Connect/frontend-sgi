import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Evento } from '../modelo/Evento';

@Injectable({
  providedIn: 'root',
})
export class EventoService {
  eventosLista: Evento[];
  evento: Observable<any>;
  eventos: Observable<any[]>;
  eventoRef: AngularFireList<any>;

  private path = 'eventos';

  constructor(private db: AngularFireDatabase) {
    this.eventosLista = new Array<Evento>();
    this.eventoRef = this.db.list(this.path);
  }

  public listar() {
    return (this.eventos = this.eventoRef
      .snapshotChanges()
      .pipe(
        map((changes) =>
          changes.map((c) => ({ key: c.payload.key, ...c.payload.val() }))
        )
      ));
  }

  public adicionarOuAtualizar(evento: Evento) {
    if (evento.key) {
      this.eventoRef.update(evento.key, evento);
    } else {
      this.eventoRef.push(evento);
    }
  }

  public deletar(key: string) {
    this.eventoRef.remove(key);
  }

  public deletarTudo() {
    this.eventoRef.remove();
  }

  public carregaListaEvento(): Evento[] {
    this.listar()
      .toPromise()
      .then(
        (sucess) => {
          this.eventosLista = sucess;
        },
        (error) => {
          console.log(error)
        }
      );

    return this.eventosLista;
  }
}
