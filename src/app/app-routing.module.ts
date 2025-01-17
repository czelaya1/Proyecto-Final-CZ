import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { CaftaComponent } from './pages/cafta/cafta.component';
import { QuienesSomosComponent } from './pages/quienes-somos/quienes-somos.component';

const routes: Routes = [
  { path: 'index', component: IndexComponent},
  { path: 'contacto', component: ContactoComponent},
  { path: 'cafta', component: CaftaComponent},
  { path: 'quienessomos', component: QuienesSomosComponent},

  { 
    path: '**',
    redirectTo: '/index'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
