import { TestBed } from '@angular/core/testing';

import { BookingentryService } from './bookingentry.service';

describe('BookingentryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BookingentryService = TestBed.get(BookingentryService);
    expect(service).toBeTruthy();
  });
});
