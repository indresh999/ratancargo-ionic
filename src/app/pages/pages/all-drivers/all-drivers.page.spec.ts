import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllDriversPage } from './all-drivers.page';

describe('AllDriversPage', () => {
  let component: AllDriversPage;
  let fixture: ComponentFixture<AllDriversPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllDriversPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllDriversPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
