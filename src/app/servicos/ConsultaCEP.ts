import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ConsultaCEPService {
  constructor(public Http: HttpClient) {}

  public async buscaEndereco(cep) {
    return this.Http.get(`https://viacep.com.br/ws/${cep}/json/`).toPromise();
  }
}
