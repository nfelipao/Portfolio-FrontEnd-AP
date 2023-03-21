import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Education } from '../model/education';

@Injectable({
  providedIn: 'root'
})
export class FormacionService {
  private apiServerUrl= environment.apiBaseUrl;

  constructor(private http:HttpClient) { }

  public getEducation():Observable<Education[]>{
    return this.http.get<Education[]>(`${this.apiServerUrl}/api/educacion`);
  }
  public addEducation(education: Education):Observable<Education>{
    return this.http.post<Education>(`${this.apiServerUrl}/api/educacion`, education);
  }
  public updateEducation(education: Education):Observable<Education>{
    return this.http.put<Education>(`${this.apiServerUrl}/api/educacion`, education);
  }
  public deleteEducation(educationId: number):Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrl}/api/educacion/${educationId}`);
  }
}
