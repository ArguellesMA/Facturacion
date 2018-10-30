import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerarNomina } from './gnomina12.component';

describe('GenerarNomina', () => {
  let component: GenerarNomina;
  let fixture: ComponentFixture<GenerarNomina>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenerarNomina ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerarNomina);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
