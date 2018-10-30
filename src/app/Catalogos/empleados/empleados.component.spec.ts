import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Empleados } from './empleados.component';

describe('Empleados', () => {
  let component: Empleados;
  let fixture: ComponentFixture<Empleados>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Empleados ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Empleados);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
