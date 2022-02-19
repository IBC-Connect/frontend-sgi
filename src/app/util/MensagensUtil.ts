import { ToastController } from "@ionic/angular";

export class MensagensUtil {

    constructor(private aviso: ToastController) { };

    public async mensagemSucesso(message: string) {
        const exibirMensagem = this.aviso.create({id:'sucesso', position: 'top', message: message, duration: 3000, color: 'success' });
        (await exibirMensagem).present();
    }

    public async mensagemError(error: string) {
        const exibirMensagem = this.aviso.create({ id:'error', position: 'top', message: error, duration: 3000, color: 'danger' });
        (await exibirMensagem).present();
    }

    public async mensagemAlerta(message: string) {
        const exibirMensagem = this.aviso.create({ id:'alerta', position: 'top', message: message, duration: 3000, color: 'warning' });
        (await exibirMensagem).present();
    }
}