import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCmdeComponent } from './update-cmde.component';

describe('UpdateCmdeComponent', () => {
  let component: UpdateCmdeComponent;
  let fixture: ComponentFixture<UpdateCmdeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateCmdeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateCmdeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
