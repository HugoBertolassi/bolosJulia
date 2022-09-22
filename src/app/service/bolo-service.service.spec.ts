import { TestBed } from '@angular/core/testing';

import { BoloServiceService } from './bolo-service.service';

describe('BoloServiceService', () => {
  let service: BoloServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BoloServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
