import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllLdmPage } from './all-ldm.page';

describe('AllLdmPage', () => {
  let component: AllLdmPage;
  let fixture: ComponentFixture<AllLdmPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllLdmPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllLdmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
