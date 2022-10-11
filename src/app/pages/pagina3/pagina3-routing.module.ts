import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pagina3Page } from './pagina3.page';

const routes: Routes = [
  {
    path: '',
    component: Pagina3Page,
  },
  {
    path: 'tabs',
    component: Pagina3Page,
    children: [
      {
        path: 'dam1',
        children: [
          {
            path: '',
            loadChildren: () => import('../dam1/dam1.module').then( m => m.Dam1PageModule)
          },
        ],
      },
      {
        path: '',
        redirectTo: '',
        pathMatch: 'full',
      },
      {
        path: 'dam2',
        children: [
          {
            path: '',
            loadChildren: () => import('../dam2/dam2.module').then( m => m.Dam2PageModule)
          },
        ],
      },
      {
        path: '',
        redirectTo: '',
        pathMatch: 'full',
      },
      {
        path: 'fct',
        children: [
          {
            path: '',
            loadChildren: () => import('../fct/fct.module').then( m => m.FctPageModule)
          },
        ],
      },
      {
        path: '',
        redirectTo: '',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pagina3PageRoutingModule {}
