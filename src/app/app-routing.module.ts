import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogingComponent } from './loging/loging.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { HomeComponent } from './home/home.component';
import { OportunidadesComponent } from './oportunidades/oportunidades.component';
import { RegistroComponent } from './registro/registro.component';
import { DonacionesComponent } from './donaciones/donaciones.component';

const routes: Routes = [
  {path: 'login' , component: LogingComponent},
  {path: 'servicios', component: ServiciosComponent},
  {path: 'inicio', component: HomeComponent},
  {path: 'oportunidades', component: OportunidadesComponent},
  {path: 'registro', component: RegistroComponent},
  {path: '', redirectTo: '/inicio', pathMatch: 'full'},
  {path: 'donaciones', component: DonacionesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
