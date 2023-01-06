import { NavController } from "@ionic/angular";

export class RedirecionadorUtil {
  constructor(private navCtrl: NavController) {}

  public redicionarPara(nomePagina: string) {
    this.navCtrl.navigateForward(nomePagina);
  }
}
