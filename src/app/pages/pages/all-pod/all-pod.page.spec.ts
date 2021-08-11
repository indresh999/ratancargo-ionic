import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllPodPage } from './all-pod.page';

describe('AllPodPage', () => {
  let component: AllPodPage;
  let fixture: ComponentFixture<AllPodPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllPodPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllPodPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
