import { Injectable } from "@angular/core";
import { AngularFireDatabase, AngularFireList } from "@angular/fire/database";
import { ToastController } from "@ionic/angular";
import { Observable } from "rxjs";
import { map, shareReplay } from "rxjs/operators";
import { Assistido } from "../modelo/Assistido";
import { MensagensUtil } from "../util/MensagensUtil";

@Injectable({
  providedIn: "root",
})
export class AssistidoService {
  assistidoLista: Assistido[];
  assistido: Observable<any>;
  assistidos: Observable<any[]>;
  assistidoRef: AngularFireList<any>;
  mensagens: MensagensUtil;
  private path = "assistidos";

  constructor(private db: AngularFireDatabase, private aviso: ToastController) {
    this.assistidoLista = new Array<Assistido>();
    this.assistidoRef = this.db.list(this.path);
    this.mensagens = new MensagensUtil(this.aviso);
  }

  public listar(): any {
    let cacheTime: number = 10000; // cache de 5 minuto

    return (this.assistidos = this.assistidoRef.snapshotChanges().pipe(
      map((changes) =>
        changes.map((c) => ({ key: c.payload.key, ...c.payload.val() }))
      ),
      shareReplay({ refCount: true, bufferSize: 1, windowTime: cacheTime })
    ));
  }

  public adicionarOuAtualizar(assistido: Assistido, mensagem: string): void {
    if (assistido.key) {
      this.assistidoRef.update(assistido.key, assistido).then(
        (sucess) => {
          this.mensagens.mensagemSucesso(mensagem);
        },
        (error) => {
          this.mensagens.mensagemError("Houve um erro ao cadastrar.");
          console.log(error);
        }
      );
    } else {
      this.assistidoRef.push(assistido).then(
        (sucess) => {
          this.mensagens.mensagemSucesso(mensagem);
        },
        (error) => {
          this.mensagens.mensagemError("Houve um erro ao cadastrar.");
          console.log(error);
        }
      );
    }
  }

  public deletar(key: string): void {
    this.assistidoRef.remove(key);
  }

  public deletarTudo(): void {
    this.assistidoRef.remove();
  }
}
