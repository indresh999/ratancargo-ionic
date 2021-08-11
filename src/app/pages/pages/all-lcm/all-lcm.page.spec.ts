import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllLcmPage } from './all-lcm.page';

describe('AllLcmPage', () => {
  let component: AllLcmPage;
  let fixture: ComponentFixture<AllLcmPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllLcmPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllLcmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
