import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OrdersComponent } from './orders/orders.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () =>
      import('./home/home.component').then((c) => c.HomeComponent),
    title: 'Agri Lens',
  },
  {
    path: 'orders',
    component: OrdersComponent,
    title: 'Orders',
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];
