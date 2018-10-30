import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreNomina32 } from './prenomina32.component';

describe('PreNomina32', () => {
  let component: PreNomina32;
  let fixture: ComponentFixture<PreNomina32>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreNomina32 ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreNomina32);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
