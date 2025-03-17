import { NgClass } from '@angular/common';
import { Component, HostListener, input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';

import { IImageList } from './carousel.inferface';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [MatCardModule, MatIcon, NgClass],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss',
})
export class CarouselComponent {
  slides = input.required<IImageList[]>();
  mobileSlides = input<IImageList[]>();

  fullWidth = input<boolean>(true);

  imageList: IImageList[] | undefined = [];
  currentIndex = 0;

  ngOnInit(): void {
    this.checkScreenSize();
  }

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

  @HostListener('window:resize', ['$event'])
  checkScreenSize() {
    if (this.mobileSlides() && window.innerWidth < 768) {
      this.imageList = this.mobileSlides();
    } else {
      this.imageList = this.slides();
    }
  }
}
