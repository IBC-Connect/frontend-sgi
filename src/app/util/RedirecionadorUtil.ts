import { NavController } from "@ionic/angular";

export class RedirecionadorUtil {

    constructor(private navegador : NavController){}

    public redicionarPara(nomePagina : string){
        this.navegador.navigateForward(nomePagina);
    }

}