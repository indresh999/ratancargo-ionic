import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllTlmPage } from './all-tlm.page';

describe('AllTlmPage', () => {
  let component: AllTlmPage;
  let fixture: ComponentFixture<AllTlmPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllTlmPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllTlmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
