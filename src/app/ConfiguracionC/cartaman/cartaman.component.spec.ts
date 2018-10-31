import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartaManifiesto } from './cartaman.component';

describe('CartaManifiesto', () => {
  let component: CartaManifiesto;
  let fixture: ComponentFixture<CartaManifiesto>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartaManifiesto ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartaManifiesto);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
