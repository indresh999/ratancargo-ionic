import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGcPage } from './add-gc.page';

describe('AddGcPage', () => {
  let component: AddGcPage;
  let fixture: ComponentFixture<AddGcPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddGcPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddGcPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
