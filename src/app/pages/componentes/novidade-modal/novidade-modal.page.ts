import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-novidade-modal',
  templateUrl: './novidade-modal.page.html',
  styleUrls: ['./novidade-modal.page.scss'],
})
export class NovidadeModalPage implements OnInit {

  @Input() novidade: any;

  constructor(private modalController: ModalController) {}
  
  ngOnInit(): void {
  }

  fecharModal() {
    this.modalController.dismiss();
  }

}
