import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditnotePage } from './editnote.page';

describe('EditnotePage', () => {
  let component: EditnotePage;
  let fixture: ComponentFixture<EditnotePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditnotePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditnotePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
