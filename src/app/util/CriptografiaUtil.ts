import * as CryptoJS from 'crypto-js';

export class CriptografiaUtil {
  public static secretKey = "banana";

  constructor() {}

  public static criptografarDados(dados) {
    return CryptoJS.AES.encrypt(dados, CriptografiaUtil.secretKey).toString();
  }

  public static descriptografiaDados(dadosEncriptados) {
    let bytes = CryptoJS.AES.decrypt(
      dadosEncriptados,
      CriptografiaUtil.secretKey
    );
    let originalText = bytes.toString(CryptoJS.enc.Utf8);
    return originalText;
  }

  public static criptografarDadosComObjeto(dados) {
    return CryptoJS.AES.encrypt(
      JSON.stringify(dados),
      CriptografiaUtil.secretKey
    ).toString();
  }

  public static descriptografiaDadosComObjeto(dadosEncriptados) {
    let bytes = CryptoJS.AES.decrypt(
      dadosEncriptados,
      CriptografiaUtil.secretKey
    );
    let decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    return decryptedData;
  }
}
