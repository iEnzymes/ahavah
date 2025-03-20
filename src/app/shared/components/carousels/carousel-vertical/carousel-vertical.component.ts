import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel-vertical',
  standalone: true,
  imports: [],
  templateUrl: './carousel-vertical.component.html',
  styleUrl: './carousel-vertical.component.scss',
})
export class CarouselVerticalComponent {
  images = [
    '../../../../../../assets/images/product-catalog/product-2-1.jpg',
    '../../../../../../assets/images/product-catalog/product-3-1.jpg',
    '../../../../../../assets/images/product-catalog/product-1-1.jpg',
    '../../../../../../assets/images/product-catalog/product-4-1.jpg',
  ];
  currentIndex = 0;

  selectImage(index: number) {
    this.currentIndex = index;
  }
}
