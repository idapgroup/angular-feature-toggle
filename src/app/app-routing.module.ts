import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {featureToggleGuard} from 'feature-toggle';

const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./shared/components/layout/layout.component').then(m => m.LayoutComponent),
    children: [
      {
        path: '',
        loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent),
      },
      {
        path: 'feature-one',
        canMatch: [featureToggleGuard('feature-one')],
        loadComponent: () => import('./pages/feature-one/feature-one.component').then(m => m.FeatureOneComponent),
      },
      {
        path: 'feature-two',
        canMatch: [featureToggleGuard('feature-two')],
        loadComponent: () => import('./pages/feature-two/feature-two.component').then(m => m.FeatureTwoComponent),
      },
      {
        path: '**',
        redirectTo: '/',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking',
  })],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
