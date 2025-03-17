import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';

import { RouterLink, RouterLinkActive } from '@angular/router';
import { IconsModule } from '../../../core/icons/icons.module';
import { navItems } from '../../utils/navigation-items';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [
    MatButtonModule,
    MatIcon,
    IconsModule,
    CommonModule,
    RouterLinkActive,
    RouterLink,
  ],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss',
})
export class NavigationComponent {
  isHidden = false;
  items = navItems;

  isMenuOpen: boolean = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (!this.isMenuOpen) {
      const currentScroll = document.documentElement.scrollTop;

      this.isHidden = currentScroll > 0;
    }
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
