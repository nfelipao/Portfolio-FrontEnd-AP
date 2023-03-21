import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component'; 
import { RegisterComponent } from './components/register/register.component';
import { LoggedComponent } from './components/logged/logged.component';
import {canActivate, redirectUnauthorizedTo} from '@angular/fire/auth-guard'
import { SobremiComponent } from './components/sobremi/sobremi.component';

const routes: Routes = [
    { path: '', pathMatch: 'full', component: HomeComponent},
    { path: 'main', component: LoggedComponent, ...canActivate(() => redirectUnauthorizedTo(['']))},
    { path: 'login', component: LoginComponent},
    { path: 'register', component: RegisterComponent},
    { path: 'sobremi', component: SobremiComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}