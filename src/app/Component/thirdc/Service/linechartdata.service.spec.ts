import { TestBed } from '@angular/core/testing';

import { LinechartdataService } from './linechartdata.service';

describe('LinechartdataService', () => {
  let service: LinechartdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LinechartdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
