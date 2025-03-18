import { Component, input } from '@angular/core';

import { INavigationItems } from '../../../interfaces/navigation.interface';

@Component({
  selector: 'app-image-navigation',
  standalone: true,
  imports: [],
  templateUrl: './image-navigation.component.html',
  styleUrl: './image-navigation.component.scss',
})
export class ImageNavigationComponent {
  items = input.required<INavigationItems[]>();
}
