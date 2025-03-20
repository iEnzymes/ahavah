import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselVerticalComponent } from './carousel-vertical.component';

describe('CarouselVerticalComponent', () => {
  let component: CarouselVerticalComponent;
  let fixture: ComponentFixture<CarouselVerticalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarouselVerticalComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CarouselVerticalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
