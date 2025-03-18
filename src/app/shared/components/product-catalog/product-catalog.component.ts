import { CommonModule } from '@angular/common';
import { Component, effect, input } from '@angular/core';

import { IProductCatalog } from '../../interfaces/product-catalog.interface';

@Component({
  selector: 'app-product-catalog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-catalog.component.html',
  styleUrl: './product-catalog.component.scss',
})
export class ProductCatalogComponent {
  items = input.required<IProductCatalog[]>();

  product!: IProductCatalog[];

  constructor() {
    effect(() => {
      this.product = this.items().map((item) => ({
        ...item,
        isHovered: false,
      }));
    });
  }
}
