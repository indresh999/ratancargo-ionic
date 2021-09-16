import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTurPage } from './edit-tur.page';

describe('EditTurPage', () => {
  let component: EditTurPage;
  let fixture: ComponentFixture<EditTurPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditTurPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTurPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
