import { TestBed } from '@angular/core/testing';

import { EnlaceService } from './enlace.service';

describe('EnlaceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EnlaceService = TestBed.get(EnlaceService);
    expect(service).toBeTruthy();
  });
});
