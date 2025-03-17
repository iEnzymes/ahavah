import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { LayoutComponent } from '../../shared/components/layout/layout.component';

@Component({
  selector: 'app-candles',
  standalone: true,
  imports: [RouterOutlet, LayoutComponent],
  templateUrl: './candles.component.html',
  styleUrl: './candles.component.scss',
})
export class CandlesComponent {}
