import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from '@angular/fire/database';
import { ToastController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { MensagensUtil } from '../util/MensagensUtil';
import { Transacao } from '../modelo/Transacao';

@Injectable({
  providedIn: "root",
})
export class TransacaoService {

  transacao: Observable<any>;
  transacoesLista: Transacao[];
  transacoes: Observable<any[]>;
  transacaoRef: AngularFireList<any>;
  mensagens: MensagensUtil;

  private path = "transacoes";

  constructor(private db: AngularFireDatabase, private aviso: ToastController) {
    this.mensagens = new MensagensUtil(this.aviso);
  }

  public listar() {
    return this.db.list(this.path).valueChanges();
  }

  public adicionarOuAtualizar(transacao: Transacao, mensagem: any) {
    if (transacao.key) {
      this.transacaoRef.update(transacao.key, transacao).then(
        (sucess) => {
          this.mensagens.mensagemSucesso(mensagem);
        },
        (error) => {
          this.mensagens.mensagemError("Houve um erro ao cadastrar.");
          console.log(error);
        }
      );
    } else {
      this.transacaoRef.push(transacao).then(
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

  public deletar(transacao: Transacao, mensagem: string) {
    this.transacaoRef.remove(transacao.key).then(
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
    this.transacaoRef.remove();
  }
}
