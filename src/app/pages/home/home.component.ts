import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CoreModule } from '../../core/core.module';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet, CoreModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
