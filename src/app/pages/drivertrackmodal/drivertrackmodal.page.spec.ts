import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrivertrackmodalPage } from './drivertrackmodal.page';

describe('DrivertrackmodalPage', () => {
  let component: DrivertrackmodalPage;
  let fixture: ComponentFixture<DrivertrackmodalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrivertrackmodalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrivertrackmodalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
