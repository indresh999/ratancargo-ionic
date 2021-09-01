import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTlmPage } from './edit-tlm.page';

describe('EditTlmPage', () => {
  let component: EditTlmPage;
  let fixture: ComponentFixture<EditTlmPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditTlmPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTlmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
