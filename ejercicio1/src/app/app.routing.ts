import { RouterModule, Routes } from '@angular/router';

import { HeroeComponent } from "./heroe/heroe.component";
import { HomeComponent } from "./home/home.component";
import { NosotrosComponent } from './nosotros/nosotros.component';

const RUTAS: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    pathMatch: 'full'
  },

  {
    path: 'heroe',
    component: HeroeComponent,
  },

  {
    path: 'nosotros',
    component: NosotrosComponent,
  }
];


export const routing  = RouterModule.forRoot(RUTAS);
