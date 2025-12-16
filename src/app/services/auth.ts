import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

// Kullanıcı tipi tanımlama
interface User {
  username: string;
  password: string;
  role: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  // Statik kullanıcı listesi (görevde istenen)
  private users: User[] = [
    { username: 'admin', password: '12345', role: 'Yönetici' },
    { username: 'user', password: '54321', role: 'Operatör' }
  ];

  // Şu anki kullanıcı
  private currentUser: User | null = null;

  constructor(private router: Router) { }

  // Giriş kontrolü
  login(username: string, password: string): boolean {
    const user = this.users.find(
      u => u.username === username && u.password === password
    );

    if (user) {
      this.currentUser = user;
      localStorage.setItem('currentUser', JSON.stringify(user));
      return true;
    }
    return false;
  }

  // Çıkış
  logout() {
    this.currentUser = null;
    localStorage.removeItem('currentUser');
    this.router.navigate(['/login']);
  }

  // Giriş yapılmış mı kontrol
  isLoggedIn(): boolean {
    if (this.currentUser) {
      return true;
    }
    
    // LocalStorage'dan kontrol et
    const stored = localStorage.getItem('currentUser');
    if (stored) {
      this.currentUser = JSON.parse(stored);
      return true;
    }
    
    return false;
  }

  // Aktif kullanıcı bilgisi
  getCurrentUser(): User | null {
    return this.currentUser;
  }
}