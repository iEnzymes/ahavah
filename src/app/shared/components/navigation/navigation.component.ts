import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';

import { IconsModule } from '../../../core/icons/icons.module';
import { NavigationItemsComponent } from './navigation-items/navigation-items.component';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [NavigationItemsComponent, MatButtonModule, MatIcon, IconsModule],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss',
})
export class NavigationComponent {}
