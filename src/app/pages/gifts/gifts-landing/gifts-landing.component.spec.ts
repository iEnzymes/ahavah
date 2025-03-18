import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiftsLandingComponent } from './gifts-landing.component';

describe('GiftsLandingComponent', () => {
  let component: GiftsLandingComponent;
  let fixture: ComponentFixture<GiftsLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GiftsLandingComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GiftsLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
