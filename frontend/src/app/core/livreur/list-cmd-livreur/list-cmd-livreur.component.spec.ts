import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCmdLivreurComponent } from './list-cmd-livreur.component';

describe('ListCmdLivreurComponent', () => {
  let component: ListCmdLivreurComponent;
  let fixture: ComponentFixture<ListCmdLivreurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListCmdLivreurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListCmdLivreurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
