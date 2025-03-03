import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon, MatIconModule } from '@angular/material/icon';

import { IconsModule } from '../../../core/icons/icons.module';

@Component({
  selector: 'app-home-landing',
  standalone: true,
  imports: [MatIconModule, MatIcon, CommonModule, MatButtonModule, IconsModule],
  templateUrl: './home-landing.component.html',
  styleUrl: './home-landing.component.scss',
})
export class HomeLandingComponent {}
