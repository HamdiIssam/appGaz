import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginsocieteComponent } from './loginsociete.component';

describe('LoginsocieteComponent', () => {
  let component: LoginsocieteComponent;
  let fixture: ComponentFixture<LoginsocieteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginsocieteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginsocieteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
