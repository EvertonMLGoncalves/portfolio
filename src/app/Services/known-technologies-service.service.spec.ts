import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { KnownTechnologiesService } from './known-technologies-service.service';

describe('KnownTechnologiesService', () => {
  let service: KnownTechnologiesService;
  let http: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()],
    });
    service = TestBed.inject(KnownTechnologiesService);
    http = TestBed.inject(HttpTestingController);
  });

  afterEach(() => http.verify());

  it('should load each technology group from its json asset', () => {
    service.getBackend().subscribe();
    service.getFrontEnd().subscribe();
    service.getAi().subscribe();
    service.getUtilitaries().subscribe();
    http.expectOne('assets/jsons/backend.json').flush([]);
    http.expectOne('assets/jsons/frontend.json').flush([]);
    http.expectOne('assets/jsons/ai.json').flush([]);
    http.expectOne('assets/jsons/Utilitaries.json').flush([]);
  });
});
