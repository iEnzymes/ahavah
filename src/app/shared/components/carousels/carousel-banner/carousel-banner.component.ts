import { Component, HostListener, input, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';

import { IImageList } from '../../../interfaces/carousel.inferface';
@Component({
  selector: 'app-carousel-banner',
  standalone: true,
  imports: [MatCardModule, MatIcon],
  templateUrl: './carousel-banner.component.html',
  styleUrl: './carousel-banner.component.scss',
})
export class CarouselBannerComponent implements OnInit {
  slides = input.required<IImageList[]>();
  mobileSlides = input<IImageList[]>();

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

  @HostListener('window:resize', ['$event'])
  checkScreenSize() {
    if (this.mobileSlides() && window.innerWidth < 768) {
      this.imageList = this.mobileSlides();
    } else {
      this.imageList = this.slides();
    }
  }
}
