import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreNomina } from './prenomina.component';

describe('PreNomina', () => {
  let component: PreNomina;
  let fixture: ComponentFixture<PreNomina>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreNomina ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreNomina);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
