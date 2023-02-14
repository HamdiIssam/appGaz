import { TestBed } from '@angular/core/testing';

import { PinalitemodelService } from './pinalitemodel.service';

describe('PinalitemodelService', () => {
  let service: PinalitemodelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PinalitemodelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
