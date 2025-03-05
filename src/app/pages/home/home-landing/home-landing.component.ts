import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { IconsModule } from '../../../core/icons/icons.module';
import { CarouselComponent } from '../../../shared/components/carousel/carousel.component';
import { IImageSlides } from '../../../shared/components/carousel/carousel.inferface';
import { ImageNavigationComponent } from '../../../shared/components/image-navigation/image-navigation.component';
import { navItems } from '../../../shared/utils/navigation-items';

@Component({
  selector: 'app-home-landing',
  standalone: true,
  imports: [
    MatIconModule,
    CommonModule,
    MatButtonModule,
    IconsModule,
    CarouselComponent,
    CarouselComponent,
    ImageNavigationComponent,
  ],
  templateUrl: './home-landing.component.html',
  styleUrl: './home-landing.component.scss',
})
export class HomeLandingComponent {
  items = navItems;

  slides: IImageSlides[] = [
    {
      image: '../../../../../../assets/images/img2.jpg',
      title: 'Nature',
    },
    { image: '../../../../../../assets/images/img3.jpg', title: 'City' },
    {
      image: '../../../../../../assets/images/img4.jpg',
      title: 'Technology',
    },
    {
      image: '../../../../../../assets/images/img5.png',
      title: 'Technology',
    },
    {
      image: '../../../../../../assets/images/img6.png',
      title: 'Technology',
    },
    {
      image: '../../../../../../assets/images/img7.png',
      title: 'Technology',
    },
  ];
}
