/* tslint:disable:no-unused-variable */
import { ElementRef, Inject } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { ComponentFixture } from '@angular/core/testing';

import {
  async, inject
} from '@angular/core/testing';

import { ModalModule } from './modal.module';
import { ModalComponent } from './modal.component';

let component: ModalComponent;
let fixture: ComponentFixture<ModalComponent>;
let debugElem: DebugElement;
let elem: HTMLElement;

describe('Component: Modal', () => {
  // simple style
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ModalModule]
    });

    fixture = TestBed.createComponent(ModalComponent);
    component = fixture.componentInstance;
  });

  it('should create an instance', () => {
    expect(component).toBeTruthy();
  });

  it('provider should be defined', () => {
    expect(component.elem).toBeTruthy();
  })
});
