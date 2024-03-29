import { TestBed } from '@angular/core/testing';

import { EorRimageGetService } from './eor-rimage-get.service';

describe('EorRimageGetService', () => {
  let service: EorRimageGetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EorRimageGetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
