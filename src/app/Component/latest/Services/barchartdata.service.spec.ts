import { TestBed } from '@angular/core/testing';

import { BarchartdataService } from './barchartdata.service';

describe('BarchartdataService', () => {
  let service: BarchartdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BarchartdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
