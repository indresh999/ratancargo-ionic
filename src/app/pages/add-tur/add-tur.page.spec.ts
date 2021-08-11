import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTurPage } from './add-tur.page';

describe('AddTurPage', () => {
  let component: AddTurPage;
  let fixture: ComponentFixture<AddTurPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTurPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTurPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
