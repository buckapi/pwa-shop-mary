import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeENComponent } from './home-en.component';

describe('HomeENComponent', () => {
  let component: HomeENComponent;
  let fixture: ComponentFixture<HomeENComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeENComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeENComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
