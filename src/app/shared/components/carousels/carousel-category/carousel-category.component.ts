import { Component, input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';

import { IImageList } from '../../../interfaces/carousel.inferface';
import { ImagesCategoryComponent } from '../../images/images-category/images-category.component';

@Component({
  selector: 'app-carousel-category',
  standalone: true,
  imports: [MatCardModule, MatIcon, ImagesCategoryComponent],
  templateUrl: './carousel-category.component.html',
  styleUrl: './carousel-category.component.scss',
})
export class CarouselCategoryComponent {
  slides = input.required<IImageList[]>();

  currentIndex = 0;

  prevSlide() {
    this.currentIndex =
      this.currentIndex > 0 ? this.currentIndex - 1 : this.slides().length - 1;
  }

  nextSlide() {
    this.currentIndex =
      this.currentIndex < this.slides().length - 1 ? this.currentIndex + 1 : 0;
  }

  getTransformStyle(): string {
    const width = window.innerWidth;

    if (width >= 1024) {
      return `translateX(-${this.currentIndex * 34.2}%)`;
    } else if (width >= 768) {
      return `translateX(-${this.currentIndex * 54}%)`;
    } else {
      return `translateX(-${this.currentIndex * 90}%)`;
    }
  }

  getIndexLimiter(): number {
    const width = window.innerWidth;

    if (width >= 1024) {
      return 3;
    } else if (width >= 768) {
      return 2;
    } else {
      return 1;
    }
  }
}
