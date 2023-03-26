import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Proyect } from '../model/proyect';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getProyect(): Observable<Proyect[]> {
    return this.http.get<Proyect[]>(`${this.apiServerUrl}/api/proyectos`);
  }
  public addProyect(proyect: Proyect): Observable<Proyect> {
    return this.http.post<Proyect>(`${this.apiServerUrl}/api/proyectos`, proyect);
  }
  public updateProyect(proyect: Proyect): Observable<Proyect> {
    return this.http.put<Proyect>(`${this.apiServerUrl}/api/proyectos`, proyect);
  }
  public deleteProyect(proyectId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/api/proyectos/${proyectId}`);
  }
}
