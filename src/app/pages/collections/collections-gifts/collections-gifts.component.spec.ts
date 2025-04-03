import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionsGiftsComponent } from './collections-gifts.component';

describe('CollectionsGiftsComponent', () => {
  let component: CollectionsGiftsComponent;
  let fixture: ComponentFixture<CollectionsGiftsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CollectionsGiftsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CollectionsGiftsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
