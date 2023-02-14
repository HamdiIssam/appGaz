import { TestBed } from '@angular/core/testing';

import { PenaliteServiceService } from './penalite-service.service';

describe('PenaliteServiceService', () => {
  let service: PenaliteServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PenaliteServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
