import { TestBed } from '@angular/core/testing';

import { FieldFetchService } from './field-fetch.service';

describe('FieldFetchService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FieldFetchService = TestBed.get(FieldFetchService);
    expect(service).toBeTruthy();
  });
});
