import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Skill } from '../model/skill';


@Injectable({
  providedIn: 'root'
})
export class TecnologiasService {
  private apiServerUrl=environment.apiBaseUrl;

  constructor(private http:HttpClient){}

  public getSkill():Observable<Skill[]>{
    return this.http.get<Skill[]>(`${this.apiServerUrl}/api/skills`);
  }
  public addSkill(skill: Skill):Observable<Skill>{
    return this.http.post<Skill>(`${this.apiServerUrl}/api/skills`, skill);
  }
  public updateSkill(skill:Skill):Observable<Skill>{
    return this.http.put<Skill>(`${this.apiServerUrl}/api/skills`, skill);
  }
  public deleteSkill(skillId: number):Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrl}/api/skills/${skillId}`);
  }
}
