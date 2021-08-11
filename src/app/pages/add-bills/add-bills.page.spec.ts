import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBillsPage } from './add-bills.page';

describe('AddBillsPage', () => {
  let component: AddBillsPage;
  let fixture: ComponentFixture<AddBillsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddBillsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBillsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
