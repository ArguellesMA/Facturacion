import { TestBed, inject } from '@angular/core/testing';

import { EmisorService } from './emisor.service';

describe('EmisorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmisorService]
    });
  });

  it('should be created', inject([EmisorService], (service: EmisorService) => {
    expect(service).toBeTruthy();
  }));
});
