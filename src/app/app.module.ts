import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { BotonesFlotantesComponent } from './botones-flotantes/botones-flotantes.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { RegistroComponent } from './registro/registro.component';
import { OportunidadesComponent } from './oportunidades/oportunidades.component';
import { LogingComponent } from './loging/loging.component';
import { DonacionesComponent } from './donaciones/donaciones.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    ServiciosComponent,
    BotonesFlotantesComponent,
    NavBarComponent,
    HomeComponent,
    RegistroComponent,
    OportunidadesComponent,
    LogingComponent,
    DonacionesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
