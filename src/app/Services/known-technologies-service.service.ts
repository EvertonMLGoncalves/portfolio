import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class KnownTechnologiesServiceService {

  constructor(private http: HttpClient) { } 
   
  GetBackend() : Observable<any> { 
    return this.http.get("assets/jsons/backend.json")
    
  }
   GetFrontEnd() : Observable<any> { 
    return this.http.get("assets/jsons/frontend.json")
  }
  GetUtilitaries() : Observable<any> { 
    return this.http.get("assets/jsons/Utilitaries.json")
  }
}
