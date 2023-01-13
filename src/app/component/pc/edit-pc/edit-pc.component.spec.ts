/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EditPcComponent } from './edit-pc.component';

describe('EditPcComponent', () => {
  let component: EditPcComponent;
  let fixture: ComponentFixture<EditPcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditPcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
