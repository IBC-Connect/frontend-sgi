import { Injectable } from "@angular/core";
import { AngularFireDatabase, AngularFireList } from "@angular/fire/database";
import { ToastController } from "@ionic/angular";
import { Observable } from "rxjs";
import { map, shareReplay } from "rxjs/operators";
import { Projeto } from "../modelo/Projeto";
import { MensagensUtil } from "../util/MensagensUtil";

@Injectable({
  providedIn: "root",
})
export class ProjetoService {
  projeto: Observable<any>;
  projetosLista: Projeto[];
  projetos: Observable<any[]>;
  projetoRef: AngularFireList<any>;
  mensagens: MensagensUtil;

  private path = "projetos";

  constructor(private db: AngularFireDatabase, private aviso: ToastController) {
    this.projetosLista = new Array<Projeto>();
    this.projetoRef = this.db.list(this.path);
    this.mensagens = new MensagensUtil(this.aviso);
  }

  public listar() {
    let cacheTime: number = 10000; // cache de 5 minuto

    return (this.projetos = this.projetoRef.snapshotChanges().pipe(
      map((changes) =>
        changes.map((c) => ({ key: c.payload.key, ...c.payload.val() }))
      ),
      shareReplay({ refCount: true, bufferSize: 1, windowTime: cacheTime })
    ));
  }

  public adicionarOuAtualizar(projeto: Projeto, mensagem: any) {
    if (projeto.key) {
      this.projetoRef.update(projeto.key, projeto).then(
        (sucess) => {
          this.mensagens.mensagemSucesso(mensagem);
        },
        (error) => {
          this.mensagens.mensagemError("Houve um erro ao cadastrar.");
          console.log(error);
        }
      );
    } else {
      this.projetoRef.push(projeto).then(
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

  public deletar(key: string, mensagem: string) {
    this.projetoRef.remove(key).then(
      (sucess) => {
        this.mensagens.mensagemSucesso(mensagem);
      },
      (error) => {
        this.mensagens.mensagemError("Houve um erro ao cadastrar.");
        console.log(error);
      }
    );
  }

  public deletarTudo() {
    this.projetoRef.remove();
  }
}
