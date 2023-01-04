import { Assistido } from "./Assistido";
import { Encontro } from "./Encontro";

export class Projeto {
  key: string;
  nome: string;
  dataInicio: string;
  descricao: string;
  diasEncontro: Encontro[];
  assistidos: string[];
  responsavel: string;
  situacao: string;
  dataInicioResponsavel: string;
  dataFimResponsavel: string;
}
