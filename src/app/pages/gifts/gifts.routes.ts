import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GiftsComponent } from './gifts.component';

const routes: Routes = [
  {
    path: '',
    component: GiftsComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        loadComponent: () =>
          import('./gifts-landing/gifts-landing.component').then(
            (c) => c.GiftsLandingComponent,
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GiftsRoutes {}
