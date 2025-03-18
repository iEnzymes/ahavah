import { Component } from '@angular/core';

import { ImagesCategoryComponent } from '../../../shared/components/images/images-category/images-category.component';
import { IImageList } from '../../../shared/interfaces/carousel.inferface';

@Component({
  selector: 'app-collections-landing',
  standalone: true,
  imports: [ImagesCategoryComponent],
  templateUrl: './collections-landing.component.html',
  styleUrl: './collections-landing.component.scss',
})
export class CollectionsLandingComponent {
  collectionItems: IImageList[] = [
    {
      image: '../../../../../../assets/images/collections/collection1.jpg',
      title: 'Nature',
      url: '/test',
    },
    {
      image: '../../../../../../assets/images/collections/collection2.jpg',
      title: 'Nature',
      url: '/test',
    },
    {
      image: '../../../../../../assets/images/collections/collection3.jpg',
      title: 'Nature',
      url: '/test',
    },
    {
      image: '../../../../../../assets/images/collections/collection4.jpg',
      title: 'Nature',
      url: '/test',
    },
    {
      image: '../../../../../../assets/images/collections/collection5.jpg',
      title: 'Nature',
      url: '/test',
    },
    {
      image: '../../../../../../assets/images/collections/collection6.jpg',
      title: 'Nature',
      url: '/test',
    },
    {
      image: '../../../../../../assets/images/collections/collection7.jpg',
      title: 'Nature',
      url: '/test',
    },
    {
      image: '../../../../../../assets/images/collections/collection8.jpg',
      title: 'Nature',
      url: '/test',
    },
  ];
}
