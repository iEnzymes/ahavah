import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { CoreModule } from '../../core/core.module';
import { LayoutComponent } from '../../shared/components/layout/layout.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet, CoreModule, LayoutComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
