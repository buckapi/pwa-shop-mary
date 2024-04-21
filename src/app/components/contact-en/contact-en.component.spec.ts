import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactENComponent } from './contact-en.component';

describe('ContactENComponent', () => {
  let component: ContactENComponent;
  let fixture: ComponentFixture<ContactENComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactENComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContactENComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
