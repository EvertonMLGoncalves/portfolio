import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Technology } from '../interfaces/technology.interface';

@Injectable({
  providedIn: 'root'
})
export class KnownTechnologiesService {
  private readonly http = inject(HttpClient);

  getBackend(): Observable<Technology[]> {
    return this.http.get<Technology[]>('assets/jsons/backend.json');
  }

  getFrontEnd(): Observable<Technology[]> {
    return this.http.get<Technology[]>('assets/jsons/frontend.json');
  }

  getAi(): Observable<Technology[]> {
    return this.http.get<Technology[]>('assets/jsons/ai.json');
  }

  getUtilitaries(): Observable<Technology[]> {
    return this.http.get<Technology[]>('assets/jsons/Utilitaries.json');
  }
}
