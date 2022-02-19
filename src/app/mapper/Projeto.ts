import { Projeto } from "../modelo/Projeto";


export class ProjetoMapper {

    public static formularioToProjeto(form:any, projeto:Projeto):Projeto{

                projeto.responsavel= form.responsavel;
                projeto.dataInicioResponsavel = form.dataInicio;
                projeto.dataFimResponsavel = form.dataFim;

        return projeto;
    }

}