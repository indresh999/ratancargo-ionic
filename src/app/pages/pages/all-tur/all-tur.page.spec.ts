import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllTurPage } from './all-tur.page';

describe('AllTurPage', () => {
  let component: AllTurPage;
  let fixture: ComponentFixture<AllTurPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllTurPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllTurPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
