import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pagina3Page } from './pagina3.page';

const routes: Routes = [

  {
    path: '',
    component: Pagina3Page,
    children: [
      {
        path: 'tab1',
        loadChildren: () => import('../dam1/dam1.module').then( m => m.Dam1PageModule)
      },
      {
        path: 'tab2',
        loadChildren: () => import('../dam2/dam2.module').then( m => m.Dam2PageModule)
      },
      {
        path: 'tab3',
        loadChildren: () => import('../fct/fct.module').then( m => m.FctPageModule)
      },

    ],
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pagina3PageRoutingModule {}
