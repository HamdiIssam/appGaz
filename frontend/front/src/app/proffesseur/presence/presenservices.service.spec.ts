import { TestBed } from '@angular/core/testing';

import { PresenservicesService } from './presenservices.service';

describe('PresenservicesService', () => {
  let service: PresenservicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PresenservicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
