import { ModalController } from "@ionic/angular";
import { Component, OnInit } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: "app-sistema-relatorio-modal",
  templateUrl: "./sistema-relatorio-modal.page.html",
  styleUrls: ["./sistema-relatorio-modal.page.scss"],
})
export class SistemaRelatorioModalPage implements OnInit {
  url = "http://vps.iconsultweb.com:9099/";

  constructor(
    private modalController: ModalController,
    public sanitizer: DomSanitizer
  ) {}

  ngOnInit() {}

  async fecharModal() {
    this.modalController.dismiss();
  }

  openRelatorio() {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
  }
}
