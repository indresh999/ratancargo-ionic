import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMastersPage } from './add-masters.page';

describe('AddMastersPage', () => {
  let component: AddMastersPage;
  let fixture: ComponentFixture<AddMastersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMastersPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMastersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
