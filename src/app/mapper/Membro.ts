import { Endereco } from "../modelo/Endereco";
import { Membro } from "../modelo/Membro";

export class MembroMapper {
  public static formularioToMembro(form: any): Membro {
    let membro = new Membro();

    console.log(form)

    membro.nomeCompleto = form.nomeCompleto.toUpperCase();
    membro.dataNascimento = form.dataNascimento;
    membro.email = form.email ? form.email.toLowerCase() : "";
    membro.escolaridade = Number(form.escolaridade);
    membro.estadoCivil = Number(form.estadoCivil);
    membro.perfil = form.perfil;
    membro.dataBatismo = form.dataBatismo ? form.dataBatismo : "";
    membro.membroDesde = form.membroDesde ? form.membroDesde : "";
    membro.profissao = form.profissao.toUpperCase();
    membro.situacao = "Ativo";
    membro.classificacao = form.classificacao;
    membro.whatsapp = form.whatsapp;
    membro.telefone = form.telefone;
    membro.trabalhandoAtualmente = form.trabalhandoAtualmente;
    membro.cpf = form.cpf;
    membro.rg = form.rg;
    membro.membroTransformar = form.membroTransformar;

    membro.senha = MembroMapper.isNullOrEmpty(form.senha) ? "12345678" : form.senha;

    membro.endereco = new Endereco();
    membro.endereco.cep = form.cep;
    membro.endereco.logradouro = form.logradouro.toUpperCase();
    membro.endereco.bairro = form.bairro.toUpperCase();
    membro.endereco.cidade = form.cidade.toUpperCase();
    membro.endereco.numero = form.numero;
    membro.endereco.complemento = form.complemento
      ? form.complemento.toUpperCase()
      : "";
    membro.endereco.estado = form.estado.toUpperCase();

    if (form.key) membro.key = form.key;

    return membro;
  }

  public static isNullOrEmpty(str: string | null | undefined): boolean {
    return !str || str.trim().length === 0;
  }
  
}
