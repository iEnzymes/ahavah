import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

import { IconsModule } from '../../../core/icons/icons.module';
import { CardComponent } from '../../../shared/components/card/card.component';
import { CarouselBannerComponent } from '../../../shared/components/carousels/carousel-banner/carousel-banner.component';
import { CarouselCategoryComponent } from '../../../shared/components/carousels/carousel-category/carousel-category.component';
import { ImageNavigationComponent } from '../../../shared/components/images/image-navigation/image-navigation.component';
import { ProductCatalogComponent } from '../../../shared/components/product-catalog/product-catalog.component';
import { IImageList } from '../../../shared/interfaces/carousel.inferface';
import { mockProducts } from '../../../shared/mocks/product.mocks';
import { navItems } from '../../../shared/utils/navigation-items';

@Component({
  selector: 'app-home-landing',
  standalone: true,
  imports: [
    MatIconModule,
    CommonModule,
    MatButtonModule,
    IconsModule,
    ImageNavigationComponent,
    ProductCatalogComponent,
    MatCardModule,
    CardComponent,
    CarouselBannerComponent,
    CarouselCategoryComponent,
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

  mobileSlides: IImageList[] = [
    {
      image: '../../../../../../assets/images/carousel/mobile/m-banner1.jpg',
      title: 'Nature',
    },
    {
      image: '../../../../../../assets/images/carousel/mobile/m-banner2.jpg',
      title: 'Nature',
    },
    {
      image: '../../../../../../assets/images/carousel/mobile/m-banner3.jpg',
      title: 'Nature',
    },
    {
      image: '../../../../../../assets/images/carousel/mobile/m-banner4.png',
      title: 'Nature',
    },
    {
      image: '../../../../../../assets/images/carousel/mobile/m-banner5.png',
      title: 'Nature',
    },
    {
      image: '../../../../../../assets/images/carousel/mobile/m-banner1.jpg',
      title: 'Nature',
    },
  ];

  //TODO: API integration for product
  products = mockProducts;

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
