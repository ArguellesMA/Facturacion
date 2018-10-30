import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Clientes } from './clientes.component';

describe('Clientes', () => {
  let component: Clientes;
  let fixture: ComponentFixture<Clientes>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Clientes ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Clientes);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
