import { Routes } from '@angular/router';


export const routes: Routes = [
{ path: '', loadComponent: () => import('./components/home/home.component').then(m => m.HomeComponent) },
{ path: 'login', loadComponent: () => import('./components/login/login.component').then(m => m.LoginComponent) },
{ path: 'registro', loadComponent: () => import('./components/registro/registro.component').then(m => m.RegistroComponent) },
{ path: 'about', loadComponent: () => import('./components/about/about.component').then(m => m.AboutComponent) },
{ path: '**', redirectTo: '' }
];
