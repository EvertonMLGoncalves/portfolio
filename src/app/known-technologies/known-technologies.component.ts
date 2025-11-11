import { Component, Input, OnInit } from '@angular/core';
import { KnownTechnologiesService } from '../Services/known-technologies-service.service';

interface Technology {
  name: string;
  level: string;
  img: string;
}

@Component({
  selector: 'known-technologies',
  templateUrl: './known-technologies.component.html',
  styleUrls: ['./known-technologies.component.scss']
})
export class KnownTechnologiesComponent implements OnInit {
  @Input() isVisible: boolean = false;   
  backendData: Technology[] = [];
  frontendData: Technology[] = [];
  utilitariesData: Technology[] = [];

  constructor(private service: KnownTechnologiesService) {} 

  ngOnInit(): void {
    this.service.getBackend().subscribe({
      next: (data: Technology[]) => this.backendData = data,
      error: (error: Error) => console.error('Error loading backend technologies:', error)
    });

    this.service.getFrontEnd().subscribe({
      next: (data: Technology[]) => this.frontendData = data,
      error: (error: Error) => console.error('Error loading frontend technologies:', error)
    });

    this.service.getUtilitaries().subscribe({
      next: (data: Technology[]) => this.utilitariesData = data,
      error: (error: Error) => console.error('Error loading utilities:', error)
    });
  }
}
