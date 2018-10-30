import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerarRetenciones } from './gretenciones.component';

describe('GenerarRetenciones', () => {
  let component: GenerarRetenciones;
  let fixture: ComponentFixture<GenerarRetenciones>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenerarRetenciones ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerarRetenciones);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
