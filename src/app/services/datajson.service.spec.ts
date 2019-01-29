import { TestBed, inject } from '@angular/core/testing';

import { DatajsonService } from './datajson.service';

describe('DatajsonService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DatajsonService]
    });
  });

  it('should be created', inject([DatajsonService], (service: DatajsonService) => {
    expect(service).toBeTruthy();
  }));
});
