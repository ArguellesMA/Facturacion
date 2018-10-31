import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Retenciones } from './retenciones.component';

describe('Retencinoes', () => {
  let component: Retenciones;
  let fixture: ComponentFixture<Retenciones>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Retenciones ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Retenciones);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
