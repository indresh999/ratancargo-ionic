import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLdmPage } from './add-ldm.page';

describe('AddLdmPage', () => {
  let component: AddLdmPage;
  let fixture: ComponentFixture<AddLdmPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddLdmPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddLdmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
