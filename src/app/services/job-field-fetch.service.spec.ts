import { TestBed } from '@angular/core/testing';

import { JobFieldFetchService } from './job-field-fetch.service';

describe('JobFieldFetchService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JobFieldFetchService = TestBed.get(JobFieldFetchService);
    expect(service).toBeTruthy();
  });
});
