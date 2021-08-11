import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPodPage } from './add-pod.page';

describe('AddPodPage', () => {
  let component: AddPodPage;
  let fixture: ComponentFixture<AddPodPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPodPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPodPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
