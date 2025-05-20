import * as moment from "moment";
import { Endereco } from "../modelo/Endereco";
import { Evento } from "../modelo/Evento";


export class EventoMapper {

    public static formularioToEvento(form: any): Evento {
        let evento = new Evento();

        evento.key = form.key;
        evento.nome = form.nome.toString().toUpperCase();
        evento.data = moment(form.data).format("DD/MM/YYYY");
        evento.origem = form.origem.toUpperCase();
        evento.horarioInicio = form.horarioInicio;
        evento.horarioFim = form.horarioFim;
        evento.observacoes = form.observacoes ? form.observacoes.toUpperCase() : "";
        evento.responsavel = form.responsavel;

        evento.local = new Endereco();
        evento.local.cep = form.cep;
        evento.local.logradouro = form.logradouro.toUpperCase();
        evento.local.bairro = form.bairro.toUpperCase();
        evento.local.cidade = form.cidade.toUpperCase();
        evento.local.numero = form.numero;
        evento.local.complemento = form.complemento ? form.complemento.toUpperCase() : "";
        evento.local.estado = form.estado.toUpperCase();

        return evento;
    }

}