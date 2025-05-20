import { Endereco } from "./Endereco";

export class Evento {
  key: string;
  nome: string;
  data: string;
  horarioInicio: string;
  horarioFim: string;
  origem: string;
  local: Endereco;
  observacoes: string;
  responsavel: string;
}
