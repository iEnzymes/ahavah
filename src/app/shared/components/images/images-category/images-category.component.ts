import { Component, input } from '@angular/core';
import { IImageList } from '../../../interfaces/carousel.inferface';

@Component({
  selector: 'app-images-category',
  standalone: true,
  imports: [],
  templateUrl: './images-category.component.html',
  styleUrl: './images-category.component.scss',
})
export class ImagesCategoryComponent {
  item = input.required<IImageList>();
}
