import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBranchesPage } from './add-branches.page';

describe('AddBranchesPage', () => {
  let component: AddBranchesPage;
  let fixture: ComponentFixture<AddBranchesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddBranchesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBranchesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
