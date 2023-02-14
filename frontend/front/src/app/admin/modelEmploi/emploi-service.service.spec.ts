import { TestBed } from '@angular/core/testing';

import { EmploiServiceService } from './emploi-service.service';

describe('EmploiServiceService', () => {
  let service: EmploiServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmploiServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
