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
    let usuarioAutenticado = false;

    /*
    this.autenticaService.afAuth.onAuthStateChanged(async (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        usuarioAutenticado = true;
      } else {
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
                this.router.navigate(["/login"]);
              },
            },
          ],
        });
        await alert.present();
      }
    });
    
    return !usuarioAutenticado;
    */
    return true;
  }
}
