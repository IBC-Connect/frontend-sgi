import { Usuario } from "./../modelo/Usuario";
export class DadosUsuarioUtil {
  constructor() {}

  public static dadosUsuarioLogado(): Usuario {
    return JSON.parse(localStorage.getItem("usuario"));
  }
}
