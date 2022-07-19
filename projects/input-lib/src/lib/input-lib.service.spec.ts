import { TestBed } from '@angular/core/testing';

import { InputLibService } from './input-lib.service';

describe('InputLibService', () => {
  let service: InputLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InputLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
