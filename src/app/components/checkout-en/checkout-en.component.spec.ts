import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutENComponent } from './checkout-en.component';

describe('CheckoutENComponent', () => {
  let component: CheckoutENComponent;
  let fixture: ComponentFixture<CheckoutENComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CheckoutENComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CheckoutENComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
