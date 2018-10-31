import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditosRecepcion } from './creditosrecepcion.component';

describe('CreditosRecepcion', () => {
  let component: CreditosRecepcion;
  let fixture: ComponentFixture<CreditosRecepcion>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreditosRecepcion ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditosRecepcion);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
