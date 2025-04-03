import { Component } from '@angular/core';

import { CarouselVerticalComponent } from '../../../shared/components/carousels/carousel-vertical/carousel-vertical.component';

@Component({
  selector: 'app-collections-detail',
  standalone: true,
  imports: [CarouselVerticalComponent],
  templateUrl: './collections-detail.component.html',
  styleUrl: './collections-detail.component.scss',
})
export class CollectionsDetailComponent {}
