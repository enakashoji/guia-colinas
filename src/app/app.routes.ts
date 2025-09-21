import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'atrativos',
    loadComponent: () => import('./pages/atrativos/atrativos.component').then(m => m.AtrativosComponent)
  },
  {
    path: 'restaurantes',
    loadComponent: () => import('./pages/restaurantes/restaurantes.component').then(m => m.RestaurantesComponent)
  },
  {
    path: 'hospedagem',
    loadComponent: () => import('./pages/hospedagem/hospedagem.component').then(m => m.HospedagemComponent)
  },
  {
    path: 'bem-estar',
    loadComponent: () => import('./pages/bem-estar/bem-estar.component').then(m => m.BemEstarComponent)
  },
  {
    path: 'servicos',
    loadComponent: () => import('./pages/servicos/servicos.component').then(m => m.ServicosComponent)
  },
  {
    path: 'emergencia',
    loadComponent: () => import('./pages/emergencia/emergencia.component').then(m => m.EmergenciaComponent)
  },
  {
    path: 'outros',
    loadComponent: () => import('./pages/outros/outros.component').then(m => m.OutrosComponent)
  },
  {
    path: 'cat',
    loadComponent: () => import('./pages/cat/cat.component').then(m => m.CatComponent)
  },
  {
    path: 'catalogo',
    loadComponent: () => import('./pages/catalogo/catalogo.component').then(m => m.CatalogoComponent)
  },
  { path: '**', redirectTo: '' }
];
