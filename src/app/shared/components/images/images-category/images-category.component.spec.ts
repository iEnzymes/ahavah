import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagesCategoryComponent } from './images-category.component';

describe('ImagesCategoryComponent', () => {
  let component: ImagesCategoryComponent;
  let fixture: ComponentFixture<ImagesCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImagesCategoryComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ImagesCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
