import { Injectable } from "@angular/core";
import { AngularFireDatabase, AngularFireList } from "@angular/fire/database";
import { ToastController } from "@ionic/angular";
import { Observable } from "rxjs";
import { map, shareReplay } from "rxjs/operators";
import { Assistido } from "../modelo/Assistido";
import { Auditoria } from "../modelo/Auditoria";
import { MensagensUtil } from "../util/MensagensUtil";
import { AuditoriaService } from "./Auditoria";
import { AutenticacaoService } from "./Autenticacao";

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

  private mensagemError = 'Erro ao cadastrar um assistido';

  constructor(private db: AngularFireDatabase, private aviso: ToastController, private auditoriaService: AuditoriaService, private autenticacaoService: AutenticacaoService) {
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
      this.assistidoRef.update(assistido.key, assistido).then((sucess: any) => {
        this.auditoriaService.adicionarOuAtualizar(this.objetoAuditoria('Atualizar/Cadastrar Assistido', assistido, 'Sucesso'))
        this.mensagens.mensagemSucesso(mensagem)
      }, (error: any) => {
        this.auditoriaService.adicionarOuAtualizar(this.objetoAuditoria('Atualizar/Cadastrar Assistido', assistido, 'Falha'))
        this.mensagens.mensagemError(this.mensagemError)
      });
    } else {
      this.assistidoRef.push(assistido).then(
        (sucess) => {
          this.auditoriaService.adicionarOuAtualizar(this.objetoAuditoria('Cadastrar Assistido', assistido, 'Falha'))
          this.mensagens.mensagemSucesso(mensagem);
        },
        (error) => {
          this.auditoriaService.adicionarOuAtualizar(this.objetoAuditoria('Cadastrar Assistido', assistido, 'Falha'))
          this.mensagens.mensagemError(this.mensagemError);
        }
      );
    }
  }

  public deletar(key: string): void {
    this.assistidoRef.remove(key).then((sucess: any) => {
      this.auditoriaService.adicionarOuAtualizar(this.objetoAuditoria('Remover Assistido', { key: key }, 'Sucesso'))
    }, (error: any) => {
      this.auditoriaService.adicionarOuAtualizar(this.objetoAuditoria('Remover Assistido', { key: key }, 'Falha'))
      this.mensagens.mensagemError(this.mensagemError)
    });;
  }

  public deletarTudo(): void {
    this.assistidoRef.remove();
  }

  private objetoAuditoria(acao: string, conteudoAcao: any, statuaAcao: string): Auditoria {
    let dadosUsuario = this.autenticacaoService.pegarDadosLocalmente();

    let dataAtual = new Date();
    let dataFormatada = dataAtual.toLocaleDateString('pt-BR');

    if (dadosUsuario.localizacao) {

      let auditoria = {
        acao: acao,
        conteudoAcao: JSON.stringify(conteudoAcao),
        usuario: dadosUsuario.nome,
        statuaAcao: statuaAcao,
        dataAcao: dataFormatada,
        localizacao: dadosUsuario.localizacao
      }

      return auditoria
    } else {

      let auditoria = {
        acao: acao,
        conteudoAcao: JSON.stringify(conteudoAcao),
        usuario: dadosUsuario.nome,
        statuaAcao: statuaAcao,
        dataAcao: dataFormatada,
        localizacao: "Desconhecida"
      }

      return auditoria
    }
  }

}
