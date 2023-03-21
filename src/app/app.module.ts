import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormacionComponent } from './components/formacion/formacion.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PortadaComponent } from './components/portada/portada.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { SobremiComponent } from './components/sobremi/sobremi.component';
import { TecnologiasComponent } from './components/tecnologias/tecnologias.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { ExperienciaService } from './servicios/experiencia.service';
import { FormacionService } from './servicios/formacion.service';
import { NavbarService } from './servicios/navbar.service';
import { ProyectosService } from './servicios/proyectos.service';
import { SobremiService } from './servicios/sobremi.service';
import { TecnologiasService } from './servicios/tecnologias.service';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { RegisterComponent } from './components/register/register.component';
import { LoggedComponent } from './components/logged/logged.component';
import { SobremiLComponent } from './components/sobremi-l/sobremi-l.component';
import { ExperienciaLComponent } from './components/experiencia-l/experiencia-l.component';
import { FormacionLComponent } from './components/formacion-l/formacion-l.component';
import { NavbarLComponent } from './components/navbar-l/navbar-l.component';
import { ProyectosLComponent } from './components/proyectos-l/proyectos-l.component';
import { TecnologiasLComponent } from './components/tecnologias-l/tecnologias-l.component';
import { PortadaLComponent } from './components/portada-l/portada-l.component';
import { ExtraOptions } from '@angular/router';

const routerOptions: ExtraOptions = {
  anchorScrolling: "enabled"
};

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    FormacionComponent,
    NavbarComponent,
    PortadaComponent,
    ProyectosComponent,
    SobremiComponent,
    TecnologiasComponent,
    ExperienciaComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    LoggedComponent,
    SobremiLComponent,
    ExperienciaLComponent,
    FormacionLComponent,
    NavbarLComponent,
    ProyectosLComponent,
    TecnologiasLComponent,
    PortadaLComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth())
  ],
  providers: [
    SobremiService,
    NavbarService,
    FormacionService,
    ExperienciaService,
    ProyectosService,
    TecnologiasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
