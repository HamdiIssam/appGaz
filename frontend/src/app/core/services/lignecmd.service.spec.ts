import { TestBed } from '@angular/core/testing';

import { LignecmdService } from './lignecmd.service';

describe('LignecmdService', () => {
  let service: LignecmdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LignecmdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
