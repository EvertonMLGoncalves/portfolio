import { Component, Input, OnInit } from '@angular/core';
import { KnownTechnologiesServiceService } from '../Services/known-technologies-service.service';

@Component({
  selector: 'known-technologies',
  templateUrl: './known-technologies.component.html',
  styleUrls: ['./known-technologies.component.scss']
})
export class KnownTechnologiesComponent implements OnInit{
  @Input() isVisible : boolean = false;   
  backendData:any[] = [] 
  FrontendData:any[] = [] 
  UtilitariesData:any[] = [] 
  constructor(private service : KnownTechnologiesServiceService) {} 
  ngOnInit(): void {
    this.service.GetBackend()
    .subscribe(data => { 
      this.backendData = data
    }) 
    this.service.GetFrontEnd()
    .subscribe(data => { 
      this.FrontendData = data
    }) 
    this.service.GetUtilitaries()
    .subscribe(data => { 
      this.UtilitariesData = data
    })
  } 
}
