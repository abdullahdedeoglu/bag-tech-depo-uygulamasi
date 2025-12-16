import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth';
import { ToastController, AlertController } from '@ionic/angular';

interface StokCikis {
  urunKodu: string;
  miktar: number;
  birim: string;
  cikisLokasyonu: string;
  tarih: Date;
  kullanici: string;
}

@Component({
  selector: 'app-stok-cikis',
  templateUrl: './stok-cikis.page.html',
  styleUrls: ['./stok-cikis.page.scss'],
  standalone: false // <--- BU SATIR ÇOK ÖNEMLİ (Modüle bağlı olduğunu belirtir)
})
export class StokCikisPage implements OnInit {
  
  // Form değişkenleri
  urunKodu: string = '';
  miktar: number | null = null;
  birim: string = 'ADET'; // Varsayılan
  cikisLokasyonu: string = '';

  // Lokasyon seçenekleri
  lokasyonlar: string[] = ['Mağaza', 'Sevkiyat', 'Üretim'];

  // Kullanıcı bilgisi
  currentUsername: string = '';

  constructor(
    private authService: AuthService,
    private router: Router,
    private toastController: ToastController,
    private alertController: AlertController
  ) { }

  ngOnInit() {
    // Giriş kontrolü
    if (!this.authService.isLoggedIn()) {
      this.router.navigate(['/login']);
      return;
    }

    // Kullanıcı adını al
    const user = this.authService.getCurrentUser();
    this.currentUsername = user ? user.username : 'Bilinmeyen';
  }

  // Form doğrulama
  validateForm(): string | null {
    if (!this.urunKodu || this.urunKodu.trim() === '') {
      return 'Ürün kodu boş bırakılamaz!';
    }

    if (!this.miktar || this.miktar <= 0) {
      return 'Miktar pozitif bir sayı olmalıdır!';
    }

    if (!this.cikisLokasyonu) {
      return 'Lütfen bir çıkış lokasyonu seçin!';
    }

    return null; // Hata yok
  }

  // Kaydetme işlemi
  async onKaydet() {
    // Form doğrulama
    const error = this.validateForm();
    if (error) {
      await this.showToast(error, 'danger');
      return;
    }

    // Stok çıkış verisi oluştur
    const stokCikis: StokCikis = {
      urunKodu: this.urunKodu,
      miktar: this.miktar!,
      birim: this.birim,
      cikisLokasyonu: this.cikisLokasyonu,
      tarih: new Date(),
      kullanici: this.currentUsername
    };

    // Konsola yazdır (görevde istenen)
    console.log('=== STOK ÇIKIŞ KAYDI ===');
    console.log(stokCikis);
    console.log('========================');

    // Başarı mesajı göster
    await this.showToast('İşlem başarıyla kaydedildi!', 'success');

    // Formu temizle
    this.resetForm();
  }

  // Formu sıfırlama
  resetForm() {
    this.urunKodu = '';
    this.miktar = null;
    this.birim = 'ADET';
    this.cikisLokasyonu = '';
  }

  // Toast (Bildirim) gösterme
  async showToast(message: string, color: string = 'primary') {
    const toast = await this.toastController.create({
      message: message,
      duration: 3000,
      position: 'top',
      color: color,
      buttons: [
        {
          text: 'Kapat',
          role: 'cancel'
        }
      ]
    });
    await toast.present();
  }

  // Çıkış yapma
  async onLogout() {
    const alert = await this.alertController.create({
      header: 'Çıkış Yap',
      message: 'Çıkış yapmak istediğinize emin misiniz?',
      buttons: [
        {
          text: 'İptal',
          role: 'cancel'
        },
        {
          text: 'Çıkış Yap',
          handler: () => {
            this.authService.logout();
          }
        }
      ]
    });
    await alert.present();
  }
}