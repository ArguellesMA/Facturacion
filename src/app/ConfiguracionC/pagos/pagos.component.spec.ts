import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MisPagos } from './pagos.component';

describe('MisPagos', () => {
  let component: MisPagos;
  let fixture: ComponentFixture<MisPagos>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MisPagos ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MisPagos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
