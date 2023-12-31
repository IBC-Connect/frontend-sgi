import { Injectable } from "@angular/core";
import { AngularFireDatabase, AngularFireList } from "@angular/fire/database";
import { ToastController } from "@ionic/angular";
import { Observable } from "rxjs";
import { map, shareReplay } from "rxjs/operators";
import { Auditoria } from "../modelo/Auditoria";
import { MensagensUtil } from "../util/MensagensUtil";

@Injectable({
    providedIn: "root",
})
export class AuditoriaService {

    auditoria: Observable<any>;
    auditoriaLista: Auditoria[];
    auditorias: Observable<any[]>;
    auditoriaRef: AngularFireList<any>;

    mensagens: MensagensUtil;
    private path = "auditorias";

    constructor(private db: AngularFireDatabase, private aviso: ToastController) {
        this.auditoriaLista = new Array<Auditoria>();
        this.auditoriaRef = this.db.list(this.path);
        this.mensagens = new MensagensUtil(this.aviso);
    }

    public listar() {
        let cacheTime: number = 10000; // cache de 5 minuto

        return (this.auditorias = this.auditoriaRef.snapshotChanges().pipe(
            map((changes) =>
                changes.map((c) => ({ key: c.payload.key, ...c.payload.val() }))
            ),
            shareReplay({ refCount: true, bufferSize: 1, windowTime: cacheTime })
        ));
    }

    public adicionarOuAtualizar(auditoria: Auditoria) {
        if (auditoria.key) {
            this.auditoriaRef.update(auditoria.key, auditoria);
        } else {
            this.auditoriaRef.push(auditoria);
        }
    }

    public deletar(auditoria: Auditoria) {
        this.auditoriaRef.remove(auditoria.key);
    }

    public deletarTudo() {
        this.auditoriaRef.remove();
    }
}
