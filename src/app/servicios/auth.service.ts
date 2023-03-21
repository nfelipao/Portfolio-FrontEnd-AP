/*import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environments';
import { Login } from '../model/login';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
    private apiServerUrl = environment.apiBaseUrl;
    constructor(private http: HttpClient) { }

  public login(credentials:Login) : Observable<Boolean> {
    return this.http.post<Boolean>(`${this.apiServerUrl}/login`, credentials).pipe(
      tap((response: Boolean) => {
        if (response)
          sessionStorage.setItem("user", "admin");
      })
    );
  }

  public logout() {
    sessionStorage.removeItem("user");
  }

  public isUserLogged():boolean {
    return sessionStorage.getItem("user") !== null;
  }
}*/
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  url = environment.apiBaseUrl;
  currentUserSubject: BehaviorSubject<any>;
  parcero: boolean | undefined;
  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<any>(
      JSON.parse(sessionStorage.getItem('currentUser') || '{}')
    );
  }

  IniciarSesion(credenciales: any): Observable<any> {
    return this.http.post(`${this.url}/api/user/login`, credenciales).pipe(
      map((data) => {
        sessionStorage.setItem('currentUser', JSON.stringify(data));
        this.currentUserSubject.next(data);

        this.parcero = true;

        return data;
      })
    );
  }

  get UsuarioAutenticado() {
    return this.currentUserSubject.value;
  }

  loggedIn() {
    return this.parcero;
  }
  logoutUser() {
    this.parcero = false;
    sessionStorage.clear();
    localStorage.clear();

    this.currentUserSubject.next(null);
    alert('LOGOUT!');
  }
}