import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CandlesComponent } from './candles.component';

const routes: Routes = [
  {
    path: '',
    component: CandlesComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        loadComponent: () =>
          import('./candles-landing/candles-landing.component').then(
            (c) => c.CandlesLandingComponent,
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CandlesRoutes {}
