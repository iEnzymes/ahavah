import { Component } from '@angular/core';
import { MatOption } from '@angular/material/core';
import { MatFormField, MatLabel, MatSelect } from '@angular/material/select';

import { ProductCatalogComponent } from '../../../shared/components/product-catalog/product-catalog.component';
import { IProductCatalog } from '../../../shared/interface/product-catalog.interface';

@Component({
  selector: 'app-gifts-landing',
  standalone: true,
  imports: [
    ProductCatalogComponent,
    MatOption,
    MatSelect,
    MatFormField,
    MatLabel,
  ],
  templateUrl: './gifts-landing.component.html',
  styleUrl: './gifts-landing.component.scss',
})
export class GiftsLandingComponent {
  //TODO: API integration for product
  products: IProductCatalog[] = [
    {
      image: '../../../../../../assets/images/product-catalog/product-4-1.jpg',
      imageHover:
        '../../../../../../assets/images/product-catalog/product-4-2.jpg',
      price: '2000',
      currency: 'PHP',
      name: 'Cold Brew',
      description: 'Scented candle',
    },
    {
      image: '../../../../../../assets/images/product-catalog/product-3-1.jpg',
      imageHover:
        '../../../../../../assets/images/product-catalog/product-3-2.jpg',
      price: '2000',
      currency: 'PHP',
      name: 'Iced Espresso',
      description: 'Scented candle',
    },
    {
      image: '../../../../../../assets/images/product-catalog/product-2-1.jpg',
      imageHover:
        '../../../../../../assets/images/product-catalog/product-2-2.jpg',
      price: '2500',
      currency: 'PHP',
      name: 'Iced Ube Latte',
      description: 'Scented candle',
    },
    {
      image: '../../../../../../assets/images/product-catalog/product-1-1.jpg',
      imageHover:
        '../../../../../../assets/images/product-catalog/product-1-2.jpg',
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
}
