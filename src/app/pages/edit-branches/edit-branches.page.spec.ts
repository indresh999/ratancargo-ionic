import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBranchesPage } from './edit-branches.page';

describe('EditBranchesPage', () => {
  let component: EditBranchesPage;
  let fixture: ComponentFixture<EditBranchesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditBranchesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditBranchesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
