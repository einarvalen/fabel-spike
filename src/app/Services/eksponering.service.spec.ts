import { TestBed } from '@angular/core/testing';

import { EksponeringService } from './eksponering.service';

describe('EksponeringService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EksponeringService = TestBed.get(EksponeringService);
    expect(service).toBeTruthy();
  });
});
