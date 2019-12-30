/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LevelChoiceHoardComponent } from './levelChoiceHoard.component';

describe('LevelChoiceHoardComponent', () => {
  let component: LevelChoiceHoardComponent;
  let fixture: ComponentFixture<LevelChoiceHoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LevelChoiceHoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LevelChoiceHoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
