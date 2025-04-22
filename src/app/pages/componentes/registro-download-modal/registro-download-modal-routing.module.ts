import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistroDownloadModalPage } from './registro-download-modal.page';

const routes: Routes = [
  {
    path: '',
    component: RegistroDownloadModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistroDownloadModalPageRoutingModule {}
