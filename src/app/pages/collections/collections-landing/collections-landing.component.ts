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
      title: 'Natures Venture',
      url: 'natures-venture',
    },
    {
      image: '../../../../../../assets/images/collections/collection2.jpg',
      title: 'Sweet and Spice',
      url: 'sweet-and-spice',
    },
    {
      image: '../../../../../../assets/images/collections/collection3.jpg',
      title: 'Fresh and Drip',
      url: 'fresh-and-drip',
    },
    {
      image: '../../../../../../assets/images/collections/collection4.jpg',
      title: 'Blush Collections',
      url: 'blush-collections',
    },
    {
      image: '../../../../../../assets/images/collections/collection5.jpg',
      title: 'Nature',
      url: 'view',
    },
    {
      image: '../../../../../../assets/images/collections/collection6.jpg',
      title: 'Nature',
      url: 'view',
    },
    {
      image: '../../../../../../assets/images/collections/collection7.jpg',
      title: 'Nature',
      url: 'view',
    },
    {
      image: '../../../../../../assets/images/collections/collection1.jpg',
      title: 'Nature',
      url: 'view',
    },
  ];
}
