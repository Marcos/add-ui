import { TestBed } from '@angular/core/testing';

import { MainclassService } from './mainclass.service';

describe('MainclassService', () => {
  let service: MainclassService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MainclassService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
