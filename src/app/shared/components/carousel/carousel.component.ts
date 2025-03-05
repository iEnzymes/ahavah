import { Component, input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { IImageSlides } from './carousel.inferface';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [MatCardModule, MatIcon],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss',
})
export class CarouselComponent {
  currentIndex = 0;
  slides = input.required<IImageSlides[]>();

  prevSlide() {
    this.currentIndex =
      this.currentIndex > 0 ? this.currentIndex - 1 : this.slides().length - 1;
  }

  nextSlide() {
    this.currentIndex =
      this.currentIndex < this.slides().length - 1 ? this.currentIndex + 1 : 0;
  }
}
