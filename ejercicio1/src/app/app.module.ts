import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

import { routing } from './app.routing';
// hay que ponerlo tanto en app.routing.ts como en app.module.ts
import { HomeComponent } from './home/home.component';
import { HeroeComponent } from './heroe/heroe.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import {FormsModule} from "@angular/forms";
import { HolaComponent } from './components/hola/hola.component';

// import {RouterModule, Routes} from '@angular/router';

//
// const rutas: Routes = [
//   {
//     path: 'heroe',
//     component: HeroeComponent,
//   },
//   {
//     path: 'home',
//     component: HomeComponent,
//     pathMatch: 'full'
//   }
// ];



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    HeroeComponent,
    NosotrosComponent,
    HolaComponent,
  ],
    imports: [
        BrowserModule,
        routing,
        FormsModule,
        // RouterModule.forRoot(rutas)
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
// export const routing  = RouterModule.forRoot(rutas);
