import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { LayoutComponent } from '../../shared/components/layout/layout.component';

@Component({
  selector: 'app-gifts',
  standalone: true,
  imports: [LayoutComponent, RouterOutlet],
  templateUrl: './gifts.component.html',
  styleUrl: './gifts.component.scss',
})
export class GiftsComponent {}
