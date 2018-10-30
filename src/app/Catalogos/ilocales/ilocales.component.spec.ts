import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpuestosLocales } from './ilocales.component';

describe('ImpuestosLocalest', () => {
  let component: ImpuestosLocales;
  let fixture: ComponentFixture<ImpuestosLocales>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImpuestosLocales ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImpuestosLocales);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
