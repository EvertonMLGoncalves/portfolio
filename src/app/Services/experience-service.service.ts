import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Experience } from '../interfaces/experience.interface';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {
  private readonly http = inject(HttpClient);

  getExperience(): Observable<Experience> {
    return this.http.get<Experience>('assets/jsons/experience.json');
  }
}

