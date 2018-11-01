import { TestBed } from '@angular/core/testing';

import { EvolvingService } from './evolving.service';

describe('EvolvingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EvolvingService = TestBed.get(EvolvingService);
    expect(service).toBeTruthy();
  });
});
