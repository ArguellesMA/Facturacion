import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplementoPagos } from './gpagos.component';

describe('ComplementoPagos', () => {
  let component: ComplementoPagos;
  let fixture: ComponentFixture<ComplementoPagos>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComplementoPagos ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplementoPagos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
