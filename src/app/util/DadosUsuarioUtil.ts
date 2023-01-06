import { Usuario } from './../modelo/Usuario';
import { CriptografiaUtil } from './CriptografiaUtil';

export class DadosUsuarioUtil {
  constructor() {}

  public static dadosUsuarioLogado(): Usuario {
    let usuario : any = localStorage.getItem("usuario");

    if (usuario != null) {
      usuario = CriptografiaUtil.descriptografiaDadosComObjeto(usuario);
    } else {
      usuario = new Usuario();
    }

    return usuario;
  }
}
