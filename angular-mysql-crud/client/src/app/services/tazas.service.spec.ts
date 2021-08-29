import { TestBed } from '@angular/core/testing';

import { TazasService } from './tazas.service';

describe('TazasService', () => {
  let service: TazasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TazasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
