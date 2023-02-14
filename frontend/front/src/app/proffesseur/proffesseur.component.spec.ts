import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProffesseurComponent } from './proffesseur.component';

describe('ProffesseurComponent', () => {
  let component: ProffesseurComponent;
  let fixture: ComponentFixture<ProffesseurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProffesseurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProffesseurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
