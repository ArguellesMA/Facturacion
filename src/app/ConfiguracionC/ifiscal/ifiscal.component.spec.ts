import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacionFiscal } from './ifiscal.component';

describe('InformacionFiscal', () => {
  let component: InformacionFiscal;
  let fixture: ComponentFixture<InformacionFiscal>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformacionFiscal ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformacionFiscal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
