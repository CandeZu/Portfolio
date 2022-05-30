import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SobremiComponent } from './pages/sobremi/sobremi.component';
import { EstudiosComponent } from './pages/estudios/estudios.component';
import { AptitudesComponent } from './pages/aptitudes/aptitudes.component';
import { ContactoComponent } from './pages/contacto/contacto.component';

const routes: Routes = [
  {path:'', component: SobremiComponent},
  {path:'estudios', component: EstudiosComponent},
  {path:'aptitudes', component: AptitudesComponent},
  {path:'contacto', component: ContactoComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
