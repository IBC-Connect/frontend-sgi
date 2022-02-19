export class ValidadorCamposObrigatorios {

  public static isCampoPreenchido(valor: string): boolean {
      return valor != null && valor.trim() != '';
  }
}
