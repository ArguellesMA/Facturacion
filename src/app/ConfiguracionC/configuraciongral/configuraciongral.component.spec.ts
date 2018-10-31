import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfiguracionGeneral } from './configuraciongral.component';

describe('ConfiguracionGeneral', () => {
  let component: ConfiguracionGeneral;
  let fixture: ComponentFixture<ConfiguracionGeneral>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfiguracionGeneral ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfiguracionGeneral);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
