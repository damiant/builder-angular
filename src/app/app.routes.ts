import { Routes } from '@angular/router';

export const routes: Routes = [{
  path: 'home',
  loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
}, {
  path: 'about',
  loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
}, {
  path: 'stores',
  loadComponent: () => import('./stores/stores.page').then( m => m.StoresPage)
}, {
  path: '',
  redirectTo: 'home',
  pathMatch: 'full',
}];