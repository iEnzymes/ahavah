import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home/home.routes').then((m) => m.HomeRoutes),
  },
  {
    path: 'candles',
    loadChildren: () =>
      import('./pages/candles/candles.routes').then((m) => m.CandlesRoutes),
  },
];
