import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionsLandingComponent } from './collections-landing.component';

describe('CollectionsLandingComponent', () => {
  let component: CollectionsLandingComponent;
  let fixture: ComponentFixture<CollectionsLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CollectionsLandingComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CollectionsLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
