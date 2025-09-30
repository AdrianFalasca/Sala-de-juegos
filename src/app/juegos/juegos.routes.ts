import { Routes } from '@angular/router';

export const JUEGOS_ROUTES: Routes = [
  { path: '', redirectTo: 'ahorcado', pathMatch: 'full' },
  { path: 'ahorcado', loadComponent: () => import('./ahorcado/ahorcado.component').then(m => m.AhorcadoComponent) },
  { path: 'mayor-menor', loadComponent: () => import('./mayor-menor/mayor-menor.component').then(m => m.MayorMenorComponent) },
  //{ path: 'palitos', loadComponent: () => import('./palitos/palitos.component').then(m => m.PalitosComponent) },
  //{ path: 'preguntados', loadComponent: () => import('./preguntados/preguntados.component').then(m => m.PreguntadosConsolasComponent) },

];
