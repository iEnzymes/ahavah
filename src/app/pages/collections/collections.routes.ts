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
        path: 'view/:collections',
        pathMatch: 'full',
        loadComponent: () =>
          import('./collections-view/collections-view.component').then(
            (c) => c.CollectionsViewComponent,
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
