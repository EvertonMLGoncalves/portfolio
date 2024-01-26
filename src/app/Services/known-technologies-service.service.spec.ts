import { TestBed } from '@angular/core/testing';

import { KnownTechnologiesServiceService } from './known-technologies-service.service';

describe('KnownTechnologiesServiceService', () => {
  let service: KnownTechnologiesServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KnownTechnologiesServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
