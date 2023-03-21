import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Usuario } from '../model/usuario';

@Injectable({
  providedIn: 'root'
})
export class SobremiService {
  private apiServerUrl= environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getUser():Observable<Usuario>{
    return this.http.get<Usuario>(`${this.apiServerUrl}/api/usuario/1`);
  }
  public updateUsuario(usuarios: Usuario):Observable<Usuario>{
    return this.http.put<Usuario>(`${this.apiServerUrl}/api/usuario`, usuarios);
  }
}
