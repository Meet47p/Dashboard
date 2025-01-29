import { TestBed } from '@angular/core/testing';

import { PiechartdataService } from './piechartdata.service';

describe('PiechartdataService', () => {
  let service: PiechartdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PiechartdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
