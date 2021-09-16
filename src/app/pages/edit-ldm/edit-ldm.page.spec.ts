import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditLdmPage } from './edit-ldm.page';

describe('EditLdmPage', () => {
  let component: EditLdmPage;
  let fixture: ComponentFixture<EditLdmPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditLdmPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditLdmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
