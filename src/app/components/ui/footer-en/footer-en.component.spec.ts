import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterENComponent } from './footer-en.component';

describe('FooterENComponent', () => {
  let component: FooterENComponent;
  let fixture: ComponentFixture<FooterENComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterENComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FooterENComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
