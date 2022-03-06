import { Injectable } from '@angular/core';
import { CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AutenticacaoService } from '../servicos/Autenticacao';


@Injectable({
  providedIn: 'root'
})

export class AutenticacaoGuard implements CanActivateChild {

  constructor(private autenticaService: AutenticacaoService, private router: Router) { }

  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.autenticaService.pegarDadosLocalmente()) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
