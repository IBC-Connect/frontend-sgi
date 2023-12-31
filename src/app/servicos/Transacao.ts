import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { ToastController } from '@ionic/angular';
import { Transacao } from '../modelo/Transacao';
import { MensagensUtil } from '../util/MensagensUtil';
import { map, shareReplay } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class TransacaoService {
  mensagens: MensagensUtil;
  private path = "transacoes";
  static MENSAGEM_ERRO = "Houve um erro ao realizar a ação. Atualize a página";

  constructor(private db: AngularFireDatabase, private aviso: ToastController) {
    this.mensagens = new MensagensUtil(this.aviso);
  }

  public listar() {
    return this.db.list(this.path).snapshotChanges().pipe(
      map(changes => 
        changes.map(c => ({ key: c.payload.key, ...(c.payload.val() as any) }))
      )
    );
  }

  public adicionarOuAtualizar(transacao: Transacao, mensagem: any) {
    if (transacao.key) {
      this.db.list(this.path).update(transacao.key, transacao).then(
        (sucess) => {
          this.mensagens.mensagemSucesso(mensagem);
        },
        (error) => {
          this.mensagens.mensagemError(TransacaoService.MENSAGEM_ERRO);
        }
      );
    } else {
      this.db.list(this.path).push(transacao).then(
        (sucess) => {
          this.mensagens.mensagemSucesso(mensagem);
        },
        (error) => {
          this.mensagens.mensagemError(TransacaoService.MENSAGEM_ERRO);
        }
      );
    }
  }

  public deletar(transacao: Transacao, mensagem: string) {
    this.db.list(this.path).remove(transacao.key).then(
      (sucess) => {
        this.mensagens.mensagemSucesso(mensagem);
      },
      (error) => {
        this.mensagens.mensagemError(TransacaoService.MENSAGEM_ERRO);
      }
    );
  }

  public deletarTudo() {
    this.db.list(this.path).remove();
  }
}
