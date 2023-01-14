/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AddPcComponent } from './add-pc.component';

describe('AddPcComponent', () => {
  let component: AddPcComponent;
  let fixture: ComponentFixture<AddPcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
