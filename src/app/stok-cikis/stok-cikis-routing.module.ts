import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StokCikisPage } from './stok-cikis.page';

const routes: Routes = [
  {
    path: '',
    component: StokCikisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StokCikisPageRoutingModule {}
