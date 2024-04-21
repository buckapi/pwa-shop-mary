import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailENComponent } from './detail-en.component';

describe('DetailENComponent', () => {
  let component: DetailENComponent;
  let fixture: ComponentFixture<DetailENComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailENComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetailENComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
