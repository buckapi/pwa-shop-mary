import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderENComponent } from './header-en.component';

describe('HeaderENComponent', () => {
  let component: HeaderENComponent;
  let fixture: ComponentFixture<HeaderENComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderENComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeaderENComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
