import { TestBed } from '@angular/core/testing';
import { BestillingService } from '../Services/bestilling.service';


describe('BestillingserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BestillingService = TestBed.get(BestillingService);
    expect(service).toBeTruthy();
  });
});
