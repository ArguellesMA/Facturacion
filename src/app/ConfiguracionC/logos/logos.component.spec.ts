import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Logos } from './logos.component';

describe('Logos', () => {
  let component: Logos;
  let fixture: ComponentFixture<Logos>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Logos ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Logos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
