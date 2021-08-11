import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllAccountsPage } from './all-accounts.page';

describe('AllAccountsPage', () => {
  let component: AllAccountsPage;
  let fixture: ComponentFixture<AllAccountsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllAccountsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllAccountsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
