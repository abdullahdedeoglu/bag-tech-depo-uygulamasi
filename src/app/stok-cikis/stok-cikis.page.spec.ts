import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StokCikisPage } from './stok-cikis.page';

describe('StokCikisPage', () => {
  let component: StokCikisPage;
  let fixture: ComponentFixture<StokCikisPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(StokCikisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
