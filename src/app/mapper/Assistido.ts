import { Assistido } from '../modelo/Assistido';
import { Endereco } from '../modelo/Endereco';


export class AssistidoMapper {
  
    public static formularioToAssistido(form: any): Assistido {
      
    let assistido = new Assistido();
    assistido.nomeCompleto = form.nomeCompleto.toUpperCase();
    assistido.dataNascimento = form.dataNascimento;
    assistido.email = form.email ? form.email.toLowerCase()() : '';
    assistido.escolaridade = Number(form.escolaridade);
    assistido.estadoCivil = Number(form.estadoCivil);
    assistido.profissao = form.profissao.toUpperCase();
    assistido.situacao = 'Ativo';
    assistido.whatsapp = form.whatsapp;
    assistido.observacoes = form.observacoes;
    assistido.telefone = form.telefone;
    assistido.trabalhandoAtualmente = form.trabalhandoAtualmente;

    assistido.endereco = new Endereco();
    assistido.endereco.cep = form.cep;
    assistido.endereco.logradouro = form.logradouro.toUpperCase();
    assistido.endereco.bairro = form.bairro.toUpperCase();
    assistido.endereco.cidade = form.cidade.toUpperCase();
    assistido.endereco.numero = form.numero;
    assistido.endereco.complemento = form.complemento
      ? form.complemento.toUpperCase()
      : '';
      assistido.endereco.estado = form.estado.toUpperCase();

    if (form.key) assistido.key = form.key;

    return assistido;
  }
}
