import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayFightComponent } from './display-fight.component';

describe('DisplayFightComponent', () => {
  let component: DisplayFightComponent;
  let fixture: ComponentFixture<DisplayFightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayFightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayFightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
