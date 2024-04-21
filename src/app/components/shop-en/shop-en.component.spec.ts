import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopENComponent } from './shop-en.component';

describe('ShopENComponent', () => {
  let component: ShopENComponent;
  let fixture: ComponentFixture<ShopENComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShopENComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShopENComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
