import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminestrationComponent } from './adminestration.component';

describe('AdminestrationComponent', () => {
  let component: AdminestrationComponent;
  let fixture: ComponentFixture<AdminestrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminestrationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminestrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
