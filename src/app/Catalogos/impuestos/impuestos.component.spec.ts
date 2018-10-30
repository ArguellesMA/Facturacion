import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Impuestos } from './impuestos.component';

describe('Impuestos', () => {
  let component: Impuestos;
  let fixture: ComponentFixture<Impuestos>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Impuestos ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Impuestos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
