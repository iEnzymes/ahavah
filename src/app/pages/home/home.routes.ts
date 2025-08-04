import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        loadComponent: () =>
          import('./home-landing/home-landing.component').then(
            (c) => c.HomeLandingComponent,
          ),
      },
      {
        path: 'product/:filter',
        pathMatch: 'full',
        loadComponent: () =>
          import('./home-view/home-view.component').then(
            (c) => c.HomeViewComponent,
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutes {}
