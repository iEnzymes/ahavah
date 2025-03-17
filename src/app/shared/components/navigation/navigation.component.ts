import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';

import { IconsModule } from '../../../core/icons/icons.module';
import { navItems } from '../../utils/navigation-items';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [MatButtonModule, MatIcon, IconsModule, CommonModule],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss',
})
export class NavigationComponent {
  isHidden = false;
  lastScrollTop = 0;
  items = navItems;

  isMenuOpen: boolean = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (!this.isMenuOpen) {
      const currentScroll = document.documentElement.scrollTop;
      this.isHidden = currentScroll > this.lastScrollTop;
      this.lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    }
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
