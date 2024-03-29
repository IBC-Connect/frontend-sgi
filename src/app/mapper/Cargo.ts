import * as moment from 'moment';
import { Cargo } from '../modelo/Cargo';

export class CargoMapper {
  public static formularioToCargo(form: any): Cargo {

    let cargo = new Cargo();
    cargo.dataInicioResponsavel = moment(form.dataInicio).format("DD-MM-YYYY");
    cargo.dataFimResponsavel = moment(form.Final).format("DD-MM-YYYY");
    cargo.nome = form.nome.toString().toUpperCase();
    cargo.descricao = form.descricao.toString().toUpperCase();
    cargo.key = form.key;
    if (form.responsavel) cargo.responsavel = form.responsavel;
    if (form.dataInicio) cargo.dataInicioResponsavel = form.dataInicio;
    if (form.dataFim) cargo.dataFimResponsavel = form.dataFim;

    return cargo;
  }
}
