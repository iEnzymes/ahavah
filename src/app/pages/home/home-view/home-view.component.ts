import { Component } from '@angular/core';

import { CarouselVerticalComponent } from '../../../shared/components/carousels/carousel-vertical/carousel-vertical.component';

@Component({
  selector: 'app-home-view',
  standalone: true,
  imports: [CarouselVerticalComponent],
  templateUrl: './home-view.component.html',
  styleUrl: './home-view.component.scss',
})
export class HomeViewComponent {}
