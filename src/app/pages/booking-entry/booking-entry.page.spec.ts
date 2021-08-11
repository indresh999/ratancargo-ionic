import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingEntryPage } from './booking-entry.page';

describe('BookingEntryPage', () => {
  let component: BookingEntryPage;
  let fixture: ComponentFixture<BookingEntryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookingEntryPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingEntryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
