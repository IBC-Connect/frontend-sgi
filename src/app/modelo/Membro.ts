import { Endereco } from "./Endereco";

export class Membro {
    key : string;
    uId: string;
    cpf:string;
    nomeCompleto : string;
    dataNascimento : string;
    email : string;
    estadoCivil : number;
    escolaridade : number;
    profissao : string;
    trabalhandoAtualmente : boolean;
    classificacao : string;
    telefone : string;
    whatsapp : string;
    endereco : Endereco;
    dataBatismo : string;
    membroDesde: string;
    situacao : string; /*Ativo ou Inativo */
    perfil : string;   /*ADMIN, SEC, FIN, MEM*/
    senha : string;

}