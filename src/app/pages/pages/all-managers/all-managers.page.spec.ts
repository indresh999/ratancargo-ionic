import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllManagersPage } from './all-managers.page';

describe('AllManagersPage', () => {
  let component: AllManagersPage;
  let fixture: ComponentFixture<AllManagersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllManagersPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllManagersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
