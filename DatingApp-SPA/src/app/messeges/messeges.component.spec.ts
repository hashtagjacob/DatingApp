/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MessegesComponent } from './messeges.component';

describe('MessegesComponent', () => {
  let component: MessegesComponent;
  let fixture: ComponentFixture<MessegesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessegesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessegesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
