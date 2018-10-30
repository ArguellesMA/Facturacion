import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tickets } from './tickets.component';

describe('Tickets', () => {
  let component: Tickets;
  let fixture: ComponentFixture<Tickets>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tickets ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tickets);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
