import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from '../interfaces/project.interface';

@Injectable({
  providedIn: 'root'
})
export class WorksService {
  private readonly http = inject(HttpClient);

  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>('assets/cards-jsons/projects.json');
  }
}
