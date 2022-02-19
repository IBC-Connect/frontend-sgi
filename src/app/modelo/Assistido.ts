import { Endereco } from "./Endereco";

export class Assistido {
    key : string;
    cpf:string;
    nomeCompleto : string;
    dataNascimento : string;
    email : string;
    estadoCivil : number;
    escolaridade : number;
    profissao : string;
    trabalhandoAtualmente : boolean;
    telefone : string;
    whatsapp : string;
    endereco : Endereco;
    situacao : string; /*Ativo ou Inativo */
    observacoes;
}