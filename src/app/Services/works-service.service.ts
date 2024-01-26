import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WorksServiceService {

  constructor(private _http:HttpClient) { } 
   
  getProjects() : Observable<any> { 
    return this._http.get("assets/cards-jsons/projects.json")
  }
}
