import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTlmPage } from './add-tlm.page';

describe('AddTlmPage', () => {
  let component: AddTlmPage;
  let fixture: ComponentFixture<AddTlmPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTlmPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTlmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
