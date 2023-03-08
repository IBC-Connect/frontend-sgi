import { CookieService } from "ngx-cookie-service";
import { Membro } from "../modelo/Membro";
import { Usuario } from "./../modelo/Usuario";
import { CriptografiaUtil } from "./CriptografiaUtil";

export class DadosUsuarioUtil {

  static cookieService : CookieService;

  constructor() {}

  public static salvarDadosLocalmente(membro: Membro, cookieService : CookieService): void {
    let membroData = {
      email: membro.email,
      nome: membro.nomeCompleto,
      perfil: membro.perfil,
      uId: membro.key,
    };

    let membroCriptografado =
      CriptografiaUtil.criptografarDadosComObjeto(membroData);
    cookieService.set("usuario", membroCriptografado);
  }

  public static dadosUsuarioLogado(): Usuario {
    let usuario: any = this.cookieService.get("usuario");

    return usuario
      ? CriptografiaUtil.descriptografiaDadosComObjeto(usuario)
      : new Usuario();
  }
}
