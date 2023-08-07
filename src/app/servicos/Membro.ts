import { Injectable } from "@angular/core";
import { AngularFireDatabase, AngularFireList } from "@angular/fire/database";
import { ToastController } from "@ionic/angular";
import { Observable } from "rxjs";
import { map, shareReplay } from "rxjs/operators";
import { Membro } from "../modelo/Membro";
import { MensagensUtil } from "../util/MensagensUtil";
import { error } from "console";
import { AuditoriaService } from "./Auditoria";
import { AutenticacaoService } from "./Autenticacao";
import { Auditoria } from "../modelo/Auditoria";

@Injectable({
  providedIn: "root",
})
export class MembroService {
  membrosLista: Membro[];
  membro: Observable<any>;
  membros: Observable<any[]>;
  membroRef: AngularFireList<any>;
  mensagens: MensagensUtil;
  private path = "membros";

  private mensagemError = 'Não foi possível atualizar ou adicionar, tente novamente.'

  constructor(private db: AngularFireDatabase, private aviso: ToastController, private auditoriaService: AuditoriaService, private autenticacaoService: AutenticacaoService) {
    this.membrosLista = new Array<Membro>();
    this.membroRef = this.db.list(this.path);
    this.mensagens = new MensagensUtil(this.aviso);
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

  public listar2(): Observable<any> {
    return this.db.object(`${this.path}`).valueChanges();
  }

  public adicionarOuAtualizar(membro: Membro, mensagem : any): void {

    if (membro.key) {
      this.membroRef.update(membro.key, membro).then((sucess: any) => {
        this.auditoriaService.adicionarOuAtualizar(this.objetoAuditoria('Atualizar/Cadastrar Membro', membro, 'Sucesso'))
        this.mensagens.mensagemSucesso(mensagem)
      }, (error: any) => {
        this.auditoriaService.adicionarOuAtualizar(this.objetoAuditoria('Atualizar/Cadastrar Membro', membro, 'Falha'))
        this.mensagens.mensagemError(this.mensagemError)
      });
    } else {
      this.membroRef.push(membro).then((sucess: any) => {
        this.auditoriaService.adicionarOuAtualizar(this.objetoAuditoria('Cadastrar Membro', membro, 'Sucesso'))
      }, (error: any) => {
        this.auditoriaService.adicionarOuAtualizar(this.objetoAuditoria('Cadastrar Membro', membro, 'Falha'))
        this.mensagens.mensagemError(this.mensagemError)
      });
    }
  }

  public deletar(key: string): void {
    this.membroRef.remove(key).then((sucess: any) => {
      this.auditoriaService.adicionarOuAtualizar(this.objetoAuditoria('Remover Membro', { key: key }, 'Sucesso'))
    }, (error: any) => {
      this.auditoriaService.adicionarOuAtualizar(this.objetoAuditoria('Remover Membro', { key: key }, 'Falha'))
      this.mensagens.mensagemError(this.mensagemError)
    });;
  }

  public deletarTudo(): void {
    this.membroRef.remove();
  }

  private objetoAuditoria(acao: string, conteudoAcao: any, statuaAcao: string): Auditoria {

    let dadosUsuario = this.autenticacaoService.pegarDadosLocalmente();

    let dataAtual = new Date();
    let dataFormatada = dataAtual.toLocaleDateString('pt-BR');

    let auditoria = {
      acao: acao,
      conteudoAcao: JSON.stringify(conteudoAcao),
      usuario: dadosUsuario.nome,
      statuaAcao: statuaAcao,
      dataAcao: dataFormatada,
      localizacao: dadosUsuario.localizacao
    }

    return auditoria
  }
}
