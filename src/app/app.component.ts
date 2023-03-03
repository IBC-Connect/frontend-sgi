import { AlertController } from "@ionic/angular";
import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription, fromEvent } from "rxjs";
import { debounceTime } from "rxjs/operators";
import { AutenticacaoService } from "./servicos/Autenticacao";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.scss"],
})
export class AppComponent implements OnInit, OnDestroy {
  private sessionTimeout = 15 * 60 * 1000; // 15 minutos em milissegundos
  private timeoutId: ReturnType<typeof setTimeout>;
  private subscriptions: Subscription[] = [];

  constructor(
    private authService: AutenticacaoService,
    private alertController: AlertController
  ) {}

  ngOnInit(): void {
    this.subscriptions.push(
      fromEvent(window, "mousemove")
        .pipe(debounceTime(1000))
        .subscribe(() => this.resetTimer()),
      fromEvent(window, "mousedown")
        .pipe(debounceTime(1000))
        .subscribe(() => this.resetTimer()),
      fromEvent(window, "keypress")
        .pipe(debounceTime(1000))
        .subscribe(() => this.resetTimer()),
      fromEvent(window, "touchmove")
        .pipe(debounceTime(1000))
        .subscribe(() => this.resetTimer()),
      fromEvent(window, "scroll")
        .pipe(debounceTime(1000))
        .subscribe(() => this.resetTimer())
    );
    this.resetTimer();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
    clearTimeout(this.timeoutId);
  }

  private resetTimer(): void {
    clearTimeout(this.timeoutId);
    this.timeoutId = setTimeout(() => this.deslogar(), this.sessionTimeout);
  }

  deslogar(): void {
    this.authService.afAuth.authState.subscribe((user) => {
      if (user) {
        this.mensagemAlertaPrecisaFazerLogin();
      }
    });
  }

  private async mensagemAlertaPrecisaFazerLogin() {
    const alert = await this.alertController.create({
      header: "Aviso",
      message:
        "Você passou muito tempo sem acessar o site, você precisa fazer o login novamente.",
      backdropDismiss: false,
      buttons: [
        {
          text: "Ok",
          handler: () => {
            this.authService.afAuth.signOut();
          },
        },
      ],
    });
    await alert.present();
  }
}
