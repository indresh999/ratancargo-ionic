import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddManagersPage } from './add-managers.page';

describe('AddManagersPage', () => {
  let component: AddManagersPage;
  let fixture: ComponentFixture<AddManagersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddManagersPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddManagersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
