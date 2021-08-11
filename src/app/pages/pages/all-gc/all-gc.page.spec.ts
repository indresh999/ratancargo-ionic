import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllGcPage } from './all-gc.page';

describe('AllGcPage', () => {
  let component: AllGcPage;
  let fixture: ComponentFixture<AllGcPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllGcPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllGcPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
