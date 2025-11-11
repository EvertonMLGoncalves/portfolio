import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from '../interfaces/project.interface';

@Injectable({
  providedIn: 'root'
})
export class WorksService {
  constructor(private http: HttpClient) { } 
   
  getProjects(): Observable<Project[]> { 
    return this.http.get<Project[]>("assets/cards-jsons/projects.json");
  }
}
