import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDriversPage } from './add-drivers.page';

describe('AddDriversPage', () => {
  let component: AddDriversPage;
  let fixture: ComponentFixture<AddDriversPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDriversPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDriversPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
