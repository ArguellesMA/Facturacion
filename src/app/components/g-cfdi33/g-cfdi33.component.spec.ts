import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GCFDI33Component } from './g-cfdi33.component';

describe('GCFDI33Component', () => {
  let component: GCFDI33Component;
  let fixture: ComponentFixture<GCFDI33Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GCFDI33Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GCFDI33Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
