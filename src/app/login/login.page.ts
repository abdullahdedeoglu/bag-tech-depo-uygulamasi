import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthService } from '../services/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false // <--- İŞTE ÇÖZÜMÜN ANAHTARI BURASI!
})
export class LoginPage {
  
  username: string = '';
  password: string = '';

  constructor(
    private authService: AuthService,
    private router: Router,
    private alertController: AlertController
  ) { }

  ionViewWillEnter() {
    if (this.authService.isLoggedIn()) {
      this.router.navigate(['/stok-cikis']);
    }
  }

  async onLogin() {
    if (!this.username || !this.password) {
      await this.showAlert('Hata', 'Lütfen kullanıcı adı ve şifre giriniz.');
      return;
    }

    const success = this.authService.login(this.username, this.password);

    if (success) {
      this.router.navigate(['/stok-cikis']);
    } else {
      await this.showAlert('Giriş Başarısız', 'Kullanıcı adı veya şifre hatalı!');
      this.password = '';
    }
  }

  // Alert (Uyarı) gösterme fonksiyonu
  async showAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header: header,
      message: message,
      cssClass: 'custom-alert', // <--- SİHİRLİ KOD BU!
      buttons: ['Tamam']
    });
    await alert.present();
  }
}