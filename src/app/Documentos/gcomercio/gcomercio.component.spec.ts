import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComercioExterior } from './gcomercio.component';

describe('RoundProgressbarComponent', () => {
  let component: ComercioExterior;
  let fixture: ComponentFixture<ComercioExterior>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComercioExterior ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComercioExterior);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
