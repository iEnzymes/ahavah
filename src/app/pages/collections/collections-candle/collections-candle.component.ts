import { Component } from '@angular/core';
import { MatOption } from '@angular/material/core';
import { MatFormField, MatLabel, MatSelect } from '@angular/material/select';

import { ProductCatalogComponent } from '../../../shared/components/product-catalog/product-catalog.component';
import { mockProducts } from '../../../shared/mocks/product.mocks';

@Component({
  selector: 'app-collections-candle',
  standalone: true,
  imports: [
    ProductCatalogComponent,
    MatOption,
    MatSelect,
    MatFormField,
    MatLabel,
  ],
  templateUrl: './collections-candle.component.html',
  styleUrl: './collections-candle.component.scss',
})
export class CollectionsCandleComponent {
  products = mockProducts;
}
