import { TestBed } from '@angular/core/testing';

import { SubclassService } from './subclass.service';

describe('SubclassService', () => {
  let service: SubclassService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubclassService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
