import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth'; // Düzeltildi: Auth -> AuthService

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthService); // Düzeltildi
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});