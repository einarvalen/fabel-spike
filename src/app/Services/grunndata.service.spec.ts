import { TestBed } from '@angular/core/testing';

import { GrunndataService } from './grunndata.service';

describe('GrunndataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GrunndataService = TestBed.get(GrunndataService);
    expect(service).toBeTruthy();
  });
});
