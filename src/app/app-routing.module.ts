import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { ContactoComponent } from './pages/contacto/contacto.component';

const routes: Routes = [
  { path: 'index', component: IndexComponent},
  { path: 'contacto', component: ContactoComponent},

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
