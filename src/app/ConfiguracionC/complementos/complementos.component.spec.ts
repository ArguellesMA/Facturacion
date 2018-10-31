import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivacionComplementos } from './complementos.component';

describe('ActivacionComplementos', () => {
  let component: ActivacionComplementos;
  let fixture: ComponentFixture<ActivacionComplementos>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivacionComplementos ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivacionComplementos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
