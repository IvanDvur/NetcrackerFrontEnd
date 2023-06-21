import { TestBed } from '@angular/core/testing';

import { CsvValidationService } from './csv-validation.service';

describe('CsvValidationService', () => {
  let service: CsvValidationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CsvValidationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
