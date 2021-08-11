import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLcmPage } from './add-lcm.page';

describe('AddLcmPage', () => {
  let component: AddLcmPage;
  let fixture: ComponentFixture<AddLcmPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddLcmPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddLcmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
