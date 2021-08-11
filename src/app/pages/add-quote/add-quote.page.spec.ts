import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddQuotePage } from './add-quote.page';

describe('AddQuotePage', () => {
  let component: AddQuotePage;
  let fixture: ComponentFixture<AddQuotePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddQuotePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddQuotePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
