import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  CanActivateChild,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from "@angular/router";
import { AlertController } from "@ionic/angular";
import { Observable } from "rxjs";

import { AutenticacaoService } from "../servicos/Autenticacao";

@Injectable({
  providedIn: "root",
})
export class AutenticacaoGuard implements CanActivateChild {
  constructor(
    private autenticaService: AutenticacaoService,
    private router: Router,
    private alertController: AlertController
  ) {}

  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return new Promise((resolve) => {
      const usuario = localStorage.getItem("usuario");

      if (usuario) {
        this.autenticaService.afAuth.authState.subscribe((user) => {
          if (user) {
            resolve(true);
          } else {
            resolve(false);
            this.redirecionarPara("login");
          }
        });
      } else {
        this.mensagemAlertaPrecisaFazerLogin();
        resolve(false);
      }
    });
  }

  private async mensagemAlertaInatividade() {
    const alert = await this.alertController.create({
      header: "Aviso",
      message:
        "Você passou muito tempo sem acessar o site, você precisa fazer o login novamente.",
      backdropDismiss: false,
      buttons: [
        {
          text: "Ok",
          handler: () => {
            this.alertController.dismiss();
            this.redirecionarPara("login");
          },
        },
      ],
    });
    await alert.present();
  }

  private async mensagemAlertaPrecisaFazerLogin() {
    const alert = await this.alertController.create({
      header: "Aviso",
      message: "Você precisa fazer o login para acessar a página.",
      backdropDismiss: false,
      buttons: [
        {
          text: "Ok",
          handler: () => {
            this.alertController.dismiss();
            this.redirecionarPara("login");
          },
        },
      ],
    });
    await alert.present();
  }

  private redirecionarPara(nomePagina) {
    this.router.navigate(["/" + nomePagina]);
  }
}
