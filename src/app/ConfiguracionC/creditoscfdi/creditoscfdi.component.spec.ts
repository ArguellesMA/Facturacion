import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivacionCreditos } from './creditoscfdi.component';

describe('ActivacionCreditos', () => {
  let component: ActivacionCreditos;
  let fixture: ComponentFixture<ActivacionCreditos>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivacionCreditos ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivacionCreditos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
