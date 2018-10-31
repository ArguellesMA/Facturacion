import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CFDI33 } from './cfdi33.component';

describe('CFDI33', () => {
  let component: CFDI33;
  let fixture: ComponentFixture<CFDI33>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CFDI33 ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CFDI33);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
