import { Observable } from "rxjs";
import { Membro } from "../modelo/Membro";
import { MembroService } from "../servicos/Membro";

export class MembroDTO {

    membro: Membro;
    membroLista: Membro[];
    totalMembros: number;
    listaMembrosObservable: Observable<any[]>;

    constructor(private membroService: MembroService) {
        this.inicializar()
    }
    
    private async inicializar() {
        this.membro = new Membro();
        this.membroLista = new Array<Membro>();
        this.listaMembrosObservable = await this.membroService.listar();
        this.listaMembrosObservable.subscribe(async (response) => {
            this.membroLista = response;
        });
        return this.membroLista;
    }

    public todosMembros(): Membro[] {
        return this.membroLista;
    }

    public async verificaMembroPorEmail(email) {
        return this.membroLista.find(membro => {
            console.log(membro)
            if (email === membro.email.toLowerCase()) {
                return membro;
            }
        });

    }

}