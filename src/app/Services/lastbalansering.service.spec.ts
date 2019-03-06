import { TestBed } from '@angular/core/testing';

import { LastbalanseringService } from './lastbalansering.service';

describe('LastbalanseringService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LastbalanseringService = TestBed.get(LastbalanseringService);
    expect(service).toBeTruthy();
  });
});
