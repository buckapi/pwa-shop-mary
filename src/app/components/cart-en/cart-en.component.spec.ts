import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartENComponent } from './cart-en.component';

describe('CartENComponent', () => {
  let component: CartENComponent;
  let fixture: ComponentFixture<CartENComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartENComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CartENComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
