import { TestBed } from '@angular/core/testing';

import { Testing } from './testing';

describe('TestingService', () => {
  let service: TestingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
