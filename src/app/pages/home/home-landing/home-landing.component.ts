import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

import { IconsModule } from '../../../core/icons/icons.module';
import { CardComponent } from '../../../shared/components/card/card.component';
import { CarouselComponent } from '../../../shared/components/carousel/carousel.component';
import { IImageList } from '../../../shared/components/carousel/carousel.inferface';
import { ImageNavigationComponent } from '../../../shared/components/image-navigation/image-navigation.component';
import { ProductCatalogComponent } from '../../../shared/components/product-catalog/product-catalog.component';
import { IProductCatalog } from '../../../shared/interface/product-catalog.interface';
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
    ProductCatalogComponent,
    MatCardModule,
    CardComponent,
  ],
  templateUrl: './home-landing.component.html',
  styleUrl: './home-landing.component.scss',
})
export class HomeLandingComponent {
  items = navItems;

  slides: IImageList[] = [
    {
      image: '../../../../../../assets/images/carousel/img2.jpg',
      title: 'Nature',
    },
    {
      image: '../../../../../../assets/images/carousel/img3.jpg',
      title: 'Nature',
    },
    {
      image: '../../../../../../assets/images/carousel/img4.jpg',
      title: 'Nature',
    },
    {
      image: '../../../../../../assets/images/carousel/img5.png',
      title: 'Nature',
    },
    {
      image: '../../../../../../assets/images/carousel/img6.png',
      title: 'Nature',
    },
    {
      image: '../../../../../../assets/images/carousel/img7.png',
      title: 'Nature',
    },
  ];

  //TODO: API integration for product
  products: IProductCatalog[] = [
    {
      image: '../../../../../../assets/images/product-catalog/product-1-1.jpg',
      imageHover:
        '../../../../../../assets/images/product-catalog/product-1-2.jpg',
      price: '2000',
      currency: 'PHP',
      name: 'Cold Brew',
      description: 'Scented candle',
    },
    {
      image: '../../../../../../assets/images/product-catalog/product-4-1.jpg',
      imageHover:
        '../../../../../../assets/images/product-catalog/product-4-2.jpg',
      price: '2000',
      currency: 'PHP',
      name: 'Iced Espresso',
      description: 'Scented candle',
    },
    {
      image: '../../../../../../assets/images/product-catalog/product-3-1.jpg',
      imageHover:
        '../../../../../../assets/images/product-catalog/product-3-2.jpg',
      price: '2500',
      currency: 'PHP',
      name: 'Iced Ube Latte',
      description: 'Scented candle',
    },
    {
      image: '../../../../../../assets/images/product-catalog/product-2-1.jpg',
      imageHover:
        '../../../../../../assets/images/product-catalog/product-2-2.jpg',
      price: '2500',
      currency: 'PHP',
      name: 'Berry Licious',
      description: 'Scented candle',
    },
    {
      image: '../../../../../../assets/images/product-catalog/product-5-1.jpg',
      imageHover:
        '../../../../../../assets/images/product-catalog/product-5-2.jpg',
      price: '2000',
      currency: 'PHP',
      name: 'Violet Velvet Drip',
      description: 'Scented candle',
    },
  ];

  // carousel 2

  categorySlides: IImageList[] = [
    {
      image: '../../../../../../assets/images/category/category2.jpg',
      title: 'Nature',
      url: '/test',
    },
    {
      image: '../../../../../../assets/images/category/category1.jpg',
      title: 'Nature',
      url: '/test',
    },
    {
      image: '../../../../../../assets/images/category/category3.jpg',
      title: 'Nature',
      url: '/test',
    },
    {
      image: '../../../../../../assets/images/category/category4.jpg',
      title: 'Nature',
      url: '/test',
    },
    {
      image: '../../../../../../assets/images/category/category4.jpg',
      title: 'Nature',
      url: '/test',
    },
    {
      image: '../../../../../../assets/images/category/category4.jpg',
      title: 'Nature',
      url: '/test',
    },
  ];
}
