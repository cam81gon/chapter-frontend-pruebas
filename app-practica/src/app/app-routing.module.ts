import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DetalleComponent } from './pages/marvel/detalle/detalle.component';
import { MarvelComponent } from './pages/marvel/marvel.component';

const routes: Routes = [

  { path: 'app-marvel', component: MarvelComponent },
  { path: 'app-marvel/nuevo', component: DetalleComponent },
  { path: 'app-marvel/modificar/:id', component: DetalleComponent }

 /* {path: 'app-marvel', component: AppComponent, children: [
      { path: 'app-marvel/nuevo', component: MarvelComponent },
      { path: 'app-marvel/modificar/:id', component: MarvelComponent }
    ]
  }*/

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
