import { Component } from '@angular/core';

import { INavigationItems } from '../navigation.interface';

@Component({
  selector: 'app-navigation-items',
  standalone: true,
  imports: [],
  templateUrl: './navigation-items.component.html',
  styleUrl: './navigation-items.component.scss',
})
export class NavigationItemsComponent {
  readonly navItems: INavigationItems[] = [
    {
      label: 'Candles',
      url: '/candles',
    },
    {
      label: 'Gifts',
      url: '/gifts',
    },
    {
      label: 'Collections',
      url: '/collections',
    },
    {
      label: 'Accesories',
      url: '/Accesories',
    },
    {
      label: 'Our Story',
      url: '/story',
    },
    {
      label: 'Contact Us',
      url: '/contactus',
    },
  ];
}
