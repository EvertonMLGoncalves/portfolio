import { Component, Input, OnInit } from '@angular/core';
import { WorksServiceService } from '../Services/works-service.service';

@Component({
  selector: 'works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss'],
})
export class WorksComponent implements OnInit {
  @Input() isVisible: boolean = false;
  displayedProjects: any[] = [];
  constructor(private _service: WorksServiceService) {}

  ngOnInit(): void {
    this._service.getProjects().subscribe((data: any[]) => {
      next: {
        let filteredProjects = data.filter((project: any) => project);
        this.displayedProjects = filteredProjects;
      }
      error: console.log();
    });
  }

  getBackEndProjects(): void {
    if (this.verifyStack('backend')) this.resetProjects();
    else {
      this._service.getProjects().subscribe((data: any[]) => {
        next: {
          let filteredProjects = data.filter((project: any) =>
            project.stacks.includes('backend')
          );
          this.displayedProjects = filteredProjects;
        }
        error: console.log();
      });
    }
  }

  getFronEndProjects(): void {
    if (this.verifyStack('frontend')) this.resetProjects();
    else {
      this._service.getProjects().subscribe((data: any[]) => {
        next: {
          let filteredProjects = data.filter((project: any) =>
            project.stacks.includes('frontend')
          );
          this.displayedProjects = filteredProjects;
        }
        error: console.log();
      });
    }
  }

  resetProjects(): void {
    this._service.getProjects().subscribe((data: any[]) => {
      next: {
        this.displayedProjects = data;
      }
      error: console.log();
    });
  }
  
  verifyStack(stack: string): boolean {
    let isActive = this.displayedProjects.every((project: any) =>
      project.stacks.includes(stack)
    );
    return isActive ? true : false;
  }
}
