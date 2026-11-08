import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { WorksService } from './works-service.service';

describe('WorksService', () => {
  let service: WorksService;
  let http: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()],
    });
    service = TestBed.inject(WorksService);
    http = TestBed.inject(HttpTestingController);
  });

  afterEach(() => http.verify());

  it('should load projects from the json asset', () => {
    service.getProjects().subscribe((projects) => expect(projects.length).toBe(0));
    http.expectOne('assets/cards-jsons/projects.json').flush([]);
  });
});
