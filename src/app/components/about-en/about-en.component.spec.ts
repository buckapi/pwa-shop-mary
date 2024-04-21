import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutENComponent } from './about-en.component';

describe('AboutENComponent', () => {
  let component: AboutENComponent;
  let fixture: ComponentFixture<AboutENComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutENComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AboutENComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
