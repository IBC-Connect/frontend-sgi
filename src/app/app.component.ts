import { Component } from "@angular/core";
import { AutenticacaoService } from "./servicos/Autenticacao";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.scss"],
})
export class AppComponent {
  constructor(private authService: AutenticacaoService) {}

  ngOnInit(): void {
    // Desloga o usuário após 15 minutos de inatividade
    const sessionTimeout = 15 * 60 * 1000; // 15 minutos em milissegundos
    let timeoutId: NodeJS.Timeout;

    const resetTimer = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(
        () => this.authService.afAuth.signOut(),
        sessionTimeout
      );
    };

    // Reseta o timer em eventos de mouse e teclado
    window.addEventListener("mousemove", resetTimer);
    window.addEventListener("mousedown", resetTimer);
    window.addEventListener("keypress", resetTimer);
    window.addEventListener("touchmove", resetTimer);
    window.addEventListener("scroll", resetTimer);
  }
}
