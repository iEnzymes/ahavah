import { NgClass } from '@angular/common';
import { Component, input } from '@angular/core';
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
  fullWidth = input<boolean>(true);

  currentIndex = 0;
  slides = input.required<IImageList[]>();

  prevSlide() {
    this.currentIndex =
      this.currentIndex > 0 ? this.currentIndex - 1 : this.slides().length - 1;
  }

  nextSlide() {
    this.currentIndex =
      this.currentIndex < this.slides().length - 1 ? this.currentIndex + 1 : 0;
  }
}
