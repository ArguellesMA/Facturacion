import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SucursalesCuentas } from './sucuentas.component';

describe('SucursalesCuentas', () => {
  let component: SucursalesCuentas;
  let fixture: ComponentFixture<SucursalesCuentas>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SucursalesCuentas ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SucursalesCuentas);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
