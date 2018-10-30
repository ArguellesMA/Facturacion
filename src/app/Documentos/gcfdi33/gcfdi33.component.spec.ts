import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerarCFDI } from './gcfdi33.component';

describe('GenerarCFDI', () => {
  let component: GenerarCFDI;
  let fixture: ComponentFixture<GenerarCFDI>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenerarCFDI ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerarCFDI);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
