# BAG Tech - Depo Çıkış Kontrol Mobil Uygulaması

BAG Tech işe alım görevi kapsamında geliştirilmiş Angular/Ionic tabanlı mobil depo yönetim uygulaması.

## 📋 Proje Hakkında

Bu uygulama, depo görevlilerinin günlük stok çıkış operasyonlarını mobil ortamda gerçekleştirmesini sağlar. Kullanıcı yetkilendirme, veri doğrulama ve kullanıcı dostu arayüz özellikleri içerir.

## ✨ Özellikler

- 🔐 Kullanıcı giriş sistemi (yetkilendirme simülasyonu)
- 📦 Stok çıkış formu (Ürün kodu, miktar, birim, lokasyon)
- ✅ Form doğrulama (sadece pozitif sayılar)
- 📱 Mobil uyumlu responsive tasarım
- 🔔 Kullanıcı bildirimleri (toast mesajları)
- 🎨 Modern ve temiz UI/UX

## 🛠️ Kullanılan Teknolojiler

- **Angular** (v17.x)
- **Ionic Framework** (v7.x)
- **TypeScript**
- **SCSS**

## 🚀 Kurulum ve Çalıştırma

### Gereksinimler

- Node.js (v18 veya üzeri)
- npm veya yarn
- Ionic CLI

### Kurulum Adımları

1. Projeyi klonlayın:
```bash
git clone https://github.com/abdullahdedeoglu/bag-tech-depo-uygulamasi.git
cd bag-tech-depo-uygulamasi
```

2. Bağımlılıkları yükleyin:
```bash
npm install
```

3. Uygulamayı başlatın:
```bash
ionic serve
```

4. Tarayıcınızda otomatik olarak açılacaktır: `http://localhost:8100`

## 👤 Test Kullanıcıları

Uygulamaya giriş yapmak için aşağıdaki test kullanıcılarını kullanabilirsiniz:

| Kullanıcı Adı | Şifre | Rol |
|---------------|-------|-----|
| admin | 12345 | Yönetici |
| user | 54321 | Operatör |

## 📱 Uygulama Sayfaları

### 1. Giriş Sayfası (Login)
- Kullanıcı adı ve şifre ile giriş
- Hatalı giriş kontrolü
- Otomatik yönlendirme

### 2. Stok Çıkış Kontrol Sayfası
- Ürün kodu girişi
- Miktar girişi (sadece pozitif sayılar)
- Birim seçimi (KG/ADET)
- Çıkış lokasyonu seçimi (Mağaza, Sevkiyat, Üretim)
- Form temizleme
- Çıkış yapma

## 📂 Proje Yapısı
src/
├── app/
│   ├── pages/
│   │   ├── login/              # Giriş sayfası
│   │   └── stok-cikis/         # Ana kontrol sayfası
│   ├── services/
│   │   └── auth.service.ts     # Yetkilendirme servisi
│   ├── app-routing.module.ts   # Routing yapılandırması
│   └── app.module.ts           # Ana modül
├── assets/                     # Statik dosyalar
└── theme/                      # Tema ve stil dosyaları

## ✅ Görev Gereksinimleri

- [x] Angular ve Ionic Framework kullanımı
- [x] Giriş sayfası (kullanıcı adı ve şifre)
- [x] Statik kullanıcı listesi ile yetkilendirme
- [x] Stok çıkış formu (ürün kodu, miktar, birim, lokasyon)
- [x] Form doğrulama (pozitif sayı kontrolü)
- [x] Başarı bildirimi (toast)
- [x] Konsola veri yazdırma
- [x] Temiz kod ve TypeScript kullanımı
- [x] Mobil uyumlu tasarım

## 🧪 Nasıl Test Edilir?

1. Uygulamayı başlatın (`ionic serve`)
2. Giriş sayfasında test kullanıcılarından biriyle giriş yapın
3. Stok çıkış formunu doldurun
4. "İşlemi Kaydet" butonuna tıklayın
5. Tarayıcı konsolunu açın (F12) ve kaydedilen veriyi görün
6. Başarı bildiriminin göründüğünü kontrol edin

## 📸 Ekran Görüntüleri

### Giriş Sayfası
<img width="1862" height="885" alt="image" src="https://github.com/user-attachments/assets/02cc8d65-4f80-4579-bd3f-894e78b0f182" />


### Stok Çıkış Sayfası
<img width="1861" height="882" alt="image" src="https://github.com/user-attachments/assets/4f151cf9-4b4e-458c-9bc2-9546e09d5c54" />


## 👨‍💻 Geliştirici

Abdullah Dedeoğlu

## 📄 Lisans

Bu proje BAG Tech işe alım görevi kapsamında geliştirilmiştir.

## 📞 İletişim

Sorularınız için: abdullahdedeoglu919@gmail.com

---

**Not:** Bu proje eğitim ve değerlendirme amaçlıdır. Gerçek bir üretim ortamında kullanılmadan önce güvenlik ve performans iyileştirmeleri yapılmalıdır.
