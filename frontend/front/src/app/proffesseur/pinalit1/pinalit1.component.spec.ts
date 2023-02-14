import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pinalit1Component } from './pinalit1.component';

describe('Pinalit1Component', () => {
  let component: Pinalit1Component;
  let fixture: ComponentFixture<Pinalit1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pinalit1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pinalit1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
