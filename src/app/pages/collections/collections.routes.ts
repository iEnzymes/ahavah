import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CollectionsComponent } from './collections.component';

const routes: Routes = [
  {
    path: '',
    component: CollectionsComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        loadComponent: () =>
          import('./collections-landing/collections-landing.component').then(
            (c) => c.CollectionsLandingComponent,
          ),
      },
      {
        path: 'candles',
        pathMatch: 'full',
        loadComponent: () =>
          import('./collections-candle/collections-candle.component').then(
            (c) => c.CollectionsCandleComponent,
          ),
      },
      {
        path: 'candles/product/:fiter',
        pathMatch: 'full',
        loadComponent: () =>
          import('./collections-detail/collections-detail.component').then(
            (c) => c.CollectionsDetailComponent,
          ),
      },
      {
        path: 'gifts',
        pathMatch: 'full',
        loadComponent: () =>
          import('./collections-gifts/collections-gifts.component').then(
            (c) => c.CollectionsGiftsComponent,
          ),
      },
      {
        path: 'gifts/product/:filter',
        pathMatch: 'full',
        loadComponent: () =>
          import('./collections-detail/collections-detail.component').then(
            (c) => c.CollectionsDetailComponent,
          ),
      },
      {
        path: ':collections',
        pathMatch: 'full',
        loadComponent: () =>
          import('./collections-view/collections-view.component').then(
            (c) => c.CollectionsViewComponent,
          ),
      },
      {
        path: ':collections/product/:filter',
        pathMatch: 'full',
        loadComponent: () =>
          import('./collections-detail/collections-detail.component').then(
            (c) => c.CollectionsDetailComponent,
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CollectionsRoutes {}
