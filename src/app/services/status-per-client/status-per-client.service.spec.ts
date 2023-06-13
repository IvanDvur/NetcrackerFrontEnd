import { TestBed } from '@angular/core/testing';

import { StatusPerClientService } from './status-per-client.service';

describe('StatusPerClientService', () => {
  let service: StatusPerClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StatusPerClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
