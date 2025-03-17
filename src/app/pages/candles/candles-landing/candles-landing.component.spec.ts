import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandlesLandingComponent } from './candles-landing.component';

describe('CandlesLandingComponent', () => {
  let component: CandlesLandingComponent;
  let fixture: ComponentFixture<CandlesLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CandlesLandingComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CandlesLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
