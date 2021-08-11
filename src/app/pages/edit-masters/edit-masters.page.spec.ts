import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMastersPage } from './edit-masters.page';

describe('EditMastersPage', () => {
  let component: EditMastersPage;
  let fixture: ComponentFixture<EditMastersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditMastersPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditMastersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
