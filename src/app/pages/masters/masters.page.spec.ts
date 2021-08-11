import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MastersPage } from './masters.page';

describe('MastersPage', () => {
  let component: MastersPage;
  let fixture: ComponentFixture<MastersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MastersPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MastersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
