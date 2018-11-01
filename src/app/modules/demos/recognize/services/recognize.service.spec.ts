import { TestBed } from '@angular/core/testing';

import { RecognizeService } from './recognize.service';

describe('RecognizeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RecognizeService = TestBed.get(RecognizeService);
    expect(service).toBeTruthy();
  });
});
