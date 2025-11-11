import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class KnownTechnologiesService {

  constructor(private http: HttpClient) { } 
   
  getBackend(): Observable<any> { 
    return this.http.get("assets/jsons/backend.json");
  }

  getFrontEnd(): Observable<any> { 
    return this.http.get("assets/jsons/frontend.json");
  }
  
  getUtilitaries(): Observable<any> { 
    return this.http.get("assets/jsons/Utilitaries.json");
  }
}
