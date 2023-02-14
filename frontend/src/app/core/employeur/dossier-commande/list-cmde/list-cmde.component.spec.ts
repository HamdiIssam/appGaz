import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCmdeComponent } from './list-cmde.component';

describe('ListCmdeComponent', () => {
  let component: ListCmdeComponent;
  let fixture: ComponentFixture<ListCmdeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListCmdeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListCmdeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
