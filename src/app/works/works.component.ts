import { Component, Input, OnInit } from '@angular/core';
import { WorksService } from '../Services/works-service.service';
import { Project } from '../interfaces/project.interface';

@Component({
  selector: 'works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss'],
})
export class WorksComponent implements OnInit {
  @Input() isVisible: boolean = false;
  displayedProjects: Project[] = [];
  constructor(private _service: WorksService) {}

  ngOnInit(): void {
    this._service.getProjects().subscribe({
      next: (data: any[]) => {
        const filteredProjects = data.filter((project: any) => project);
        this.displayedProjects = filteredProjects;
      },
      error: (error) => console.error('Error loading projects:', error)
    });
  }

  getBackEndProjects(): void {
    if (this.verifyStack('backend')) {
      this.resetProjects();
    } else {
      this._service.getProjects().subscribe({
        next: (data: any[]) => {
          const filteredProjects = data.filter((project: any) =>
            project.stacks.includes('backend')
          );
          this.displayedProjects = filteredProjects;
        },
        error: (error: Error) => console.error('Error loading backend projects:', error)
      });
    }
  }

  getFronEndProjects(): void {
    if (this.verifyStack('frontend')) {
      this.resetProjects();
    } else {
      this._service.getProjects().subscribe({
        next: (data: any[]) => {
          const filteredProjects = data.filter((project: any) =>
            project.stacks.includes('frontend')
          );
          this.displayedProjects = filteredProjects;
        },
        error: (error: Error) => console.error('Error loading frontend projects:', error)
      });
    }
  }

  resetProjects(): void {
    this._service.getProjects().subscribe({
      next: (data: any[]) => {
        this.displayedProjects = data;
      },
      error: (error: Error) => console.error('Error resetting projects:', error)
    });
  }
  
  verifyStack(stack: string): boolean {
    let isActive = this.displayedProjects.every((project: any) =>
      project.stacks.includes(stack)
    );
    return isActive ? true : false;
  }
}
