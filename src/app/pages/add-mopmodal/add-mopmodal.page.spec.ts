import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMopmodalPage } from './add-mopmodal.page';

describe('AddMopmodalPage', () => {
  let component: AddMopmodalPage;
  let fixture: ComponentFixture<AddMopmodalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMopmodalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMopmodalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
