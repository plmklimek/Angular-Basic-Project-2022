import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayFighterComponent } from './display-fighter.component';

describe('DisplayFighterComponent', () => {
  let component: DisplayFighterComponent;
  let fixture: ComponentFixture<DisplayFighterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayFighterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayFighterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
