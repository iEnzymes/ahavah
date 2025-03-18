import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { LayoutComponent } from '../../shared/components/layout/layout.component';

@Component({
  selector: 'app-collections',
  standalone: true,
  imports: [LayoutComponent, RouterOutlet],
  templateUrl: './collections.component.html',
  styleUrl: './collections.component.scss',
})
export class CollectionsComponent {}
