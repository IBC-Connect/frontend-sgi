import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NovidadeModalPage } from '../../componentes/novidade-modal/novidade-modal.page';
import { NovidadeService } from 'src/app/servicos/Novidade';

@Component({
  selector: 'app-novidade',
  templateUrl: './novidade.page.html',
  styleUrls: ['./novidade.page.scss'],
})
export class NovidadePage implements OnInit {
  novidades: any[] = [{"titulo": "Novidade 1", "descricao": "Descrição da novidade 1", "imagemUrl": "https://cdn.leroymerlin.com.br/products/carrinho_de_mao_50l_ate_100kg_azulao_aco_tramontina_89266065_0001_600x600.jpg", "dataCriacao": "2021-01-01"}, 
    {"titulo": "Novidade 2", "descricao": "Descrição da novidade 2"}];
  isModalOpen = false;
  novidadeSelecionada: any;

  constructor(private modalController : ModalController,
    private novidadeService: NovidadeService
  ) { }

  ngOnInit() {
    this.novidadeService.listar().subscribe((data) => {
      this.novidades = data.sort((a, b) => new Date(b.dataCriacao).getTime() - new Date(a.dataCriacao).getTime());
    });
  }

  async abrirModal(novidade: any) {
    const modal = await this.modalController.create({
      component: NovidadeModalPage,
      componentProps: { novidade }
    });
    return await modal.present();
  }
}
