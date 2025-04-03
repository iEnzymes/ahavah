import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionsCandleComponent } from './collections-candle.component';

describe('CollectionsCandleComponent', () => {
  let component: CollectionsCandleComponent;
  let fixture: ComponentFixture<CollectionsCandleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CollectionsCandleComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CollectionsCandleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
