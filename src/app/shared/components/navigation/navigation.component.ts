import { CommonModule } from '@angular/common';
import { Component, HostListener, inject, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { Router, RouterLink } from '@angular/router';

import { IconsModule } from '../../../core/icons/icons.module';
import { navItems } from '../../utils/navigation-items';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [MatButtonModule, MatIcon, IconsModule, CommonModule, RouterLink],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss',
})
export class NavigationComponent implements OnInit {
  #router: Router = inject(Router);
  isHidden = false;
  items = navItems;

  isMenuOpen: boolean = false;

  currentRoute: string = '';

  ngOnInit() {
    this.currentRoute = this.#router.url;

    this.#router.events.subscribe(() => {
      this.currentRoute = this.#router.url;
    });
  }

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
