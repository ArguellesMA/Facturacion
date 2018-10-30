import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Prefacturas } from './prefacturas.component';

describe('Prefacturas', () => {
  let component: Prefacturas;
  let fixture: ComponentFixture<Prefacturas>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Prefacturas ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Prefacturas);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
