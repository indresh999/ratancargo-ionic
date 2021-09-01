import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditGcPage } from './edit-gc.page';

describe('EditGcPage', () => {
  let component: EditGcPage;
  let fixture: ComponentFixture<EditGcPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditGcPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditGcPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
