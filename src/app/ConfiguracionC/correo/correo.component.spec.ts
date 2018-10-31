import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Correo } from './correo.component';

describe('Correo', () => {
  let component: Correo;
  let fixture: ComponentFixture<Correo>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Correo ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Correo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
