import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular'; // <--- Tasarım elementleri için şart
import { StokCikisPageRoutingModule } from './stok-cikis-routing.module';
import { StokCikisPage } from './stok-cikis.page';

@NgModule({
  imports: [
    CommonModule, // *ngFor ve *ngIf için şart
    FormsModule,  // [(ngModel)] için şart
    IonicModule,  // ion- etiketleri için şart
    StokCikisPageRoutingModule
  ],
  declarations: [StokCikisPage] // Sayfayı sahipleniyoruz
})
export class StokCikisPageModule {}